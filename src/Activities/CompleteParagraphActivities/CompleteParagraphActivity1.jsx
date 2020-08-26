import React from 'react';
import '../../App.css';



import CompleteTheParagraph from "../../components/CompleteTheParagraph";
import oreoCheesecake from '../../soundclips/oreocheesecake.m4a'




class CompleteParagraphActivity1 extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(

            <CompleteTheParagraph
                pageTitle="Oreo Cheesecake"
                pageImage="https://live.staticflickr.com/5563/14835710576_a5f0a50354_b.jpg"
                pageSoundClip={oreoCheesecake}
                expectedValues={[["build", "Start", "Add", "Decorate", "is"]]}
                labelValues={["build", "Start", "Add", "Decorate", "is"]}
                paragraph="Now to <<>> the cake. <<>> with big Oreo pieces at the bottom. <<>> the cream mix on top.
                <<>> with some more big pieces of Oreo and that's it. Your Oreo cheesecake <<>> ready."
                forwardArrow = {this.props.forwardArrow}
                backArrow = {this.props.backArrow}
            />
        );


}


}

export default CompleteParagraphActivity1;
