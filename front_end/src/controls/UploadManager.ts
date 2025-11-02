import { SceneManager } from '../scene/SceneManager';

export interface UploadedImage {
  id: string;
  name: string;
  url: string;
  dataUrl: string;
  uploadedAt: Date;
}

export class UploadManager {
  private uploadedImages: UploadedImage[] = [];
  private uploadPageContent: HTMLElement | null = null;
  private selectedImages: Set<string> = new Set();
  private imageGroups: string[][] = [];
  private sceneManager: SceneManager | null = null;
  private sceneFiles: string[] = [
    '/gaussian_original_rw_scaled.ply',
    '/gaussians_filtered_rw_scaled.ply'
  ];
  private currentSceneIndex: number = 0;

  constructor(sceneManager?: SceneManager) {
    this.sceneManager = sceneManager || null;
    this.uploadPageContent = document.getElementById('upload-page-content');
    if (!this.uploadPageContent) {
      console.error('Upload page content not found');
      return;
    }
    this.setupUploadUI();
    this.loadStoredImages();
    this.renderGallery();
    this.updateSendToBackendButtonState();
  }

  private setupUploadUI(): void {
    if (!this.uploadPageContent) return;

    this.uploadPageContent.innerHTML = `
      <div class="upload-section">
        <input 
          type="file" 
          id="image-upload-input" 
          accept="image/*" 
          multiple
          style="display: none;"
        />
        <div class="upload-buttons">
          <button id="upload-images-btn" class="upload-btn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px; margin-right: 8px; fill: currentColor;">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            Upload Images
          </button>
          <button id="send-to-backend-btn" class="upload-btn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px; margin-right: 8px; fill: currentColor;">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
            Create Digital Twin
          </button>
          <button id="change-scene-btn" class="upload-btn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px; margin-right: 8px; fill: currentColor;">
              <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
            </svg>
            Change Scene
          </button>
          <button id="move-bag-btn" class="upload-btn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px; margin-right: 8px; fill: currentColor;">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
            </svg>
            Move Bag
          </button>
        </div>
        <input 
          type="file" 
          id="ply-file-input" 
          accept=".ply" 
          style="display: none;"
        />
      </div>
      <div id="image-gallery" class="image-gallery"></div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .upload-section {
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #333;
      }
      .upload-buttons {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }
      .upload-btn {
        display: inline-flex;
        align-items: center;
        padding: 12px 20px;
        border: 1px solid #666;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        background: #000;
        color: #999;
      }
      .upload-btn:hover:not(:disabled) {
        background: #1a1a1a;
        border-color: #888;
        color: #bbb;
      }
      .upload-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      #send-to-backend-btn {
        background: #4CAF50;
        color: #fff;
        border-color: #4CAF50;
      }
      #send-to-backend-btn:hover:not(:disabled) {
        background: #45a049;
        border-color: #45a049;
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .scene-loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        gap: 20px;
        border-radius: 8px;
      }
      .scene-loading-spinner {
        width: 50px;
        height: 50px;
        border: 4px solid #333;
        border-top-color: #4CAF50;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      .scene-loading-text {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
      }
      .image-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 15px;
        padding: 10px 0;
      }
      .gallery-item {
        position: relative;
        aspect-ratio: 1;
        border-radius: 8px;
        overflow: hidden;
        border: 2px solid #333;
        background: #1a1a1a;
        cursor: pointer;
        transition: all 0.2s;
      }
      .gallery-item:hover {
        border-color: #4CAF50;
        transform: scale(1.05);
      }
      .gallery-item.selected {
        border-color: #4CAF50;
        border-width: 3px;
      }
      .gallery-item.selected::before {
        content: '';
        position: absolute;
        top: 5px;
        right: 5px;
        width: 20px;
        height: 20px;
        background: #4CAF50;
        border-radius: 50%;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .gallery-item.selected::after {
        content: '✓';
        position: absolute;
        top: 5px;
        right: 5px;
        width: 20px;
        height: 20px;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        z-index: 11;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .gallery-item-group-indicator {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 20px;
        height: 20px;
        background: #2196F3;
        border-radius: 50%;
        z-index: 15;
        cursor: pointer;
        transition: all 0.2s;
        border: 2px solid #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }
      .gallery-item-group-indicator:hover {
        background: #1976D2;
        transform: scale(1.15);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
      }
      .gallery-item.selected .gallery-item-group-indicator {
        top: 32px;
      }
      .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .gallery-item-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        opacity: 0;
        transition: opacity 0.2s;
      }
      .gallery-item:hover .gallery-item-overlay {
        opacity: 1;
      }
      .gallery-item-delete,
      .gallery-item-add-to-group {
        background: #f44336;
        color: #fff;
        border: none;
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
      }
      .gallery-item-delete:hover {
        background: #da190b;
      }
      .gallery-item-add-to-group {
        background: #4CAF50;
      }
      .gallery-item-add-to-group:hover {
        background: #45a049;
      }
      .empty-gallery {
        text-align: center;
        padding: 60px 20px;
        color: #666;
        font-size: 16px;
      }
    `;
    document.head.appendChild(style);

    // Event listeners
    const uploadInput = document.getElementById('image-upload-input') as HTMLInputElement;
    const uploadBtn = document.getElementById('upload-images-btn') as HTMLButtonElement;

    uploadBtn.addEventListener('click', () => {
      uploadInput.click();
    });

    uploadInput.addEventListener('change', (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        this.handleImageUpload(Array.from(files));
      }
    });

