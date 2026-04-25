import React from "react";
import {Link} from "react-router-dom";

const Appbar = () => {
    return (
        <nav>
            <Link to = {"/"}>Login</Link>
            <Link to = {"/count"}>Count</Link>
            <Link to = {"/users"}>Users</Link>
        </nav>
    )
}

export default Appbar