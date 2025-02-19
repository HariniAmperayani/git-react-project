import React from 'react';

function About (props) 
{

    console.log('AboutProps', props);
    return <h1 id='about'>About : {props.aboutUs}</h1>
    
};


export default About;