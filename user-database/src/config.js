import configJson from './auth_config.json';

function getConfig()
{
    return {
        domain : configJson.domain,
        clientId: configJson.clientId,
        redirectUri: configJson.redirectUri,
    };
}

export default getConfig;