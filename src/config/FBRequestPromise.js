const FBSDK = require('react-native-fbsdk');
const { GraphRequestManager, GraphRequest } = FBSDK;

const FBRequestPromise = new Promise((resolve, reject) => {
    const responseCallback = ((error, result) => {
      if (error) {
        reject(error);
      } else {
      resolve(result);
      }
    });

  const profileRequestParams = {
    fields: {
      string: 'id, name, email, first_name, last_name, gender, picture'
    }
  }
  const profileRequestConfig = {
    httpMethod: 'GET',
    version: 'v2.5',
    parameters: profileRequestParams,
    accessToken: ''
  }
  const profileRequest = new GraphRequest('/me', null, responseCallback);
  new GraphRequestManager().addRequest(profileRequest).start();
});

export default FBRequestPromise;
