import * as React from "react";
import firebase from "firebase"
import {useEffect, useState} from "react";

const DisplayPrediction: React.Component = () => {

    const [hasChangedMockup, setHasChangedMockup] = useState(false);
    const database = firebase.database().ref().child('hasChangedMockup');

    useEffect(() => {
        database.on(
            'value',
            (snap) => {
                setHasChangedMockup(snap.val())
            }
        )
    });

    const getPredictedPage = () => {
        if (hasChangedMockup) {
            console.log("has changed value");
            database.set(false);
        }
        return '';
    };

    return (
        <>
            {getPredictedPage()}
        </>
    )
};

export default DisplayPrediction;
