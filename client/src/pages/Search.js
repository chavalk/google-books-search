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
            <ResultsBox />
        </div>
    );
}

export default Search;