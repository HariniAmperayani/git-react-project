import React from 'react';

function AdditionComp2(props)
{
    alert(" The AdditionComp2 component is called");
    return(
        <>
        <div>
            <input type='text' id='box3' placeholder='Result' value={props.c}/>
        </div>
         
        </>
    );
}
export default AdditionComp2;