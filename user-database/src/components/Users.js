import React from 'react';
import './Users.css';
import userData from '../Data/user-data';

function Users()
{
    console.log(userData);
    console.log("Number of users: " + userData.length);

       function getUserInfo()
       {
        console.log("getUserInfo is called");

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
            <td>{userData[i].Country}</td>
            {/* <td><a href='http://localhost:3000/users/details' target='blank'>more...</a></td> */}
            </tr>
            </>  );
            
            array.push(template);
         }
         return array;
         
       }

        return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <h3>Users</h3> 
                    <div class="table">
                    <table class="table table-condensed">
                        <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Country</th>
                        </tr>
                        </thead>
                        <tbody>{getUserInfo()}</tbody>                                            
                    </table>
                    </div>    
                    <a href='http://localhost:3000/users/users-details' target='blank'>more details...</a>   
                </div>    
            </div>
       </div>
    );
}
export default Users;