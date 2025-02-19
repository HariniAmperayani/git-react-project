import React from 'react';

function LogIn(props)
{
    console.log("LoginProps",props);

    return (
    <div>

    <div id='username'>
    <label for = 'Username'>Username </label> {/*accessing the props*/}
    <input id='textbox' type ='text' name='uname' value={props.username}/>  
    </div>
    
    <div id='password'>
    <label for = 'Password'>Password</label>
    <input id='textbox' type = 'password' name='pwd'></input>
    </div>

    </div>
    );

};


export default LogIn;