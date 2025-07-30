import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function ViewRecipes() 
{
    const [recipes, setRecipes] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {

        // Function to fetch recipes from the backend
        const fetchRecipes = async () => {
            
            try 
            {
                const token = await getAccessTokenSilently({
                    audience: 'https://hm-cookbook.com/api',
                    scope: 'read:current_user'
                });
                
                const response = await fetch('http://localhost:4000/api/recipes', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                        }
                });

                if (!response.ok) throw new Error('Failed to fetch recipes');
                
                const data = await response.json();
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

    // Function to handle checkbox change
    const handleCheckboxChange = (id) => {
            setSelectedIds( prevIds => 
                prevIds.includes(id) 
                ? prevIds.filter(item => item !== id) //removes the id
                : [...prevIds, id] ); //adds the id
    };

    const handleDeleteSelected = async () => {
            try {
                    const token = await getAccessTokenSilently();

                    await Promise.all(
                    selectedIds.map(id =>
                    fetch(`http://localhost:4000/api/recipes/${id}`, {
                            method: 'DELETE',
                            headers: {
                                     'Authorization': `Bearer ${token}`,
                                     'Content-Type': 'application/json'
                                    }
                          })
                        )
                    );

                    // Update UI after deletion
                    setRecipes(prev => prev.filter(recipe => !selectedIds.includes(recipe._id)));
                    setSelectedIds([]);  // clear selection
                } 
            catch (error) 
            {
            console.error('Error deleting selected recipes:', error);
            }
    };

    return (
        <>
            <h4>View Recipes</h4>

            <button onClick={handleDeleteSelected} disabled={selectedIds.length === 0}>
                    Delete Recipe
            </button>

            {recipes.length === 0 ? (
                    <p>No recipes found</p> //  this shows only if array is empty
            ) : (
                
                <ol>            
                {recipes.map(   (recipe) => (
                <li key={recipe.id}>
                <input type="checkbox" checked={selectedIds.includes(recipe.id)}
                       onChange={() => handleCheckboxChange(recipe.id)}
                />{recipe.title} </li>
                )   )   }
                </ol> 
            )}
        </>
    );
}

export default ViewRecipes;