import React from "react";
import { useHistory } from "react-router-dom";

export const Settings = () => {
    let {push} = useHistory();
    return (
        <div className="settingsContainer">
            <header>
                <p>Settings</p>
                <button onClick={() => {
                    push('/')
                }}>Home page
                </button>
            </header>
        </div>
    )
}
