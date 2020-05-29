import React, {Component} from "react";
import AudioButton from "./AudioButton";

class ConveyorBelt extends Component {
    constructor(props) {
        super(props);
        this.beltItems = ["cookies", "sugar", "cheesecake", "cream cheese", "lemonade", "mango water", "lemon", "whipped cream",
            "eggs", "flour", "milk", "banana",];
        this.audio = "this.props.pageData.viewData[0].audio";
        this.beltItems = this.beltItems.sort(function () {
            return Math.random() - Math.random()
        });
        this.correctItems = ["cookies", "sugar", "cheesecake", "cream cheese", "lemonade", "mango water", "lemon", "whipped cream"];
        this.wordContainer = ["", ",", "", ",", "", ",", "", ",", "", ",", "", ",", "", ",", ""];
        this.itemsStatus = [];
        for (let i = 0; i < this.beltItems.length; i++) {
            this.itemsStatus.push("");
        }
        this.selectedItems = [];
        for (let i = 0; i < this.correctItems.length; i++) {
            this.selectedItems.push("");
        }

        this.incorrectValue = "";
        this.state = {
            moveClass: false,
            grab: false,
            liftBox: false,
            beltItems: this.beltItems,
            itemsStatus: this.itemsStatus,
            selectedItems: this.selectedItems,
            correctCaption: false,
            incorrectCaption: false,
            counter: 0
        };

        //this.props.hidePrev();
    }

    renderItems = () => {
        let arr = [];
        for (let i = 0; i < this.state.beltItems.length; i++) {
            arr.push(
                <li
                    key={i}
                    className={this.state.moveClass && i === 0 ? "move-margin" : ""}
                >

                    {this.state.beltItems[i] === "" ? (
                        <React.Fragment>&nbsp;</React.Fragment>
                    ) : (
                        <p
                            className={
                                "box " + (this.state.liftBox && i === 2 ? " lift " : "")
                            }
                        >
                            {this.state.beltItems[i]}
                        </p>
                    )}
                </li>
            );
        }

        return arr;
    }

    componentDidMount() {
        this.beltInterval = setInterval(() => {
            this.moveBelt()
        }, 1000);
        if (this.audio) {
            this.playAudio();
        }
    }

    moveBelt = () => {
        this.setState(state => {
            let beltItems = [...state.beltItems]; //create a copy of the state array - e.g. [1,2,3,4]
            let firstItem = beltItems[0]; //get the first item on the array - firstItem == 1
            beltItems = beltItems.slice(1); //update the array without the first item - [2,3,4]
            beltItems = beltItems.concat(firstItem); //add the first item at the end of the array - [2,3,4,1]
            if (this.incorrectValue !== "") {
                beltItems = beltItems.concat(this.incorrectValue); //add the incorrect word to the end of the array, if word is in the sentence
                this.incorrectValue = "";
            }


            let itemsStatus = [...state.itemsStatus];
            let firstItemStatus = itemsStatus[0];
            itemsStatus = itemsStatus.slice(1);
            itemsStatus = itemsStatus.concat(firstItemStatus);

            const moveClass = !state.moveClass;
            return {moveClass, beltItems, itemsStatus}
        })

        setTimeout(() => {
            this.setState(state => {


                const moveClass = !state.moveClass;
                return {moveClass}
            });
        }, 500)
    }

