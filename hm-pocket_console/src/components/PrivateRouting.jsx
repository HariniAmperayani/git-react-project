import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Spinner from './common/Spinner';

const PrivateRouting = ({ children }) => {

    const {isAuthenticated, isLoading, loginWithRedirect} = useAuth0();

    if(isLoading) {
        return <Spinner />;
    }

    if(!isAuthenticated) {
        loginWithRedirect({
            redirecturi: window.location.origin + '/cookbook/dashboard'
        });

    return null;
    }

    return children

};

export default PrivateRouting;