import React from 'react';
import About from './About';
import Contact from './Contact';
import LogIn from './LogIn';

function Welcome()
{
    const username = 'HariniMadan';
    const contactNo = '9876543210';
    const aboutUs = 'We are H&M'
    
    return(
        <div>
            <About aboutUs = {aboutUs}/> {/*passing aboutUs as a prop*/}
            <Contact contactNo = {contactNo}/>  {/*passing contactNo as a prop*/}
            <LogIn username={username}/> {/*passing username as a prop*/}
        </div>
    );
    
}

// const Welcome = () =>{
//     return (
//         <div>
//             <About/>
//             <Contact/>
//             <LogIn/>
//         </div>

//     );

// };

export default Welcome;






