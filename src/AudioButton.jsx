import React, { Component } from "react";
//import "./Buttons.css";

class AudioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
    this.audio = new Audio(this.props.audioSrc);
    this.audio.load();
  }

  // togglePlay() {
  //   this.setState({ playing: !this.state.playing });
  //   if (this.state.playing) {
  //     this.audio.play();
  //   } else {
  //     this.audio.pause();
  //   }
  // }

  playAudio() {
    if (this.props.onClick) {
      this.props.onClick();
    }
    if (this.props.changeAttention) {
      this.props.changeAttention();
    }
    this.setState({ playing: true });
    
    var play_promise = this.audio.play();
    play_promise.then(()=> {
      console.log("playing");
    }).catch((reason)=> {
      console.log(reason);
      console.log("Audio source is missing/incompatible");
    })

    //this.audio.play();

  }

  pauseAudio() {
    this.setState({ playing: false });
    this.audio.pause();
  }

  // handleEnd() {
  //   this.setState({playing:false})
  // }

  componentWillUnmount() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  render() {
    
    return (
      <button
        type="button"
        className={this.props.attentionClass ? (this.props.styling + " attention") : (this.props.styling)}
        onClick={
          this.playAudio.bind(this)
        }
      >
        {this.props.label}
      </button>
    );
  }
}

export default AudioButton;
