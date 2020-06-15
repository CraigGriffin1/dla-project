import React from 'react';
import '../App.css';
import Video from '../components/Video'




class IntroductionVideo extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <Video videoUrl="https://r1---sn-8pgbpohxqp5-h5oz.googlevideo.com/videoplayback?expire=1591818110&ei=HePgXozEPKPsxgLLpZ2oCw&ip=81.99.197.231&id=o-AMNMvdd5KIyyeOqIA6zxRd42fJMoEDWktV4xwIHssK4a&itag=22&source=youtube&requiressl=yes&mh=k6&mm=31%2C29&mn=sn-8pgbpohxqp5-h5oz%2Csn-aigzrn7e&ms=au%2Crdu&mv=m&mvi=0&pl=22&initcwndbps=2218750&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=46.068&lmt=1471794797340781&mt=1591796378&fvip=1&fexp=23882514&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhANNgqZi4Qo5dF00qg6mIg079AwldXXRB8NjzuuLPZZ5YAiBIWjPLoDvuQ28lM_6JLX_c1y4j4nPHgudpmfuY-C6uzQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgU9SfbE-9HyiGOkNBOqySihf7343JnMap8OMxWN2_XhcCIDg6vEZ1Z85yjODTG2xp2wOS9l2NHRy5GXEpDS3sISiQ"
                   videoPoster="https://k2l.bndry.co.uk/basicskills/video/intro.jpg"
                   forwardArrow={this.props.forwardArrow}
            />

        );

    }

}

export default IntroductionVideo;
