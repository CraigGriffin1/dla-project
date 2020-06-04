import React from 'react';
import '../App.css';



import MatchPairsWithPicture from "../components/MatchPairsWithPicture";



class MatchPairsActivity1 extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <MatchPairsWithPicture
                pageTitle="Kitchen Utensils and Actions"
                matchesRequired={3}
                matchPhrases={["img:knife", "Cut", "img:spoon", "scoop ", "img:kettle", "boil"]}
                correctPairs={[["knife","cut"], ["spoon","scoop"],["kettle","boil"]] }
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );

    }

}

export default MatchPairsActivity1;
