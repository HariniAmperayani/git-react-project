import React from 'react';

function Contact(props) 
{
    console.log("ContactProps",props);
    return <h1 id='contact'>Contact : {props.contactNo}</h1>
}

export default Contact;