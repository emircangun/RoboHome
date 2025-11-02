export interface ManualEntry {
  id: string;
  title: string;
  tag: string;
  fileName: string;
  fileUrl: string;
  fileData: string; // base64 or data URL
  uploadedAt: Date;
}

export class TechnologyManager {
  private manualEntries: ManualEntry[] = [];
  private technologyPageContent: HTMLElement | null = null;

  constructor() {
    this.technologyPageContent = document.getElementById('technology-page-content');
    if (!this.technologyPageContent) {
      console.error('Technology page content not found');
      return;
    }
    this.setupTechnologyUI();
    this.loadStoredManuals();
    this.renderManualsList();
  }

  private setupTechnologyUI(): void {
    if (!this.technologyPageContent) return;

    this.technologyPageContent.innerHTML = `
      <div class="technology-section">
        <div class="upload-form">
          <h3>Upload Manual</h3>
          <input 
            type="text" 
            id="manual-title-input" 
            placeholder="Enter title..."
            class="form-input"
          />
          <input 
            type="text" 
            id="manual-tag-input" 
            placeholder="Enter tag..."
            class="form-input"
          />
          <input 
            type="file" 
            id="manual-pdf-input" 
            accept=".pdf,application/pdf"
            style="display: none;"
          />
          <div class="upload-form-buttons">
            <button id="select-pdf-btn" class="upload-btn">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px; margin-right: 8px; fill: currentColor;">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              Select PDF
            </button>
            <button id="upload-manual-btn" class="upload-btn upload-submit-btn" disabled>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px; margin-right: 8px; fill: currentColor;">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Upload Manual
            </button>
          </div>
          <div id="pdf-file-info" class="file-info" style="display: none;"></div>
        </div>
      </div>
      <div id="manuals-list" class="manuals-list"></div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .technology-section {
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #333;
      }
      .upload-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .upload-form h3 {
        color: #fff;
        font-size: 18px;
        margin-bottom: 8px;
      }
      .form-input {
        padding: 10px 14px;
        border: 1px solid #333;
        border-radius: 8px;
        font-size: 14px;
        outline: none;
        background: #1a1a1a;
        color: #fff;
        transition: border-color 0.2s;
      }
      .form-input::placeholder {
        color: #666;
      }
      .form-input:focus {
        border-color: #4CAF50;
      }
      .upload-form-buttons {
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
      .upload-submit-btn {
        background: #4CAF50;
        color: #fff;
        border-color: #4CAF50;
      }
      .upload-submit-btn:hover:not(:disabled) {
        background: #45a049;
        border-color: #45a049;
      }
      .file-info {
        padding: 10px;
        background: #1a1a1a;
        border: 1px solid #333;
        border-radius: 8px;
        color: #fff;
        font-size: 14px;
      }
      .manuals-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 10px 0;
      }
      .manual-entry {
        background: #1a1a1a;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 15px;
        transition: all 0.2s;
      }
      .manual-entry:hover {
        border-color: #4CAF50;
        transform: translateX(4px);
      }
      .manual-entry-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;
      }
      .manual-entry-title {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 4px;
      }
      .manual-entry-tag {
        display: inline-block;
        padding: 4px 10px;
        background: #4CAF50;
        color: #fff;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
      }
      .manual-entry-meta {
        display: flex;
        gap: 12px;
        align-items: center;
        margin-top: 10px;
        color: #999;
        font-size: 12px;
      }
      .manual-entry-actions {
        display: flex;
        gap: 8px;
      }
      .manual-action-btn {
        padding: 6px 12px;
        border: 1px solid #333;
        border-radius: 6px;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.2s;
        background: #000;
        color: #999;
      }
      .manual-action-btn:hover {
        background: #1a1a1a;
        border-color: #4CAF50;
        color: #4CAF50;
      }
      .manual-action-btn.delete {
        color: #f44336;
        border-color: #f44336;
      }
      .manual-action-btn.delete:hover {
        background: #f44336;
        color: #fff;
      }
      .empty-manuals {
        text-align: center;
        padding: 60px 20px;
        color: #666;
        font-size: 16px;
      }
    `;
    document.head.appendChild(style);

    // Event listeners
    const pdfInput = document.getElementById('manual-pdf-input') as HTMLInputElement;
    const selectPdfBtn = document.getElementById('select-pdf-btn') as HTMLButtonElement;
    const uploadManualBtn = document.getElementById('upload-manual-btn') as HTMLButtonElement;
    const titleInput = document.getElementById('manual-title-input') as HTMLInputElement;
    const tagInput = document.getElementById('manual-tag-input') as HTMLInputElement;
    const fileInfo = document.getElementById('pdf-file-info') as HTMLElement;

    selectPdfBtn.addEventListener('click', () => {
      pdfInput.click();
    });

    pdfInput.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        if (file.type !== 'application/pdf') {
          alert('Please select a PDF file');
          pdfInput.value = '';
          return;
        }
        fileInfo.style.display = 'block';
        fileInfo.textContent = `Selected: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
        this.updateUploadButtonState();
      }
    });

    titleInput.addEventListener('input', () => {
      this.updateUploadButtonState();
    });

    tagInput.addEventListener('input', () => {
      this.updateUploadButtonState();
    });

    uploadManualBtn.addEventListener('click', () => {
      this.handleManualUpload();
    });
  }

  private updateUploadButtonState(): void {
    const uploadBtn = document.getElementById('upload-manual-btn') as HTMLButtonElement;
    const pdfInput = document.getElementById('manual-pdf-input') as HTMLInputElement;
    const titleInput = document.getElementById('manual-title-input') as HTMLInputElement;
    const tagInput = document.getElementById('manual-tag-input') as HTMLInputElement;

    if (uploadBtn && pdfInput && titleInput && tagInput) {
      const hasFile = pdfInput.files && pdfInput.files.length > 0;
      const hasTitle = titleInput.value.trim().length > 0;
      const hasTag = tagInput.value.trim().length > 0;
      uploadBtn.disabled = !(hasFile && hasTitle && hasTag);
    }
  }

  private async handleManualUpload(): Promise<void> {
    const pdfInput = document.getElementById('manual-pdf-input') as HTMLInputElement;
    const titleInput = document.getElementById('manual-title-input') as HTMLInputElement;
    const tagInput = document.getElementById('manual-tag-input') as HTMLInputElement;
    const uploadBtn = document.getElementById('upload-manual-btn') as HTMLButtonElement;

    const file = pdfInput.files?.[0];
    const title = titleInput.value.trim();
    const tag = tagInput.value.trim();

    if (!file || !title || !tag) {
      alert('Please fill in all fields');
      return;
    }

    if (file.type !== 'application/pdf') {
      alert('Please select a PDF file');
      return;
    }

    // Disable button during upload
    uploadBtn.disabled = true;
    const originalText = uploadBtn.innerHTML;
    uploadBtn.innerHTML = `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px; margin-right: 8px; fill: currentColor;">
        <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/>
        <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
          <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
        </path>
      </svg>
      Uploading...
    `;

    try {
      // Convert PDF to data URL
      const dataUrl = await this.fileToDataUrl(file);
      
      const manualEntry: ManualEntry = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        title: title,
        tag: tag,
        fileName: file.name,
        fileUrl: dataUrl,
        fileData: dataUrl,
        uploadedAt: new Date()
      };

      this.manualEntries.push(manualEntry);
      this.saveManualsToStorage();
      this.renderManualsList();

      // Reset form
      pdfInput.value = '';
      titleInput.value = '';
      tagInput.value = '';
      const fileInfo = document.getElementById('pdf-file-info') as HTMLElement;
      if (fileInfo) {
        fileInfo.style.display = 'none';
      }
      this.updateUploadButtonState();

      console.log('Manual uploaded successfully:', manualEntry);
    } catch (error) {
      console.error('Error uploading manual:', error);
      alert('Failed to upload manual. Please try again.');
    } finally {
      uploadBtn.disabled = false;
      uploadBtn.innerHTML = originalText;
      this.updateUploadButtonState();
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

  private renderManualsList(): void {
    const list = document.getElementById('manuals-list');
    if (!list) return;

    if (this.manualEntries.length === 0) {
      list.innerHTML = `
        <div class="empty-manuals">
          <p>No manuals uploaded yet</p>
          <p style="font-size: 14px; margin-top: 10px; color: #555;">Upload your first manual above</p>
        </div>
      `;
      return;
    }

    list.innerHTML = this.manualEntries.map(entry => {
      const uploadedDate = new Date(entry.uploadedAt).toLocaleDateString();
      return `
        <div class="manual-entry" data-entry-id="${entry.id}">
          <div class="manual-entry-header">
            <div>
              <div class="manual-entry-title">${this.escapeHtml(entry.title)}</div>
              <span class="manual-entry-tag">${this.escapeHtml(entry.tag)}</span>
            </div>
            <div class="manual-entry-actions">
              <button class="manual-action-btn download-btn" data-entry-id="${entry.id}" title="Download PDF">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 16px; height: 16px; fill: currentColor;">
                  <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/>
                </svg>
              </button>
              <button class="manual-action-btn delete delete-btn" data-entry-id="${entry.id}" title="Delete">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 16px; height: 16px; fill: currentColor;">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="manual-entry-meta">
            <span>File: ${this.escapeHtml(entry.fileName)}</span>
            <span>•</span>
            <span>Uploaded: ${uploadedDate}</span>
          </div>
        </div>
      `;
    }).join('');

    // Add event listeners for download and delete buttons
    list.querySelectorAll('.download-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const entryId = (btn as HTMLElement).getAttribute('data-entry-id');
        if (entryId) {
          this.downloadManual(entryId);
        }
      });
    });

    list.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const entryId = (btn as HTMLElement).getAttribute('data-entry-id');
        if (entryId) {
          this.deleteManual(entryId);
        }
      });
    });
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  private deleteManual(entryId: string): void {
    if (!confirm('Are you sure you want to delete this manual?')) {
      return;
    }

    this.manualEntries = this.manualEntries.filter(entry => entry.id !== entryId);
    this.saveManualsToStorage();
    this.renderManualsList();
  }

  public downloadManual(entryId: string): void {
    const entry = this.manualEntries.find(e => e.id === entryId);
    if (!entry) {
      console.error('Manual entry not found:', entryId);
      return;
    }

    // Convert data URL to blob and download
    const byteString = atob(entry.fileData.split(',')[1]);
    const mimeString = entry.fileData.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: mimeString });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = entry.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  private saveManualsToStorage(): void {
    try {
      const manualsData = this.manualEntries.map(entry => ({
        id: entry.id,
        title: entry.title,
        tag: entry.tag,
        fileName: entry.fileName,
        fileData: entry.fileData,
        uploadedAt: entry.uploadedAt.toISOString()
      }));
      localStorage.setItem('manualEntries', JSON.stringify(manualsData));
    } catch (error) {
      console.error('Error saving manuals to storage:', error);
      if (error instanceof DOMException && error.code === 22) {
        alert('Storage limit reached. Please delete some manuals to free up space.');
      }
    }
  }

  private loadStoredManuals(): void {
    try {
      const stored = localStorage.getItem('manualEntries');
      if (stored) {
        const manualsData = JSON.parse(stored);
        this.manualEntries = manualsData.map((entry: any) => ({
          id: entry.id,
          title: entry.title,
          tag: entry.tag,
          fileName: entry.fileName,
          fileUrl: entry.fileData,
          fileData: entry.fileData,
          uploadedAt: new Date(entry.uploadedAt)
        }));
      }
    } catch (error) {
      console.error('Error loading stored manuals:', error);
    }
  }

  public getManualEntries(): ManualEntry[] {
    return [...this.manualEntries];
  }

  public addTag(tagName: string, title?: string): boolean {
    if (!tagName || tagName.trim().length === 0) {
      console.warn('Tag name is required');
      return false;
    }

    const trimmedTag = tagName.trim();
    const entryTitle = title || `Tag: ${trimmedTag}`;

    // Check if tag already exists
    const existingEntry = this.manualEntries.find(
      entry => entry.tag.toLowerCase() === trimmedTag.toLowerCase()
    );

    if (existingEntry) {
      console.log(`Tag "${trimmedTag}" already exists`);
      return false;
    }

    // Create a placeholder manual entry for the tag
    const manualEntry: ManualEntry = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: entryTitle,
      tag: trimmedTag,
      fileName: 'tag-entry.txt',
      fileUrl: 'data:text/plain;base64,',
      fileData: 'data:text/plain;base64,VGFnIGVudHJ5', // "Tag entry" in base64
      uploadedAt: new Date()
    };

    this.manualEntries.push(manualEntry);
    this.saveManualsToStorage();
    this.renderManualsList();

    console.log(`Tag "${trimmedTag}" added successfully`);
    return true;
  }
}

