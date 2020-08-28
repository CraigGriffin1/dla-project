import React from 'react';
import '../../App.css';


import CompleteTheParagraph from "../../components/CompleteTheParagraph";
import mango3 from '../../soundclips/mango3.m4a'
import mangoImg from '../../img/mango_lemonade.png'
class CompleteParagraphActivity4 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <CompleteTheParagraph
                pageTitle="Mango Lemonade (3)"
                pageImage={mangoImg}
                pageSoundClip={mango3}
                expectedValues={[["Boil", "melts", "pour", "shake", "enjoy"]]}
                labelValues={["Boil", "melts", "pour", "shake", "enjoy"]}
                paragraph="<<>> the water so the sugar <<>> . Now <<>> the lemon and mango juice and water into a bottle and <<>> it.
                That's the mango lemonade ready! Now <<>> your drink."
                forwardArrow={this.props.forwardArrow}
                backArrow={this.props.backArrow}
            />
        );

    }


}

export default CompleteParagraphActivity4;
