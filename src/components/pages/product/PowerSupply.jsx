import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";
import getIdFromPath from "../../../functions/getIdFromPath";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../../../hooks/UserContex";

const PowerSupply = () => {
  const { loading, data, error, fetchData } = useFetch();
  const location = useLocation();
  const { user } = useUserContext();

  useEffect(() => {
    if(user) {
      (async () => {
        try {
          await fetchData(
            'http://localhost:8080/api/powersupply',
            'post',
            {
              id: getIdFromPath(location.pathname)
            },
            {
              'Authorization': 'Bearer ' + user.token,
            }
          );
        } catch (error) {
          console.error('Error occurred during fetching:', error);
        }
      })();
    }
  }, [])

  if (error) return <div>{error}</div>

  if (loading) return <div>Loading...</div>

  console.log(data);
  
  return (
    <div>
      <div>Power Supply</div>
      <button className="primary-button">Add Power Supply</button>
    </div>
  )
}

export default PowerSupply