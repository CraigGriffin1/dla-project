import React from 'react';
import '../../App.css';



import ConveyorBelt from "../../components/ConveyorBelt";

import cookiesVoice from '../../soundclips/cookies.m4a'
import sugarVoice from '../../soundclips/sugar.m4a'
import cheesecakeVoice from '../../soundclips/cheesecake.m4a'
import creamCheeseVoice from '../../soundclips/creamcheese.m4a'
import lemonadeVoice from '../../soundclips/lemonade.m4a'
import mangoWaterVoice from '../../soundclips/mangowater.m4a'
import lemonVoice from '../../soundclips/lemon.m4a'
import whippedCreamVoice from '../../soundclips/whippedcream.m4a'

import cookiesPic from '../../img/cookies.png'
import sugarPic from '../../img/sugar.png'
import cheesecakePic from '../../img/cheesecake.png'
import creamCheesePic from '../../img/creamcheese.png'
import lemonadePic from '../../img/lemonade.png'
import mangoWaterPic from '../../img/mangowater.png'
import lemonPic from '../../img/lemon.png'
import whippedCreamPic from '../../img/whippedcream.png'
import eggsPic from '../../img/eggs.png'
import flourPic from '../../img/flour.png'
import milkPic from '../../img/milk.png'
import bananaPic from '../../img/banana.png'



class ConveyorBeltActivity1 extends React.Component{

    render(){
        return(

            <ConveyorBelt


                beltItems=
                    {["cookies", "sugar", "cheesecake", "cream cheese", "lemonade", "mango water", "lemon", "whipped cream", "eggs", "flour", "milk", "banana",]}
                beltImages={[{name : cookiesPic}, {name :sugarPic}, {name :cheesecakePic}, {name :creamCheesePic}, {name :lemonadePic}, {name :mangoWaterPic}, {name :lemonPic}, {name :whippedCreamPic}, {name :eggsPic}, {name :flourPic}, {name :milkPic}, {name :bananaPic}]}
                correctItems={["cookies", "sugar", "cheesecake", "cream cheese", "lemonade", "mango water", "lemon", "whipped cream"]}
                wordContainer={["", ",", "", ",", "", ",", "", ",", "", ",", "", ",", "", ",", ""]}
                pageSoundClip = {cookiesVoice}
                cookies = {cookiesVoice}
                sugar = {sugarVoice}
                cheesecake = {cheesecakeVoice}
                creamCheese ={creamCheeseVoice}
                lemonade = {lemonadeVoice}
                mangoWater={mangoWaterVoice}
                lemon= {lemonVoice}
                whippedCream = {whippedCreamVoice}
                image ={true}
                forwardArrow={this.props.forwardArrow}
                backArrow={this.props.backArrow}
            />
        );

    }

}

export default ConveyorBeltActivity1;