    clickClaw = (e) => {

        if (this.state.endGame) {
            console.log("game ended");
            return;
        }

        //prevents from clicking the claw while it is down
        if (this.state.grab) {
            console.log("disabled");
            return;

        } else if (this.state.beltItems[2] == null) { //if the box has already been picked up and the position is empty
            console.log("HI, yes it's null");
            this.setState({ //move the claw down and add the "lift" class
                grab: !this.state.grab,
            })
            clearInterval(this.beltInterval); //stop the belt during a grab
            setTimeout(() => {
                this.setState(state => ({
                    grab: !state.grab
                }));
                this.beltInterval = setInterval(() => { //start the belt again
                    this.moveBelt()
                }, 1000);
            }, 2000);

            return;

        } else { // pick up a box
            this.setState({ //move the claw down and add the "lift" class
                grab: !this.state.grab,
                liftBox: true
            })

            clearInterval(this.beltInterval); //stop the belt during a grab

            if (this.correctItems.includes(this.state.beltItems[2])) {
                console.log("CORRECT");
                //making the necessary updates after a box has been picked up
                setTimeout(() => {
                    this.setState(state => ({ //the grab animation has completed - remove the "grab" class from the claw and the "lift" class from the box
                        grab: !state.grab,
                        liftBox: false,
                        itemsStatus: state.itemsStatus.map((item, i) => {
                            if (i === 2) {
                                return "hidden";
                            } else {
                                return item;
                            }
                        }),
                        beltItems: state.beltItems.map((item, i) => {
                            if (i === 2) {
                                return "";
                            } else {
                                return item;
                            }
                        }),
                        //selectedItems: [...state.selectedItems, state.beltItems[2]]
                        selectedItems: state.selectedItems.map((item, i) => {
                            if (i === state.counter) {
                                return state.beltItems[2];
                            } else {
                                return item;
                            }
                        })

                    }));

                    this.setState({
                        counter: this.state.counter + 1
                    }, () => {
                        if (this.state.counter === this.correctItems.length) {
                            console.log(this.correctItems.length);
                            console.log("completed!!!")
                            this.setState({
                                correctCaption: true,
                                endGame: true
                            });
                            // this.props.completeAction();
                            setTimeout(
                                function () {
                                    this.setState({correctCaption: false});
                                }.bind(this),
                                2000
                            );
                        }
                    })

                    if (!this.state.endGame) {
                        this.beltInterval = setInterval(() => { //start the belt again
                            this.moveBelt()
                        }, 1000);
                    }


                }, 2000)

            } else {
                console.log("INCORRECT");
                //making the necessary updates after a box has been picked up

                if (this.correctItems.includes(this.state.beltItems[2])) {
                    this.incorrectValue = this.state.beltItems[2];
                }

                setTimeout(() => {
                    this.setState(state => ({ //the grab animation has completed - remove the "grab" class from the claw and the "lift" class from the box
                        grab: !state.grab,
                        liftBox: false,
                        itemsStatus: state.itemsStatus.map((item, i) => {
                            if (i === 2) {
                                return "hidden";
                            } else {
                                return item;
                            }
                        }),
                        beltItems: state.beltItems.map((item, i) => {
                            if (i === 2) {
                                return "";
                            } else {
                                return item;
                            }
                        })
                    }));

                    this.setState({
                        incorrectCaption: true
                    });
                    setTimeout(
                        function () {
                            this.setState({incorrectCaption: false});
                        }.bind(this),
                        1000
                    );

                    this.beltInterval = setInterval(() => { //start the belt again
                        this.moveBelt()
                    }, 1000);

                }, 2000)

            }


        }
    }

    renderWordBox = () => {
        let arr = [];
        let selectedItemsCounter = 0;
        for (let i = 0; i < this.wordContainer.length; i++) {

            if (this.wordContainer[i] === "") {
                if (this.state.selectedItems[selectedItemsCounter] === "") {
                    arr.push(<span key={i} className="gap"></span>)
                } else {
                    arr.push(<span key={i}
                                   className="word-highlight">{this.state.selectedItems[selectedItemsCounter] + " "}</span>)
                }
                selectedItemsCounter++;

            } else {
                arr.push(<span key={i}>{this.wordContainer[i]}&nbsp;</span>)
            }
        }

        return arr;
    }

    playAudio = () => {
        var audio = new Audio(this.audio);
        audio.load();
        audio.play();
    }

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
                                                <div className="conveyor-belt-container words">
                                                    <div
                                                        className="conveyor-belt-header row no-gutters align-items-center justify-content-end">
                                                        {this.audio ? (
                                                            <div class="col-auto audio">
                                                                <AudioButton
                                                                    label={""}
                                                                    audioSrc={this.audio}
                                                                    styling={"button-audio"}
                                                                />
                                                            </div>
                                                        ) : (
                                                            <React.Fragment/>
                                                        )}
                                                        <div className="col-12 col-md">
                                                            <div className="word-box">
                                                                {/* {this.wordContainer.map((word, w) => (

                                        word === "" ? (

                                            this.state.selectedItems[w] === "" ? (
                                                <span key={w} className="gap"></span>
                                            ) : (
                                                <span key={w} className="word-highlight">{this.state.selectedItems[w] + " "}</span>
                                            )

                                        ) : (
                                            <span key={w}>{word}&nbsp;</span>
                                        )
                                    ))} */}

                                                                {this.renderWordBox()}
                                                            </div>
                                                        </div>
                                                        <div className="col-auto">
                                                            <button
                                                                className="button-circle button-lg responsive claw-button"
                                                                onClick={this.clickClaw}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="conveyor-belt-claw-wrapper">
                                                        <div className={"claw" + (this.state.grab ? " grab" : "")}/>
                                                    </div>
                                                    <div className="conveyor-belt-main-wrapper">
                                                        <ul className="items">{this.renderItems()}</ul>
                                                        <div className="belt-top">
                                                            <div className={"claw-shadow"}/>
                                                        </div>
                                                        <div className="belt-side"/>
                                                    </div>
                                                </div>
                                            </div>
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

export default ConveyorBelt;
