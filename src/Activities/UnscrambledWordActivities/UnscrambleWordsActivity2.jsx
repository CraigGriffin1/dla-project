import React from 'react';
import '../../App.css';


import UnscrambleWord from "../../components/UnscrambleWord";



class UnscrambleWordsActivity2 extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <UnscrambleWord
                pageTitle="Type the Word"
                words={["mango", "lemon", "whipped cream"]}
                forwardArrow={this.props.forwardArrow}
                backArrow={this.props.backArrow}
            />

        );

    }

}

export default UnscrambleWordsActivity2;
