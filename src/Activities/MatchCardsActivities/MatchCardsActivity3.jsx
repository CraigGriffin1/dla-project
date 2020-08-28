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
                matchPhrases={["https://k2l.bndry.co.uk/dla/img/recipe/add.png", "Add", "https://k2l.bndry.co.uk/dla/img/recipe/pestleandmotar.png", "Crush"]}
                correctPairs={[["https://k2l.bndry.co.uk/dla/img/recipe/add.png", "add"], ["https://k2l.bndry.co.uk/dla/img/recipe/pestleandmotar.png", "crush"]]}
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity1;
