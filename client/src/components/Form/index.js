import React from "react";

// This file exports the Input and FormBtn components

export function Input(props) {
    return (
        <input className="form-control mb-3" name="search" placeholder="Search a Book" {...props}></input>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} className="btn btn-success" style={{ float: "right" }}>Search</button>
    );
}