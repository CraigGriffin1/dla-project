import React from 'react';
import '../../App.css';



import MatchCards from "../../components/MatchCards";




class MatchCardsActivity2 extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <MatchCards
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={2}
                matchPhrases={["http://clipart-library.com/image_gallery/n893303.png", "Mix", "http://clipart-library.com/image_gallery/215573.png", "Decorate"]}
                correctPairs={[["http://clipart-library.com/image_gallery/n893303.png","mix"], ["http://clipart-library.com/image_gallery/215573.png","decorate"]]}
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity2;
