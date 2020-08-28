import React from 'react';
import '../../App.css';


import CompleteTheParagraph from "../../components/CompleteTheParagraph";
import Mango2 from '../../soundclips/mango2.m4a'

import mangoImg from '../../img/mango_lemonade.png'


class CompleteParagraphActivity3 extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(

            <CompleteTheParagraph
                pageTitle="Mango Lemonade (2)"
                pageImage={mangoImg}
                pageSoundClip={Mango2}
                expectedValues={[["Peel", "cut", "blend", "Add", "blend"]]}
                labelValues={["Peel", "cut", "blend", "Add", "blend"]}
                paragraph="<<>> it, <<>> it into small pieces and <<>> it. <<>> the lemon juice and <<>> again."
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default CompleteParagraphActivity3;
