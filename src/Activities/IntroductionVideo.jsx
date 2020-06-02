import React from 'react';
import '../App.css';
import Video from '../components/Video'




class IntroductionVideo extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <Video videoUrl="https://k2l.bndry.co.uk/basicskills/video/intro.mp4"
                   videoPoster="https://k2l.bndry.co.uk/basicskills/video/intro.jpg"
                   forwardArrow={this.props.forwardArrow}
            />

        );

    }

}

export default IntroductionVideo;
