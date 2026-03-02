/**
 * script.js - El Lobo Financiero
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Menu Setup
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // YouTube API Integration for Subscriber Count
  const ytSubCountElement = document.getElementById('yt-sub-count');
  const FALLBACK_COUNT = '1.5K';

  // Add your YouTube Data API v3 key here to enable live fetching.
  // Left blank by default to trigger the fallback logic as requested.
  const YOUTUBE_API_KEY = ''; 
  const CHANNEL_HANDLE = '@ElLoboFinanciero';

  async function fetchYouTubeSubscribers() {
    if (!YOUTUBE_API_KEY) {
      // In absence of an API key, we ensure the fallback is displayed.
      if (ytSubCountElement) ytSubCountElement.textContent = FALLBACK_COUNT;
      return;
    }

    try {
      // Endpoint to resolve handle to channel ID and get stats.
      // Note: Getting channel by handle directly might require specific endpoints or channel ID.
      // Assuming a generic approach.
      const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=${encodeURIComponent(CHANNEL_HANDLE)}&key=${YOUTUBE_API_KEY}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        const subCount = data.items[0].statistics.subscriberCount;
        if (subCount) {
          // Format number (e.g. 1500 -> 1.5K)
          const formattedCount = formatCount(parseInt(subCount, 10));
          if (ytSubCountElement) ytSubCountElement.textContent = formattedCount;
          return;
        }
      }
      
      throw new Error('No subscriber data found');
    } catch (error) {
      console.warn('Failed to fetch YouTube subscribers, falling back to cached value.', error);
      if (ytSubCountElement) ytSubCountElement.textContent = FALLBACK_COUNT;
    }
  }

  function formatCount(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  }

  fetchYouTubeSubscribers();
});
