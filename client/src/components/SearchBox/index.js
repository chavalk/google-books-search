import React from "react";

function SearchBox() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <p className="lead">Book Search</p>
                <p className="lead">Book</p>
                <form>
                    <input className="form-control mb-3" name="search" placeholder="Search a Book"></input>
                    <button className="btn btn-success" style={{ float: "right" }}>Search</button>
                </form>
            </div>
        </div>
    );
}

export default SearchBox;