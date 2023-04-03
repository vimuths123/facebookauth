const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { accessToken } = JSON.parse(event.body);

  const response = await fetch(`https://graph.facebook.com/v12.0/me?fields=id,name,email&access_token=${accessToken}`);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};