import React, {Component} from "react";


class unscrambleWord extends Component {
    render() {
        return (

            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <section id="activityContent">
                            <div className="contentBox">
                                <div className="container-fluid dd-sentence size-md">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h3>{this.props.pageTitle}</h3>
                                            <img width="50%" height="50%" class="img-fluid"
                                                 src={this.props.pageImage}/>

                                            cheesecake
                                            cookies
                                            sugar
                                            cream
                                            mango
                                            lemon
                                            whipped cream

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>);
    }

}


export default unscrambleWord;
