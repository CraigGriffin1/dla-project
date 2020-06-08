import React from 'react';
import '../../App.css';



import MatchCards from "../../components/MatchCards";
import MatchPairs from "../../components/MatchPairs";



class MatchCardsActivity1 extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <MatchCards
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={3}
                matchPhrases={["https://k2l.bndry.co.uk/basicskills/img/words/spoon.png", "Add", "https://www.iconspng.com/uploads/marlbe-pestle-and-mortar.png", "Crush"]}
                correctPairs={[["https://k2l.bndry.co.uk/basicskills/img/words/spoon.png", "add"], ["https://www.iconspng.com/uploads/marlbe-pestle-and-mortar.png", "crush"]]}
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity1;
