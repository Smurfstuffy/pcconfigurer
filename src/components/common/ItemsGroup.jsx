import Card from "./Card";
import ItemsGroupCard from "./ItemsGroupCard";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Pagination from "./Pagination";
import { useUserContext } from "../../hooks/UserContex";
import SkeletonCard from "./SkeletonCard";
import ErrorPage from "./ErrorPage";

const ItemsGroup = ({ url, body }) => {
  const [page, setPage] = useState(1);
  const { loading, data, error, fetchData } = useFetch();
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          await fetchData(url + `?page=${page}`,
            'post',
            body,
            {
              'Authorization': 'Bearer ' + user.token,
            });
            document.querySelector('main').scrollTo({ top: 0, behavior: 'auto' });
        } catch (error) {
          console.error('Error occurred during fetching:', error);
        }
      })();
    }
  }, [page, user, body])

  if (error) return <ErrorPage error={error} />

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
        {Array(8).fill(0).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
        <ItemsGroupCard />
        {data && data.products.map((product) => (
          <Card name={product.name} id={product._id} key={product._id} imgUrl={product.imgUrl} />
        ))}
      </div>
      {data && data.totalPages > 1 && <Pagination page={page} setPage={setPage} totalPages={data.totalPages} />}
    </>
  )
}

export default ItemsGroup