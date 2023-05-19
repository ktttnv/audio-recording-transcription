import React from "react";
import { useHistory } from "react-router-dom";

export const About = () => {
    let {push} = useHistory();
    return (
        <div>
            <header>
                <p>About</p>
                <button onClick={() => {
                    push('/')
                }}>Home page
                </button>
            </header>
        </div>
    )
}
