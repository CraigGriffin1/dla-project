import React from 'react';
import '../../App.css';
import cookies from '../../soundclips/cookies.m4a'



import ConveyorBelt from "../../components/ConveyorBelt";




class ConveyorBeltActivity1 extends React.Component{

    render() {
        return (

            <ConveyorBelt


                beltItems=
                    {["cookies", "sugar", "cheesecake", "cream cheese", "lemonade", "mango water", "lemon", "whipped cream", "eggs", "flour", "milk", "banana",]}
                correctItems={["cookies", "sugar", "cheesecake", "cream cheese", "lemonade", "mango water", "lemon", "whipped cream"]}
                wordContainer={["", ",", "", ",", "", ",", "", ",", "", ",", "", ",", "", ",", ""]}
                pageSoundClip={cookies}
                forwardArrow={this.props.forwardArrow}
                backArrow={this.props.backArrow}
            />
        );
    }
}

export default ConveyorBeltActivity1;
