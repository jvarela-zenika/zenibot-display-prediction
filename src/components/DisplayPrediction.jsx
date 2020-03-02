import * as React from "react";
import firebase from "firebase"
import {useEffect} from "react";
import Iframe from "react-iframe";
import {useState} from "react";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const DisplayPrediction: React.Component = () => {

    const database = firebase.database().ref().child('hasChangedMockup');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        database.on(
            'value',
            (hasChangedHtmlDataSnap) => {
                setLoading(true);
                if (hasChangedHtmlDataSnap.val()) {
                    database.set(false).then(() => {
                        document.getElementById(`predicationIframe`).src =
                            document.getElementById('predicationIframe').src;
                        setLoading(false);
                    })
                }
            }
        )
    });

    return (
        <div>
            {
                loading === false
                    ? <div style={{
                        position: "absolute",
                        marginLeft: (window.innerWidth - 124) / 2,
                        marginTop: (window.innerHeight - 124) / 2
                    }}>
                        <Loader
                            type="Grid"
                            color="blue"
                            height={120}
                            width={120}

                        />
                    </div>
                    : ''
            }

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
