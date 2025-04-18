import React, { useState, useCallback, useMemo } from 'react';
import Video from './Global-content/Video';
import Pageloader from './Global-content/Pageloader';
import Rsidemenu from './Global-content/Rsidemenu';
import Scrollnav from './Global-content/Scrollnav';
import LSidebar from './Global-content/LSidebar';
import Settings from './Global-content/Settings';
import MainWrapper from './MainWrapper';

export default function Global() {
  const [currentVideo, setVideo] = useState('');

  // Use useCallback to prevent unnecessary re-renders of child components
  const changeVideo = useCallback((videos) => {
    setVideo(videos);
  }, []);

  // Memoize the main content components to prevent unnecessary re-renders
  const memoizedMainWrapper = useMemo(() => <MainWrapper />, []);
  const memoizedScrollnav = useMemo(() => <Scrollnav />, []);
  const memoizedLSidebar = useMemo(() => <LSidebar />, []);
  const memoizedRsidemenu = useMemo(() => <Rsidemenu />, []);
  
  return (
    <div>
      {/* <Video video={'./assets/images/video5.mp4'} /> */}
      {/* <Pageloader/> */}

      {/* Settings icon */}
      <Settings clickEvent={changeVideo} />

      {/* Left Side Bar and it will get executed on large devices*/}
      {memoizedLSidebar}

      {/*when user interacts with the hamburger menu it display the inner-components*/}
      {memoizedRsidemenu}

      {memoizedScrollnav}

      {/* heroSection, bout, testimoni  */}
      {memoizedMainWrapper}
    </div>
  );
}
