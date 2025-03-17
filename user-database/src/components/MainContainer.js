import React from 'react';
import {Route, Routes } from 'react-router-dom';

import Users from './Users';

function MainContainer()
{
    return(
        <>
            <Routes>
                 <Route path="/users" element={<Users/>} />
            </Routes> 
        </>
    );
}
export default MainContainer;