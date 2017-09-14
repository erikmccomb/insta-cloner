import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import axios from 'axios';
import {login} from '../actions/auth';


class Register extends React.Component {
  state = { email: '', password: '', password_confirmation: '' }

  handleChange = (e) => {const { name, value } = e.target; 
                        this.setState({ [name]: value })
  }

  checkPasswords = () => {
    let errors = [];
    const { password, password_confirmation } = this.state;
    if (password && password.length < 6) 
      errors.push('Password must be > 6 chars')

    if (password !== password_confirmation) 
      errors.push('Passwords do not match')

    return errors.map( (err, i) => <Header 
                                    key={i} 
                                    as="h4" 
                                    color="red">
                                    {err}
                                    </Header> 
                                  )
  }
  
    handleSubmit = (e) => {
      e.preventDefault();
      const { email, password } = this.state;
      axios.post('/auth', {email, password } )
      .then( res => login(res.data.data.id, res.headers) )
    }

  render() {
    let { email, password, password_confirmation } = this.state;
    return (
      <div>
        { this.checkPasswords() }
        <Header as="h2" textAlign="center">Register!</Header>
        <Form>
          <Form.Input
            label="Email"
            type="email"
            name="email"
            required
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            type="password"
            name="password"
            required
            value={password}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            type="password"
            name="password_confirmation"
            required
            value={password_confirmation}
            onChange={this.handleChange}
          />
          <Form.Button basic>Register</Form.Button>
        </Form>
      </div>
    )
  }
}

export default Register;