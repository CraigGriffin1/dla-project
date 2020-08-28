import React from 'react';
import '../../App.css';



import MatchCards from "../../components/MatchCards";




class MatchCardsActivity2 extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <MatchCards
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={2}
                matchPhrases={["https://k2l.bndry.co.uk/dla/img/recipe/wooden-spoon.png", "Mix", "https://www.clipartmax.com/png/middle/29-293185_food-cherry-cherry-png.png", "Decorate"]}
                correctPairs={[["https://k2l.bndry.co.uk/dla/img/recipe/wooden-spoon.png","mix"], ["https://www.clipartmax.com/png/middle/29-293185_food-cherry-cherry-png.png","decorate"]]}
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity2;
