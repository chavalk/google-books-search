import axios from "axios";
require("dotenv").config();

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = process.env.API_KEY;

// Export an object with a "search" method that searches the Google Books API for the passed query
export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};
