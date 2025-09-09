import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './ViewRecipes.css'

function ViewRecipes()
{

    const [recipes, setRecipes] = useState([]);
    const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();
    
    useEffect(() => {
    
        // Function to fetch recipes from the backend
        const fetchRecipes = async () => {
                
            try 
            {
                const token = await getAccessTokenSilently({
                              audience: 'https://hm-cookbook.com/api',
                              scope: 'read:current_user'
                            });
                    
                const response = await fetch('https://localhost:4000/api/recipes', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                            }
                    });
    
                if (!response.ok) throw new Error('Failed to fetch recipes');
                    
                const data = await response.json();
                console.log('Fetched recipes:', data); 
                setRecipes(data);                            
                
            } 
                
                catch (error) 
                {
                    console.error('Error fetching recipes:', error);
                }
                
            };
    
    
            if (isAuthenticated && !isLoading) 
            {
                fetchRecipes();
                
            }
        }, [getAccessTokenSilently, isAuthenticated, isLoading]);
        
    useEffect( () => {
                        console.log('Updated recipes state:', recipes);
                     }, [recipes] );

    const handleClick = (id) => {
        navigate(`/cookbook/recipe-details/${id}`);
    };
 
    return(
        
        <div className='container-fluid view-recipes'>

            <header className='view-recipes-header'>
                <nav className='navbar navbar-expand-lg'>
                    <a className='navbar-brand' href='https://127.0.0.1:3000/cookbook/dashboard'>H&M Cookbook</a>                   
                </nav>
            </header>

            <div className='view-recipes-content'>
                <div id='headline'>Recipes</div>              
                 
                {recipes.length === 0 ? (
                    <p>No recipes found</p>
                ) : (
                <ol>
                    {recipes.map( (recipe) => (
                    <li key={recipe.id} onClick={() => handleClick(recipe.id)}> {recipe.title} </li>                                                                                                     
                    ) ) }
                </ol>
                )
                }                          
                
            </div>

        </div>

    );
}

export default ViewRecipes;