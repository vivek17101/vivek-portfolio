/**
 * Main script for portfolio website.
 * Handles theme toggling functionality.
 */
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  // Function to update the theme UI based on the current theme
  const updateThemeUI = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    } else {
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    }
  };

  // This script runs on every page to set the initial state of the theme toggle button.
  // The actual theme is set by a script in the <head> to prevent FOUC.
  updateThemeUI();

  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
      // Toggle the 'dark' class on the <html> element
      document.documentElement.classList.toggle('dark');

      // Update localStorage with the new theme preference
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      // Update the button icon
      updateThemeUI();
    });
  }
});
