import React from "react"

function Movies(props) {
    return (
        <div>
            <img src={props.movies.Poster} /> 
            <h1>Title: {props.movies.Title}</h1>
            <h2>Year: {props.movies.Year}</h2>
        </div>
    )
}

export default Movies