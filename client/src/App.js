import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Register from './components/Register';
import NavBar from './components/NavBar';
import {tokenCheck} from './actions/auth';
import axios from 'axios';


class App extends Component {
  state = { user: {} }

  componentDidMount() {
    let user = tokenCheck();
    if (user) {
      for (let key of Object.keys(user) ) {
        axios.defaults.headers.common[key] = user[key]
      }

      axios.get('/auth/validate_token')
        .then( ( {data: {data } } ) => {
        this.setState({user: {...user, ...data }})
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar user={this.state.user.id} />
        <Container>
          <Register />
        </Container>
      </div>
    );
  }
}

export default App;
