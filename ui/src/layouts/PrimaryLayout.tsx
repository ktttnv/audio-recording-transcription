import React from "react";

export const PrimaryLayout: React.FC = ({children}) => {
    return (
        <div className="homeContainer">
            <header className="headerContainer">
              <h1 className="mainHeading">Audio Recording Transcription</h1>
            </header>

            {children}
        </div>
    )
}
