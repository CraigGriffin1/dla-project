import React from 'react';
import '../../App.css';



import CompleteTheParagraph from "../../components/CompleteTheParagraph";
import Mango1 from '../../soundclips/mango1.m4a'
import mangoImg from '../../img/mango_lemonade.png'




class CompleteParagraphActivity2 extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(

            <CompleteTheParagraph
                pageTitle="Mango Lemonade (1)"
                pageImage={mangoImg}
                pageSoundClip={Mango1}
                expectedValues={[["need", "Cut", "squeeze", "get", "take"]]}
                labelValues={["need", "Cut", "squeeze", "get", "take"]}
                paragraph="First you <<>> six lemons. <<>> them in half like this. Then <<>> the lemons to
                <<>> lemon juice. Now <<>> a mango."
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default CompleteParagraphActivity2;
