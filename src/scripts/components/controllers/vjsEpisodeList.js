import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import videojs from 'video.js';

class EpisodeList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.body}</h1>
      </div>
    );
  }
}

class vjsEpisodeList extends Component {

  constructor(player, options) {
     super(player, options);

     /* Bind the current class context to the mount method */
     this.mount = this.mount.bind(this);

     /* When player is ready, call method to mount React component */
     player.ready(() => {
       this.mount();
     });
   }
   /**
    * We will render out the React EpisodeList component into the DOM element
    * generated automatically by the VideoJS createEl() method.
    *
    * We fetch that generated element using `this.el()`, a method provided by the
    * vjsComponent class that this class is extending.
    */
   mount() {
     ReactDOM.render(<EpisodeList vjsComponent={this} body="Episodes" />, this.el() );
   }

}

vjsComponent.registerComponent('vjsEpisodeList', vjsEpisodeList);
export default vjsEpisodeList;
