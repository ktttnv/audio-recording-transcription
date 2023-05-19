import React from "react";
import { useHistory } from "react-router-dom";

import microphoneIcon from "../images/micro.png";

export const Home = () => {
    let {push} = useHistory();

    return (
        <div className="homeContainer">
            <header className="headerContainer">
              <h1 className="mainHeading">Audio Recording Transcription</h1>
            </header>


            <main className="mainContainer">

              <div className="recordingContainer">
                <img src={microphoneIcon} alt="Microphone icon" width="48" height="48"/>
                <div className="time">
                  <p>00:00</p>
                </div>
              </div>

              <div className="buttonContainer">
                <button className="commonButton">Start</button>
              </div>

            </main>

            <footer className="footerContainer">
                <button onClick={() => {
                    push('/about')
                }}>About
                </button>

                <button onClick={() => {
                    push('/settings')
                }}>Settings
                </button>
            </footer>
        </div>
    )
}
