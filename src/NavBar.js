import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Liked">Liked</Link>
            </li>
        </ul>
    )
}

export default NavBar;