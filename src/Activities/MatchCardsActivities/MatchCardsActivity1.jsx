import React from 'react';
import '../../App.css';

import knifeImg from "../../img/knife.png"


import MatchCards from "../../components/MatchCards";



class MatchCardsActivity1 extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <MatchCards
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={3}
                matchPhrases={["https://k2l.bndry.co.uk/dla/img/recipe/knife.png","cut", "https://k2l.bndry.co.uk/dla/img/recipe/jug.png", "Pour", "https://k2l.bndry.co.uk/dla/img/recipe/peeler.png", "Peel"]}
                correctPairs={[["https://k2l.bndry.co.uk/dla/img/recipe/knife.png","cut"], ["https://k2l.bndry.co.uk/dla/img/recipe/jug.png","pour"],["https://k2l.bndry.co.uk/dla/img/recipe/peeler.png","peel"]] }
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity1;
