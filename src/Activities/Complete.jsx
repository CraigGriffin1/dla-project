import React, {Component} from "react";


class Complete extends React.Component {


    render() {
        return (<div className="container-fluid">


            <div className="row">
                <div className="col-12">
                    <section id="activityContent">
                        <div className="contentBox">
                            <div className="container-fluid dd-sentence size-md">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h2>Well Done!</h2>

                                        <img src="https://lh3.googleusercontent.com/proxy/MSwp8xuW-VHrkfx7DIhtl8zh9VLpfbqYykq24BHOouv4NUzodkXLRDGWvGOZAanW--a1ee5p6ZKAebuwTROnv24JM8ud1Jc" />


                                            <hr/>



                                                {this.props.playAgain}





                                                {this.props.goBack}


                                                <button type="button" className="act-next attention bg-success btn-lg" onClick={() => window.location.href='https://www.klik2learn.com/'}>Return to
                                                    Digital Hub
                                                </button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
    }

    }

    export default Complete;
