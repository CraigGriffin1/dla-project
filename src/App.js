import React from 'react';
import './App.css';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import MatchCards2 from "./components/MatchCards";

import MatchPairsActivity1 from "./Activities/MatchPairsActivities/MatchPairsActivity1";
import MatchPairsActivity2 from "./Activities/MatchPairsActivities/MatchPairsActivity2";
import MatchPairsActivity3 from "./Activities/MatchPairsActivities/MatchPairsActivity3";
import MatchPairsActivity4 from "./Activities/MatchPairsActivities/MatchPairsActivity4";

import MatchPairsActivityWithPicture1
    from "./Activities/MatchPairsWithPicturesActivites/MatchPairsWithPictureActivity1";

import ConveyorBeltActivity1 from "./Activities/ConveyorBeltActivities/ConveyorBeltActivity1"
import ConveyorBeltActivity2 from "./Activities/ConveyorBeltActivities/ConveyorBeltActivity2"

import UnscrambleWordsActivity1 from "./Activities/UnscrambledWordActivities/UnscrambleWordsActivity1";
import UnscrambleWordsActivity2 from "./Activities/UnscrambledWordActivities/UnscrambleWordsActivity2";

import CompleteParagraphActivity1 from "./Activities/CompleteParagraphActivities/CompleteParagraphActivity1";
import CompleteParagraphActivity2 from "./Activities/CompleteParagraphActivities/CompleteParagraphActivity2";
import CompleteParagraphActivity3 from "./Activities/CompleteParagraphActivities/CompleteParagraphActivity3";
import CompleteParagraphActivity4 from "./Activities/CompleteParagraphActivities/CompleteParagraphActivity4";
import IntroductionVideo from "./Activities/IntroductionVideo";

import Complete from "./Activities/Complete";
import MatchCardsActivity1 from "./Activities/MatchCardsActivities/MatchCardsActivity1";
import MatchCardsActivity2 from "./Activities/MatchCardsActivities/MatchCardsActivity2";
import MatchCardsActivity3 from "./Activities/MatchCardsActivities/MatchCardsActivity3";
import MatchCardsActivity4 from "./Activities/MatchCardsActivities/MatchCardsActivity4";
import MatchCardsActivity5 from "./Activities/MatchCardsActivities/MatchCardsActivity5";
import MatchCardsActivity6 from "./Activities/MatchCardsActivities/MatchCardsActivity6";
import MatchCardsActivity7 from "./Activities/MatchCardsActivities/MatchCardsActivity7";
import MatchCardsActivity8 from "./Activities/MatchCardsActivities/MatchCardsActivity8";

function App() {
    return (

        <Router>
            <div>

                <Switch>
                    <Route exact path="/">


                        <MatchCardsActivity1
                            forwardArrow={createForwardArrow("/mp2")}
                        />

                    </Route>

                    <Route path="/mp1">
                        <MatchCardsActivity2
                            forwardArrow={createForwardArrow("/mp2")}
                            backArrow={createBackArrow("/")}
                        />

                    </Route>
                    <Route path="/mp2">
                        <MatchCardsActivity3
                            forwardArrow={createForwardArrow("/mp3")}
                            backArrow={createBackArrow("/mp1")}/>
                    </Route>
                    <Route path="/mp3">
                        <MatchCardsActivity4
                            forwardArrow={createForwardArrow("/mp4")}
                            backArrow={createBackArrow("/mp2")}/>
                    </Route>
                    <Route path="/mp4">
                        <MatchCardsActivity5
                            forwardArrow={createForwardArrow("/mp5")}
                            backArrow={createBackArrow("/mp3")}/>
                    </Route>
                    <Route path="/mp5">
                        <MatchCardsActivity6
                            forwardArrow={createForwardArrow("/mp6")}
                            backArrow={createBackArrow("/mp4")}/>
                    </Route>

                    <Route path="/mp6">
                        <MatchCardsActivity7
                            forwardArrow={createForwardArrow("/mp7")}
                            backArrow={createBackArrow("/mp5")}/>
                    </Route>

                    <Route path="/mp7">
                        <MatchCardsActivity8
                            forwardArrow={createForwardArrow("/conveyor1")}
                            backArrow={createBackArrow("/mp6")}/>
                    </Route>



                    <Route path="/conveyor1">
                        <ConveyorBeltActivity2
                            forwardArrow={createForwardArrow("/conveyor2")}
                            backArrow={createBackArrow("/mp4")}/>
                    </Route>
                    <Route path="/conveyor2">
                        <ConveyorBeltActivity1
                            forwardArrow={createForwardArrow("/unscramble1")}
                            backArrow={createBackArrow("/conveyor1")}/>
                    </Route>

                    <Route path="/unscramble1">
                        < UnscrambleWordsActivity1
                            forwardArrow={createForwardArrow("/unscramble2")}
                            backArrow={createBackArrow("/conveyor2")}/>
                    </Route>
                    <Route path="/unscramble2">
                        < UnscrambleWordsActivity2
                            forwardArrow={createForwardArrow("/cp1")}
                            backArrow={createBackArrow("/unscramble1")}/>
                    </Route>

                    <Route path="/cp1">
                        <CompleteParagraphActivity1
                            forwardArrow={createForwardArrow("/cp2")}
                            backArrow={createBackArrow("/unscramble2")}/>
                    </Route>
                    <Route path="/cp2">
                        <CompleteParagraphActivity2
                            forwardArrow={createForwardArrow("/cp3")}
                            backArrow={createBackArrow("/cp1")}/>
                    </Route>
                    <Route path="/cp3">
                        <CompleteParagraphActivity3
                            forwardArrow={createForwardArrow("/cp4")}
                            backArrow={createBackArrow("/cp2")}/>
                    </Route>
                    <Route path="/cp4">
                        <CompleteParagraphActivity4
                            forwardArrow={createForwardArrow("/complete")}
                            backArrow={createBackArrow("/cp3")}/>
                    </Route>


                    <Route path="/complete">
                        <Complete

                            playAgain={<Link to={"/"}>
                                <button type="button" className="act-next attention bg-success btn-lg">Play Again
                                </button>
                            </Link>}


                            goBack={<Link to={"/cp4"}>
                                <button type="button" className="act-next attention bg-success btn-lg">Go Back
                                </button>
                            </Link>}/>

                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;


/**
 * Creates a forward button on each page with the appropriate link from the router
 * @param page - the page that the link should go to
 * @returns - a html button with a react router link
 */
function createForwardArrow(page) {
    return (<Link to={page}>
        <button className="act-next attention bg-success "><span
            className="direction-icon"/>
        </button>
    </Link>);
}


/**
 * Creates a back button on each page with the appropriate link from the router
 * @param page - the page that the link should go to
 * @returns - a html button with a react router link
 */
function createBackArrow(page) {
    return (<Link to={page}>
        <button className="act-prev bg-success">
            <span className="direction-icon"/></button>
    </Link>);
}

































