import React from 'react';
import '../../App.css';



import UnscrambleWord from "../../components/UnscrambleWord";



class UnscrambleWordsActivity1 extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (

            <UnscrambleWord
                pageTitle="Unscramble The Words (1)"
                words={["cheesecake", "cookies", "cream", "sugar"]}
                forwardArrow={this.props.forwardArrow}
                backArrow={this.props.backArrow}
            />
        );
    }
}

export default UnscrambleWordsActivity1;
