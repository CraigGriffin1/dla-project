import React, {Component} from "react";


class ScrambledWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.firstLetter,
            scrambledWord: "",
            complete: false,
            color: "act-box my-5",
            attempts: 0,


        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHint = this.handleHint.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }


    handleHint() {


        let stillCorrect = true;
        let counter = 0;
        let hint = "";

        if (!(this.state.value.toLowerCase() === this.props.correct)) {
            while (stillCorrect) {
                if (this.state.value[counter] === this.props.correct[counter]) {
                    if (counter < this.props.correct.length - 1) {
                        hint = hint.concat(this.props.correct[counter])
                    }
                    counter += 1;
                } else {
                    stillCorrect = false;
                }
            }

            hint = hint.concat(this.props.correct[counter])


            this.setState({value: hint});
        }
    }

    handleSubmit(event) {

        this.setState({attempts: this.state.attempts + 1})


        if (this.state.value.toLowerCase() === this.props.correct && !this.state.complete) {
            this.setState({
                color: "act-box my-5 bg-success",
                complete: true
            })
            this.props.incrementCounter();
        }else{
            this.props.showWrong();

        }


        event.preventDefault();
    }

    render() {
        return (

            <form >

                <div className={this.state.color}><span
                    className="text bold">{this.props.scrambledword} :</span><span
                    id="entryanswer0"><form
                    className="text-entry test-selects">
                <input type="text" value={this.state.value} onChange={this.handleChange}/>

                <button
                     type="submit" onClick={this.handleSubmit}>Ok</button>

                    {/*this.state.attempts >= 3 ? */}
                    <button className="bg-warning" onClick={this.handleHint} type="submit">?</button>

                </form></span></div>

            </form>
        );
    }
}


class unscrambleWord extends Component {

    constructor(props) {
        super(props);

        this.state = {
            correctCaption: false,
            incorrectCaption: false,
            complete: Array(this.props.words.length).fill("act-box my-5"),
            completePuzzles: 0,
            allComplete: false,
            test: 0,
            scrambledWords: this.scrambleLetters(this.props.words),

        }

        this.trigger.bind(this);
    }

    trigger() {

        this.setState(
            {completePuzzles: this.state.completePuzzles + 1});

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
        if ((this.state.completePuzzles === this.props.words.length - 1)) {
            this.setState({allComplete: true});
        }


    }

    showWrong(){

        this.setState(prevState => ({
            incorrectCaption: true
        }));
        setTimeout(
            function () {
                this.setState({incorrectCaption: false});
            }.bind(this),
            1500
        );

    }

    scrambleLetters(words) {

        let scrambledWords = [];

        for (let i = 0; i < words.length; i++) {
            scrambledWords.push(words[i].split('').sort(function () {
                return 0.5 - Math.random()
            }).join(''));
        }


        return scrambledWords;
    }

    generateWords() {

        let toReturn = [];


        for (let i = 0; i < this.props.words.length; i++) {

            toReturn.push(
                <ScrambledWord
                    id={i}
                    firstLetter={this.props.words[i][0]}
                    correct={this.props.words[i]}
                    scrambledword={this.state.scrambledWords[i]}
                    incrementCounter={() => this.trigger()}
                    showWrong={() => this.showWrong()}
                    color={this.state.complete[i]}
                />);
        }
        return (toReturn);

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
                                                <h3>{this.props.pageTitle}</h3>

                                             {/*   <p>Unscramble all of the words. The first letters has been done for you!

                                                </p>*/}

                                                <hr/>


                                                {this.generateWords()}


                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters act-end-nav justify-content-center">


                                        <div className="col-auto order-3">
                                            {this.state.allComplete ?
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


export default unscrambleWord;
