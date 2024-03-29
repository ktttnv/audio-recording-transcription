import React from "react";
import { useHistory } from "react-router-dom";
import { initRecording, stopRecording } from "../scripts/recording";

import microphoneIcon from "../images/micro.png";
import { PrimaryLayout } from "../layouts/PrimaryLayout";

export const Home = () => {
    let {push} = useHistory();
    let startButtonClicksCounter = 0;

    return (
      <PrimaryLayout>
        <main className="mainContainer">
              <div className="recordingContainer">
                <img src={microphoneIcon} alt="Microphone icon" width="48" height="48"/>
                <div className="time">
                  <p>00:00</p>
                </div>
              </div>

              <div className="buttonContainer">
                <button className="commonButton" onClick={() => {
                    if (startButtonClicksCounter % 2 === 0) {
                      initRecording();
                    } else {
                      stopRecording();
                    }
                    startButtonClicksCounter++;
                }}>Start</button>
              </div>
            </main>

            <footer className="footerContainer">
                <button onClick={() => {
                    push('/about')
                }}>
                  About
                </button>

                <button onClick={() => {
                    push('/settings')
                }}>
                  Settings
                </button>
            </footer>
      </PrimaryLayout>
    )
}
