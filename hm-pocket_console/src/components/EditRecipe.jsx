import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {useParams, useNavigate} from 'react-router-dom';
import './EditRecipe.css';

function EditRecipe() 
{

    const {id} = useParams();
    const {getAccessTokenSilently, isAuthenticated, isLoading} = useAuth0();
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState(
        {
            title: '',
            image: '',
            cuisine: '',
            servings: '',
            prepTime: '',
            cookTime: '',
            ingredients: '',
            serveWith: '',
            visibility: '',
            instructions: '',
        });

    useEffect(() => {
    
        const fetchRecipe = async() =>{

            try
            {
                const token = await getAccessTokenSilently({
                    audience : 'https://hm-cookbook.com/api',
                    scope: 'read:current_user'
                });   
                
                const response = await fetch(`https://localhost:4000/api/recipes/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });

                if (!response.ok) throw new Error('Failed to fetch recipes');
                    
                //Parse the response data
                const data = await response.json();
                setRecipe(data);              
                
            }

            catch(error)
            {
                console.error('Error fetching recipe:', error);
            }

        };

        if(isAuthenticated && !isLoading)
        {
            fetchRecipe();
        }

    },[id, getAccessTokenSilently, isAuthenticated]);

    const handleSave = async (event) => {
        
        event.preventDefault();
        console.log("Updated recipe:", recipe);

        try
        {
            const token = await getAccessTokenSilently({
                audience: 'https://hm-cookbook.com/api',
                scope: 'update:recipe'
            });

            const response = await fetch(`https://localhost:4000/api/recipes/${id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(recipe)
            });

            if (!response.ok) throw new Error('Failed to update recipe');

        }

        catch (error)
        {
            console.error('Error updating recipe:', error);
            alert('Failed to update recipe. Please try again.');

        }

    }

    return(
        <>
        <div className='container-fluid edit-recipe-container'> 

            <form className='edit-recipe-form' onSubmit = {handleSave}>
                
                <div id='form-headline'>Edit Recipe</div>

                <div id='form-content'>

                    <div id='new-recipe-left-section'>

                        {/*Title*/}
                        <div id='edit-recipe-title' className='form-fields'>
                            <label htmlFor='title'>Title</label>
                            <input type='text' id='title' className='form-control w-25' 
                                   value={recipe.title} 
                                   onChange={(inputE) => setRecipe({ ...recipe, title: inputE.target.value })}
                            />
                        </div>
                        
                        {/*Cuisine */}
                        <div id='edit-recipe-cuisine' className='form-fields'>    
                            <label htmlFor='Cuisine'>Cuisine</label>
                            <input type='text' id='cuisine' className='form-control w-25'
                                    value={recipe.cuisine} 
                                    onChange={(inputE) => setRecipe({ ...recipe, cuisine: inputE.target.value })} 
                            />
                        </div>

                        {/*Servings, Prep time and Cook time*/}
                        <div id='edit-recipe-servings-prep-cook-time'>

                            <div id='edit-recipe-servings' className='form-fields'>
                                <label htmlFor='Servings'>Servings</label>
                                <input type='number' id='servings' className='form-control w-25'
                                        value={recipe.servings} 
                                        onChange={(inputE) => setRecipe({ ...recipe, servings: inputE.target.value })} 
                                />
                            </div>

                            <div id='edit-recipe-prep-time' className='form-fields'>
                                <label htmlFor='PrepTime'>Prep Time (minutes)</label>
                                <input type='number' id='prepTime' className='form-control w-25'
                                    value={recipe.prepTime}         
                                    onChange={(inputE) => setRecipe({ ...recipe, prepTime: inputE.target.value })} 
                                />
                            </div>

                            <div id='edit-recipe-cook-time' className='form-fields'>
                                <label htmlFor='CookTime'>Cook Time (minutes)</label>
                                <input type='number' id='cookTime' className='form-control w-25'
                                        value={recipe.cookTime}         
                                        onChange={(inputE) => setRecipe({ ...recipe, cookTime: inputE.target.value })} 
                                />
                            </div>

                        </div>
                            
                        {/*Ingredients*/}
                        <div id='edit-recipe-ingredients' className='form-fields'>
                            <label htmlFor='Ingredients'>Ingredients</label>
                            <textarea id='ingredients' className='form-control w-50' rows='4'
                                    value={recipe.ingredients}
                                    onChange={(inputE) => setRecipe({ ...recipe, ingredients: inputE.target.value })}
                            ></textarea>
                        </div>

                        {/*Serve With*/}
                        <div id='edit-recipe-serve-with' className='form-fields'>
                            <label htmlFor='ServeWith'>Serve With</label>
                            <input type='text' id='serveWith' className='form-control w-25'
                                    value={recipe.serveWith}
                                    onChange={(inputE) => setRecipe({ ...recipe, serveWith: inputE.target.value })} 
                            />
                        </div>
                            
                    </div> {/* End of left-section */}

                    {/* Right-section */}
                    <div id='right-section-instructions' className='form-fields'>   

                    {/*Instructions*/}
                    <div id='edit-recipe-instructions'>
                        <label htmlFor = 'Instructions'>Instructions</label>
                        <textarea id='instructions' className='form-control w-50' rows='6'
                                  value={recipe.instructions} 
                                  onChange={(inputE) => setRecipe({ ...recipe, instructions: inputE.target.value })}
                        ></textarea>

                    <button type="submit">Save</button>
                    
                    </div>{/* End of right-section */}
                            
                </div> {/* End of form-content*/}
                
            </div>

            </form>

        </div>     

        </>
    )

}

export default EditRecipe;