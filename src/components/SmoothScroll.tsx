"use client";

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleLinkClick = (e: MouseEvent) => {
      // Check if the clicked element is an anchor link with a hash
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      // Handle scroll to top when clicking elements with scroll-to-top class
      if (target.closest('.scroll-to-top')) {
        e.preventDefault();
        
        // Scroll to top smoothly
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        
        // Clear URL hash if present
        if (window.location.hash) {
          history.pushState(null, '', window.location.pathname);
        }
        
        return;
      }
      
      // Handle regular anchor links
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        
        // Get the target element
        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Calculate offset to account for sticky header
          const navHeight = document.querySelector('nav')?.offsetHeight || 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
          
          // Perform smooth scroll
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update URL hash without scrolling
          history.pushState(null, '', link.hash);
        }
      }
    };
    
    // Add event listener to document for capturing all link clicks
    document.addEventListener('click', handleLinkClick);
    
    // Clean up event listener
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  
  return null; // This is a behavior-only component
}
