import {React, useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './NewRecipeForm.css'; 
import ValidateRecipeForm from './ValidateRecipeForm.js'; 

function NewRecipeForm()
{
    
    const { getAccessTokenSilently } = useAuth0();

    // State variables to hold the values of the form fields

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [servings, setServings] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState('');
    const [serveWith, setServeWith] = useState('');
    const [visibility, setVisibility] = useState('private');

    // State variable to hold error messages
    const [errors, setErrors] = useState({}); 

    // This function will be called when the form is submitted
    async function handleSave(submitE)
    {
        submitE.preventDefault(); // stops page reload
       
        const formData = { title, image, cuisine, prepTime, cookTime, servings, 
                           ingredients, instructions, serveWith, visibility };

        const formErrors = ValidateRecipeForm(formData);
        setErrors(formErrors);

        if (Object.keys(formErrors).length > 0) return; // stop submission if errors

        // send the recipeData to our backend or save it in state

        const recipeData = {
            title: title,
            image: image,
            cuisine: cuisine,
            prepTime: prepTime,
            cookTime: cookTime,
            servings: servings,
            ingredients: ingredients,
            instructions: instructions,
            serveWith: serveWith,
            visibility: visibility
        };

        console.log('RecipeData JSON:', JSON.stringify(recipeData));

        const token = await getAccessTokenSilently({
            audience: 'https://hm-cookbook.com/api', 
            scope: 'read:current_user'
        });

        fetch('http://localhost:4000/api/recipes', { //the backend URL
            method: 'POST', // specifies that we are sending data to the server
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}, //tells the backend that we’re sending JSON format
            body: JSON.stringify(recipeData) // Converts the recipeData object to a JSON string
        })

        .then( (response) => response.json() ) //converts response object to JSON
        .then( (data) => { console.log ('Your recipe is saved successfully:', data); } )
        .catch( (err) => { console.error ('Error while saving recipe:', err); })
        
    };

    return(
        
        <div className='container-fluid new-recipe'>
            <form className='new-recipe-form' onSubmit={handleSave}>
                    
                <div id='form-headline'>New Recipe</div>

                <div id='form-content'>

                    <div id='new-recipe-left-section'>

                        {/*Title*/}
                        <div id='new-recipe-title' className='form-fields'>
                            <label htmlFor='title'>Title</label>
                            <input type='text' id='title' className='form-control w-25' 
                                 value={title} onChange={(inputE) => setTitle(inputE.target.value)}
                            />
                            {errors.title && <div className="text-danger">{errors.title}</div>}
                        </div>


                        {/*Image*/}
                        <div id='new-recipe-image' className='form-fields'>
                            <label htmlFor='image'>Image</label>
                            <input type='file' id='image' className='form-control w-25'
                                   onChange={(inputE) => setImage(inputE.target.files[0])}                   
                            />
                            {errors.image && <div className="text-danger">{errors.image}</div>}
                        </div>


                        {/*Cuisine */}

                        <div id='new-recipe-cuisine' className='form-fields'>
                            <label htmlFor='cuisine'>Cuisine</label>
                            <input type='text' id='cuisine' className='form-control w-25' value={cuisine}
                                   onChange={(inputE) => setCuisine(inputE.target.value)}
                            />
                            {errors.cuisine && <div className="text-danger">{errors.cuisine}</div>}
                        </div>


                        {/*Servings, Prep time and Cook time*/}
                        <div id='new-recipe-servings-preptime-cooktime'>

                        <div id='new-recipe-servings' className='form-fields'>
                            <div className='form-row'>
                                <label htmlFor='servings'>Servings</label>
                                <input type='text' id='servings' className='form-control w-25' 
                                        value={servings} onChange={(inputE) => setServings(inputE.target.value)}
                            />
                            </div>
                            {errors.servings && <div className="text-danger">{errors.servings}</div>}
                        </div>                                          

                        <div id='new-recipe-preptime' className='form-fields'>
                            <div className='form-row'>
                                <label htmlFor='prep-time'>Prep time</label>
                                <input type='text' id='prep-time' className='form-control w-25' 
                                        placeholder='mins' value={prepTime}
                                        onChange={(inputE) => setPrepTime(inputE.target.value)}
                                />
                            </div>
                            {errors.prepTime && <div className="text-danger">{errors.prepTime}</div>}
                        </div>

                        <div id='new-recipe-cooktime' className='form-fields'>
                            <div className='form-row'>
                                <label htmlFor='cook-time'>Cook time</label>
                                <input type='text' id='cook-time' className='form-control w-25' 
                                        placeholder='mins' value={cookTime}
                                        onChange={(inputE) => setCookTime(inputE.target.value)}
                            />
                            </div>
                            {errors.cookTime && <div className="text-danger">{errors.cookTime}</div>}
                        </div>

                        </div>    


                        {/*Ingredients*/}
                        <div id='new-recipe-ingredients' className='form-fields'>
                            <label htmlFor='ingredients'>Ingredients</label>
                            <input type='text' id='ingredients' className='form-control w-25' 
                                        value={ingredients}
                                        onChange={(inputE) => setIngredients(inputE.target.value)}
                            />
                            {errors.ingredients && <div className="text-danger">{errors.ingredients}</div>}
                        </div>

                    
                        {/*Serve with and Visibility*/}
                        <div id='new-recipe-servewith-visibility'>
                            
                        <div id='new-recipe-servewith' className='form-fields'>
                            <label htmlFor='serve-with'>Serve with</label>
                            <input type='text' id='serve-with' className='form-control w-25' value={serveWith}
                                    onChange={(inputE) => setServeWith(inputE.target.value)}    
                            />
                            {errors.serveWith && <div className="text-danger">{errors.serveWith}</div>}
                        </div>


                        {/*Visibility*/}
                        <div id='new-recipe-visibility' className='form-fields'>                  
                            <div id='new-recipe-visibility-field'>
                            
                            <label htmlFor='Visibility'>Visibility</label>
                            <div id='new-recipe-visibility-options'>

                                <div><input type="radio" id="public" name="visibility" value="public"
                                    checked={visibility === "public"}
                                    onChange={(inputE) => setVisibility(inputE.target.value)}
                                /><label htmlFor="public">Public</label></div>

                                <div><input type="radio" id="private" name="visibility" value="private"
                                    checked={visibility === "private"}
                                    onChange={(inputE) => setVisibility(inputE.target.value)}
                                /><label htmlFor="private">Private</label></div>
                            </div>
                            </div>
                        </div>

                        </div>

                    </div> {/* End of left-section */}


                    {/*Instructions*/}
                    <div id='new-recipe-right-section' className='form-fields'>

                        <div id='new-recipe-instructions'>
                            <label htmlFor='instructions'>Instructions</label>
                            <textarea id='instructions'  
                                           value={instructions}
                                           onChange={(inputE) => setInstructions(inputE.target.value)}>
                            </textarea>
                            {errors.instructions && <div className="text-danger">{errors.instructions}</div>}
                        </div>

                        <button type='submit' id='new-recipe-save-button'>Save</button>

                    </div> {/* End of right-section */}
                 
                </div>   {/* End of form-content*/}               

            </form>
        </div>    
    )
}
export default NewRecipeForm;