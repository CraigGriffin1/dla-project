import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import MatchPairsActivity1 from "./Activities/MatchPairsActivity1";
import MatchPairsActivity2 from "./Activities/MatchPairsActivity2";
import MatchPairsActivity3 from "./Activities/MatchPairsActivity3";
import MatchPairsActivity4 from "./Activities/MatchPairsActivity4";

import ConveyorBeltActivity1 from "./Activities/ConveyorBeltActivity1"
import ConveyorBeltActivity2 from "./Activities/ConveyorBeltActivity2"

import UnscrambleWordsActivity1 from "./Activities/UnscrambleWordsActivity1";
import UnscrambleWordsActivity2 from "./Activities/UnscrambleWordsActivity2";

import CompleteParagraphActivity1 from "./Activities/CompleteParagraphActivity1";
import CompleteParagraphActivity2 from "./Activities/CompleteParagraphActivity2";
import CompleteParagraphActivity3 from "./Activities/CompleteParagraphActivity3";
import CompleteParagraphActivity4 from "./Activities/CompleteParagraphActivity4";
import IntroductionVideo from "./Activities/IntroductionVideo";


function App() {
    return (

        <Router>
            <div>


                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <IntroductionVideo
                            forwardArrow={createForwardArrow("/mp1")}
                        />
                    </Route>

                    <Route path="/mp1">
                        <MatchPairsActivity1
                            forwardArrow={createForwardArrow("/mp2")}
                            backArrow={createBackArrow("/")}
                        />

                    </Route>
                    <Route path="/mp2">
                        <MatchPairsActivity2
                            forwardArrow={createForwardArrow("/mp3")}
                            backArrow={createBackArrow("/mp1")}/>
                    </Route>
                    <Route path="/mp3">
                        <MatchPairsActivity3
                            forwardArrow={createForwardArrow("/mp4")}
                            backArrow={createBackArrow("/mp2")}/>
                    </Route>
                    <Route path="/mp4">
                        <MatchPairsActivity4
                            forwardArrow={createForwardArrow("/conveyor1")}
                            backArrow={createBackArrow("/mp3")}/>
                    </Route>


                    <Route path="/conveyor1">
                        <ConveyorBeltActivity1
                            forwardArrow={createForwardArrow("/conveyor2")}
                            backArrow={createBackArrow("/mp4")}/>/>
                    </Route>
                    <Route path="/conveyor2">
                        <ConveyorBeltActivity2
                            forwardArrow={createForwardArrow("/unscramble1")}
                            backArrow={createBackArrow("/conveyor1")}/>/>
                    </Route>

                    <Route path="/unscramble1">
                        < UnscrambleWordsActivity1
                            forwardArrow={createForwardArrow("/unscramble2")}
                            backArrow={createBackArrow("/conveyor2")}/>/>/>
                    </Route>
                    <Route path="/unscramble2">
                        < UnscrambleWordsActivity2
                            forwardArrow={createForwardArrow("/cp1")}
                            backArrow={createBackArrow("/unscramble1")}/>/>/>
                    </Route>

                    <Route path="/cp1">
                        <CompleteParagraphActivity1
                            forwardArrow={createForwardArrow("/cp2")}
                            backArrow={createBackArrow("/unscramble2")}/>/>/>/>
                    </Route>
                    <Route path="/cp2">
                        <CompleteParagraphActivity2
                            forwardArrow={createForwardArrow("/cp3")}
                            backArrow={createBackArrow("/cp1")}/>/>/>/>
                    </Route>
                    <Route path="/cp3">
                        <CompleteParagraphActivity3
                            forwardArrow={createForwardArrow("/cp4")}
                            backArrow={createBackArrow("/cp2")}/>/>/>/>
                    </Route>
                    <Route path="/cp4">
                        <CompleteParagraphActivity4
                            forwardArrow={createForwardArrow("/")}
                            backArrow={createBackArrow("/cp3")}/>/>/>/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;


function createForwardArrow(page) {
    return (<Link to={page}>
        <button className="act-next bg-success"><span
    className="direction-icon"/>
        </button>
    </Link>);
}

function createBackArrow(page) {
    return (<Link to={page}>
        <button className="act-prev bg-success">
            <span className="direction-icon"/></button>
    </Link>);
}

































