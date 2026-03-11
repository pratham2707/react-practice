import React from "react";
import DestructuringInComponents from "./DestructuringInComponents";
import RestDestructuring from "./RestDestructuring";
import DefaultValues from "./DefaultValues";

function Simple({ movie_name }) {
    return (
        <React.Fragment>
            <p>My favourite movie is {movie_name}</p>
            <DestructuringInComponents actress="Bebo" actor="Shahid" director="Imtiaz" />
            <RestDestructuring actress="Bebo" actor="Shahid" director="Imtiaz" />
            <DefaultValues actress="Bebo" actor="Shahid" director="Imtiaz" />
        </React.Fragment>
    )
}

export default Simple;