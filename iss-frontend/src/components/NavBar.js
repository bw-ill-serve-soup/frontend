import React, {Component} from 'react';
import {Menu, Segment} from 'semantic-ui-react';
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
                        name='home'
                        active={activeItem=== 'home'}
                        onClick={this.handleItemClick}
                    >
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item
                        name='add inventory'
                        active={activeItem === 'add inventory'}
                        onClick={this.handleItemClick}
                    >
                        <Link to='/add-form'>Add Inventory</Link>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                        >
                            <Link to='/login'>Login</Link>
                        </Menu.Item>
                        <Menu.Item
                            name='signup'
                            active={activeItem === 'signup'}
                            onClick={this.handleItemClick} 
                        >
                            <Link to='/signup'>Signup</Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default NavBar;