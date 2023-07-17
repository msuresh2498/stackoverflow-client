import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import PublicIcon from '@mui/icons-material/Public';

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeClassName='active' >
                    <p style={{ paddingLeft: "10px" }}>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/questions' className='side-nav-links' activeClassName='active' style={{ display: "flex" }}>
                        <p><PublicIcon /></p>
                        <p>Questions</p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeClassName='active'>
                        <p style={{ paddingLeft: "20px" }}>Tags</p></NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeClassName='active'>
                        <p style={{ paddingLeft: "20px" }}>Users</p></NavLink>
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar