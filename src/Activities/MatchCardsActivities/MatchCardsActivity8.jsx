import React from 'react';
import '../../App.css';



import MatchCards from "../../components/MatchCards";
import MatchPairs from "../../components/MatchPairs";



class MatchCardsActivity8 extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <MatchCards
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={3}
                matchPhrases={["Food Processor", "Blend", "Lemon Juicer", "Squeeze"]}
                correctPairs={[["food processor", "blend"], ["lemon juicer", "squeeze"]]}
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity8;
