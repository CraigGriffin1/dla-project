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

                                        <img src="https://files.schudio.com/gillibrand/images/blog/great-effort-well-done-stickers-2155-p.png" />


                                            <hr/>



                                                {this.props.playAgain}





                                                {this.props.goBack}


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
