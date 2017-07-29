import React from "react";
import Email from "./Email";
import Password from "./Password";

export default class RegistrationForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        var email = this.refs.emailField.state.value;
        var password = this.refs.passwordField.state.value;
        if(this.refs.emailField.state.valid && this.refs.passwordField.state.valid){
            alert("Email: " + email + " Password: " + password);
        }
    }

    render() {
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="formHeader">
                    Registration Form
                </div>

                <div>
                    <div className="username">
                        <Email value="" ref="emailField"/>
                    </div>
                    <div className="password">
                        <Password value="" ref="passwordField"/>
                    </div>
                    <div>
                        {/*<Link to="todolist">*/}
                            <input id="button" type="submit" value="SignUp"/>
                        {/*</Link>*/}
                        <p id="label">Already have an account? <a href="/">Login</a></p>
                    </div>
                </div>
            </form>
        );
    }
}