import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import todoApp from "./reducers/reducers";
import TodoApp from "./components/TodoApp";
import UserForm from './components/UserForm';
import RegistrationForm from './components/RegistrationForm';
import { Router, Route, browserHistory, hashHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";


const store = createStore(todoApp);
const history = syncHistoryWithStore(hashHistory, store);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={UserForm}/>
            <Route path="/todolist" component={TodoApp}/>
            <Route path="/register" component={RegistrationForm}/>
        </Router>
    </Provider>,
    document.getElementById("app")
);

// console.log(store.getState());
//
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });
//
// store.dispatch(addTodo("Learn about actions"));
// store.dispatch(addTodo("Learn about store"));
// store.dispatch(addTodo("Learn about reducers"));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter("SHOW_ALL"));
//
// unsubscribe();
//
// const App = document.getElementById("app");
// ReactDOM.render(
// );