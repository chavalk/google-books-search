const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        title: "The World of the Hunger Games",
        authors: "Kate Egan",
        description: "The definitive, richly illustrated, full-color guide to all the districts of Panem, all the participants in the Hunger Games, and the life and home of Katniss Everdeen. Welcome to Panem, the world of the Hunger Games. This is the definitive, richly illustrated, full-color guide to all the districts of Panem, all the participants in The Hunger Games, and the life and home of Katniss Everdeen. A must-have for fans of both The Hunger Games novels and the new Hunger Games film.",
        image: "http://books.google.com/books/content?id=Mug4uI3ZGo8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        link: "https://play.google.com/store/books/details?id=Mug4uI3ZGo8C&source=gbs_api"
    },
    {
        title: "The World of the Hunger Games",
        authors: "Kate Egan",
        description: "The definitive, richly illustrated, full-color guide to all the districts of Panem, all the participants in the Hunger Games, and the life and home of Katniss Everdeen. Welcome to Panem, the world of the Hunger Games. This is the definitive, richly illustrated, full-color guide to all the districts of Panem, all the participants in The Hunger Games, and the life and home of Katniss Everdeen. A must-have for fans of both The Hunger Games novels and the new Hunger Games film.",
        image: "http://books.google.com/books/content?id=Mug4uI3ZGo8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        link: "https://play.google.com/store/books/details?id=Mug4uI3ZGo8C&source=gbs_api"
    },
    {
        title: "The World of the Hunger Games",
        authors: "Kate Egan",
        description: "The definitive, richly illustrated, full-color guide to all the districts of Panem, all the participants in the Hunger Games, and the life and home of Katniss Everdeen. Welcome to Panem, the world of the Hunger Games. This is the definitive, richly illustrated, full-color guide to all the districts of Panem, all the participants in The Hunger Games, and the life and home of Katniss Everdeen. A must-have for fans of both The Hunger Games novels and the new Hunger Games film.",
        image: "http://books.google.com/books/content?id=Mug4uI3ZGo8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        link: "https://play.google.com/store/books/details?id=Mug4uI3ZGo8C&source=gbs_api"
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });