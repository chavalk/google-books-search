import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Saved() {
    // Setting component's initial state
    const [books, setBooks] = useState([])

    // Load all books and store with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Jumbotron>
                <p className="lead">Saved Books</p>
                <Jumbotron>
                {books.length ? (
                    <ul className="list-group">
                        {books.map(book => (
                            <li className="list-group-item" key={book._id}>
                                <p className="lead d-inline">{book.title}</p>
                                <button className="btn btn-success" style={{ float: "right" }} >Save</button>
                                <a className="btn btn-success mr-1" style={{ float: "right" }} href={book.link} target="_blank" rel="noreferrer">View</a>
                                <p className="lead">Written by {book.authors}</p>
                                <img src={book.image} className="img-thumbnail float-left mr-3" alt="Book"></img>
                                <p className="lead">{book.description}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h3>No Saved Books to Display</h3>
                )}
                </Jumbotron>
            </Jumbotron>
        </div>
    );
}

export default Saved;