import React, {Component} from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


class NavBar extends Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})
    }

    render() {
        const {activeItem} = this.state
        return (
            <Segment inverted>
                <Menu pointing secondary inverted>
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
            </Segment>
        )
    }
}

export default NavBar;