import React, { useContext } from 'react'
import { Button, Form, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import '../Navbar/Navbar.css'
import Avatar from '../Avatar/Avatar';
import { UserContext } from '../Auth/Authorization';

const Navbar = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext);
    const { user } = useContext(UserContext);
    console.log(user);
    const id = user ? user.id : null;
    console.log(id);


    const handleLogout = () => {
        setUser(null);
        navigate('/auth')
    };
    return (
        <Nav className='Nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src='https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg' alt='logo' width={150} />
                </Link>
                <p to="/" className='nav-item nav-btn'>Questions</p>
                <Link to="/" className='nav-item nav-btn'>Company</Link>
                <Form>
                    <input type='text' placeholder='search...' />
                    <SearchIcon className='search-icon' />
                </Form>
                {user === null ?
                    <Link to='/auth' className='nav-item nav-links'>Log in</Link> :

                    <div className='nav-account'>
                        <Avatar backgroundColor='#009dff' px='10px' py='15px' borderRadius='50%' color='white'>
                            <Link to={`/userinfo/${id}`} style={{ color: "white", textDecoration: "none" }}>S</Link>
                        </Avatar>
                        <Button className='nav-item nav-links' onClick={handleLogout}>Log Out</Button>
                    </div>

                }
            </div>
        </Nav>
    )
}

export default Navbar