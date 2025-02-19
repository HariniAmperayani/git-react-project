import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>
{
    return(
        <>
            <nav>
                <ul>
                    <li> <Link to = "/addition">Addition</Link></li>
                    <li> <Link to ="/multiplication"> Multiplication </Link></li>
                    
                </ul>
            </nav>
        </>
    );
}

export default NavBar;