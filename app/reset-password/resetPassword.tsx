'use client';

export default function ResetPassword() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Reset Password - ClosetCoach</title>
          <style>
              body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  margin: 0;
                  padding: 0;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                  color: white;
              }
              .container {
                  text-align: center;
                  background: rgba(255, 255, 255, 0.1);
                  padding: 2rem;
                  border-radius: 20px;
                  backdrop-filter: blur(10px);
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                  max-width: 400px;
                  width: 90%;
              }
              .logo {
                  font-size: 2rem;
                  font-weight: bold;
                  margin-bottom: 1rem;
              }
              .spinner {
                  border: 3px solid rgba(255, 255, 255, 0.3);
                  border-radius: 50%;
                  border-top: 3px solid white;
                  width: 40px;
                  height: 40px;
                  animation: spin 1s linear infinite;
                  margin: 1rem auto;
              }
              @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
              }
              .message {
                  margin: 1rem 0;
                  font-size: 1.1rem;
              }
              .fallback-link {
                  margin-top: 2rem;
                  padding: 1rem;
                  background: rgba(255, 255, 255, 0.2);
                  border-radius: 10px;
              }
              .fallback-link a {
                  color: white;
                  text-decoration: none;
                  font-weight: bold;
              }
              .fallback-link a:hover {
                  text-decoration: underline;
              }
              .error {
                  color: #ff6b6b;
                  background: rgba(255, 107, 107, 0.2);
                  padding: 1rem;
                  border-radius: 10px;
                  margin-top: 1rem;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="logo">👗 ClosetCoach</div>
              <div class="spinner"></div>
              <div class="message" id="message">Redirecting to ClosetCoach app...</div>
              
              <div class="fallback-link" id="fallback" style="display: none;">
                  <p>Having trouble opening the app?</p>
                  <a href="#" id="downloadLink">Download ClosetCoach</a>
              </div>
              
              <div class="error" id="error" style="display: none;">
                  <p>Invalid reset link. Please request a new password reset.</p>
              </div>
          </div>

          <script>
              // Extract parameters from URL
              const urlParams = new URLSearchParams(window.location.search);
              const userId = urlParams.get('userId');
              const secret = urlParams.get('secret');
              
              // Check if we have the required parameters
              if (userId && secret) {
                  // Try to redirect to the app using deep link
                  const deepLink = \`closetcoach://reset-password?userId=\${userId}&secret=\${secret}\`;
                  
                  // Attempt to open the app
                  window.location.href = deepLink;
                  
                  // Show fallback after 3 seconds if app doesn't open
                  setTimeout(() => {
                      document.getElementById('message').textContent = 'App not found. Please download ClosetCoach.';
                      document.getElementById('fallback').style.display = 'block';
                      
                      // Set up download link (replace with your actual app store links)
                      document.getElementById('downloadLink').href = 'https://apps.apple.com/app/closetcoach';
                      document.getElementById('downloadLink').textContent = 'Download from App Store';
                  }, 3000);
                  
              } else {
                  // Show error if parameters are missing
                  document.getElementById('message').textContent = '';
                  document.getElementById('error').style.display = 'block';
                  document.querySelector('.spinner').style.display = 'none';
              }
              
              // Additional fallback for Android users
              if (navigator.userAgent.includes('Android')) {
                  setTimeout(() => {
                      const androidLink = \`intent://reset-password?userId=\${userId}&secret=\${secret}#Intent;scheme=closetcoach;package=com.anonymous.ClosetCoach;end\`;
                      window.location.href = androidLink;
                  }, 1000);
              }
          </script>
      </body>
      </html>
    ` }} />
  );
}