/**
 * Centralized animation configuration for AOS (Animate On Scroll)
 */
import AOS from 'aos';

/**
 * Initialize AOS with optimized configuration
 * This ensures animations only trigger when elements enter the viewport
 */
export const initializeAOS = () => {
  AOS.init({
    duration: 1000,           // duration of animation
    easing: 'ease-out-cubic', // default easing for AOS animations
    once: false,              // whether animation should happen only once - while scrolling down
    mirror: false,            // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    offset: 120,              // offset (in px) from the original trigger point
    delay: 0,                 // values from 0 to 3000, with step 50ms
    disable: 'mobile',        // accepts: 'phone', 'tablet', 'mobile', boolean, expression or function
    throttleDelay: 99,        // the delay on throttle used while scrolling the page (advanced)
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  });
};

// Re-initialize AOS on window resize or orientation change
export const setupAOSRefresh = () => {
  window.addEventListener('resize', () => {
    AOS.refresh();
  });
  
  window.addEventListener('orientationchange', () => {
    AOS.refresh();
  });
};
