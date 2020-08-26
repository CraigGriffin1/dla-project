import React, {Component} from "react";
import Droppable from "./Droppable";
import Draggable from "./Draggable";
import AudioButton from "./AudioButton";


/**
 * WordSlot returns a slot for a Draggable word to go into.
 * Props:
 * Word -- The word that will slot into the gap
 * TriggerDrop -- The function will make the Draggable Object stick. //TODO Moves this function into this class
 */
class WordSlot extends Component {
    render() {
        return (
            <div className="droppableBox dd-word width-5em ">
                <Droppable
                    key={this.props.word}
                    targetKey={this.props.word}
                    name={this.props.word}
                    triggerDrop={this.props.triggerDrop}
                />
            </div>
        );
    }
}


/**
 * Complete the Paragraph
 * Creates a paragraph with gaps in the text with words at the bottom of the page which the user slots in to complete
 * it and make it readable.
 *
 * <properties>
 *      pageTitle      - The Title of the page
 *      pageImage      - The source of the image that should be shown on the page
 *      pageSoundClip  - The source of the sound clip that should be shown on the page
 *      labelValues    - The Values that will be displayed as labels at the bottom of the page for example:
 *                       {["Build", "Start", "Add", "Decorate", "Is"]}
 *      paragraph      - The block of text <<>> are used to represent where
 *
 */
class CompleteTheParagraph extends Component {
    constructor(props) {
        super(props);
        this.audio = this.props.pageSoundClip;
        this.droppablesExpected = this.props.expectedValues;
        this.labelsForDraggables = this.props.labelValues;
        this.labelsForDraggables = this.labelsForDraggables.sort(function () {
            return Math.random() - Math.random()
        });

        this.state = {
            counter: 0,
            correctCaption: false,
            incorrectCaption: false,
            complete:false,
        };

        this.droppables = this.droppablesExpected.map(
            (value, index) => {
                return value;
            }
        );
    }

    getArrayLength = () => {
        let count = 0;
        this.droppablesExpected.map((arr, i) => {
            arr.map((elem, j) => {
                count++;
            })
        });

        return count;
    }

    triggerDrop = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
            correctCaption: true
        }));
        setTimeout(
            function () {
                this.setState({correctCaption: false});
            }.bind(this),
            1500
        );
        if ((this.state.counter >= this.getArrayLength()) || (this.state.counter >= this.lengthOfDroppable)) {
            this.setState({complete:true})
        }
    };


    /**
     * A Paragraph will have <<>> which will be rendered in this method to show the correct gap from the
     * droppable words array.
     *
     * 1.1 - Split the paragraph up into individual words and store in array
     * 1.2 - set up variable i which will keep track of which word is being inserted it will be equal to zero to start
     * 2.1 - For each word in the array of individual words
     *     2.2 - If the word is equal to <<>> then
     *         2.3 - replace that index of the array with the draggable word object
     *         2.4 - i++
     * 3 - Return the recombined array
     *
     */
    insertWordsToGaps(){
        let wordsInParagraph = this.props.paragraph.split(" ");
        let droppableIndex = 0;

        for(let i=0; i< wordsInParagraph.length; i++ ){
            if(wordsInParagraph[i] === "<<>>"){
                wordsInParagraph[i] =  (
                    <WordSlot
                    word={this.droppables[0][droppableIndex]}
                    triggerDrop={this.triggerDrop}
                />);
                console.log( droppableIndex)
                droppableIndex += 1;
            }
            else{
                wordsInParagraph[i] = wordsInParagraph[i] + " ";

            }
        }

        console.log(wordsInParagraph)

        return wordsInParagraph;

    }


    render() {


        var draggables = this.labelsForDraggables.map(
            (label, index) => {
                return (
                    <div key={index} className="dragContainerWrapper ">
                        <div className="ddcontainer dd-word width-5em">
              <span className="ddcontainersource   width-5em">
                <Draggable key={label} targetKey={label} label={label}/>
              </span>
                        </div>
                    </div>
                );
            }
        );


        return (

            <React.Fragment>
                {this.state.correctCaption ? (
                    <div className="feedbackCaption correct animated bounceIn"/>
                ) : (
                    <React.Fragment/>
                )}
                {this.state.incorrectCaption ? (
                    <div className="feedbackCaption incorrect animated bounceIn"/>
                ) : (
                    <React.Fragment/>
                )}

                <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <section id="activityContent">
                            <div className="contentBox">
                                <div className="container-fluid dd-sentence size-md">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h3>{this.props.pageTitle}</h3>

                                            <img width="35%" height="50%" class="img-fluid"
                                                 src={this.props.pageImage}/>

                                            {this.audio ? (

                                                    <AudioButton
                                                        label={""}
                                                        audioSrc={this.audio}
                                                        styling={"button-audio button-lg mb-5"}
                                                    />

                                            ) : (
                                                <React.Fragment/>
                                            )}<hr />
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-12">
                                            <div className="paragraph">
                                                <br/>
                                                {this.insertWordsToGaps()}
                                            </div>
                                        </div>

                                    </div>


                                    <div className="row">
                                        <div className="col-12">
                                            <hr/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row no-gutters">
                                                <div className="col-12">
                                                    <div className="drag-source-box  ">{draggables}</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className="row no-gutters act-end-nav justify-content-center">


                                    <div className="col-auto order-3">
                                        {this.state.complete ?
                                            this.props.forwardArrow :       <button disabled className="navbtn next navbtn-disabled " aria-pressed="true"  ><span/>
                                            </button>}
                                    </div>

                                    <div className="col-auto order-1">
                                        {this.props.backArrow}
                                    </div>


                                </div>

                            </div>
                        </section>
                    </div>

                </div>
            </div>
            </React.Fragment>


        );
    }
}

export default CompleteTheParagraph;
