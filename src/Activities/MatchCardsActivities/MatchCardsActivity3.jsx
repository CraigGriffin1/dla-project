import React from 'react';
import '../../App.css';



import MatchCards from "../../components/MatchCards";

import pestle from "../../img/pestleandmotar.png"




class MatchCardsActivity1 extends React.Component{

    render(){
        return(

            <MatchCards
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={3}
                matchPhrases={["https://k2l.bndry.co.uk/basicskills/img/words/spoon.png", "Add", "https://github.com/CraigGriffin1/dla-project/blob/master/src/img/mango_lemonade.jpg", "Crush"]}
                correctPairs={[["https://k2l.bndry.co.uk/basicskills/img/words/spoon.png", "add"], ["https://github.com/CraigGriffin1/dla-project/blob/master/src/img/mango_lemonade.jpg", "crush"]]}
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity1;
