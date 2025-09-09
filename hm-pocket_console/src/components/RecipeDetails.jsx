import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './RecipeDetails.css';

function RecipeDetails() 
{

  const {id} = useParams();
  const [recipe, setRecipe] = useState(null);
  const {getAccessTokenSilently, isAuthenticated, isLoading} = useAuth0();

  const navigate = useNavigate();

  useEffect(() => {

    const fetchRecipe = async() =>{

      try
      {
          const token = await getAccessTokenSilently({
                audience: 'https://hm-cookbook.com/api',
                scope: 'read:current_user'
          });

          //Make an API call to fetch recipes
          const response = await fetch('https://localhost:4000/api/recipes', {
                method: 'GET',
                headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                        }
          });

          if (!response.ok) throw new Error('Failed to fetch recipes');
                    
          //Parse the response data
          const data = await response.json();
          console.log('Fetched recipes:', data); 

          //Find the specific recipe by ID
          const specificRecipe = data.find(recipe => recipe.id === Number(id));
              if (specificRecipe) setRecipe(specificRecipe);
              else setRecipe({ error: 'Recipe not found' });

      } 

      catch (error) 
      {
          console.error('Error fetching recipes:', error);
          setRecipe({error: 'Failed to fetch recipe details'});
      }

    };

    if (isAuthenticated && !isLoading) 
            {
                fetchRecipe();
                
            }
  }, [id, getAccessTokenSilently, isAuthenticated, isLoading]);  

  useEffect( () => {
                        console.log('Updated recipes state:', recipe);
                     }, [recipe] );


 const handleDelete = async () => {

    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    
    try {

          const token = await getAccessTokenSilently({
                audience: 'https://hm-cookbook.com/api',
                scope: 'delete:recipe'
            });

          const response = await fetch(`https://localhost:4000/api/recipes/${id}`, {
                method: 'DELETE',
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });

          if (!response.ok) throw new Error('Failed to delete recipe');

          alert('Recipe deleted successfully!');
          navigate('/cookbook/view-recipes');
        } 
    
    catch (error) 
      {
        console.error('Error deleting recipe:', error);
         alert(`Failed to delete recipe: ${error.message}`);
      }
  };
 
  return(
    <>
      <div className='container-fluid recipe-details-container'>
        
        <header className='recipe-details-header'>
          <nav className='navbar navbar-expand-lg'>
            <a className='navbar-brand recipe-details--navbar-brand' href='/cookbook/dashboard'>H&M Cookbook</a>
          </nav>
        </header>

        <div className='recipe-details-content'>
          
          <div id='top-section'>
              <div id='headline'>{recipe?.title}</div> 

              <div id='recipe-actions'>
                  <button id='edit-button' 
                          onClick= {() =>navigate(`/cookbook/edit-recipe/${id}`)}> Edit</button>
                  <button id='delete-button' onClick = {() => handleDelete()}> Delete</button>
              </div>
          </div>
          
          {recipe ? (
                      recipe.error ? (
                      <div>Error: {recipe.error}</div>
                      ) : (
                            <>
                            <div className='row' id='grouped-sections'>

                                <div className= 'col-xl-5' id='left-section'>                                            
                                    {recipe.image && (
                                    <img src = {`https://localhost:4000/uploads/${recipe.image}`} 
                                      alt={recipe.title} />                                                    
                                        
                                    )}
                                </div>

                                <div className= 'col-xl-7' id='right-section'>
                                    <div>Cuisine : {recipe.cuisine}</div>
                                    <div>Prep Time : {recipe.prepTime} mins</div>
                                    <div>Cook Time : {recipe.cookTime} mins</div>
                                    <div>Servings : {recipe.servings}</div>
                                    <div>Ingredients : {recipe.ingredients}</div>
                                    <div>Serve with: {recipe.serveWith}</div>
                                    <div>Visibility : {recipe.visibility}</div>
                                </div>   
                            
                            </div> 
                            <div>Instructions : {recipe.instructions}</div> 
                            </>
                          )
                      ) : (
                        <div>Loading...</div>
                      )}                    
        </div>

      </div>

    </>
  );

}

export default RecipeDetails;


