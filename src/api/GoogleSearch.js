import axios from 'axios';

export const GoogleSearch = async (term) => {
  const { data } = await axios.get(
    'https://www.googleapis.com/customsearch/v1',
    {
      params: {
        key: process.env.React_App_Google_Search_Api_Key,
        cx: process.env.React_App_Search_Engine_Id,
        q: term,
      },
    }
  );

  return data;
};
