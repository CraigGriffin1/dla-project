import React from 'react';
import '../../App.css';



import MatchCards from "../../components/MatchCards";

import pestle from "../../img/pestleandmotar.png"




class MatchCardsActivity1 extends React.Component{

    render(){
        return(

            <MatchCards
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={3}
                matchPhrases={["https://k2l.bndry.co.uk/basicskills/img/words/spoon.png", "Add", "https://snipstock.com/assets/cdn/png/bf0b7e719c76e15b19c32dad8b47f2fc.png", "Crush"]}
                correctPairs={[["https://k2l.bndry.co.uk/basicskills/img/words/spoon.png", "add"], ["https://snipstock.com/assets/cdn/png/bf0b7e719c76e15b19c32dad8b47f2fc.png", "crush"]]}
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity1;
