import React from 'react';
import TodoHeader from "./TodoHeader";
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const TodoApp = () => (
    <div>
        <TodoHeader/>
        <AddTodo/>
        <VisibleTodoList/>
    </div>
);

export default TodoApp;