    // Add backend upload button listener
    const sendToBackendBtn = document.getElementById('send-to-backend-btn') as HTMLButtonElement;
    if (sendToBackendBtn) {
      sendToBackendBtn.addEventListener('click', () => {
        this.uploadImagesToBackend();
      });
    }

    // Add change scene button listener
    const changeSceneBtn = document.getElementById('change-scene-btn') as HTMLButtonElement;
    const plyFileInput = document.getElementById('ply-file-input') as HTMLInputElement;
    if (changeSceneBtn) {
      changeSceneBtn.addEventListener('click', () => {
        // Try to load from Downloads folder first
        this.loadSceneFromDownloads();
      });
    }

    // Add move bag button listener
    const moveBagBtn = document.getElementById('move-bag-btn') as HTMLButtonElement;
    if (moveBagBtn) {
      moveBagBtn.addEventListener('click', () => {
        this.loadSuitcaseMovedScene();
      });
    }

    if (plyFileInput) {
      plyFileInput.addEventListener('change', async (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) {
          console.log('No file selected');
          return;
        }

        if (!this.sceneManager) {
          alert('SceneManager not available. Please ensure the 3D scene is initialized.');
          return;
        }

        console.log(`Loading PLY file: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);

        // Show loading indicator
        this.showSceneLoading();

        try {
          await this.sceneManager.loadRoom(file);
          console.log(`Successfully loaded scene from file: ${file.name}`);
        } catch (error) {
          console.error('Error loading PLY file:', error);
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
          alert(`Failed to load scene: ${errorMessage}\n\nPlease ensure the file is a valid PLY file.`);
        } finally {
          // Hide loading indicator
          this.hideSceneLoading();
        }
      });
    }
  }

  private async handleImageUpload(files: File[]): Promise<void> {
    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        console.warn('Skipping non-image file:', file.name);
        continue;
      }

      try {
        const dataUrl = await this.fileToDataUrl(file);
        const image: UploadedImage = {
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name: file.name,
          url: dataUrl,
          dataUrl: dataUrl,
          uploadedAt: new Date()
        };

        this.uploadedImages.push(image);
        this.saveImagesToStorage();
        this.renderGallery();
        this.updateSendToBackendButtonState();
      } catch (error) {
        console.error('Error uploading image:', file.name, error);
      }
    }
  }

  private fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  private isImageInGroup(imageId: string): boolean {
    return this.imageGroups.some(group => group.includes(imageId));
  }

  private renderGallery(): void {
    const gallery = document.getElementById('image-gallery');
    if (!gallery) return;

    if (this.uploadedImages.length === 0) {
      gallery.innerHTML = `
        <div class="empty-gallery">
          <p>No images uploaded yet</p>
          <p style="font-size: 14px; margin-top: 10px; color: #555;">Click "Upload Images" to get started</p>
        </div>
      `;
      return;
    }

    gallery.innerHTML = this.uploadedImages.map(image => {
      const isSelected = this.selectedImages.has(image.id);
      const isInGroup = this.isImageInGroup(image.id);
      return `
        <div class="gallery-item ${isSelected ? 'selected' : ''}" data-image-id="${image.id}">
          <img src="${image.dataUrl}" alt="${image.name}" loading="lazy" />
          ${isInGroup ? '<div class="gallery-item-group-indicator" data-image-id="' + image.id + '" title="Click to remove from group"></div>' : ''}
          <div class="gallery-item-overlay">
            <button class="gallery-item-add-to-group" data-image-id="${image.id}">Add to Group</button>
            <button class="gallery-item-delete" data-image-id="${image.id}">Delete</button>
          </div>
        </div>
      `;
    }).join('');

    // Add click listener for selection
    gallery.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', (e) => {
        // Don't toggle selection if clicking on buttons or group indicator
        if ((e.target as HTMLElement).closest('.gallery-item-overlay') || 
            (e.target as HTMLElement).closest('.gallery-item-group-indicator')) {
          return;
        }
        const imageId = item.getAttribute('data-image-id');
        if (imageId) {
          this.toggleImageSelection(imageId);
        }
      });
    });

    // Add "Add to Group" button listeners
    gallery.querySelectorAll('.gallery-item-add-to-group').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const imageId = (btn as HTMLElement).getAttribute('data-image-id');
        if (imageId) {
          this.addImageToGroup(imageId);
        }
      });
    });

    // Add delete button listeners
    gallery.querySelectorAll('.gallery-item-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const imageId = (btn as HTMLElement).getAttribute('data-image-id');
        if (imageId) {
          this.deleteImage(imageId);
        }
      });
    });

    // Add group indicator toggle listeners
    gallery.querySelectorAll('.gallery-item-group-indicator').forEach(indicator => {
      indicator.addEventListener('click', (e) => {
        e.stopPropagation();
        const imageId = (indicator as HTMLElement).getAttribute('data-image-id');
        if (imageId) {
          this.removeImageFromGroup(imageId);
        }
      });
    });
  }

  private removeImageFromGroup(imageId: string): void {
    // Find and remove image from all groups
    this.imageGroups = this.imageGroups.map(group => 
      group.filter(id => id !== imageId)
    ).filter(group => group.length > 0);
    
    this.renderGallery();
    console.log('Image groups:', this.imageGroups);
  }

  private toggleImageSelection(imageId: string): void {
    if (this.selectedImages.has(imageId)) {
      this.selectedImages.delete(imageId);
    } else {
      this.selectedImages.add(imageId);
    }
    this.renderGallery();
  }

  private addImageToGroup(imageId: string): void {
    // Ensure this image is selected
    if (!this.selectedImages.has(imageId)) {
      this.selectedImages.add(imageId);
    }

    // Get all selected images (including the clicked one)
    const selectedIds = Array.from(this.selectedImages);
    
    // Remove all selected images from existing groups first
    selectedIds.forEach(id => {
      const existingGroupIndex = this.imageGroups.findIndex(group => group.includes(id));
      if (existingGroupIndex !== -1) {
        this.imageGroups[existingGroupIndex] = this.imageGroups[existingGroupIndex].filter(gid => gid !== id);
        if (this.imageGroups[existingGroupIndex].length === 0) {
          this.imageGroups.splice(existingGroupIndex, 1);
        }
      }
    });

    // Add all selected images to a new group
    if (selectedIds.length > 0) {
      this.imageGroups.push([...selectedIds]);
      // Clear selection after grouping
      this.selectedImages.clear();
    }

    this.renderGallery();
    console.log('Image groups:', this.imageGroups);
  }

  private deleteImage(imageId: string): void {
    this.uploadedImages = this.uploadedImages.filter(img => img.id !== imageId);
    // Remove from selection if selected
    this.selectedImages.delete(imageId);
    // Remove from all groups
    this.imageGroups = this.imageGroups.map(group => 
      group.filter(id => id !== imageId)
    ).filter(group => group.length > 0);
    this.saveImagesToStorage();
    this.renderGallery();
    this.updateSendToBackendButtonState();
  }

  private clearGallery(): void {
    this.uploadedImages = [];
    this.saveImagesToStorage();
    this.renderGallery();
  }

  private saveImagesToStorage(): void {
    try {
      // Store images in localStorage (limited to ~5-10MB, so be aware)
      // For larger files, consider using IndexedDB
      const imagesData = this.uploadedImages.map(img => ({
        id: img.id,
        name: img.name,
        dataUrl: img.dataUrl,
        uploadedAt: img.uploadedAt.toISOString()
      }));
      localStorage.setItem('uploadedImages', JSON.stringify(imagesData));
    } catch (error) {
      console.error('Error saving images to storage:', error);
      // If localStorage is full, warn user
      if (error instanceof DOMException && error.code === 22) {
        alert('Storage limit reached. Please delete some images to free up space.');
      }
    }
  }

  private loadStoredImages(): void {
    try {
      const stored = localStorage.getItem('uploadedImages');
      if (stored) {
        const imagesData = JSON.parse(stored);
        this.uploadedImages = imagesData.map((img: any) => ({
          id: img.id,
          name: img.name,
          url: img.dataUrl,
          dataUrl: img.dataUrl,
          uploadedAt: new Date(img.uploadedAt)
        }));
      }
    } catch (error) {
      console.error('Error loading stored images:', error);
    }
  }

  public getUploadedImages(): UploadedImage[] {
    return [...this.uploadedImages];
  }

  public getImageGroups(): string[][] {
    return this.imageGroups.map(group => [...group]);
  }

  private async uploadImagesToBackend(): Promise<void> {
    if (this.uploadedImages.length === 0) {
      alert('No images to upload. Please upload some images first.');
      return;
    }

    const sendToBackendBtn = document.getElementById('send-to-backend-btn') as HTMLButtonElement;
    if (!sendToBackendBtn) return;

    // Disable button during upload
    const originalText = sendToBackendBtn.innerHTML;
    sendToBackendBtn.disabled = true;
    sendToBackendBtn.innerHTML = `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px; margin-right: 8px; fill: currentColor; animation: spin 1s linear infinite;">
        <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/>
        <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
          <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
        </path>
      </svg>
      Uploading...
    `;

    try {
      // Convert dataUrl images to Blobs/Files
      const formData = new FormData();
      
      for (const image of this.uploadedImages) {
        // Convert dataUrl to Blob
        const response = await fetch(image.dataUrl);
        const blob = await response.blob();
        
        // Determine file extension from original name or default to png
        const extension = image.name.split('.').pop() || 'png';
        const mimeType = blob.type || `image/${extension}`;
        
        // Create a File from the blob
        const file = new File([blob], image.name, { type: mimeType });
        formData.append('images', file);
      }

      // Send to backend
      // TODO: Update this URL to match your backend endpoint
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/api/upload-images';
      
      const uploadResponse = await fetch(backendUrl, {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();
        throw new Error(`Upload failed: ${uploadResponse.status} ${uploadResponse.statusText} - ${errorText}`);
      }

      const result = await uploadResponse.json();
      console.log('Upload successful:', result);
      alert(`Successfully uploaded ${this.uploadedImages.length} image(s) to backend!`);
      
    } catch (error) {
      console.error('Error uploading images to backend:', error);
      alert(`Failed to upload images: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      // Re-enable button
      sendToBackendBtn.disabled = false;
      sendToBackendBtn.innerHTML = originalText;
      
      // Update button state based on image count
      if (this.uploadedImages.length === 0) {
        sendToBackendBtn.disabled = true;
      }
    }
  }

  private updateSendToBackendButtonState(): void {
    const sendToBackendBtn = document.getElementById('send-to-backend-btn') as HTMLButtonElement;
    if (sendToBackendBtn) {
      sendToBackendBtn.disabled = this.uploadedImages.length === 0;
    }
  }

  private async loadSceneFromDownloads(): Promise<void> {
    if (!this.sceneManager) {
      console.error('SceneManager not available');
      alert('SceneManager not available. Please ensure the 3D scene is initialized.');
      return;
    }

    // Cycle to the next scene file
    this.currentSceneIndex = (this.currentSceneIndex + 1) % this.sceneFiles.length;
    const filePath = this.sceneFiles[this.currentSceneIndex];
    
    const plyFileInput = document.getElementById('ply-file-input') as HTMLInputElement;
    if (!plyFileInput) {
      alert('File input not found. Please refresh the page.');
      return;
    }

    // Reset the input so the same file can be selected again if needed
    plyFileInput.value = '';

    // Check if file exists in public folder
    try {
      const response = await fetch(filePath, { method: 'HEAD' });
      if (response.ok) {
        // File exists in public folder, load it directly
        try {
          const fileName = filePath.split('/').pop() || filePath;
          console.log(`Found ${fileName} in public folder, loading...`);
          
          // Show loading indicator
          this.showSceneLoading();
          
          await this.sceneManager.loadRoom(filePath);
          console.log(`Scene changed successfully to ${fileName}`);
          
          // Hide loading indicator
          this.hideSceneLoading();
          return;
        } catch (error) {
          console.error(`Error loading file ${filePath} from public folder:`, error);
          // Hide loading indicator
          this.hideSceneLoading();
          // Fall back to file picker
          console.log('Opening file picker...');
          plyFileInput.click();
        }
      } else {
        // File doesn't exist in public folder, open file picker
        console.log(`${filePath} not found in public folder`);
        console.log('Opening file picker...');
        plyFileInput.click();
      }
    } catch (error) {
      // File not found in public folder, open file picker
      console.log(`${filePath} not found in public folder`);
      console.log('Opening file picker...');
      plyFileInput.click();
    }
  }

  private async loadSuitcaseMovedScene(): Promise<void> {
    if (!this.sceneManager) {
      console.error('SceneManager not available');
      alert('SceneManager not available. Please ensure the 3D scene is initialized.');
      return;
    }

    const filePath = '/gaussians_suitcase_moved_rw_scale.ply';
    
    // Check if file exists in public folder
    try {
      const response = await fetch(filePath, { method: 'HEAD' });
      if (response.ok) {
        // File exists in public folder, load it directly
        try {
          const fileName = filePath.split('/').pop() || filePath;
          console.log(`Found ${fileName} in public folder, loading...`);
          
          // Show loading indicator
          this.showSceneLoading();
          
          await this.sceneManager.loadRoom(filePath);
          console.log(`Scene changed successfully to ${fileName}`);
          
          // Hide loading indicator
          this.hideSceneLoading();
        } catch (error) {
          console.error(`Error loading file ${filePath} from public folder:`, error);
          // Hide loading indicator
          this.hideSceneLoading();
          alert(`Failed to load scene: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
        }
      } else {
        // File doesn't exist in public folder
        console.log(`${filePath} not found in public folder`);
        alert(`File ${filePath} not found. Please ensure the file is in the public folder.`);
      }
    } catch (error) {
      // File not found in public folder
      console.log(`${filePath} not found in public folder`);
      alert(`File ${filePath} not found. Please ensure the file is in the public folder.`);
    }
  }

  private showSceneLoading(): void {
    const appContainer = document.getElementById('app-container');
    let loadingOverlay = document.getElementById('scene-loading-overlay');
    
    if (!loadingOverlay && appContainer) {
      // Create the loading overlay if it doesn't exist
      loadingOverlay = document.createElement('div');
      loadingOverlay.id = 'scene-loading-overlay';
      loadingOverlay.className = 'scene-loading-overlay';
      loadingOverlay.innerHTML = `
        <div class="scene-loading-spinner"></div>
        <div class="scene-loading-text">Update your home</div>
      `;
      appContainer.appendChild(loadingOverlay);
    }
    
    if (loadingOverlay) {
      loadingOverlay.style.display = 'flex';
    }
  }

  private hideSceneLoading(): void {
    const loadingOverlay = document.getElementById('scene-loading-overlay');
    if (loadingOverlay) {
      loadingOverlay.style.display = 'none';
    }
  }
}
