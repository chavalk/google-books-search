import React from "react";

function DeleteBtn(props) {
    return (
        <button className="btn btn-success" {...props} style={{ float: "right" }} >Delete</button>
    );
}

export default DeleteBtn;