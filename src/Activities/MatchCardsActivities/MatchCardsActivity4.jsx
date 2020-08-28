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
                matchPhrases={["https://k2l.bndry.co.uk/dla/img/recipe/blender.png", "Blend", "https://k2l.bndry.co.uk/dla/img/recipe/squeezer.png", "Squeeze"]}
                correctPairs={[["https://k2l.bndry.co.uk/dla/img/recipe/blender.png", "blend"], ["https://k2l.bndry.co.uk/dla/img/recipe/squeezer.png", "squeeze"]]}
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity1;
