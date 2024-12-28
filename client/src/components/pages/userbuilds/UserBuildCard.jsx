import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import { useUserContext } from "../../../hooks/UserContex";
import getImageGeneric from "../../../functions/getImageGeneric";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { BuildRating } from "./BuildRating";
import SkeletonBuildCard from "./SkeletonBuildCard";
import ErrorPage from "../../common/ErrorPage";

const UserBuildCard = ({ name, author, id, caseId }) => {
  const navigate = useNavigate();
  const { loading, data, error, fetchData } = useFetch();
  const { user } = useUserContext();
  const [pcCase, setCase] = useState();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          await fetchData(
            'http://localhost:8080/api/getpcbuildbyid',
            'post',
            {
              id: id
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
  }, [user])

  useEffect(() => {
    if (user && data) {
      (async () => {
        try {
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/case',
            data: { id: caseId },
            headers: {
              'Authorization': 'Bearer ' + user.token,
            },
          });
          setCase(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
  }, [user, data, caseId])

  if (error) return <ErrorPage error={error}/>

  if (loading) return <SkeletonBuildCard />;
  
  if (data && pcCase) {
    if (!pcCase.imgUrl) {
      pcCase.imgUrl = getImageGeneric(pcCase.name, 'cases');
    }
    return (
      <div className="card hover:shadow-2xl hover:cursor-pointer"
        onClick={() => navigate(location.pathname.includes('usersbuilds') ? `${id}` : `usersbuilds/${id}`)}
      >
        <img src={pcCase.imgUrl} alt={pcCase.name} className="h-72 md:h-96 w-full object-cover" />
        <div className="m-4 text-center flex flex-col">
          <span className="font-bold text-base md:text-lg">{name}</span>
          <span className="font-semibold text-base md:text-lg text-gray-500">by {author}</span>
          <BuildRating isAvg={true} id={id} />
        </div>
      </div>
    )
  }
}

export default UserBuildCard