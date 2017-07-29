import React from 'react';
import { connect } from "react-redux";
import { addTodo } from "../actions/actions";

let AddTodo = ({ dispatch }) => {
    let input;
    return(
        <div>
            <form className="addTodoForm" onSubmit={e => {e.preventDefault();if(!input.value.trim()){return;}dispatch(addTodo(input.value));input.value = '';}}>
                    <input id="todoInput" ref={node => {input = node}} type="text" placeholder="What needs to be done?" required/>
                    <button className="addButton" type = "submit">Add Todo</button>
            </form>
        </div>
    )
};

AddTodo = connect()(AddTodo);
export default AddTodo;