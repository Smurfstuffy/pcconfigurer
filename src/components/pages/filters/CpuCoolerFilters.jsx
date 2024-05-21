import { useState } from "react";

const CpuCoolerFilters = ({ setBody }) => {
  const [minSize, setMinSize] = useState(40);
  const [maxSize, setMaxSize] = useState(200);

  const handleFiltersClick = () => {
    setBody({
      minSize: minSize,
      maxSize: maxSize,
    })
  }

  return (
    <div className="flex flex-col items-center px-6">
      <h2 className="font-bold text-2xl md:text-3xl mt-2">Filters</h2>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Minimal Cooler Size</h3>
        <p className="text-base md:text-lg text-center">Size: {minSize}</p>
        <input
          type="range"
          min="40"
          max="200"
          step="10"
          value={minSize}
          onChange={(event) => setMinSize(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Maximum Cooler Size</h3>
        <p className="text-base md:text-lg text-center">Size: {maxSize}</p>
        <input
          type="range"
          min="40"
          max="200"
          step="10"
          value={maxSize}
          onChange={(event) => setMaxSize(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <button className="primary-button w-full text-center my-6 hover:cursor-pointer" onClick={handleFiltersClick}>Apply Filters</button>
    </div>
  )
}

export default CpuCoolerFilters; 