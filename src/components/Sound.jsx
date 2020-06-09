import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class MyComponentWithSound extends React.Component {
  constructor(props) {
    super(props);
    this.state= {playing: false, url: ""};
  }

  end = () => {
    this.setState({playing: false});
  }

  start = () => {
    this.setState({playing: true});
  }

  render() {
    return <ReactAudioPlayer src={this.props.url} autoPlay={true} onPlay={this.start} onEnded={this.end}/>; // Check props in next section
  }

}

export default MyComponentWithSound;