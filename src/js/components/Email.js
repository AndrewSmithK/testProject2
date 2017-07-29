import React from 'react';

class Email extends React.Component{
    constructor(props){
        super(props);
        var isValid = this.validate(props.value);
        this.state = {value: props.value, valid: isValid};
        this.onChange = this.onChange.bind(this);
    }

    validate(email){
        if (email.indexOf("@") + 1)
            return true;
        return false;
    }

    onChange(e){
        var val = e.target.value;
        var isValid = this.validate(val);
        this.setState({
            value: val,
            valid: isValid
        });
    }

    render(){
        var emailColor= this.state.valid === true ? "blue" : "red";
        return(
            <div>
                <label><b>Email Address</b></label>
                <input type="email" value={this.state.value} placeholder="Enter your email address" onChange={this.onChange} style={{borderColor: emailColor}} required/>
            </div>
        );
    }
}

export default Email;