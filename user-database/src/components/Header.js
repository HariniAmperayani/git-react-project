import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'; 
import './Header.css';

function Header() 
{
   
   const {isLoading, loginWithRedirect, isAuthenticated, logout} = useAuth0();

   function logoutWithRedirect()
   {
      logout({
                logoutParams: {
                returnTo: window.location.origin,
                }
            });
    }
   
   return (

        <header>
                                
                {/* navbar-expand-lg makes the navbar expand (horizontal layout) on large screens and collapse into a hamburger menu on smaller screens*/}
                    <nav className='navbar navbar-expand-lg'> 
                    
                        <a className='navbar-brand' id='custom-title' href='https://127.0.0.1:3000/'>H&M</a> {/*defines the brand/logo*/}

                        <ul className='navbar-nav'> {/*defines the list of nav items inside the navbar*/}
                           
                            <li className='nav-item' id='custom-navlist'> {/*defines a single nav item*/}
                                <a className='nav-link' href='#' id='custom-navitems'>Who we are</a>
                            </li>

                            <li className='nav-item' id='custom-navlist'>
                                <a className='nav-link' href='#' id='custom-navitems'>What we do</a>
                            </li>

                            <li className='nav-item' id='custom-navlist'>
                                <a className='nav-link' href='#' id='custom-navitems'>Join us</a>
                            </li>

                            <li className='nav-item' id='custom-navlist'>
                                <a className='nav-link' href='#' id='custom-navitems'> Get in touch</a>
                            </li>
                        </ul>

                        {!isAuthenticated && (
                        <ul className='navbar-nav ms-auto'> {/*ms-auto makes the navbar items align to the right*/}
                            <li className='nav-item'>
                                <button id='custom-auth-buttons' onClick={loginWithRedirect}> Login</button>
                            </li>                  
                        </ul>
                        )}

                        {isAuthenticated && (
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <button id='custom-auth-buttons' onClick={logoutWithRedirect}> Logout</button>
                            </li>
                        </ul>
                        )}

                    </nav>

        </header>       
    );
}
export default Header;