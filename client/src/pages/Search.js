import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

function Search() {
    // Setting component's initial state
    const [search, setSearch] = useState()
    const [results, setResults] = useState([])

    // Sends request to Google Books API based on user's input
    function searchGoogleBooks(query) {
        API.search(query)
            .then(res => setResults(res.data.items))
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch({ [name]: value })
    };
    
    // When the form is submitted, search the Google Books API for search
    function handleFormSubmit(event) {
        event.preventDefault();
        searchGoogleBooks(search);
    };

    return (
        <div>
            <Jumbotron>
                <p className="lead">Book Search</p>
                <p className="lead">Book</p>
                <form>
                    <Input
                        onChange={handleInputChange}
                    />
                    <FormBtn
                        onClick={handleFormSubmit}
                    />
                </form>
            </Jumbotron>
            <Jumbotron>
                <p className="lead">Results</p>
                <Jumbotron>
                    {results.length ? (
                        <ul className="list-group">
                            {results.map(result => (
                                <li className="list-group-item" key={result.id}>
                                    <p className="lead d-inline">{result.volumeInfo.title}</p>
                                    <button className="btn btn-success" style={{ float: "right" }} >Save</button>
                                    <a className="btn btn-success mr-1" style={{ float: "right" }} href={result.volumeInfo.infoLink} target="_blank" rel="noreferrer">View</a>
                                    <p className="lead">Written by {result.volumeInfo.authors}</p>
                                    <img src={result.volumeInfo.imageLinks.smallThumbnail} className="img-thumbnail float-left mr-3" alt="Book"></img>
                                    <p className="lead">{result.volumeInfo.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}   
                </Jumbotron>
            </Jumbotron>
        </div>
    );
}

export default Search;