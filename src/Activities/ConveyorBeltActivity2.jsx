import React from 'react';
import '../App.css';



import ConveyorBelt from "../components/ConveyorBelt";
import MatchPairs from "../components/MatchPairs";



class ConveyorBeltActivity1 extends React.Component{

    render(){
        return(

            <ConveyorBelt

                beltItems={["lemon", "eggs", "milk", "banana", "toothbrush", "comb", "pin", "carrot", "oilwell"]}
                correctItems={["lemon", "eggs", "milk", "banana"]}
                wordContainer={["", ",", "", ",", "", ",", ""]}
                pageSoundClip="https://k2l.bndry.co.uk/basicskills/audio/words/apple.m4a"
                image="true"
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default ConveyorBeltActivity1;
