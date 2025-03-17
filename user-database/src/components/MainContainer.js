import React from 'react';
import {Route, Routes } from 'react-router-dom';

import Users from './Users';
import UsersDetails from './UsersDetails';

function MainContainer()
{
    return(
        <>
            <Routes>
                 <Route path="/users" element={<Users/>} />
                 <Route path="/users/users-details" element={<UsersDetails/>} />
            </Routes> 
        </>
    );
}
export default MainContainer;