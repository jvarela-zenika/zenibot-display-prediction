import * as React from "react";
import firebase from "firebase"
import {useEffect, useState} from "react";

const Login: React.Component = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signIn = async () => {
        await firebase.auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(() => setIsLoggedIn(true));
    };

    const connectToFirebase = async () => {
        const config = {
            apiKey: "AIzaSyBgtpmqpfdqBOA6sQcYNaqzY5xOLnkG3tg",
            authDomain: "mockup-to-html.firebaseapp.com",
            databaseURL: "https://mockup-to-html.firebaseio.com",
            projectId: "mockup-to-html",
            storageBucket: "mockup-to-html.appspot.com",
            messagingSenderId: "735909160162",
            appId: "1:735909160162:web:ac85fa4f9e97a3a53a2abb"
        };

        await firebase.initializeApp(config);
    };

    useEffect(() => {
        connectToFirebase().then(() => signIn())
    }, []);

    return (
        <>
            {isLoggedIn ? <p>Test {props.children}</p> : ''}
        </>
    )
};

export default Login;
