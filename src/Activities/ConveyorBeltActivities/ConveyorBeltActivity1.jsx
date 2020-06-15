import React from 'react';
import '../../App.css';


import cookies from '../../soundclips/cookies.m4a'
import sugar from '../../soundclips/sugar.m4a'
import cheesecake from '../../soundclips/cheesecake.m4a'
import creamCheese from '../../soundclips/creamcheese.m4a'
import lemonade from '../../soundclips/lemonade.m4a'
import mangoWater from '../../soundclips/mangowater.m4a'
import lemon from '../../soundclips/lemon.m4a'
import whippedCream from '../../soundclips/whippedcream.m4a'

import cookiesPic from '../../img/cookies.png'



import ConveyorBelt from "../../components/ConveyorBelt";




class ConveyorBeltActivity1 extends React.Component{

    render() {
        return (

            <ConveyorBelt


                beltItems=
                    {["cookies", "sugar", "cheesecake", "cream cheese", "lemonade", "mango", "lemon", "whipped cream", "eggs", "flour", "milk", "banana",]}
                correctItems={["cookies", "sugar", "cheesecake", "cream cheese", "lemonade", "mango", "lemon", "whipped cream"]}
                wordContainer={["", ",", "", ",", "", ",", "", ",", "", ",", "", ",", "", ",", ""]}
                pageSoundClip = {cookies}
                cookies = {cookies}
                sugar = {sugar}
                cheesecake = {cheesecake}
                creamCheese ={creamCheese}
                lemonade = {lemonade}
                mangoWater={mangoWater}
                lemon= {lemon}
                whippedCream = {whippedCream}
                pageSoundClips={[{cookies}, {sugar}, {cheesecake}, {creamCheese}, {lemonade}, {mangoWater}, {lemon}, {whippedCream}]}
                forwardArrow={this.props.forwardArrow}
                backArrow={this.props.backArrow}
            />
        );
    }
}

export default ConveyorBeltActivity1;
