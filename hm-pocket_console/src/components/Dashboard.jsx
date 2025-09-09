import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import CookbookDashboardBackground from './assets/CookbookDashboardBackground.jpg';

function Dashboard()
{

    const { isAuthenticated, logout, user } = useAuth0();


    const style = {
    height: '100vh',
    backgroundImage: `url(${CookbookDashboardBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    padding: '20px',
    }

    const viewAllRecipes = () => {
        console.log("Fetching all recipes...");
    }

    return (
        <>
            <div className='container-fluid cookbook-dashboard' style={style}>

                <header className='dashboard-header'>
                    
                    <div id = 'dashboard-left-section'>
                    
                    <nav className='navbar navbar-expand-lg'>
                       
                        <a className='navbar-brand dashboard-navbar-brand' href='/cookbook'>H&M Cookbook</a>
                        
                        <ul className='navbar-nav dashboard-navbar-nav'>
                                <li className='nav-item dashboard-item'>
                                    <Link className='nav-link dashboard-nav-link' to='/cookbook/new-recipe'>New Recipe</Link>
                                </li>
                                <li className='nav-item dashboard-item'>
                                    <Link className='nav-link dashboard-nav-link' to='/cookbook/view-recipes'
                                        onClick={viewAllRecipes}> View Recipes</Link>
                                </li>
                        </ul>
                        
                    </nav>
                    </div>

                    <div id = 'dashboard-right-section'>
                        <button id = 'dashboard-logout-button'
                             onClick= {() => {
                                localStorage.setItem('justLoggedOut', 'true');
                                logout({ logoutParams : { returnTo : window.location.origin + '/cookbook'} })
                             }}>
                              Logout</button>
                    </div>
                </header>

                <main>
                    
                    {isAuthenticated && (
                    <span id='dashboard-welcome-message'>Hey {user.name}! What’s on the menu today?</span>
                    )}

                </main>
            </div>
        </>
    )
    
}

export default Dashboard;