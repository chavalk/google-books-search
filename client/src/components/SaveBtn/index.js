import React from "react";

function SaveBtn(props) {
    return (
        <button className="btn btn-success" {...props} style={{ float: "right" }} >Save</button>
    );
}

export default SaveBtn;