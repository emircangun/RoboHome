export class ProfileManager {
  private profilePageContent: HTMLElement | null = null;

  constructor() {
    this.profilePageContent = document.getElementById('profile-page-content');
    if (!this.profilePageContent) {
      console.error('Profile page content not found');
      return;
    }
    this.renderProfile();
  }

  private renderProfile(): void {
    if (!this.profilePageContent) return;

    this.profilePageContent.innerHTML = `
      <style>
        .profile-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .profile-header {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-bottom: 40px;
          padding-bottom: 30px;
          border-bottom: 1px solid #333;
        }
        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4CAF50, #45a049);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: 600;
          color: #fff;
          border: 4px solid #2a2a2a;
        }
        .profile-info h1 {
          font-size: 32px;
          margin-bottom: 8px;
          color: #fff;
        }
        .profile-info p {
          color: #bbb;
          font-size: 16px;
          margin-bottom: 12px;
        }
        .badge {
          display: inline-block;
          padding: 4px 12px;
          background: #4CAF50;
          color: #fff;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }
        .badge.premium {
          background: #ff9800;
        }
        .badge.free {
          background: #666;
        }
        .profile-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .profile-section {
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 12px;
          padding: 30px;
        }
        .profile-section h2 {
          font-size: 20px;
          margin-bottom: 20px;
          color: #fff;
          padding-bottom: 15px;
          border-bottom: 1px solid #333;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #ccc;
          font-size: 14px;
          font-weight: 500;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          background: #0a0a0a;
          border: 1px solid #444;
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
          font-family: inherit;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #4CAF50;
        }
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }
        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-primary {
          background: #4CAF50;
          color: #fff;
        }
        .btn-primary:hover {
          background: #45a049;
        }
        .btn-secondary {
          background: #333;
          color: #fff;
        }
        .btn-secondary:hover {
          background: #444;
        }
        .info-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #333;
        }
        .info-item:last-child {
          border-bottom: none;
        }
        .info-item label {
          color: #bbb;
          font-size: 14px;
        }
        .info-item span {
          color: #fff;
          font-weight: 500;
        }
        .subscription-card {
          background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
          border: 2px solid #4CAF50;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 20px;
        }
        .subscription-card h3 {
          font-size: 18px;
          margin-bottom: 10px;
          color: #4CAF50;
        }
        .subscription-card p {
          color: #bbb;
          font-size: 14px;
          margin-bottom: 15px;
        }
        .billing-history {
          max-height: 300px;
          overflow-y: auto;
        }
        .billing-item {
          padding: 15px;
          background: #0a0a0a;
          border-radius: 6px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .billing-item-date {
          color: #bbb;
          font-size: 12px;
        }
        .billing-item-amount {
          color: #4CAF50;
          font-weight: 600;
        }
        .security-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          background: #0a0a0a;
          border-radius: 6px;
          margin-bottom: 10px;
        }
        .switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #444;
          transition: .4s;
          border-radius: 24px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: #4CAF50;
        }
        input:checked + .slider:before {
          transform: translateX(26px);
        }
        .full-width {
          grid-column: 1 / -1;
        }
        .activity-item {
          padding: 12px;
          background: #0a0a0a;
          border-left: 3px solid #4CAF50;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .activity-item-time {
          color: #bbb;
          font-size: 12px;
          margin-top: 4px;
        }
        .stat-card {
          background: #0a0a0a;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
        }
        .stat-card-value {
          font-size: 32px;
          font-weight: 600;
          color: #4CAF50;
          margin-bottom: 8px;
        }
        .stat-card-label {
          color: #bbb;
          font-size: 14px;
        }
        @media (max-width: 768px) {
          .profile-content {
            grid-template-columns: 1fr;
          }
          .profile-header {
            flex-direction: column;
            text-align: center;
          }
        }
      </style>
      <div class="profile-container">
        <div class="profile-header">
          <div class="avatar">JD</div>
          <div class="profile-info">
            <h1>Johannes Aschoff</h1>
            <p>johannes@aschoff.ch</p>
            <p>Member since: January 2024</p>
          </div>
        </div>

        <div class="profile-content">
          <!-- Personal Information -->
          <div class="profile-section">
            <h2>Personal Information</h2>
            <div class="form-group">
              <label>Full Name</label>
              <input type="text" value="Johannes Aschoff" />
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" value="johannes@aschoff.ch" />
            </div>
            <div class="form-group">
              <label>Phone Number</label>
              <input type="tel" value="+1 (555) 123-4567" />
            </div>
            <div class="form-group">
              <label>Company</label>
              <input type="text" value="Tech Solutions Inc." />
            </div>
            <div class="form-group">
              <label>Job Title</label>
              <input type="text" value="Product Manager" />
            </div>
            <button class="btn btn-primary">Save Changes</button>
          </div>

          <!-- Account Settings -->
          <div class="profile-section">
            <h2>Account Settings</h2>
            <div class="info-item">
              <label>User ID</label>
              <span>usr_abc123xyz789</span>
            </div>
            <div class="info-item">
              <label>Account Status</label>
              <span class="badge premium">Active</span>
            </div>
            <div class="info-item">
              <label>Email Verified</label>
              <span class="badge">✓ Verified</span>
            </div>
            <div class="info-item">
              <label>2FA Enabled</label>
              <span>Enabled</span>
            </div>
            <div class="info-item">
              <label>Last Login</label>
              <span>2 hours ago</span>
            </div>
            <div class="info-item">
              <label>IP Address</label>
              <span>192.168.1.100</span>
            </div>
          </div>

          <!-- Statistics -->
          <div class="profile-section full-width">
            <h2>Statistics</h2>
            <div style="display: flex; gap: 20px; margin-top: 20px;">
              <div class="stat-card" style="flex: 1;">
                <div class="stat-card-value">3</div>
                <div class="stat-card-label">Robots</div>
              </div>
              <div class="stat-card" style="flex: 1;">
                <div class="stat-card-value">Unlimited</div>
                <div class="stat-card-label">Rooms</div>
              </div>
            </div>
          </div>

          <!-- Security Settings -->
          <div class="profile-section">
            <h2>Security Settings</h2>
            <div class="security-item">
              <div>
                <div style="color: #fff; font-weight: 500; margin-bottom: 4px;">Two-Factor Authentication</div>
                <div style="color: #bbb; font-size: 12px;">Require code from your authenticator app</div>
              </div>
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider"></span>
              </label>
            </div>
            <div class="security-item">
              <div>
                <div style="color: #fff; font-weight: 500; margin-bottom: 4px;">Email Notifications</div>
                <div style="color: #bbb; font-size: 12px;">Receive email alerts for important events</div>
              </div>
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider"></span>
              </label>
            </div>
            <div class="security-item">
              <div>
                <div style="color: #fff; font-weight: 500; margin-bottom: 4px;">Session Timeout</div>
                <div style="color: #bbb; font-size: 12px;">Automatically log out after 30 minutes</div>
              </div>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
            <div style="margin-top: 20px;">
              <button class="btn btn-primary" style="margin-right: 10px;">Change Password</button>
              <button class="btn btn-secondary">Download Data</button>
            </div>
          </div>

          <!-- Preferences -->
          <div class="profile-section">
            <h2>Preferences</h2>
            <div class="form-group">
              <label>Language</label>
              <select>
                <option>English</option>
                <option>Spanish</option>
                <option>German</option>
                <option>French</option>
              </select>
            </div>
            <div class="form-group">
              <label>Time Zone</label>
              <select>
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC-6 (Central Time)</option>
                <option>UTC-7 (Mountain Time)</option>
                <option>UTC-8 (Pacific Time)</option>
              </select>
            </div>
            <div class="form-group">
              <label>Date Format</label>
              <select>
                <option>MM/DD/YYYY</option>
                <option>DD/MM/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
            <div class="form-group">
              <label>Theme</label>
              <select>
                <option>Dark</option>
                <option>Light</option>
                <option>System</option>
              </select>
            </div>
            <button class="btn btn-primary">Save Preferences</button>
          </div>

          <!-- Activity Log -->
          <div class="profile-section full-width">
            <h2>Recent Activity</h2>
            <div class="activity-item">
              <div style="color: #fff; font-weight: 500;">Deployed configuration to Neo X1</div>
              <div class="activity-item-time">2 hours ago</div>
            </div>
            <div class="activity-item">
              <div style="color: #fff; font-weight: 500;">Created digital twin from uploaded images</div>
              <div class="activity-item-time">1 day ago</div>
            </div>
            <div class="activity-item">
              <div style="color: #fff; font-weight: 500;">Connected new robot: roborock Q7 M5</div>
              <div class="activity-item-time">3 days ago</div>
            </div>
            <div class="activity-item">
              <div style="color: #fff; font-weight: 500;">Updated profile information</div>
              <div class="activity-item-time">1 week ago</div>
            </div>
            <div class="activity-item">
              <div style="color: #fff; font-weight: 500;">Changed password</div>
              <div class="activity-item-time">2 weeks ago</div>
            </div>
          </div>

          <!-- API Access -->
          <div class="profile-section">
            <h2>API Access</h2>
            <div class="info-item">
              <label>API Key</label>
              <span style="font-family: monospace; font-size: 12px;">sk_live_abc123...xyz789</span>
            </div>
            <div class="info-item">
              <label>API Requests (Last 30 days)</label>
              <span>12,345</span>
            </div>
            <div class="info-item">
              <label>Rate Limit</label>
              <span>1,000 requests/hour</span>
            </div>
            <div style="margin-top: 20px;">
              <button class="btn btn-primary" style="margin-right: 10px;">Generate New API Key</button>
              <button class="btn btn-secondary">View API Documentation</button>
            </div>
          </div>

          <!-- Support -->
          <div class="profile-section">
            <h2>Support</h2>
            <div style="margin-bottom: 20px;">
              <p style="color: #bbb; margin-bottom: 15px;">Need help? Our support team is here for you.</p>
              <button class="btn btn-primary" style="margin-right: 10px; margin-bottom: 10px;">Contact Support</button>
              <button class="btn btn-secondary" style="margin-bottom: 10px;">View Documentation</button>
              <button class="btn btn-secondary">Report a Bug</button>
            </div>
            <div class="info-item">
              <label>Support Plan</label>
              <span>Priority Support</span>
            </div>
            <div class="info-item">
              <label>Response Time</label>
              <span>&lt; 2 hours</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

