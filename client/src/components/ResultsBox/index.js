import React from "react";

function ResultsBox() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <p className="lead">Results</p>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <p className="lead d-inline">Harry Potter</p>
                        <button className="btn btn-success" style={{ float: "right" }}>Save</button>
                        <button className="btn btn-success mr-1" style={{ float: "right" }}>View</button>
                        <p className="lead">Written by J.K. Rowling</p>
                        <img src="https://via.placeholder.com/200" className="img-thumbnail float-left mr-3" alt="Book"></img>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultsBox;