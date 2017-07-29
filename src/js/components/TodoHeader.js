import React from "react";
import {Link} from "react-router";

const TodoHeader = () => {
        return (
            <div className="header">
                <Link to="/">
                    <button className="logoutButton">Logout</button>
                </Link>
                <div className="logo">
                    Todo App
                </div>
            </div>
        );
};

export default TodoHeader;