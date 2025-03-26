import React from 'react';
import { useSearchParams } from 'react-router-dom';

import userData from '../Data/user-data';
import './IndividualUserDetails.css';

function IndividualUserDetails()
{
   const [searchParams] = useSearchParams();

   const urlId = parseInt(searchParams.get('id'));

   console.log("urlId: " + urlId);

     return (
        <div className="container-fluid custom-individualuser-container">

            <h3>Individual User Details</h3> 

            <div className="row">

                <div className="col-lg-3 custom-col-1">
           
                     <div id="id1">

                            <ul>
                                <li>First Name : {userData[urlId].First_Name}</li>
                                <li>Last Name : {userData[urlId].Last_Name}</li>
                                <li>Gender : {userData[urlId].Gender}</li>
                                <li>Age : {userData[urlId].Age}</li>
                            </ul>
                                          
                     </div>
                </div>


                <div className="col-lg-3 custom-col-2">               

                     <div id="id2">

                        <ul>
                            <li>Email : {userData[urlId].Email}</li>
                            <li>Contact No :  {userData[urlId].Contact_No}</li>
                            <li>City : {userData[urlId].City}</li>
                            <li>Country : {userData[urlId].Country}</li>
                        </ul>

                     </div>
                </div>
                         
            </div> 

            <div className="row">           
                <div className="col-lg-3 custom-col-3">
                    <div id="id3">Interests : {userData[urlId].Interests}</div>
                </div>
            </div>
           
            <a href='http://localhost:3000/users'><button className='custom-individualusers-button'>Back</button></a>
        </div>
    );
}

export default IndividualUserDetails;