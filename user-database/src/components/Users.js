import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Users.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import userData from '../Data/user-data';
import Header from './Header';
import { useAuth0 } from '@auth0/auth0-react';

function Users()
{
    
    const { isAuthenticated } = useAuth0();

    const navigate = useNavigate();
    
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

            <td>
                <button className="custom-users-button" onClick ={() => navigate(`/users/individual-users?id=${i}`)}>
                <i className='bi bi-info-circle custom-iIcon'></i>
                </button>
            </td>

            { /* To dynamically generate links for navigation in the rendered UI. */
            /* <td><a href={`http://localhost:3000/users/individual-users?id=${i}`} 
            target='_top'><i className='bi bi-info-circle custom-iIcon'></i></a></td> */}

            </tr>
            </>  );
            
            array.push(template);
         }
         return array;
         
       }

       return (
        <>
            {isAuthenticated && (
                <div className="container-fluid custom-users-container">
                    <Header />
                    <div className="row custom-row">
                        <div className="col-lg-12">
                            <h3>Users</h3>
                            <div className="table">
                                <table className="table table-condensed">
                                    <thead>
                                        <tr>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>Gender</th>
                                            <th>Age</th>
                                            <th>Country</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>{getUserInfo()}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!isAuthenticated && (

                <h4>
                    <h4>Access Denied</h4>
                    <p>You need to log in to view this page. Please <a href="/">Login</a> to continue.</p>
                </h4>
            
            )}
        </>
    );
}
export default Users;