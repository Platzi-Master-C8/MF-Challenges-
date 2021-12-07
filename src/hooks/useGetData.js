import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetData = (url) => {
  const [info, setInfo] = useState([]);

  useEffect(async () => {
      const response = await axios(url);
      setInfo(response.data);
  }, []);

  return info;
};

export default useGetData;
