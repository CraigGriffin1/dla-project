import React from 'react';
import '../App.css';



import MatchPairs from "../components/MatchPairs";



class MatchPairsActivity1 extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <MatchPairs
                matchesRequired={3}
                matchPhrases={["Knife", "Cut", "Jug", "Pour", "Peeler", "Peel"]}
                correctPairs={[["knife","cut"], ["jug","pour"],["peeler","peel"]] }
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchPairsActivity1;
