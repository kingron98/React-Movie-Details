import React from "react"
import {Link } from "react-router-dom"

function Movies(props) {
    return (
        <div>
            <Link to="/Page2"><img src={props.movies.Poster} /> </Link>
            <h1>Title: {props.movies.Title}</h1>
            <h2>Year: {props.movies.Year}</h2>
        </div>
    )
}

export default Movies