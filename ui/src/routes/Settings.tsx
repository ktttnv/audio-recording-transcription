import React from "react";
import { useHistory } from "react-router-dom";
import { PrimaryLayout } from "../layouts/PrimaryLayout";

export const Settings = () => {
    let {push} = useHistory();
    return (
      <PrimaryLayout>
        <p>There is no settings yet</p>
        <button onClick={() => {
            push('/')
        }}>Home page
        </button>
      </PrimaryLayout> 
      )
}
