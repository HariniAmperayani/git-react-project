import configData from './auth0_config.json';

const auth0Config = () => {

    return {
        domain : configData.domain,
        clientId : configData.clientId,
        audience : configData.audience,
    };
};

export default auth0Config;