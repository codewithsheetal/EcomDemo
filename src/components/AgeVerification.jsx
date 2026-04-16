import { useState, useEffect } from 'react';
import styles from './AgeVerification.module.css';

function AgeVerification({ onVerify }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem('ageVerified');
    if (!isVerified) {
      setIsVisible(true);
    } else {
      onVerify();
    }

    // Prevent escape key from closing the modal
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
      }
    };

    if (!isVerified) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onVerify]);

  const handleVerify = (isAdult) => {
    if (isAdult) {
      localStorage.setItem('ageVerified', 'true');
      setIsVisible(false);
      onVerify();
    } else {
      // Redirect to a different site or show message
      window.location.href = 'https://www.google.com';
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={(e) => e.stopPropagation()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h1>🍷 Age Verification Required</h1>
          <p><strong>You must be 21 years or older to access this website.</strong></p>
          <p>Are you 21 years of age or older?</p>

          <div className={styles.warning}>
            <p>⚠️ This website sells alcoholic beverages. By entering, you certify that you are of legal drinking age in your jurisdiction.</p>
          </div>

          <div className={styles.buttons}>
            <button
              className={styles.yesBtn}
              onClick={() => handleVerify(true)}
            >
              Yes, I am 21 or older
            </button>
            <button
              className={styles.noBtn}
              onClick={() => handleVerify(false)}
            >
              No, I am under 21
            </button>
          </div>

          <div className={styles.disclaimer}>
            <p>By entering this site, you certify that you are of legal drinking age in your country of residence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgeVerification;