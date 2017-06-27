import { AsyncStorage } from 'react-native';
const FBSDK = require('react-native-fbsdk');
const { GraphRequestManager, GraphRequest } = FBSDK;

const FBRequestPromise = function(accessToken){
    return new Promise((resolve, reject) => {
      const responseCallback = ((error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });

    // const profileRequestParams = {
    //   fields: {
    //     string: 'id, name, email, first_name, last_name, picture'
    //   }
    // }
    // const profileRequestConfig = {
    //   httpMethod: 'GET',
    //   version: 'v2.5',
    //   parameters: profileRequestParams,
    //   accessToken: accessToken.toString()
    // }
    const profileRequest = new GraphRequest('/me?fields=name,picture,email,id', null, responseCallback);
    new GraphRequestManager().addRequest(profileRequest).start();
  });
}


export default FBRequestPromise;
