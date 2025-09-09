import React from 'react';
import NewRecipeForm from './NewRecipeForm';
import CookbookNewRecipeBackground from './assets/CookbookNewRecipeBackground.jpg';


function NewRecipeDesign()
{

    const style = {
    height: '100vh',
    backgroundImage: `url(${CookbookNewRecipeBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    // color: 'white',
    // padding: '20px',
    }


    return(
        <>
            <div className='container-fluid newrecipelayout-container' style={style}>
                <div className='row newrecipelayout-row'>
                    
                    <div className='col-xl-12'>
                    
                        <header className='newrecipelayout-header'>
                            <nav className='navbar navbar-expand-lg'>
                                <a className='navbar-brand newrecipelayout-navbar-brand' href='/cookbook/dashboard'>H&M Cookbook</a>
                            </nav>                        
                        </header>

                    </div>


                    <div className='col-xl-12'> <NewRecipeForm /> </div>
                    

                </div>
            </div>
        </>
    )
}
export default NewRecipeDesign;