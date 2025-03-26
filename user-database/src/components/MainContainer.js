import React from 'react';
import {Route, Routes } from 'react-router-dom';

import Users from './Users';
import UsersDetails from './UsersDetails';
import IndividualUserDetails from './IndividualUserDetails';

function MainContainer()
{
    return(
        <>
            <Routes>
                 <Route path="/users" element={<Users/>} />
                 <Route path="/users/users-details" element={<UsersDetails/>} />
                 <Route path="/users/individual-users" element={<IndividualUserDetails/>} />
            </Routes> 
        </>
    );
}
export default MainContainer;