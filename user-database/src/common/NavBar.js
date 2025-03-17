import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>
{
    return(
        <>
            <nav>
                <ul>
                    <li><Link to ="/users"></Link></li>
                    <li><Link to ="/users/users-details"></Link></li>
                </ul>

            </nav>
        </>
    );
}

export default NavBar;
