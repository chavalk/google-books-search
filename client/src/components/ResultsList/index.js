import React from "react";

function ResultsList(props) {
    return (
        <ul className="list-group">
            {console.log(props)}
            {props.results.map(result => (
                <li className="list-group-item" key={result.id}>
                    <p className="lead d-inline">{result.volumeInfo.title}</p>
                    <button className="btn btn-success" style={{ float: "right" }}>Save</button>
                    <a className="btn btn-success mr-1" style={{ float: "right" }} href={result.volumeInfo.infoLink} target="_blank" rel="noreferrer">View</a>
                    <p className="lead">Written by {result.volumeInfo.authors}</p>
                    <img src={result.volumeInfo.imageLinks.smallThumbnail} className="img-thumbnail float-left mr-3" alt="Book"></img>
                    <p className="lead">{result.volumeInfo.description}</p>
                </li>
            ))}
        </ul>
    );
}

export default ResultsList;