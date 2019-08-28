import React, {Component} from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const BottomNav = styled.div`
    top: 100px;
    width: 100%;
    height: 25em;
    min-width: 100%;
    min-height: 100%;
    background-image: url(https://images.pexels.com/photos/6971/wood-light-summer-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-size: cover;
    
`;


class NavBar extends Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})
    }

    render() {
        const {activeItem} = this.state
        return (
            <Segment.Group>
                <Segment color='white' inverted>
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
                            to='/add_item'
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
                <BottomNav></BottomNav>
            </Segment.Group>
        )
    }
}

export default NavBar;