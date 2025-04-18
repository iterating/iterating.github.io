import React, { lazy, Suspense, memo } from 'react';
import LSidebar from './Global-content/LSidebar';

// Lazy load components that aren't immediately visible in the viewport
// This improves initial load performance by code-splitting
const Herosec = lazy(() => import('./Hero/Hero'));
const Portfolio = lazy(() => import('./Portfolio/Portfolio'));
const Webdental = lazy(() => import('./Webdental/Webdental'));
const About = lazy(() => import('./About/About'));
const Resume = lazy(() => import('./Resume/Resume'));
const Skills = lazy(() => import('./Skills/Skills'));
const Contact = lazy(() => import('./Contact/Contact'));
// const Services = lazy(() => import('./Services/Services'));
// const Testimonials = lazy(() => import('./Testimonials/Testimonials'));
// const Clientlogos = lazy(() => import('./Clientlogos/Clientlogos'));
// const Pricing = lazy(() => import('./Pricing/Pricing'));

// Create a loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    textAlign: 'center', 
    padding: '40px',
    color: '#13c5fd'
  }}>
    Loading...
  </div>
);

// Memoize the component to prevent unnecessary re-renders
const MainComponent = memo(function Main() {
  return (
    <main className="drake-main">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <LSidebar /> {/* this component will used by mobile devices */}
          
          {/* Wrap lazy-loaded components in Suspense with fallback */}
          <Suspense fallback={<LoadingFallback />}>
            <Herosec />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Portfolio />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Webdental />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Resume />
          </Suspense>
          
          {/* <Services/> */}
          
          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>
          
          {/* <Testimonials /> */}
          {/* <Clientlogos/> */}
          {/* <Pricing/> */}
          
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </div>
      </div>
    </main>
  );
});

export default MainComponent;
