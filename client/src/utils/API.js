import axios from "axios";
require("dotenv").config();

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = process.env.API_KEY;

export default {
    // Searches the Google Books API for the passed query
    search: function(query) {
        return axios.get(BASEURL + query.search + APIKEY);
    },
    // Gets all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
};
