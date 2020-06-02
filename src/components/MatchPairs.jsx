import React, {Component} from 'react';

/* Revision Component - Shown are pairs of containers and bellow them a container with letters (lower & upper case),
 user must click on letters one after the other to make matching pairs.
 ==============================================
 note: Component view: R4


       "matchesRequired": 1,
            "matchPhrases": ["H", "L", "E", "h"]
*/


class MatchPairs extends Component {
    constructor(props) {
        super(props);
        var matchPhrases = this.props.matchPhrases;
        this.matchesReq = this.props.matchesRequired;
        this.labels = matchPhrases.sort(function () {
            return Math.random() - Math.random()
        });

        var fieldValues = [];
        for (let i = 0; i < this.matchesReq; i++) {
            fieldValues.push(["", ""]);
        }

        this.state = {
            currSelection: '',
            matches: [],
            counter: matchPhrases.length / 2,
            matchesCounter: 0,
            clicked: this.labels.map(() => {
                return false
            }),
            disabled: false,
            correctCaption: false,
            matchesNeeded: this.matchesReq, //the required number of matches that is needed for completing the page
            fieldValues: fieldValues,
            attention: true
        };

        // this.props.hidePrev();
    }


    changeAttention = () => {
        this.setState({attention: false});
    }

    disableAllButtons = () => {
        this.setState({disabledClass: true})
    }

    handleClick = (e) => {

        var text = e.currentTarget.innerHTML;
        var textTrimmed = text.toLowerCase().trim();
        var currSelectionTrimmed = this.state.currSelection.toLowerCase().trim(); //trimming and transforming the current selection to lower case

        console.log([textTrimmed, currSelectionTrimmed]);
        console.log(this.props.correctPairs);

        // disable the clicked for already clicked label
        if (this.state.matches.includes(textTrimmed) || this.state.matches.includes(currSelectionTrimmed)
            || this.state.currSelection === text || this.state.disabled) {
            console.log("clicks disabled");
            return;
        }


        if (arrayAlreadyHasArray(this.props.correctPairs, [textTrimmed, currSelectionTrimmed]) ||
            arrayAlreadyHasArray(this.props.correctPairs, [currSelectionTrimmed, textTrimmed])) { //a correct match was found
            this.setState(state => {
                const matches = state.matches.concat([text.toLowerCase().trim()]);
                const counter = state.counter - 1;
                const matchesNeeded = state.matchesNeeded;
                const matchesCounter = state.matchesCounter + 1;
                state.clicked[this.labels.indexOf(text)] = true; // disable the clicked pair of labels that were matched
                if (counter <= 0 || matchesCounter == matchesNeeded) { // all required matches are found
                    // this.props.completeAction();
                    this.changeAttention();
                    this.disableAllButtons();
                }

                this.setState({
                    correctCaption: true
                })
                setTimeout(function () {
                    this.setState({correctCaption: false})
                }.bind(this), 2000);

                var fieldValues = this.state.fieldValues;
                fieldValues[this.state.matchesCounter][1] = text;

                return {
                    matches,
                    currSelection: "",
                    counter,
                    clicked: state.clicked,
                    matchesCounter,
                    fieldValues: fieldValues
                };
            });

        } else if (this.state.currSelection == "") { // the first label from a pair was selected
            var fieldValues = this.state.fieldValues;

            if (this.state.matchesCounter >= fieldValues.length) {
                return;
            }
            fieldValues[this.state.matchesCounter][0] = text;

            this.setState(state => {
                state.clicked[this.labels.indexOf(text)] = true; // disable the clicked label
                return {currSelection: text, clicked: state.clicked, fieldValues: fieldValues}
            });
        } else { // the match was incorrect
            var oldSelection = this.state.currSelection;
            this.setState(state => {
                state.clicked[this.labels.indexOf(text)] = true; // disable the second label clicked (that didn't match the  first one)
                return {currSelection: "", clicked: state.clicked, disabled: true};
            });

            this.setState({
                incorrectCaption: true
            })
            setTimeout(function () {
                this.setState({incorrectCaption: false})
            }.bind(this), 1000);

            var fieldValues = this.state.fieldValues;
            fieldValues[this.state.matchesCounter][0] = "";

            setTimeout(function () {
                this.setState(state => {
                    state.clicked[this.labels.indexOf(text)] = false; // enable the second label clicked
                    state.clicked[this.labels.indexOf(oldSelection)] = false; // enable the second label clicked
                    return {currSelection: "", clicked: state.clicked, disabled: false, fieldValues: fieldValues};
                });
            }.bind(this), 1000);
        }
    };

    // Function for generating the pair empty boxes
    createBoxes = () => {
        let boxesArray = [];
        let targetBoxes = [];
        var positionOne = '';
        var positionTwo = '';

        for (let i = 1; i <= this.matchesReq; i++) {
            targetBoxes.push([positionOne, positionTwo]);
        }

        for (let i = 0; i < this.state.fieldValues.length; i++) {
            boxesArray.push(<MatchFields key={i} selectionOne={this.state.fieldValues[i][0]}
                                         selectionTwo={this.state.fieldValues[i][1]}/>)
        }

        return boxesArray;
    }


    render() {

        var buttonStyle = "button-lg one-char";
        if (this.state.disabledClass) {
            buttonStyle = buttonStyle + " no-click";
        }

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

                                                <h3>Kitchen Utensils and Actions</h3>
                                                <p>Match The Object to the verb</p>
                                                <hr/>

                                                <div className="matching-pairs size-md">

                                                    {this.createBoxes()}

                                                    <div className="answer-buttons text-center">
                                                        <hr/>
                                                        {this.labels.map((item, i) => (
                                                            <button key={i}
                                                                    className={(this.state.clicked[this.labels.indexOf(item)]) ? (buttonStyle + " no-click") : (this.state.attention ? (buttonStyle + " attention") : (this.state.disabledClass ? (buttonStyle + " no-click") : (buttonStyle)))}
                                                                    onClick={this.handleClick}>{item}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <br/> <br/>


                                    <div className="row no-gutters act-end-nav justify-content-end">


                                        <div className="col-12 col-sm-auto order-sm-3 ">
                                            {this.props.forwardArrow}
                                        </div>

                                        <div className="col-12 col-sm-auto order-sm-1">
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

function MatchFields(props) {

    return (
        <div className="dd-word-group linked">
            <div
                className={props.selectionOne === "" ? "dragNeighbour" : "dragNeighbour filled"}>{props.selectionOne}</div>
            <div className="link"></div>
            <div
                className={props.selectionTwo === "" ? "dragNeighbour" : "dragNeighbour filled"}>{props.selectionTwo}</div>
        </div>
    )
}

export default MatchPairs;


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
