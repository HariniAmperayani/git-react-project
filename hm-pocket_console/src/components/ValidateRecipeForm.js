function ValidateRecipeForm(formData) 
{
  const verrors = {};

  if (!formData.title.trim()) verrors.title = "This field is required";

  if (!formData.cuisine.trim()) verrors.cuisine = "This field is required";


    // Validate image
  if (!formData.image) 
    {
        verrors.image = "This field is required";
    } 
  else if (!formData.image.type.startsWith("image/")) 
    {
        verrors.image = "File must be an image";
    }


    // Validate prepTime
  if (!formData.prepTime.trim()) 
    {
        verrors.prepTime = "This field is required";
    } 
    else if (isNaN(formData.prepTime) || Number(formData.prepTime) <= 0) 
    {
        verrors.prepTime = "Prep time must be a positive number";
    }


    // Validate cookTime
  if (!formData.cookTime.trim()) 
    {
        verrors.cookTime = "This field is required";
    } 
  else if (isNaN(formData.cookTime) || Number(formData.cookTime) <= 0) 
    {
        verrors.cookTime = "Cook time must be a positive number";
    }


    // Validate servings
  if (!formData.servings.trim()) 
    {
        verrors.servings = "This field is required";
    } 
  else if (isNaN(formData.servings) || Number(formData.servings) <= 0) {
        verrors.servings = "Servings must be a positive number";
    }


    // Validate ingredients
  if (!formData.ingredients || formData.ingredients.length === 0) {
    verrors.ingredients = "This field is required";
    }

    // Validate instructions
  if (!formData.instructions.trim()) verrors.instructions = "This field is required";

    // Validate serveWith
  if (!formData.serveWith.trim()) verrors.serveWith = "This field is required";

  
  return verrors;

}

export default ValidateRecipeForm;