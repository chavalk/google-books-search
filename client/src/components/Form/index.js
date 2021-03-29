import React from "react";

// This file exports the Input and FormBtn components

export function Input() {
    return (
        <input className="form-control mb-3" name="search" placeholder="Search a Book"></input>
    );
}

export function FormBtn() {
    return (
        <button className="btn btn-success" style={{ float: "right" }}>Search</button>
    );
}