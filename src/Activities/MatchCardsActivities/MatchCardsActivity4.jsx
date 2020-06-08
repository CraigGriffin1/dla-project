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
                matchPhrases={["https://i.ya-webdesign.com/images/blender-clipart-food-blender-14.png", "Blend", "https://img2.pngio.com/cooking-juice-juicer-lemon-squeezer-1352711-png-images-pngio-lemon-juice-squeezer-png-512_512.png", "Squeeze"]}
                correctPairs={[["https://i.ya-webdesign.com/images/blender-clipart-food-blender-14.png", "blend"], ["https://img2.pngio.com/cooking-juice-juicer-lemon-squeezer-1352711-png-images-pngio-lemon-juice-squeezer-png-512_512.png", "squeeze"]]}
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity1;
