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
                matchPhrases={["https://toppng.com/uploads/preview/calphalon-wooden-spoon-wooden-spoon-transparent-115633452264rso3675u6.png", "Mix", "https://www.clipartmax.com/png/middle/29-293185_food-cherry-cherry-png.png", "Decorate"]}
                correctPairs={[["https://toppng.com/uploads/preview/calphalon-wooden-spoon-wooden-spoon-transparent-115633452264rso3675u6.png","mix"], ["https://www.clipartmax.com/png/middle/29-293185_food-cherry-cherry-png.png","decorate"]]}
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity2;
