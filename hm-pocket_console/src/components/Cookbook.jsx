import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';
import Spinner from './common/Spinner';
import './Cookbook.css';
import CookbookHomepageBackground from './assets/CookbookHomepageBackground.jpg';


function Cookbook() 
{
    const { isAuthenticated, isLoading, loginWithRedirect, logout, user} = useAuth0();
    const [showLogOutMessage, setShowLogOutMessage] = useState(false);

    useEffect( () => {
        if (!isAuthenticated) {
        const justLoggedOut = localStorage.getItem('justLoggedOut');
        if( justLoggedOut === 'true' ) {
            setShowLogOutMessage(true);
            localStorage.removeItem('justLoggedOut');
        }

    }}, [isAuthenticated]);

    if(isLoading){
        return <Spinner/>;
    }

    const style = {
    height: '100vh',
    backgroundImage: `url(${CookbookHomepageBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    padding: '20px',
    }

    return (
        <>
        <div className='container-fluid cookbook-homepage' style={style}>
        
        <header className='cookbook-header'>
           <div id = 'cookbook-left-section'>
                
                <nav className='navbar navbar-expand-lg'>
                    <a className='navbar-brand cookbook-navbar-brand' href='/cookbook'>H&M Cookbook</a>
                
                {isAuthenticated &&(    
                    <ul className='navbar-nav cookbook-navbar-nav'>
                                <li className='nav-item cookbook-item'>
                                    <a className='nav-link cookbook-nav-link' href='/cookbook/dashboard'>Dashboard</a>
                                </li>
                                
                    </ul>
                )}
                </nav>
           </div>

           <div id = 'cookbook-right-section'>
                {!isAuthenticated ? (
                            <>
                            <button id = 'cookbook-login-button' 
                            onClick= { () => {
                                loginWithRedirect ({redirectUri: window.location.origin + '/cookbook/dashboard'})
                            }}>
                            Login</button>
                            </>
                            ) : (
                                
                            <>
                            <button id = 'cookbook-logout-button'
                             onClick= {() => {
                                localStorage.setItem('justLoggedOut', 'true');
                                logout({ logoutParams : { returnTo : window.location.origin + '/cookbook'} })
                             }}>
                            Logout</button>
                            </>
                            )
                        }
           </div>
         
         </header>
        
         <main>
                <div className='cookbook-content'>

                    {showLogOutMessage? (
                        <div id='cookbook-logout-message'> Goodbye for now! Come back anytime to explore new recipes 
                        </div> 
                    ) :

                    !isAuthenticated ? (
                        
                        <span id='cookbook-welcome-message'> 
                        Your personal recipe organizer — save, browse, and manage all your favorite recipes in one place.
                        </span>
                        ) : (
                        <span id='cookbook-welcome-message'>Hey {user.name}! What’s on the menu today?</span>
                        )
                    }
                    
                </div>
         </main>
         </div>
        
         </>
    );
}
export default Cookbook;