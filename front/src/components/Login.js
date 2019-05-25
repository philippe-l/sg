import React, {Component} from 'react';

export default class Login  extends Component {

    constructor(props) {
        super(props);
        this.state = {
          signIn: false
        }
        this.handler = this.handler.bind(this);
    }
      
    handler() {
    this.setState({signIn: true});
    }

    render(){
        return(
            <div className='loginForm'>
                {(this.state.signIn ? <User /> : <Form handler={this.handler}/>)}
            </div>
        );
    }
}


class Form extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        formErrors: {email: '', password: '', error: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
      }
      this.handleUserInput = this.handleUserInput.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
      this.errorClass = this.errorClass.bind(this);
    }
    
    handleUserInput (e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value}, () => { this.validateField(name, value)});
    }
    
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
                  console.log("email valid: ", emailValid);
                  console.log("password valid: ", passwordValid);
      switch(fieldName) {
        case 'email':
          //emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          emailValid = re.test(value);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                     emailValid: emailValid,
                     passwordValid: passwordValid},
                        this.validateForm);
    }
    
    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
    
    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }
    
    handleClearForm(e) {
       e.preventDefault();
       this.setState({
           email: '',
           password: '',
           emailValid: false,
           passwordvalid: false,
           formValid: false
       });
    }
    
    handleFormSubmit(e) {
      e.preventDefault();
      
      let fieldValidationErrors = this.state.formErrors;
      
      if(this.state.email === "test@test.com" && this.state.password === "test") {
        this.props.handler();
      } else {
        console.log('here');
        fieldValidationErrors.error = ': Your password does not match the email account';
        this.setState({
          formErrors: fieldValidationErrors
        });
      }
      
      this.handleClearForm(e);
    }
    
    render() {
      return <form className="demoForm" onSubmit={this.handleFormSubmit}>
        <h2>Sign up</h2>
        <div className="panel panel-default">
          {(this.state.formErrors.email.length > 0 ? <p>{"email"} {this.state.formErrors.email}</p> : '')}
          {(this.state.formErrors.password.length > 0 ? <p>{"password"}{this.state.formErrors.password}</p> : '')}
          {(this.state.formErrors.error.length > 0 ? <p>{"error"} {this.state.formErrors.error}</p> : '')}
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label type="email">Email address</label>
          <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleUserInput} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label type="password">Password</label>
          <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handleUserInput} />
        </div>
        <input type="submit" className="btn btn-primary" disabled={!this.state.formValid} value="Sign up"/>
      </form>;
    }  
  }
  
  class FormErrors extends React.Component {
    render() {
      <div className='formErrors'>
        
      </div>
    }
  }