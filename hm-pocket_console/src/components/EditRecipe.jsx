import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {useParams, useNavigate} from 'react-router-dom';

function EditRecipe() 
{

    const {id} = useParams();
    const {getAccessTokenSilently, isAuthenticated} = useAuth0();
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

            catch(error)
            {
                console.error('Error fetching recipe:', error);
            }

        };

    },[id, getAccessTokenSilently, isAuthenticated]);


    return(
        <>
        <div> Edit Recipe </div>

       

        </>
    )


}

export default EditRecipe;