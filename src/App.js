import React from 'react';
import './App.css';



import Video from "./Video"
import CompleteTheParagraph from "./CompleteTheParagraph";
import ConveyorBelt from "./ConveyorBelt";


function App() {
    return (

        <div>


            <Video videoUrl ="https://k2l.bndry.co.uk/basicskills/video/intro.mp4"
                    videoPoster="https://k2l.bndry.co.uk/basicskills/video/intro.jpg"
             />


            <ConveyorBelt />

            <ConveyorBelt />

            <CompleteTheParagraph
                pageTitle="Oreo Cheesecake"
                pageImage="https://live.staticflickr.com/5563/14835710576_a5f0a50354_b.jpg"
                pageSoundClip="https://k2l.bndry.co.uk/basicskills/video/i"
                expectedValues={[["Build", "Start", "Add", "Decorate", "Is"]]}
                labelValues={["Build", "Start", "Add", "Decorate", "Is"]}
                paragraph="Now to <<>> the cake. <<>> with big Oreo pieces at the bottom. <<>> the cream mix on top.
                <<>> with some more big pieces of Oreo and that's it. Your Oreo cheesecake <<>> ready."
            />

            <CompleteTheParagraph
                pageTitle="Mango Lemonade (1)"
                pageImage="data:image/jpeg;base64,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"
                pageSoundClip=""
                expectedValues={[["Need", "Cut", "Squeeze", "Get", "Take"]]}
                labelValues={["Need", "Cut", "Squeeze", "Get", "Take"]}
                paragraph="First you <<>> six lemons. <<>> them in half like this. Then <<>> the lemons to
                <<>> lemon juice. Now <<>> a mango."
            />

            <CompleteTheParagraph
                pageTitle="Mango Lemonade (2)"
                pageImage="https://createmindfully.com/wp-content/uploads/2019/01/mango-lemonade-close-up-500x500.jpg"
                pageSoundClip=""
                expectedValues={[["Peel", "Cut", "Blend", "Add", "Blend"]]}
                labelValues={["Peel", "Cut", "Blend", "Add", "Blend"]}
                paragraph="<<>> it, <<>> it into small pieces and <<>> it. <<>> the lemon juice and <<>> again."
            />

            <CompleteTheParagraph
                pageTitle="Mango Lemonade (3)"
                pageImage="https://assets.myfoodandfamily.com/adaptivemedia/rendition/100652615_1500x1000.jpg?id=f7f87da633e7066c567b1e4f59c4eccc2858ebb3&ht=650&wd=1004"
                pageSoundClip=""
                expectedValues={[["Boil", "Melts","Pour","Shake","Enjoy"]]}
                labelValues={["Boil", "Melts","Pour","Shake","Enjoy"]}
                paragraph="<<>> the water so the sugar <<>> . Now <<>> the lemon and mango juice and water into a bottle and <<>> it.
                That's the mango lemonade ready! Now <<>> your drink."
            />



        </div>

    );
}

export default App;

























