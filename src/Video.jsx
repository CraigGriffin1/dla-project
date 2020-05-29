import React, {Component} from "react";
// import PropTypes from "prop-types";
import ReactPlayer from "react-player";

/* Video Component - Conditional rendering dependant on the props passed to the component
 ==============================================
 note: Component view: R4
*/

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleStart() {
        //Started video
    }

    allowSkip() {
        //Skip Allowed
    }

    handleProgress(data) {
        //REDIRECT TO HOME FOR INTRO VIDEO
        if (data.played === 1 && this.props.completeAction)
            this.props.completeAction();

        if (data.played == 1 && this.props.intro) this.props.redirect();

        if (data.played >= 0.9) {
            return this.allowSkip();
        }
    }

    playVideo() {
        this.refs.vidRef.play();
    }

    render() {

        const playerStyle = {cursor: "pointer"};

        if (this.props.handleStart == null || this.props.handleStart == undefined) {
            if (this.props.thumbnailPlay) {
                return (
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <section id="activityContent">
                                    <div className="contentBox">
                                        <div className="container-fluid dd-sentence size-md">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <video
                                                        ref="vidRef"
                                                        style={playerStyle}
                                                        preoad="auto"
                                                        poster={this.props.videoPoster}
                                                        webkit-playsinline=""
                                                        playsInline=""
                                                        onClick={this.playVideo.bind(this)}
                                                    >
                                                        <source src={this.props.videoUrl}/>
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <section id="activityContent">
                                    <div className="contentBox">
                                        <div className="container-fluid dd-sentence size-md">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <ReactPlayer
                                                        url={this.props.videoUrl}
                                                        style={playerStyle}
                                                        width="100%"
                                                        height="100%"
                                                        config={{
                                                            file: {
                                                                attributes: {
                                                                    poster: this.props.videoPoster
                                                                }
                                                            }
                                                        }}
                                                        playsinline={true}
                                                        playing={this.props.playing}
                                                        controls={true}
                                                        onProgress={this.handleProgress.bind(this)}
                                                    /></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                );
            }
        } else {
            if (this.props.thumbnailPlay) {
                return (
                    <div style={{width: "100%", height: "100%"}}>
                        <video
                            ref="vidRef"
                            style={playerStyle}
                            preoad="auto"
                            poster={this.props.videoPoster}
                            webkit-playsinline=""
                            playsInline=""
                            onClick={this.playVideo.bind(this)}
                            onPlay={() => this.props.handleStart(this.props.id)}
                        >
                            <source src={this.props.videoUrl}/>
                        </video>
                    </div>
                );
            } else {
                return (
                    <ReactPlayer
                        url={this.props.videoUrl}
                        style={playerStyle}
                        width="100%"
                        height="100%"
                        config={{
                            file: {
                                attributes: {
                                    poster: this.props.videoPoster
                                }
                            }
                        }}
                        playing={false}
                        controls={true}
                        onStart={() => this.props.handleStart(this.props.id)}
                        onProgress={this.handleProgress.bind(this)}
                    />
                );
            }
        }
    }
}

export default Video;
