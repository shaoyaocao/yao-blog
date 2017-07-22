import React, { Component } from 'react';
import videojs from 'video.js'
// import vjsEpisodeList from './vjsEpisodeList'

class VideoPlayer extends Component {
  componentDidMount() {
      // instantiate video.js
      this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
        console.log('onPlayerReady', this)
      });
      // this.player.getChild('controlBar').addChild('vjsEpisodeList', {});
    }
    componentWillReceiveProps(nextProps) {
      if(nextProps !==this.props){
        console.log(nextProps.sources[0].src)
        this.player.src({type: nextProps.sources[0].type, src: nextProps.sources[0].src});
      }
    }
    // destroy player on unmount
    componentWillUnmount() {
      if (this.player) {
        this.player.dispose()
      }
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
      return (
        <div data-vjs-player style={typeof this.props.style!=="undefined"?this.props.style:null}>
          <video ref={ node => this.videoNode = node } className="video-js"></video>
        </div>
      )
    }
}

export default VideoPlayer;
