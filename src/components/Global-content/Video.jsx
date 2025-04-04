import React, { Component } from 'react';

export class Video extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.video !== prevProps.video) {
      this.videoRef.src = this.props.video;
    }
  }

  render() {
    return (
      <video
        className="body-overlay"
        muted
        playsinline
        autoPlay
        loop
        style={{ opacity: 0.1 }}
        ref={(ref) => (this.videoRef = ref)}
      >
        <source src={this.props.video} type="video/mp4" loading="lazy" />
      </video>
    );
  }
}

export default Video;
