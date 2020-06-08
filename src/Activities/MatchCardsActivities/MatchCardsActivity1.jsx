import React from 'react';
import '../../App.css';



import MatchCards from "../../components/MatchCards";



class MatchCardsActivity1 extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <MatchCards
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={3}
                matchPhrases={["https://k2l.bndry.co.uk/basicskills/img/words/knife.png","cut", "https://www.pngitem.com/pimgs/m/373-3738978_red-jug-jug-clipart-png-transparent-png.png", "Pour", "https://www.clipartkey.com/mpngs/m/121-1215141_classic-swiss-peeler-peeler-swiss-made.png", "Peel"]}
                correctPairs={[["https://k2l.bndry.co.uk/basicskills/img/words/knife.png","cut"], ["https://www.pngitem.com/pimgs/m/373-3738978_red-jug-jug-clipart-png-transparent-png.png","pour"],["https://www.clipartkey.com/mpngs/m/121-1215141_classic-swiss-peeler-peeler-swiss-made.png","peel"]] }
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchCardsActivity1;
