import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AdditionParent from './AdditionParent';
import Multiplication from './Multiplication';

function Main()
{
    return(
        <>         
        <Routes>
              <Route path='/addition' element={<AdditionParent/>} />
              <Route path='/multiplication' element={<Multiplication/>} />
        </Routes>          
        </>
    );
}

export default Main;