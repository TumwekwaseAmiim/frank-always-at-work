// ==============================
// script.js - FINAL FULL VERSION
// ==============================

// ------------------------------
// "Thank Voters" Audio
// ------------------------------
const thankButton = document.getElementById('thankButton');
const thankAudio = document.getElementById('thankAudio');

thankButton.addEventListener('click', () => {
  // Reset and play audio
  thankAudio.currentTime = 0;
  thankAudio.play();

  // Add active class to button for LED effect
  thankButton.classList.add('active');

  // Remove active class when audio ends
  thankAudio.addEventListener('ended', () => {
    thankButton.classList.remove('active');
  }, { once: true });
});

// ------------------------------
// Video Play / Stop Functions
// ------------------------------
function playVideo(videoId) {
  const video = document.getElementById(videoId);
  if (video) video.play();
}

function stopVideo(videoId) {
  const video = document.getElementById(videoId);
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

// ------------------------------
// Pause other videos when one plays
// ------------------------------
const allVideos = document.querySelectorAll('.video-wrapper video');
allVideos.forEach(video => {
  video.addEventListener('play', () => {
    allVideos.forEach(otherVideo => {
      if (otherVideo !== video) {
        otherVideo.pause();
        otherVideo.currentTime = 0;
      }
    });
  });
});

// ------------------------------
// Share Button - Mobile Native Share
// ------------------------------
const shareButton = document.getElementById('shareButton');

shareButton.addEventListener('click', async () => {
  // LED effect on click
  shareButton.classList.add('active');
  setTimeout(() => {
    shareButton.classList.remove('active');
  }, 1000);

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Hon. Frank Tumwebaze - Kibale East',
        text: 'Check out Hon. Frank’s actions immediately after elections!',
        url: 'https://TumwekwaseAmiim.github.io/frank-always-at-work/' // fixed URL
      });
      // After successful share
      alert('Thank you for supporting Hon. Frank!');
    } catch (err) {
      console.error('Share canceled or failed', err);
    }
  } else {
    // Inform user if Web Share API not supported
    alert('Sharing is not supported on this device/browser. Please try on mobile.');
  }
});