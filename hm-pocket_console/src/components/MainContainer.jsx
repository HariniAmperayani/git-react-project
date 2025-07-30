import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRouting';
import Homepage from './Homepage';
import Cookbook from './Cookbook';
import Dashboard from './Dashboard';
import NewRecipeLayout from './NewRecipeLayout';
import ViewRecipes from './ViewRecipes';

function MainContainer() 
{
    return(
        <>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/cookbook" element={<Cookbook />} />
            <Route path="/cookbook/dashboard"
                   element={<PrivateRoute> <Dashboard /></PrivateRoute>}/>
            <Route path="/cookbook/new-recipe"
                    element={<PrivateRoute> <NewRecipeLayout/> </PrivateRoute>} />
            <Route path="/cookbook/view-recipes"
                    element={<PrivateRoute> <ViewRecipes/> </PrivateRoute>} />
            
        </Routes>
        </>
    )
}
export default MainContainer;