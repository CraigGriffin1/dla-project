import React from 'react';
import '../App.css';


import UnscrambleWord from "../components/UnscrambleWord";
import UnscrambleWordsActivity1 from "./UnscrambleWordsActivity1";
import MatchPairs from "../components/MatchPairs";


class UnscrambleWordsActivity2 extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <UnscrambleWord
                pageTitle="Unscramble The Words (2)"
                words={["mango", "lemon", "whipped cream"]}
                forwardArrow={this.props.forwardArrow}
                backArrow={this.props.backArrow}
            />

        );

    }

}

export default UnscrambleWordsActivity2;
