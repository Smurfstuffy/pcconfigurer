import { useLocation } from "react-router-dom"
import useImage from "../../hooks/useImage";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const Card = ({ name, id }) => {
  const { loading, data, error, fetchData } = useFetch();
  
  useEffect(() => {
    (async () => {
      try {
        await fetchData('http://localhost:8080/api/getpartspricebyname', 'post', {nameToFind: name});
      } catch (error) {
        console.error('Error occurred during fetching:', error);
      }
    })();
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div class="card hover:shadow-2xl hover:cursor-pointer">
      {error && <div>{error.message}</div>}
      {data && <img src={data.imgUrl} alt={name} class="h-38 md:h-56  w-full object-cover" />}
      <div class="m-4 text-center">
        <span class="font-bold text-base md:text-lg">{name}</span>
      </div>
    </div>
  )
}

export default Card