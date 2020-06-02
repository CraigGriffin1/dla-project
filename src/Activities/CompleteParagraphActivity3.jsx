import React from 'react';
import '../App.css';



import CompleteTheParagraph from "../components/CompleteTheParagraph";
import ConveyorBelt from "../components/ConveyorBelt";



class CompleteParagraphActivity3 extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(

            <CompleteTheParagraph
                pageTitle="Mango Lemonade (2)"
                pageImage="https://createmindfully.com/wp-content/uploads/2019/01/mango-lemonade-close-up-500x500.jpg"
                pageSoundClip="https://k2l.bndry.co.uk/basicskills/audio/words/apple.m4a"
                expectedValues={[["Peel", "Cut", "Blend", "Add", "Blend"]]}
                labelValues={["Peel", "Cut", "Blend", "Add", "Blend"]}
                paragraph="<<>> it, <<>> it into small pieces and <<>> it. <<>> the lemon juice and <<>> again."
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default CompleteParagraphActivity3;
