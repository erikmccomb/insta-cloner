import React from 'react';
import {Form, Header} from 'semantic-ui-react';

// Does it have state? yes. Make a class
class Register extends React.Component {
  state = { email: '', password: '', password_confirmation: ''}

  handleChange = (e) => {
    const{ name, value } = e.target;
    this.setState({ [name]: value })
  }

  checkPasswords = () => {
    let errors = [];
    const { password, password_confirmation } = this.state;
    if ( password.length < 6 )
    errors.push('Password must be more than 6 characters long.')

    if( password != password_confirmation)
      errors.push('Passwords do not match')

    return errors.map (( err, i) => <Header key={i} as ="h4" color="red">{err}</Header> )
  }

  render() {
    let { email, password, password_confirmation } = this.state;
    return(
      <div>
        {this.checkPasswords() }
        <Header as="h2" textAlign="Center">Register your ne account!</Header>
        <Form>
          <Form.input 
            label="Email"
            type="email"
            name="email"
            required
            value={email}
            onchange={this.handleChange}
          />
          <Form.input
            label="Password"
            type="password"
            name="password"
            required
            value={password}
            onchange={this.handleChange}
          />
          <Form.input
            label="Password Confirmation"
            type="password"
            name="password_confirmation"
            required
            value={password_confirmation}
            onchange={this.handleChange}
          />
          <Form.Button>Register</Form.Button>
        </Form>
      </div>
    )
  }
}

export default Register;