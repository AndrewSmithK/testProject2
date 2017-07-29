import React from "react";

class Password extends React.Component{
    constructor(props){
        super(props);
        var isValid = this.validate(props.value);
        this.state = {value: props.value, valid: isValid};
        this.onChange = this.onChange.bind(this);
    }

    validate(password){
        return password.length > 6;
    }

    onChange(e){
        var val = e.target.value;
        var isValid = this.validate(val);
        this.setState({
            value: val,
            valid: isValid
        })
    }

    render() {
        var passwordColor = this.state.valid === true ? "blue" : "red";
        return(
            <div>
                <label><b>Password</b></label>
                <input type="password" value={this.state.value} placeholder="Enter your password" onChange={this.onChange} style={{borderColor: passwordColor}} required/>
            </div>
        );
    }
}

export default Password;