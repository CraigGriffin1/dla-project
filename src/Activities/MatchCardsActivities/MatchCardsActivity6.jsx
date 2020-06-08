import React from 'react';
import '../../App.css';



import MatchCards from "../../components/MatchCards";
import MatchPairs from "../../components/MatchPairs";



class MatchCardsActivity6 extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <MatchCards
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={3}
                matchPhrases={["Wooden Spoon", "Mix", "Cherries", "Decorate"]}
                correctPairs={[["wooden spoon","mix"], ["cherries","decorate"]]}
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity6;
