import { SceneManager } from './scene/SceneManager';
import { UIManager } from './controls/UIManager';
import { MenuManager } from './controls/MenuManager';
import { WindowResizeManager } from './controls/WindowResizeManager';
import { ChatManager } from './controls/ChatManager';
import { UploadManager } from './controls/UploadManager';
import { TechnologyManager } from './controls/TechnologyManager';
import { RobotManager } from './controls/RobotManager';
import { ProfileManager } from './controls/ProfileManager';

// Initialize the application
async function init() {
  console.log('Initializing application...');
  
  const container = document.getElementById('app-container');
  if (!container) {
    console.error('Container element not found');
    throw new Error('Container element not found');
  }
  console.log('App container found');

  // Create menu manager
  console.log('Creating MenuManager...');
  new MenuManager();

  // Create scene manager
  console.log('Creating SceneManager...');
  const sceneManager = new SceneManager(container);

  // Create UI manager
  console.log('Creating UIManager...');
  new UIManager(sceneManager);

  // Create technology manager
  console.log('Creating TechnologyManager...');
  const technologyManager = new TechnologyManager();

  // Create chat manager
  console.log('Creating ChatManager...');
  new ChatManager(technologyManager);

  // Create upload manager
  console.log('Creating UploadManager...');
  new UploadManager(sceneManager);


  // Create robot manager
  console.log('Creating RobotManager...');
  new RobotManager();

  // Create profile manager
  console.log('Creating ProfileManager...');
  new ProfileManager();

  // Create window resize manager
  console.log('Creating WindowResizeManager...');
  new WindowResizeManager(container);

  // Automatically load gaussian_original_rw_scaled.ply from public folder
  try {
    const plyPath = '/gaussian_original_rw_scaled.ply';
    await sceneManager.loadRoom(plyPath);
    console.log('Gaussian splat scene loaded successfully');
  } catch (error) {
    console.error('Failed to load gaussian splat scene:', error);
    console.log('Please ensure gaussian_original_rw_scaled.ply is in the public folder');
  }

  console.log('3D Room Designer initialized');
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
