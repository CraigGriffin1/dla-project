import React from 'react';
import '../App.css';


import MatchPairs from "../components/MatchPairs";


class MatchPairsActivity1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <MatchPairs
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={2}
                matchPhrases={["Food Processor", "Blend", "Lemon Juicer", "Squeeze"]}
                correctPairs={[["food processor", "blend"], ["lemon juicer", "squeeze"]]}
                forwardArrow={this.props.forwardArrow}
                backArrow={this.props.backArrow}

            />
        );
    }
}

export default MatchPairsActivity1;
