import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useUserContext } from "../../../hooks/UserContex";
import { useEffect, useState } from "react";
import getIdFromPath from "../../../functions/getIdFromPath";
import axios from "axios";
import getImageGeneric from "../../../functions/getImageGeneric";
import { BuildRating } from "./BuildRating";

import backgroundImage from './../../../img/background/PC_Components.jpg'
import { formatPrice } from "../../../functions/formatPrice";
import Icon from "../../common/Icon";
import SkeletonParticularUserBuild from "./SkeletonParticularUserBuild";
import ErrorPage from "../../common/ErrorPage";

const ParticularUserBuild = () => {
  const { loading, data, error, fetchData } = useFetch();
  const location = useLocation();
  const { user } = useUserContext();

  const [cpu, setCpu] = useState();
  const [gpu, setGpu] = useState();
  const [pcCase, setPcsCase] = useState();
  const [fan, setFan] = useState();
  const [cooler, setCooler] = useState();
  const [motherboard, setMotherboard] = useState();
  const [memory, setMemory] = useState();
  const [storage, setStorage] = useState();
  const [powerSupply, setPowerSupply] = useState();

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          await fetchData(
            'http://localhost:8080/api/getpcbuildbyid',
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
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/processor',
            data: { id: data.cpu },
            headers: {
              'Authorization': 'Bearer ' + user.token,
            },
          });
          setCpu(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
    if (user && data) {
      (async () => {
        try {
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/graphicalcard',
            data: { id: data.gpu },
            headers: {
              'Authorization': 'Bearer ' + user.token,
            },
          });
          setGpu(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
    if (user && data) {
      (async () => {
        try {
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/motherboard',
            data: { id: data.motherboard },
            headers: {
              'Authorization': 'Bearer ' + user.token,
            },
          });
          setMotherboard(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
    if (user && data) {
      (async () => {
        try {
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/case',
            data: { id: data.pcCase },
            headers: {
              'Authorization': 'Bearer ' + user.token,
            },
          });
          setPcsCase(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
    if (user && data) {
      (async () => {
        try {
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/cpucooler',
            data: { id: data.cooler },
            headers: {
              'Authorization': 'Bearer ' + user.token,
            },
          });
          setCooler(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
    if (user && data) {
      (async () => {
        try {
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/casefan',
            data: { id: data.fan },
            headers: {
              'Authorization': 'Bearer ' + user.token,
            },
          });
          setFan(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
    if (user && data) {
      (async () => {
        try {
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/storage',
            data: { id: data.storage },
            headers: {
              'Authorization': 'Bearer ' + user.token,
            },
          });
          setStorage(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
    if (user && data) {
      (async () => {
        try {
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/memory',
            data: { id: data.memory },
            headers: {
              'Authorization': 'Bearer ' + user.token,
            },
          });
          setMemory(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
    if (user && data) {
      (async () => {
        try {
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/powersupply',
            data: { id: data.powerSupply },
            headers: {
              'Authorization': 'Bearer ' + user.token,
            },
          });
          setPowerSupply(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
  }, [user, data])

  if (error) return <ErrorPage error={error} />

  if (loading) return <SkeletonParticularUserBuild />

  if (data &&
    cpu &&
    gpu &&
    motherboard &&
    pcCase &&
    memory &&
    storage &&
    fan &&
    cooler &&
    powerSupply
  ) {
    if (!pcCase.imgUrl) {
      pcCase.imgUrl = getImageGeneric(pcCase.name, 'cases');
    }
    return (
      <div className="relative flex flex-col h-full">
        <img src={backgroundImage} alt="PC_Components_2" className="w-screen object-cover h-full" />
        <div className="flex flex-col justify-center lg:px-64 absolute inset-0">
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 py-4 h-full">
            <div className="flex flex-col items-center border-gray-500">
              <img src={pcCase.imgUrl} alt={pcCase.name} className="w-5/6 h-auto" />
            </div>
            <div className="flex flex-col border-gray-500">
              <div className="flex flex-col h-full">
                <p className="bg-indigo-900 w-full text-center text-xl lg:text-3xl text-white font-bold py-1 cursor-default">{data.buildName} by {data.user}</p>
                <div className="flex pl-2 py-2 bg-white">
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">CPU:</p>
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">{cpu.name}</p>
                </div>
                <div className="flex pl-2 py-2 bg-white">
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">CPU Cooler:</p>
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">{cooler.name}</p>
                </div>
                <div className="flex pl-2 py-2 bg-white">
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">Motherboard:</p>
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">{motherboard.name}</p>
                </div>
                <div className="flex pl-2 py-2 bg-white">
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">GPU:</p>
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">{gpu.name}</p>
                </div>
                <div className="flex pl-2 py-2 bg-white">
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">Memory:</p>
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">{memory.name}</p>
                </div>
                <div className="flex pl-2 py-2 bg-white">
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">Storage:</p>
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">{storage.name}</p>
                </div>
                <div className="flex pl-2 py-2 bg-white">
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">Power Supply:</p>
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">{powerSupply.name}</p>
                </div>
                <div className="flex pl-2 py-2 bg-white">
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">Case Fan:</p>
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">{fan.name}</p>
                </div>
                <div className="flex pl-2 py-2 bg-white">
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">Case:</p>
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">{pcCase.name}</p>
                </div>
                <div className="flex pl-2 py-2 bg-white">
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">Average Rating:</p>
                  <div className="basis-1/2 text-lg md:text-2xl font-semibold">
                    <BuildRating isAvg={true} id={data._id} />
                  </div>
                </div>
                <div className="flex pl-2 py-2 bg-white">
                  <p className="basis-1/2 text-lg md:text-2xl font-semibold">Your Rating:</p>
                  <div className="basis-1/2 text-lg md:text-2xl font-semibold">
                    <BuildRating isAvg={false} id={data._id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ParticularUserBuild