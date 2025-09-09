function ValidateRecipeForm(RecipeFormData) 
{
  const verrors = {};

  if (!RecipeFormData.title.trim()) verrors.title = "This field is required";

  if (!RecipeFormData.cuisine.trim()) verrors.cuisine = "This field is required";


    // Validate image
  if (!RecipeFormData.image) 
    {
        verrors.image = "This field is required";
    } 
  else if (!RecipeFormData.image.type.startsWith("image/")) 
    {
        verrors.image = "File must be an image";
    }


    // Validate prepTime
  if (!RecipeFormData.prepTime.trim()) 
    {
        verrors.prepTime = "This field is required";
    } 
    else if (isNaN(RecipeFormData.prepTime) || Number(RecipeFormData.prepTime) <= 0) 
    {
        verrors.prepTime = "Prep time must be a positive number";
    }


    // Validate cookTime
  if (!RecipeFormData.cookTime.trim()) 
    {
        verrors.cookTime = "This field is required";
    } 
  else if (isNaN(RecipeFormData.cookTime) || Number(RecipeFormData.cookTime) <= 0) 
    {
        verrors.cookTime = "Cook time must be a positive number";
    }


    // Validate servings
  if (!RecipeFormData.servings.trim()) 
    {
        verrors.servings = "This field is required";
    } 
  else if (isNaN(RecipeFormData.servings) || Number(RecipeFormData.servings) <= 0) {
        verrors.servings = "Servings must be a positive number";
    }


    // Validate ingredients
  if (!RecipeFormData.ingredients || RecipeFormData.ingredients.length === 0) {
    verrors.ingredients = "This field is required";
    }

    // Validate instructions
  if (!RecipeFormData.instructions.trim()) verrors.instructions = "This field is required";

    // Validate serveWith
  if (!RecipeFormData.serveWith.trim()) verrors.serveWith = "This field is required";

  
  return verrors;

}

export default ValidateRecipeForm;