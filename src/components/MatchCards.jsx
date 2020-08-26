import React, {Component} from 'react';
import MatchPairs from "./MatchPairs";

// Game Component - Cards facing down, click to flip. Find the pairs
// ==============================================
// note: Component view: G2
// note: Data sent via props
// note: Works with lower/upper case letters only

class MatchCards extends Component {
    constructor(props) {
        super(props);
        var matchPhrases = this.props.matchPhrases;
        var correctPairs = this.props.correctPairs;
        var matchesReq = this.props.matchesRequired;

        this.labels = matchPhrases.sort(function () {
            return Math.random() - Math.random()
        }); //randomize the letters

        this.state = {
            //value of the second most recently clicked card
            currSelection: '',
            //values that have been matched
            matches: [],
            counter: matchPhrases.length / 2,
            matchesCounter: 0,
            //true - the card is up, false the card is down; on initialization set all to false
            flipped: this.labels.map(() => {
                return false
            }),
            //flag to make sure user doesn't open cards while cards are returning to unflipped state
            disabled: false,
            //flag to indicate if the 2 turned cards are matching
            correctCaption: false,
            matchesNeeded: matchesReq,
            complete: false,
        };

    }

    handleClick = (evt) => {
        //get inner text of the chosen card

        console.log(evt.currentTarget.innerHTML)




        var text="";

        if (evt.currentTarget.innerHTML.includes("<img")) {
            var elem= document.createElement("div");
            elem.innerHTML = evt.currentTarget.innerHTML;

            var images = elem.getElementsByTagName("img");
            for(var i=0; i < images.length; i++){
                text += (images[i].src);
            }
        } else {
            text = evt.currentTarget.innerHTML.substring(10).slice(94,-10);

        }

        console.log(text);






        //remove unwanted symbols like spaces and turn the text to lowercase
        var textTrimmed = text.toLowerCase().trim();
        //get the text of the card clicked before the current one, trim spaces and turn lowercase
        var currSelectionTrimmed = this.state.currSelection.toLowerCase().trim();

        //if the card clicked is already turned up or in a match, do nothing
        if (this.state.matches.includes(textTrimmed) || this.state.matches.includes(currSelectionTrimmed)
            || this.state.currSelection === text || this.state.disabled)
            return;

        //if a match is found
        if (arrayAlreadyHasArray(this.props.correctPairs, [textTrimmed, currSelectionTrimmed]) ||
            arrayAlreadyHasArray(this.props.correctPairs, [currSelectionTrimmed, textTrimmed])) {//a correct match was found


            console.log(this.state.matchesCounter, this.props.correctPairs.length)
            if (this.state.matchesCounter === this.props.correctPairs.length - 1) {
                this.setState({complete: true})
            }

            this.setState(state => {
                //add a single entry for both letters in the matches array, this is ok here since we are dealing with single letters
                const matches = state.matches.concat([text.toLowerCase().trim()]);
                //inclement the number of matches found
                const counter = state.counter - 1;
                const matchesNeeded = state.matchesNeeded;
                const matchesCounter = state.matchesCounter + 1;
                //make the cards stay flipped till the end of tha game
                state.flipped[this.labels.indexOf(text)] = true;
                //if the number of needed matches is reached, call completeAction to allow user to progress
                this.setState({
                    correctCaption: true,

                })
                setTimeout(function () {
                    this.setState({correctCaption: false})
                }.bind(this), 750);
                //return the updated arrays and clean the selectors for most recent and second most recent
                return {matches, currSelection: "", counter, flipped: state.flipped, matchesCounter};
            });


        }
        //if the second most recent card value is empty, set it's value to the most recent card
        else if (this.state.currSelection == "") {
            this.setState(state => {
                state.flipped[this.labels.indexOf(text)] = true;
                return {currSelection: text, flipped: state.flipped};
            });
        }
        //if a match is not found, reset the values for most recent and second most recent
        else {
            var oldSelection = this.state.currSelection;
            this.setState(state => {
                state.flipped[this.labels.indexOf(text)] = true;
                return {currSelection: "", flipped: state.flipped, disabled: true};
            });

            this.setState({
                incorrectCaption: true
            })
            setTimeout(function () {
                this.setState({incorrectCaption: false})
            }.bind(this), 1000);

            //unflip both cards after 1 sec
            setTimeout(function () {
                this.setState(state => {
                    state.flipped[this.labels.indexOf(text)] = false;
                    state.flipped[this.labels.indexOf(oldSelection)] = false;
                    return {currSelection: "", flipped: state.flipped, disabled: false};
                });
            }.bind(this), 1000);
        }
    };

    render() {
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

                                            <div className="game-container memory">
                    <span className="avoid-wrap">
                        { //if all matches are found, show the green bubble



                        }
                        { //for each letter create a card and pass on if it should be flipped or not

                            this.labels.map((text) => <MatchElem key={text}
                                                                 flipped={(this.state.flipped[this.labels.indexOf(text)])}
                                                                 onClick={this.handleClick}
                                                                 text={text}
                                                                 img={<img width="100%" src={text} />}/>)

                        }
                    </span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="row no-gutters act-end-nav justify-content-center">


                                    <div className="col-auto order-3">

                                        {this.state.complete ?
                                            this.props.forwardArrow :
                                            <button disabled className="navbtn next navbtn-disabled "
                                                    aria-pressed="true"><span/>
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
            </div> </React.Fragment>

        );
    }
}

//renders the actual card ad applies the animation of flipping
function MatchElem(props) {
    console.log(props.text)
    return (
        <div className="card-wrapper contents size-xs">
            <div className={props.flipped ? "flip-card applyFlip" : 'flip-card'}>
                <div className="contents" onClick={props.onClick}>
                    <div className="cardFront memory-card1 memory-open size-xs"/>
                    {props.text.endsWith(".png") ? <div className="cardBack contents size-xs"><img width="95%" src={props.text} /></div>:
                        <div className="cardBack contents size-xs"><p>{props.text}</p></div>}


                </div>

            </div>
        </div>
    );
}

export default MatchCards;

function arrayAlreadyHasArray(arr, subarr) {
    for (var i = 0; i < arr.length; i++) {
        let checker = false
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === subarr[j]) {
                checker = true
            } else {
                checker = false
                break;
            }
        }
        if (checker) {
            return true
        }
    }
    return false
}
