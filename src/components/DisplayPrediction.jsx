import * as React from "react";
import firebase from "firebase"
import {useEffect} from "react";
import Iframe from "react-iframe";

const DisplayPrediction: React.Component = () => {

    const database = firebase.database().ref().child('hasChangedMockup');

    useEffect(() => {
        database.on(
            'value',
            (hasChangedHtmlDataSnap) => {
                if (hasChangedHtmlDataSnap.val()) {
                    database.set(false).then(
                        document.getElementById(`predicationIframe`).src =
                            document.getElementById('predicationIframe').src);
                }
            }
        )
    });

    return (
        <div>
            <Iframe
                url="http://localhost:5000/api/predict"
                id={"predicationIframe"}
                width={window.innerWidth - 4}
                height={window.innerHeight - 4}
                frameBorder={"0"}
            />
        </div>

    )
};

export default DisplayPrediction;
