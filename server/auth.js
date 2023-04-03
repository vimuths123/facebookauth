const axios = require('axios');

exports.handler = async (event) => {
  const accessToken = JSON.parse(event.body).accessToken;
  const fields = 'id,name,email'; // Specify the fields you want to retrieve
  const apiUrl = `https://graph.facebook.com/v12.0/me?fields=${fields}&access_token=${accessToken}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving user data' })
    };
  }
};
