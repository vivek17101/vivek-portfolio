/**
 * Navigation script for portfolio website.
 * Handles mobile menu (hamburger) functionality.
 */
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const content = document.getElementById('main-content');
    const footer = document.getElementById('footer');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class to show/hide the mobile menu
            mobileMenu.classList.toggle('hidden');

            // Optional: Add a class to the body to prevent scrolling when the menu is open
            document.body.classList.toggle('overflow-hidden');
            
            // Optional: Push content down or overlay. Here we just show/hide.
        });
    }
    
    // Close menu if user clicks outside of it (on the main content)
    if(content) {
        content.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });
    }
    if(footer) {
         footer.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });
    }
});
