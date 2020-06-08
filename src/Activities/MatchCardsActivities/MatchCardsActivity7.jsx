import React from 'react';
import '../../App.css';



import MatchCards from "../../components/MatchCards";
import MatchPairs from "../../components/MatchPairs";



class MatchCardsActivity7 extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <MatchCards
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={3}
                matchPhrases={["Spoonful", "Add", "Mortar and Pestle", "Crush"]}
                correctPairs={[["spoonful", "add"], ["mortar and pestle", "crush"]]}
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity7;
