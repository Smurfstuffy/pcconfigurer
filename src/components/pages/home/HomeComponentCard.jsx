import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { useUserContext } from "../../../hooks/UserContex";

const HomeComponentCard = ({ url, link, name }) => {
  const navigate = useNavigate();
  const { loading, data, error, fetchData } = useFetch();
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          await fetchData(
            url,
            'post',
            {},
            {
              'Authorization': 'Bearer ' + user.token,
            });
        } catch (error) {
          console.error('Error occurred during fetching:', error);
        }
      })();
    }
  }, [user, url])

  if (error) return <div>{error}</div>

  if (loading) return <div>Loading...</div>

  if (data) {
    return (
      <div className="card hover:shadow-2xl hover:cursor-pointer" onClick={() => navigate(link)}>
        <img src={data.products.at(0).imgUrl} alt={data.products.at(0).name} className="h-64 md:h-80 w-full object-cover" />
        <div className="m-4 text-center">
          <span className="font-bold text-xl lg:text-xl">{name}</span>
        </div>
      </div>
    )
  }
}

export default HomeComponentCard;