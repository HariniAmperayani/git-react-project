import EditRecipe from './EditRecipe.jsx';
import CookbookNewRecipeBackground from './assets/CookbookNewRecipeBackground.jpg';

function EditRecipeLayout()
{

    const style = {
    height: '100vh',
    backgroundImage: `url(${CookbookNewRecipeBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    }

return(


            <div className='container-fluid editrecipelayout-container' style={style}>

                <div className='row editrecipelayout-row'>
                    <div className='col-xl-12'>
                    
                        <header className='editrecipelayout-header'>
                            <nav className='navbar navbar-expand-lg'>
                                <a className='navbar-brand editrecipelayout-navbar-brand' href='/cookbook/dashboard'>H&M Cookbook</a>
                            </nav>                        
                        </header>

                    </div>


                    <div className='col-xl-12'> <EditRecipe /> </div>
                </div>    

            </div>
)
    
}
export default EditRecipeLayout;