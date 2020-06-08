import React from 'react';
import '../../App.css';



import MatchPairs from "../../components/MatchPairs";



class MatchPairsActivity2 extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <MatchPairs
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={2}
                matchPhrases={["Wooden Spoon", "Mix", "Cherries", "Decorate"]}
                correctPairs={[["wooden spoon","mix"], ["cherries","decorate"]]}
                forwardArrow={this.props.forwardArrow}
                backArrow={this.props.backArrow}

            />
        );
    }



}

export default MatchPairsActivity2;
