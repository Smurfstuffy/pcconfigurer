import { useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (url, method = 'post', requestBody = {}, headers = {}) => {
    setLoading(true);
    try {
      const response = await axios({
        method: method.toLowerCase(),
        url,
        data: requestBody,
        headers: headers,
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
      setLoading(false);
    }
  };

  return { loading, data, error, fetchData };
}

export default useFetch;