const Clarifai = require('clarifai');

// initialize with your api key. This will also work in your browser via http://browserify.org/

export const appclar = new Clarifai.App({
  apiKey: '0d6f43a4849f41f7ada6f995687ac6e5',
});
