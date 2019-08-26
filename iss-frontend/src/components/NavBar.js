import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class NavBar extends Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})
    }

    render() {
        const {activeItem} = this.state
        return (
            <div className='navigation-container'>
                <Menu pointing secondary>
                    <Menu.Item
                        as={Link}
                        name='home'
                        to='/'
                        active={activeItem=== 'home'}
                        onClick={this.handleItemClick}
                    >
                        Home
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        name='add inventory'
                        to='/add-form'
                        active={activeItem === 'add inventory'}
                        onClick={this.handleItemClick}
                    >
                        Add Inventory
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item
                            as={Link}
                            name='login'
                            to='/login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                        >
                            Login
                        </Menu.Item>
                        <Menu.Item
                            as={Link}
                            name='signup'
                            to='/signup'
                            active={activeItem === 'signup'}
                            onClick={this.handleItemClick} 
                        >
                            Signup
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default NavBar;