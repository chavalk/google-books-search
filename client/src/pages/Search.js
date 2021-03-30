import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import SaveBtn from "../components/SaveBtn";

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

    // Saves a book to the database by filtering out the selected book using the id from the Google Books API call
    function saveBook(id) {
        const bookToSave = results.filter(result => result.id === id);
        const [ bookObj ] = bookToSave;
        const [ authors ] = bookObj.volumeInfo.authors;
        console.log(authors)
        console.log(bookObj);
        API.saveBook({
            title: bookObj.volumeInfo.title,
            authors: authors,
            description: bookObj.volumeInfo.description,
            image: bookObj.volumeInfo.imageLinks.smallThumbnail,
            link: bookObj.volumeInfo.infoLink
        })
        .then(alert("The book has been saved!"))
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
                                    <SaveBtn onClick={() => saveBook(result.id)}  />
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