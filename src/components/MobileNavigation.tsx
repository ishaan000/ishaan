"use client";

import { useEffect } from 'react';

export default function MobileNavigation() {
  useEffect(() => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
    
    // Function to open mobile menu with animation
    const openMobileMenu = () => {
      if (mobileMenu && mobileMenuButton) {
        mobileMenu.classList.add('active');
        mobileMenuButton.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
      }
    };
    
    // Function to close mobile menu with animation
    const closeMobileMenu = () => {
      if (mobileMenu && mobileMenuButton) {
        mobileMenu.classList.remove('active');
        mobileMenuButton.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
      }
    };
    
    // Toggle menu when hamburger button is clicked
    mobileMenuButton?.addEventListener('click', openMobileMenu);
    
    // Close menu when X button is clicked
    closeMenuButton?.addEventListener('click', closeMobileMenu);
    
    // Close menu when a link is clicked
    mobileMenuLinks?.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
    
    // Clean up event listeners
    return () => {
      mobileMenuButton?.removeEventListener('click', openMobileMenu);
      closeMenuButton?.removeEventListener('click', closeMobileMenu);
      mobileMenuLinks?.forEach(link => {
        link.removeEventListener('click', closeMobileMenu);
      });
    };
  }, []);
  
  return null; // This is a behavior-only component
}
