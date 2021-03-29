import React, { useState } from "react";
import ResultsBox from "../components/ResultsBox";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";

function Search() {
    // Setting component's initial state
    const [search, setSearch] = useState()

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch({ [name]: value })
    }
    
    return (
        <div>
            <Jumbotron>
                <p className="lead">Book Search</p>
                <p className="lead">Book</p>
                <form>
                    <Input
                        onChange={handleInputChange}
                    />
                    <FormBtn />
                </form>
            </Jumbotron>
            <ResultsBox />
        </div>
    );
}

export default Search;