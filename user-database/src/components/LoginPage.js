import React from 'react';
import './LoginPage.css';

function LoginPage() 
{
    return (
        <>
            <div className='container-fluid custom-loginpage-container'>                           
                
                <div className='row custom-loginpage-row1' id='login-page-header'>
                    <div className = 'col-xl-12'>
                        <h2>H&M</h2>
                    </div>
                
                </div>

                <div className='row custom-loginpage-row2'>
                    <div className='col-xl-4'></div>

                    <div className='col-xl-4 custom-loginpage-col'>

                        <form action='' target='top'>

                            <div id='username'>
                                <label for = 'Username' id='uname' className='form-label'> Username</label>
                                <div><input type ='textfield' className='form-control-sm custom-loginpage-textfield'size='30' required/>
                                </div>
                            </div>

                            <div id='password'>
                                <label for = 'Password' id='pwd' className='form-label'> Password</label>
                                <div><input type ='password' id='pwd' name='pwd' size='30' required
                                        className='form-control-sm custom-loginpage-textfield'
                                        pattern='/^(?=.*[a-z])(?=.*[A-Z])(?=.*/d)(?=.*[@$!%*?&])[a-zA-Z/d@$!%*?&]{7,15} $/'/>
                                </div>
                            </div>

                            <button type="submit" id="buttonId" onclick='{Users/}'>Log In</button>
                        </form> 
                         
                    </div>

                    <div className='col-xl-4'></div>
                
                
                </div>

            </div>

            

        </>
    );
}

export default LoginPage;