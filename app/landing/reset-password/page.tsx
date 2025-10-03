'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const [showFallback, setShowFallback] = useState(false);
  const [hasError, setHasError] = useState(false);

  const userId = searchParams.get('userId');
  const secret = searchParams.get('secret');

  useEffect(() => {
    if (userId && secret) {
      // Try to redirect to the app using deep link
      const deepLink = `closetcoach://reset-password?userId=${userId}&secret=${secret}`;
      window.location.href = deepLink;

      // Show fallback after 3 seconds if app doesn't open
      const fallbackTimer = setTimeout(() => {
        setShowFallback(true);
      }, 3000);

      // Additional fallback for Android users
      if (navigator.userAgent.includes('Android')) {
        setTimeout(() => {
          const androidLink = `intent://reset-password?userId=${userId}&secret=${secret}#Intent;scheme=closetcoach;package=com.anonymous.ClosetCoach;end`;
          window.location.href = androidLink;
        }, 1000);
      }

      return () => clearTimeout(fallbackTimer);
    } else {
      setHasError(true);
    }
  }, [userId, secret]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2] p-4">
      <div className="text-center bg-white/10 p-8 rounded-[20px] backdrop-blur-lg shadow-lg max-w-[400px] w-full">
        <div className="text-3xl font-bold text-white mb-4">👗 ClosetCoach</div>
        
        {!hasError && (
          <>
            <div className="w-10 h-10 border-3 border-white/30 border-t-white rounded-full animate-spin mx-auto my-4"></div>
            <div className="text-white text-lg my-4">
              Redirecting to ClosetCoach app...
            </div>
          </>
        )}
        
        {showFallback && (
          <div className="mt-8 p-4 bg-white/20 rounded-[10px]">
            <p className="text-white mb-2">Having trouble opening the app?</p>
            <a
              href="https://apps.apple.com/app/closetcoach"
              className="text-white font-bold hover:underline"
            >
              Download from App Store
            </a>
          </div>
        )}
        
        {hasError && (
          <div className="mt-4 p-4 bg-red-400/20 text-red-200 rounded-[10px]">
            <p>Invalid reset link. Please request a new password reset.</p>
          </div>
        )}
      </div>
    </div>
  );
}