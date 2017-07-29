import React, { PropTypes } from 'react';

const Todo = ({onClick, completed, text, onDeleteClick}) => (
        <div className="todoItem" style={{textDecoration: completed ? "line-through" : "none", background: completed ? "#e2eed8" : "white"}}>
            <input type="checkbox" onClick = {onClick} checked={completed ? "checked" : ""}/>
            {text}
            <button className="deleteButton" onClick={onDeleteClick}>Delete!</button>
        </div>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default Todo;