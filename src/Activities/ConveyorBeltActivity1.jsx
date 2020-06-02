import React from 'react';
import '../App.css';



import ConveyorBelt from "../components/ConveyorBelt";




class ConveyorBeltActivity1 extends React.Component{

    render() {
        return (

            <ConveyorBelt


                beltItems=
                    {["cookies", "sugar", "cheesecake", "cream cheese", "lemonade", "mango water", "lemon", "whipped cream", "eggs", "flour", "milk", "banana",]}
                correctItems={["cookies", "sugar", "cheesecake", "cream cheese", "lemonade", "mango water", "lemon", "whipped cream"]}
                wordContainer={["", ",", "", ",", "", ",", "", ",", "", ",", "", ",", "", ",", ""]}
                pageSoundClip="https://k2l.bndry.co.uk/basicskills/audio/words/apple.m4a"
                forwardArrow={this.props.forwardArrow}
                backArrow={this.props.backArrow}
            />
        );
    }
}

export default ConveyorBeltActivity1;
