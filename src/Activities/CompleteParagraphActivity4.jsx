import React from 'react';
import '../App.css';


import CompleteTheParagraph from "../components/CompleteTheParagraph";
import ConveyorBelt from "../components/ConveyorBelt";


class CompleteParagraphActivity4 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <CompleteTheParagraph
                pageTitle="Mango Lemonade (3)"
                pageImage="https://assets.myfoodandfamily.com/adaptivemedia/rendition/100652615_1500x1000.jpg?id=f7f87da633e7066c567b1e4f59c4eccc2858ebb3&ht=650&wd=1004"
                pageSoundClip="https://k2l.bndry.co.uk/basicskills/audio/words/apple.m4a"
                expectedValues={[["Boil", "Melts", "Pour", "Shake", "Enjoy"]]}
                labelValues={["Boil", "Melts", "Pour", "Shake", "Enjoy"]}
                paragraph="<<>> the water so the sugar <<>> . Now <<>> the lemon and mango juice and water into a bottle and <<>> it.
                That's the mango lemonade ready! Now <<>> your drink."
                forwardArrow={this.props.forwardArrow}
                backArrow={this.props.backArrow}
            />
        );

    }


}

export default CompleteParagraphActivity4;
