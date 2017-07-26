 exports.creds = {

     // The app id you get from the registration portal
     clientID: '********-****-****-****-************',

     // The app id you get from the registration portal
     audience: '********-****-****-****-************',

     validateIssuer: true,

     // Passport will use this URL to fetch the token validation information from Azure AD
     identityMetadata: 'https://login.microsoftonline.com/<your tenant name>/.well-known/openid-configuration'
 };
