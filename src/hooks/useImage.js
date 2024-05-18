import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import amdImage from '../img/generic/amd-am4-ryzen-7-3700x-cpu.jpg';
import intelImage from '../img/generic/intel-core-i9-11900k.jpg';

const useImage = (name, path) => {
  const [image, setImage] = useState('');
  const { loading, data, error, fetchData } = useFetch();

  useEffect(() => {
    const fetchImage = async () => {
      await fetchData('http://localhost:8080/api/getpartimagebyname', 'post', { nameToFind: name });
    };

    fetchImage(); // This will only run once when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    if (error) {
      switch (path) {
        case '/products/processors':
          if (name.includes('AMD')) {
            setImage(amdImage);
          } else {
            setImage(intelImage);
          }
          break;
        default:
          setImage('/path/to/default/image.jpg');
      }
    } else if (data) {
      setImage(data.imgUrl);
    }
  }, []);

  return { image, loading, error };
};

export default useImage;
