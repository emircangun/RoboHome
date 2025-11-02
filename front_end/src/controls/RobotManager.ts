export class RobotManager {
  private dropdownButton: HTMLElement | null = null;
  private dropdownMenu: HTMLElement | null = null;
  private dropdownText: HTMLElement | null = null;
  private selectedRobot: string | null = null;

  constructor() {
    this.dropdownButton = document.getElementById('robot-dropdown-button');
    this.dropdownMenu = document.getElementById('robot-dropdown-menu');
    this.dropdownText = document.getElementById('robot-dropdown-text');
    
    if (!this.dropdownButton || !this.dropdownMenu || !this.dropdownText) {
      console.error('Robot dropdown elements not found');
      return;
    }

    this.setupEventListeners();
    this.loadSelectedRobot();
  }

  private setupEventListeners(): void {
    if (!this.dropdownButton || !this.dropdownMenu) return;

    // Toggle dropdown on button click
    this.dropdownButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleDropdown();
    });

    // Handle robot selection
    const robotItems = this.dropdownMenu.querySelectorAll('.robot-dropdown-item[data-robot]');
    robotItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const robotId = item.getAttribute('data-robot');
        if (robotId) {
          this.selectRobot(robotId);
          this.closeDropdown();
        }
      });
    });

    // Handle "Connect New" action
    const connectNewBtn = this.dropdownMenu.querySelector('.robot-dropdown-item[data-action="connect-new"]');
    if (connectNewBtn) {
      connectNewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleConnectNew();
        this.closeDropdown();
      });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (this.dropdownMenu && 
          this.dropdownButton && 
          !this.dropdownMenu.contains(e.target as Node) &&
          !this.dropdownButton.contains(e.target as Node)) {
        this.closeDropdown();
      }
    });

    // Close dropdown on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.dropdownMenu?.classList.contains('active')) {
        this.closeDropdown();
      }
    });
  }

  private toggleDropdown(): void {
    if (!this.dropdownMenu || !this.dropdownButton) return;
    
    const isActive = this.dropdownMenu.classList.contains('active');
    if (isActive) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  private openDropdown(): void {
    if (!this.dropdownMenu || !this.dropdownButton) return;
    this.dropdownMenu.classList.add('active');
    this.dropdownButton.classList.add('active');
  }

  private closeDropdown(): void {
    if (!this.dropdownMenu || !this.dropdownButton) return;
    this.dropdownMenu.classList.remove('active');
    this.dropdownButton.classList.remove('active');
  }

  private selectRobot(robotId: string): void {
    this.selectedRobot = robotId;
    
    // Update button text
    const robotName = this.getRobotName(robotId);
    if (this.dropdownText) {
      this.dropdownText.textContent = robotName;
    }

    // Save to localStorage
    localStorage.setItem('selectedRobot', robotId);

    // Dispatch event for other components
    const event = new CustomEvent('robotSelected', { detail: robotId });
    window.dispatchEvent(event);

    console.log(`Robot selected: ${robotId}`);
  }

  private getRobotName(robotId: string): string {
    const robotNames: { [key: string]: string } = {
      'neo-x1': 'Neo X1',
      'roborock-q7-m5': 'roborock Q7 M5'
    };
    return robotNames[robotId] || robotId;
  }

  private loadSelectedRobot(): void {
    const savedRobot = localStorage.getItem('selectedRobot');
    if (savedRobot) {
      this.selectRobot(savedRobot);
    }
  }

  private handleConnectNew(): void {
    console.log('Connect New Robot');
    // Add your connect new robot logic here
    // You could open a modal, show a form, etc.
    const event = new CustomEvent('connectNewRobot');
    window.dispatchEvent(event);
  }

  public getSelectedRobot(): string | null {
    return this.selectedRobot;
  }
}
