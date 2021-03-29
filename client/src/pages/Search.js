import React, { useState } from "react";
import ResultsBox from "../components/ResultsBox";
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
            .then(res => setResults(res.data))
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
                    <p className="lead d-inline">Harry Potter</p>
                    <button className="btn btn-success" style={{ float: "right" }}>Save</button>
                    <button className="btn btn-success mr-1" style={{ float: "right" }}>View</button>
                    <p className="lead">Written by J.K. Rowling</p>
                    <img src="https://via.placeholder.com/200" className="img-thumbnail float-left mr-3" alt="Book"></img>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Jumbotron>
            </Jumbotron>
        </div>
    );
}

export default Search;