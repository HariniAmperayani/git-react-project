import React from 'react';
import './Users.css';
import userData from '../Data/user-data';

function UsersDetails()
{
   function getUsersDetails()
   {
        console.log("getUsersDetails is called");

        var array=[];

        for(let i=0; i<userData.length; i++)
            {
              var template=(
              <>
               <tr>   
               <td>{userData[i].First_Name}</td>
               <td>{userData[i].Last_Name}</td>
               <td>{userData[i].Gender}</td>
               <td>{userData[i].Age}</td>
               <td>{userData[i].Email}</td>
               <td>{userData[i].Contact_No}</td>
               <td>{userData[i].City}</td>
               <td>{userData[i].Country}</td>
               <td>{userData[i].Interests}</td>
               </tr>
               </>  );
               
               array.push(template);
            }   
        return array;
   }
     
    return (
    
        <div class="container-fluid">
            <div class='row'>
                <div class='col-lg-12'>
                    <div class='table'>
                        <h3>Users Details</h3>
                        <table class = 'table table-condensed'>
                            <thead>
                                <tr>
                                     <th>Firstname</th>
                                     <th>Lastname</th>
                                     <th>Gender</th>
                                     <th>Age</th>
                                     <th>Email</th>
                                     <th>Contact No</th>
                                     <th>City </th>
                                     <th>Country</th>
                                     <th>Interests</th>
                                </tr>
                            </thead>
                            <tbody>{getUsersDetails()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsersDetails;