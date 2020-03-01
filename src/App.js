import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import DisplayPrediction from "./components/DisplayPrediction";

function App() {
    return (
        <>
            <Login>
                <DisplayPrediction/>
            </Login>
        </>
    );
}

export default App;
