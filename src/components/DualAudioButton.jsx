import React, { Component } from "react";
//import "./Buttons.css";

class AudioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  playAudio() {
    this.setState({ playing: true });
    this.audio.load();
    this.audio.play();
    this.setState({ playing: false });
  }

  // handleEnd() {
  //   this.setState({playing:false})
  // }

  render() {
    this.audio = new Audio(this.props.audioSrc);
    return (
      <button
        type="button"
        className={this.props.buttonStyle}
        onClick={this.playAudio.bind(this)}
      >
      </button>
    );
  }
}

export default AudioButton;
