import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import getIdFromPath from "../../../functions/getIdFromPath";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../../../hooks/UserContex";
import { observer } from "mobx-react-lite";
import PCConfig from "../../../store/PCConfig";
import { isObjEmpty } from "../../../functions/isObjEmpty";
import getImageGeneric from "../../../functions/getImageGeneric";
import axios from "axios";

const Processor = observer(() => {
  const { loading, data, error, fetchData } = useFetch();
  const location = useLocation();
  const { user } = useUserContext();
  const [prices, setPrices] = useState();
  const [pricesLoading, setPricesLoading] = useState(false);

  useEffect(() => {
    if (user) {
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
  }, [user])

  useEffect(() => {
    if (user && data) {
      (async () => {
        try {
          setPricesLoading(true);
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/getpartsbyname',
            data: { nameToFind: data.name },
            headers: {
              'Authorization': 'Bearer ' + user.token,
            },
          });
          setPrices(response.data);
          setPricesLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setPricesLoading(false);
        }
      })();
    }
  }, [user, data])

  if (error) return <div>{error}</div>

  if (loading) return <div>Loading...</div>

  if (data) {
    if (!data.imgUrl) {
      data.imgUrl = getImageGeneric(data.name, location.pathname);
    }
    return (
      <div className="flex flex-col h-screen px-0 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-4 md:my-2">
          <div className="card flex flex-col items-center border-gray-500">
            <img src={data.imgUrl} alt={data.name} className="w-4/6 h-full" />
            <p className="bg-indigo-900 w-full text-center text-xl lg:text-3xl text-white font-bold py-1 cursor-default">{data.name}</p>
          </div>
          <div className="card flex flex-col border-gray-500">
            <div className="flex flex-col h-full">
              <p className="bg-indigo-900 w-full text-center text-xl lg:text-3xl text-white font-bold py-1 cursor-default">Specs</p>
              <div className="flex pl-2 py-2">
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">Core Count:</p>
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">{data.core_count}</p>
              </div>
              <div className="flex pl-2 py-2">
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">Core Clock:</p>
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">{data.core_clock}</p>
              </div>
              <div className="flex pl-2 py-2">
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">Boost Clock:</p>
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">{data.boost_clock}</p>
              </div>
              <div className="flex pl-2 py-2">
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">Graphics:</p>
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">{data.graphics}</p>
              </div>
              <div className="flex pl-2 py-2">
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">Base Price:</p>
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">{data.price}$ / {(data.price * 39.6).toFixed(2)}₴</p>
              </div>
              <div className="flex pl-2 py-2">
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">TDP:</p>
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">{data.tdp}</p>
              </div>
              <div className="flex pl-2 py-2">
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">SMT:</p>
                <p className="basis-1/2 text-lg md:text-2xl font-semibold">{data.smt ? 'Yes' : 'No'}</p>
              </div>
            </div>

            <div className="flex p-2 ">
              {isObjEmpty(PCConfig.config.processor) ?
                <button className="primary-button text-center w-full" onClick={() => PCConfig.setProcessor(data)}>Add Processor</button> :
                PCConfig.config.processor.name === data.name ?
                  <button className="neutral-button text-center w-full" onClick={() => PCConfig.removeProcessor()}>Remove Processor</button> :
                  <button className="primary-button text-center w-full" onClick={() => PCConfig.setProcessor(data)}>Add Processor</button>
              }
            </div>
          </div>
        </div>
        <div className="card flex flex-col mx-8 border-gray-500">
          <p className="bg-indigo-900 w-full text-center text-xl md:text-3xl text-white font-bold py-1 cursor-default">Prices</p>
          <div className="flex flex-col">
            {pricesLoading && <p className="text-lg md:text-2xl font-semibold text-center py-1">Loading...</p>}
            {!prices && !pricesLoading && <p className="text-lg md:text-2xl font-semibold text-center py-1">Oops... No prices found for this product</p>}
            {prices && prices.map(price => (
              <a href={price.product.productUrl} className="flex justify-between px-1 md:px-6 py-1 hover:bg-gray-100 hover:cursor-pointer" key={price.product.title}>
                <p className="text-lg md:text-2xl font-semibold">{price.source}</p>
                <p className="text-lg md:text-2xl font-semibold">{price.product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
})

export default Processor