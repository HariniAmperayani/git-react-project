import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import Spinner from './common/Spinner';

const PrivateRouting = ({ children }) => {

    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    const location = useLocation();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect({
                appState: { returnTo: location.pathname + location.search }
            });
        }
    }, [isAuthenticated, isLoading, loginWithRedirect, location]);

    if (isLoading) {
        return <Spinner />;
    }

    if (!isAuthenticated) {
        return null;
    }

    return children;

};

export default PrivateRouting;