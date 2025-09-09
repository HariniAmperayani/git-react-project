import React from 'react';
import {Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import Users from './Users';
import UsersDetails from './UsersDetails';
import IndividualUserDetails from './IndividualUserDetails';
import LoginPage from './LoginPage';

function MainContainer()
{
    return(
        <>
            <Routes>
                 <Route path="/" element={<HomePage/>} />
                 <Route path="/users" element={<Users/>} />
                 <Route path="/users/users-details" element={<UsersDetails/>} />
                 <Route path="/users/individual-users" element={<IndividualUserDetails/>} />
                 <Route path="/login" element={<LoginPage/>}/>
            </Routes> 
        </>
    );
}
export default MainContainer;