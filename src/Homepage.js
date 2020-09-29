import React, { Component } from "react";
// import SpotifyPlayer from "react-spotify-player";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage__header">
          <h1 className="mb-5">Fouad Chamma</h1>
          <p>Front-end developer,</p>
          <p>Problem solver,</p>
          <p>Passionate about tech.</p>
        </div>
      </div>
    );
  }
}

// <SpotifyPlayer
//   uri="spotify:playlist:1vxZKx5B0WN0CoEp3YDVff"
//   view="list"
//   theme="black"
//   autoplay="true"
// />
export default Homepage;
