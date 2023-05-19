import React from "react";
import { useHistory } from "react-router-dom";

export const Settings = () => {
    let {push} = useHistory();
    return (
        <div>
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
