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

                                        <p>You have successfully managed to complete this set of challenges
                                            <hr/>
                                        </p>
                                            <p>

                                                {this.props.playAgain}

                                            </p>
                                            <p>
                                                {this.props.goBack}
                                            </p>
                                            <p>
                                                <button type="button" className="act-next attention bg-success btn-lg" onClick={() => window.location.href='https://www.klik2learn.com/'}>Return to
                                                    Digital Hub
                                                </button>
                                            </p>
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
