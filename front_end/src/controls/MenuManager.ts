export class MenuManager {
  private currentPage: string = 'upload';

  constructor() {
    this.setupMenuListeners();
  }

  private setupMenuListeners(): void {
    const menuItems = document.querySelectorAll('.menu-icon-item');
    
    // Only set up listeners if menu items exist
    if (menuItems.length === 0) {
      return;
    }
    
    menuItems.forEach((item) => {
      item.addEventListener('click', () => {
        const page = item.getAttribute('data-page');
        const action = item.getAttribute('data-action');
        
        if (action === 'deploy') {
          this.showDeployConfirmation();
          return;
        }
        
        if (page) {
          this.switchPage(page);
        }
      });
    });
    
    // Setup deploy modal listeners
    this.setupDeployModalListeners();
  }
  
  private setupDeployModalListeners(): void {
    const modal = document.getElementById('deploy-modal');
    const cancelBtn = document.getElementById('deploy-cancel');
    const confirmBtn = document.getElementById('deploy-confirm');
    
    if (!modal || !cancelBtn || !confirmBtn) {
      return;
    }
    
    cancelBtn.addEventListener('click', () => {
      this.hideDeployConfirmation();
    });
    
    confirmBtn.addEventListener('click', () => {
      this.handleDeploy();
      this.hideDeployConfirmation();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.hideDeployConfirmation();
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        this.hideDeployConfirmation();
      }
    });
  }
  
  private showDeployConfirmation(): void {
    const modal = document.getElementById('deploy-modal');
    const messageElement = document.getElementById('deploy-modal-message');
    
    if (modal) {
      // Get the currently selected robot name
      const robotDropdownText = document.getElementById('robot-dropdown-text');
      const robotName = robotDropdownText && robotDropdownText.textContent !== 'Select Robot' 
        ? robotDropdownText.textContent 
        : 'your robot';
      
      // Update the modal message
      if (messageElement) {
        messageElement.textContent = `Send your configuration to ${robotName}?`;
      }
      
      modal.classList.add('active');
    }
  }
  
  private hideDeployConfirmation(): void {
    const modal = document.getElementById('deploy-modal');
    if (modal) {
      modal.classList.remove('active');
    }
  }
  
  private handleDeploy(): void {
    // Handle the deploy action here
    console.log('Deploy confirmed!');
    // Add your deploy logic here
  }


  private switchPage(page: string): void {
    // Remove active class from all menu items
    document.querySelectorAll('.menu-icon-item').forEach((item) => {
      item.classList.remove('active');
    });

    // Remove active class from all pages/containers
    document.querySelectorAll('#chat-container, #upload-page, #technology-page, #profile-page').forEach((pageEl) => {
      pageEl.classList.remove('active');
    });

    // Hide/show 3D window and adjust content area based on page
    const appContainer = document.getElementById('app-container');
    const contentArea = document.getElementById('content-area');
    
    if (page === 'profile') {
      if (appContainer) {
        appContainer.classList.add('hidden');
      }
      if (contentArea) {
        contentArea.classList.add('profile-mode');
      }
    } else {
      if (appContainer) {
        appContainer.classList.remove('hidden');
      }
      if (contentArea) {
        contentArea.classList.remove('profile-mode');
      }
    }

    // Add active class to clicked menu item
    const activeItem = document.querySelector(`.menu-icon-item[data-page="${page}"]`);
    if (activeItem) {
      activeItem.classList.add('active');
    }

    // Show the corresponding page
    if (page === 'chat') {
      const chatContainer = document.getElementById('chat-container');
      if (chatContainer) {
        chatContainer.classList.add('active');
      }
    } else if (page === 'upload') {
      const uploadPage = document.getElementById('upload-page');
      if (uploadPage) {
        uploadPage.classList.add('active');
      }
    } else if (page === 'technology') {
      const technologyPage = document.getElementById('technology-page');
      if (technologyPage) {
        technologyPage.classList.add('active');
      }
    } else if (page === 'profile') {
      const profilePage = document.getElementById('profile-page');
      if (profilePage) {
        profilePage.classList.add('active');
      }
    }

    this.currentPage = page;
    this.dispatchPageChangeEvent(page);
  }

  private dispatchPageChangeEvent(page: string): void {
    const event = new CustomEvent('pageChanged', { detail: page });
    window.dispatchEvent(event);
  }

  public getCurrentPage(): string {
    return this.currentPage;
  }
}
