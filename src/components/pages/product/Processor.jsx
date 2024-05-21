import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";
import getIdFromPath from "../../../functions/getIdFromPath";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../../../hooks/UserContex";

const Processor = () => {
  const { loading, data, error, fetchData } = useFetch();
  const location = useLocation();
  const { user } = useUserContext();

  useEffect(() => {
    if(user) {
      (async () => {
        try {
          await fetchData(
            'http://localhost:8080/api/processor',
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
      <div>Processor</div>
      <button className="primary-button">Add Processor</button>
    </div>
  )
}

export default Processor