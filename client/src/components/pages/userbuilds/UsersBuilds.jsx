import ItemsGroupCard from "../../common/ItemsGroupCard";
import useFetch from "../../../hooks/useFetch";
import { useUserContext } from "../../../hooks/UserContex";
import { useEffect } from "react";
import UserBuildCard from "../userbuilds/UserBuildCard";
import SkeletonBuildCard from "./SkeletonBuildCard";
import ErrorPage from "../../common/ErrorPage";

const UsersBuilds = () => {
  const { loading, data, error, fetchData } = useFetch();
  const {user} = useUserContext();

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          await fetchData(
            'http://localhost:8080/api/getallpcbuilds',
            'get',
            {},
            {
              'Authorization': 'Bearer ' + user.token,
            });
        } catch (error) {
          console.error('Error occurred during fetching:', error);
        }
      })();
    }
  }, [user])

  if (error) return <ErrorPage error={error} />

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
        {Array(8).fill(0).map((_, index) => (
          <SkeletonBuildCard key={index}/>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
      <ItemsGroupCard popular={false}/>
      {data && data.map(el => (
        <UserBuildCard key={el._id} name={el.buildName} author={el.user} id={el._id} caseId={el.pcCase} />
      ))}
    </div>
  )
}

export default UsersBuilds;