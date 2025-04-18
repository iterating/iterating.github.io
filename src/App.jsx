import './assets/styles/bootstrap.min.css'
import './styles/App.css'
import './styles/responsive.css'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import Global from './components/Global'
import { initializeAOS, setupAOSRefresh } from './utils/animationConfig'

function App() {
  // Initialize AOS once at the application level
  useEffect(() => {
    // Initialize AOS with our centralized configuration
    initializeAOS();
    
    // Setup event listeners for AOS refresh on window resize/orientation change
    setupAOSRefresh();
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('resize', window.AOS?.refresh);
      window.removeEventListener('orientationchange', window.AOS?.refresh);
    };
  }, []);
  
  return (
      <Global/>
  );
}

export default App;
