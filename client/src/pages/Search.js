import React from "react";
import ResultsBox from "../components/ResultsBox";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";

function Search() {
    return (
        <div>
            <Jumbotron>
                <p className="lead">Book Search</p>
                <p className="lead">Book</p>
                <form>
                    <Input />
                    <FormBtn />
                </form>
            </Jumbotron>
            <ResultsBox />
        </div>
    );
}

export default Search;