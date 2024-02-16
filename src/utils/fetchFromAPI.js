import axios from 'axios';


 export const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: 50,
    },
    headers: {
      //'X-RapidAPI-Key': '4111a35c82msh0a3dcd754442948p1535adjsn1f01bee129b0',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };
  
  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };
