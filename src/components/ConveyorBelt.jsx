import React, {Component} from "react";


class ConveyorBelt extends Component {
    constructor(props) {
        super(props);
        this.beltItems = this.props.beltItems;
        this.beltItemsTemp = this.props.beltItems;
        this.beltImages = this.props.beltImages;
        this.dict = {};


        if (this.beltImages) {
            shuffle(this.beltItems, this.beltImages)
            for (let i = 0; i < this.beltItems.length; i++) {
                this.dict[this.beltItemsTemp[i]] = this.beltImages[i].name
            }

        } else {
            this.beltItems = this.beltItems.sort(function () {
                return Math.random() - Math.random()
            });
        }


        this.audioClips = [];
        this.audio = "";

        this.cookies = this.props.cookies;
        this.sugar = this.props.sugar;
        this.cheesecake = this.props.cheesecake;
        this.creamCheese = this.props.creamCheese;
        this.lemonade = this.props.lemonade;
        this.mangoWater = this.props.mangoWater;
        this.lemon = this.props.lemon;
        this.whippedCream = this.props.whippedCream;
        this.audioClips.push(this.cookies, this.sugar, this.cheesecake, this.creamCheese, this.lemonade, this.mangoWater, this.lemon, this.whippedCream);


        this.correctItems = this.props.correctItems;
        this.wordContainer = this.props.wordContainer;


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
            counter: 0,
            complete: false,
            playStatus: false,
            currentItem: "",
            completeWords: 0,
            soundurl: this.audioClips[0],
            incorrectValue: ""
        };
        this.chooseItem(0);


        //this.props.hidePrev();
    }


    chooseItem = (i) => {
        this.currentItem = this.correctItems[i];
        let item = this.correctItems[i];
        console.log(item)
        this.setState(
            {
                currentItem: item,
                soundurl: this.audioClips[i]
            });
        let test = this.currentItem;

        this.audio = this.audioClips[i];


    }


    renderItems = () => {
        console.log(this.dict)
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
                            {!this.props.image ? this.state.beltItems[i] : <img width="58%"
                                                                                src={this.dict[this.state.beltItems[i]]}/>}
                            {/*<img width="55%" src={this.state.beltItems[i] }/>*/}
                            {/**/}
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
            ;
        }
    }

    moveBelt = () => {
        //console.log(this.state.beltItems, this.state.incorrectValue)
        this.setState(state => {
            let beltItems = [...state.beltItems]; //create a copy of the state array - e.g. [1,2,3,4]
            let firstItem = beltItems[0]; //get the first item on the array - firstItem == 1
            beltItems = beltItems.slice(1); //update the array without the first item - [2,3,4]
            beltItems = beltItems.concat(firstItem); //add the first item at the end of the array - [2,3,4,1]
            if (this.state.incorrectValue !== "") {
                beltItems = beltItems.concat(this.state.incorrectValue); //add the incorrect word to the end of the array, if word is in the sentence
                this.setState({incorrectValue: ""})
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


            if (this.currentItem === (this.state.beltItems[2])) {
                console.log("CORRECT");

                this.setState({
                    correctCaption: true,
                });
                // this.props.completeAction();
                setTimeout(
                    function () {
                        this.setState({correctCaption: false});
                    }.bind(this),
                    2000
                );


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
                                endGame: true,
                                complete: true
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

                    this.setState({completeWords: this.state.completeWords += 1});
                    this.setState({
                        soundurl: this.audioClips[this.state.completeWords],
                        playStatus: false
                    });
                    console.log(this.state.completeWords);
                    this.chooseItem(this.state.completeWords)


                    if (!this.state.endGame) {
                        this.beltInterval = setInterval(() => { //start the belt again
                            this.moveBelt()
                        }, 1000);
                    }


                }, 2000)

            } else {
                console.log("INCORRECT");
                //making the necessary updates after a box has been picked up

                this.state.incorrectValue = this.state.beltItems[2];


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
                        incorrectCaption: true,
                    });
                    setTimeout(
                        function () {
                            this.setState({incorrectCaption: false});
                        }.bind(this),
                        2000
                    );

                    this.beltInterval = setInterval(() => { //start the belt again
                        this.moveBelt()
                    }, 1000);


                    this.setState({
                        playStatus: false
                    });

                }, 2000);


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

    renderCountdown() {
        console.log(this.state.completeWords,this.correctItems.length-1)
        if ((this.state.completeWords - 1) === this.correctItems.length-1) {
            return (<h3>Well Done!</h3>);
        } else {
            return (<h3>{this.state.completeWords} out of {this.correctItems.length}</h3>);
        }

    }

    playAudio = url => {
        if (url) {
            var soundfile = url;
            this.audioPlay = new Audio(soundfile);
            this.audioPlay.volume = 0.5;
            this.audioPlay.play();
        }
    };


    playAudioOnce() {
        if (!this.state.playStatus) {
            this.playAudio(this.state.soundurl);
            this.setState({playStatus: true});
        }

    }

    renderAudioButton() {

        return (<button className="button-audio button-lg responsive"
                        onClick={() => this.playAudio(this.state.soundurl)}></button>)

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


                {this.playAudioOnce()}


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <section id="activityContent">
                                <div className="contentBox">
                                    <div className="container-fluid dd-sentence size-md">


                                        <div className="row">
                                            <div className="col-12 text-center">
                                                {/*    <h3>Ingredient Grab</h3>
                                                <p>Grab all of the ingredients that are mentioned in the video.</p>*/}
                                                <div className="conveyor-belt-container words">
                                                    <div
                                                        className="conveyor-belt-header row no-gutters align-items-center justify-content-end">
                                                        {this.audio ? (
                                                            <div class="col-auto audio">
                                                                {this.renderAudioButton()}
                                                            </div>
                                                        ) : (
                                                            <React.Fragment/>
                                                        )}
                                                        <div className="col-12 col-md">
                                                            <div className="word-box">
                                                                {this.renderCountdown()}

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
                                    <div className="row no-gutters act-end-nav justify-content-center">


                                        <div className="col-auto order-3">
                                            {this.state.complete ?
                                                this.props.forwardArrow :
                                                <button disabled className="navbtn next navbtn-disabled " aria-pressed="true"><span/>
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

export default ConveyorBelt;

function shuffle(obj1, obj2) {
    var index = obj1.length;
    var rnd, tmp1, tmp2;

    while (index) {
        rnd = Math.floor(Math.random() * index);
        index -= 1;
        tmp1 = obj1[index];
        tmp2 = obj2[index];
        obj1[index] = obj1[rnd];
        obj2[index] = obj2[rnd];
        obj1[rnd] = tmp1;
        obj2[rnd] = tmp2;
    }
}
