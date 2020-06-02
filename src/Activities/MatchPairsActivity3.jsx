import React from 'react';
import '../App.css';


import MatchPairs from "../components/MatchPairs";


class MatchPairsActivity3 extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <MatchPairs
                matchesRequired={2}
                matchPhrases={["Spoonful", "Add", "Mortar and Pestle", "Crush"]}
                correctPairs={[["spoonful", "add"], ["mortar and pestle", "crush"]]}
                forwardArrow={this.props.forwardArrow}
                backArrow={this.props.backArrow}


            />
        );
    }

}

export default MatchPairsActivity3;
