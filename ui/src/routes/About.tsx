import React from "react";
import { useHistory } from "react-router-dom";
import { PrimaryLayout } from "../layouts/PrimaryLayout";

export const About = () => {
    let {push} = useHistory();
    return (
      <PrimaryLayout>
        <p>GitHub: <a href="https://github.com/ktttnv/audio-recording-transcription">link</a></p>
        <button onClick={() => {
            push('/')
        }}>Home page
        </button>
      </PrimaryLayout> 
    )
}
