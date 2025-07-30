import './Header.css';
import { useAuth0 } from '@auth0/auth0-react';

function Header() 
{
    const { loginWithRedirect, logout, isAuthenticated, isLoading} = useAuth0();

    
    return(
        <>
            <header className='homepage-header'>
                    
                    <div id='homepage-left-section'>                           

                    <nav className='navbar navbar-expand-lg'>
                                
                                <a className='navbar-brand' href='/'>H&M Pocket Console</a>

                                <ul className='navbar-nav'>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/about'>Who we are</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a className='nav-link' href='/what-we-do'>What we do</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a className='nav-link' href='/products'>Our Products</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a className='nav-link' href='/careers'>Careers</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a className='nav-link' href='/contact-us'>Contact Us</a>
                                    </li>
                                </ul>
                    </nav>
                    
                    </div>

                    <div id='homepage-right-section'>
                        {isLoading && <span className='loading-message'>Loading...</span>}

                        {/* If user is not authenticated, display login button
                            else display welcome message and logout button */}

                        {!isAuthenticated ? (
                            <>
                            <button id = 'homepage-login-button'onClick={loginWithRedirect}>Login</button>
                            </>
                            ) : (
                                
                            <>
                            <button id = 'homepage-logout-button'
                             onClick= {() => logout({ logoutParams : { returnTo : window.location.origin}})
                                      }>Logout</button>
                            </>
                            )
                        }
                    </div>

            </header>

        </>
    );
}
export default Header;