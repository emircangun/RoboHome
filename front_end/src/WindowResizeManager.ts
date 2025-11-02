export class WindowResizeManager {
  private container: HTMLElement;
  private isFullscreen: boolean = false;
  private originalWidth: string = '800px';
  private originalHeight: string = '800px';
  private originalTop: string = '80px';
  private originalRight: string = '20px';
  private resizeButton: HTMLElement | null = null;

  constructor(container: HTMLElement) {
    this.container = container;
    // Resize button removed per user request
    // this.createResizeButton();
    this.storeOriginalDimensions();
  }

  private storeOriginalDimensions(): void {
    const style = window.getComputedStyle(this.container);
    this.originalWidth = style.width;
    this.originalHeight = style.height;
    this.originalTop = style.top;
    this.originalRight = style.right;
  }

  private createResizeButton(): void {
    const button = document.createElement('div');
    button.id = 'resize-window-btn';
    button.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
      </svg>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      #resize-window-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 36px;
        height: 36px;
        background: rgba(30, 30, 30, 0.8);
        border: 1px solid #555;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.2s;
        color: #fff;
      }
      #resize-window-btn:hover {
        background: rgba(50, 50, 50, 0.9);
        border-color: #4CAF50;
      }
      #resize-window-btn svg {
        width: 18px;
        height: 18px;
      }
    `;
    document.head.appendChild(style);
    
    button.addEventListener('click', () => this.toggleFullscreen());
    this.container.appendChild(button);
    this.resizeButton = button;
  }

  private toggleFullscreen(): void {
    if (this.isFullscreen) {
      this.restoreSize();
    } else {
      this.expandToFullscreen();
    }
  }

  private expandToFullscreen(): void {
    this.container.style.width = 'calc(100vw - 250px)';
    this.container.style.height = 'calc(100vh - 60px)';
    this.container.style.top = '60px';
    this.container.style.right = '0';
    this.container.style.borderRadius = '0';
    this.isFullscreen = true;
    this.updateIcon();
    this.onResize();
  }

  private restoreSize(): void {
    this.container.style.width = this.originalWidth;
    this.container.style.height = this.originalHeight;
    this.container.style.top = this.originalTop;
    this.container.style.right = this.originalRight;
    this.container.style.borderRadius = '8px';
    this.isFullscreen = false;
    this.updateIcon();
    this.onResize();
  }

  private updateIcon(): void {
    if (!this.resizeButton) return;
    
    if (this.isFullscreen) {
      // Minimize icon
      this.resizeButton.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
        </svg>
      `;
    } else {
      // Expand icon
      this.resizeButton.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
      `;
    }
  }

  private onResize(): void {
    // Dispatch a custom event for the scene manager to handle resize
    const event = new CustomEvent('windowResize', {
      detail: {
        width: this.container.clientWidth,
        height: this.container.clientHeight
      }
    });
    window.dispatchEvent(event);
  }
}
