import Card from "./Card";
import ItemsGroupCard from "./ItemsGroupCard";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Pagination from "./Pagination";
import { useUserContext } from "../../hooks/UserContex";

const ItemsGroup = ({ url }) => {
  const [page, setPage] = useState(1);
  const { loading, data, error, fetchData } = useFetch();
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          await fetchData(url + `?page=${page}`,
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
  }, [page, user])

  if (error) return <div>{error}</div>

  if (loading) return <div>Loading...</div>

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
        <ItemsGroupCard />
        {data && data.products.map((product) => (
          <Card name={product.name} id={product._id} key={product._id} imgUrl={product.imgUrl} />
        ))}
      </div>
      {data && <Pagination page={page} setPage={setPage} totalPages={data.totalPages} />}
    </>
  )
}

export default ItemsGroup