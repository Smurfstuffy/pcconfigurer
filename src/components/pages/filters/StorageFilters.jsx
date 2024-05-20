import { useState, useEffect } from "react";

const StorageFilters = ({setBody}) => {
  const [types, setTypes] = useState([]);

  const [isSsd, setSsd] = useState(false);
  const [isHdd5400, setHdd5400] = useState(false);
  const [isHdd7200, setHdd7200] = useState(false);

  const [minCapacity, setMinCapacity] = useState(32);
  const [maxCapacity, setMaxCapacity] = useState(4000);

  useEffect(() => {
    const updatedTypes = [];
    if (isSsd) updatedTypes.push('SSD');
    if (isHdd5400) updatedTypes.push(5400);
    if (isHdd7200) updatedTypes.push(7200);
    setTypes(updatedTypes);
  }, [isSsd, isHdd5400, isHdd7200]);

  const handleFiltersClick = () => {
    setBody({
      type: types,
      minCapacity: minCapacity,
      maxCapacity: maxCapacity,
    })
  }

  return (
    <div className="flex flex-col items-center px-6">
      <h2 className="font-bold text-2xl md:text-3xl mt-2">Filters</h2>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Types</h3>
        <label className="text-base md:text-lg">
          <input
            type="checkbox"
            className="mr-1"
            checked={isSsd}
            onChange={() => setSsd(!isSsd)}
          />
          SSD
        </label>
        <label className="text-base md:text-lg">
          <input
            type="checkbox"
            className="mr-1"
            checked={isHdd5400}
            onChange={() => setHdd5400(!isHdd5400)}
          />
          HDD 5400
        </label>
        <label className="text-base md:text-lg">
          <input
            type="checkbox"
            className="mr-1"
            checked={isHdd7200}
            onChange={() => setHdd7200(!isHdd7200)}
          />
          HDD 7200
        </label>
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Minimal Capacity</h3>
        <p className="text-base md:text-lg text-center">Capacity: {minCapacity}</p>
        <input
          type="range"
          min="32"
          max="4000"
          step="1"
          value={minCapacity}
          onChange={(event) => setMinCapacity(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Maximum Capacity</h3>
        <p className="text-base md:text-lg text-center">Capacity: {maxCapacity}</p>
        <input
          type="range"
          min="32"
          max="4000"
          step="1"
          value={maxCapacity}
          onChange={(event) => setMaxCapacity(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <botton className="primary-button w-full text-center my-6 hover:cursor-pointer" onClick={handleFiltersClick}>Apply Filters</botton>
    </div>
  )
}

export default StorageFilters; 