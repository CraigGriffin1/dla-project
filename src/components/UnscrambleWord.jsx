import React, {Component} from "react";


class ScrambledWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.firstLetter,
            scrambledWord: "",
            complete: false,
            color: "act-box my-5",


        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {

        //this.props.trigger();

        //   this.props.onClick();



        if (this.state.value.toLowerCase() === this.props.correct && !this.state.complete) {
            this.setState({color: "act-box my-5 bg-success",
                complete: true})
            this.props.incrementCounter();


        }

        event.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>

                <div className={this.state.color}><span
                    className="text bold">{this.props.scrambledword} :</span><span
                    id="entryanswer0"><form
                    className="text-entry test-selects">
                <input type="text" value={this.state.value} onChange={this.handleChange}/>

                <button
                    className="submit-check"  type="submit">&nbsp;</button></form></span>
                </div>
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
        if ((this.state.completePuzzles === this.props.words.length-1)) {
            alert("All Correct!");
        }


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
                                                <img width="50%" height="50%" class="img-fluid"
                                                     src={this.props.pageImage}/> <hr />

                                                {this.generateWords()}


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


export default unscrambleWord;
