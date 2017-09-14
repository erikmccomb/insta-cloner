import React from 'react';
import {Menu} from 'semantic-ui-react';

class NavBar extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Menu style={{ cursore: 'pointer' }} position= 'right'>
          { this.props.user ? 
            <Menu.Item name="logout" /> : 
            <Menu.Item name="login" /> }
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;