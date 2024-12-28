import { useState } from "react";

const GraphicalCardFilters = ({ setBody, setSearchQuery, setOpened }) => {

  const [minMemory, setMinMemory] = useState(2);
  const [maxMemory, setMaxMemory] = useState(48);

  const [minCoreClock, setMinCoreClock] = useState(0);
  const [maxCoreClock, setMaxCoreClock] = useState(3000);

  const [minLength, setMinLength] = useState(0);
  const [maxLength, setMaxLength] = useState(500);

  const handleFiltersClick = () => {
    setSearchQuery('');
    setBody({
      minMemory: minMemory,
      maxMemory: maxMemory,
      minCoreClock: minCoreClock,
      maxCoreClock: maxCoreClock,
      minLength: minLength,
      maxLength: maxLength,
    });
    setOpened(prev => !prev);
  }

  return (
    <div className="flex flex-col items-center px-6">
      <h2 className="font-bold text-2xl md:text-3xl mt-2">Filters</h2>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Minimal Graphical Memory</h3>
        <p className="text-base md:text-lg text-center">Memory: {minMemory}</p>
        <input
          type="range"
          min="2"
          max="48"
          step="2"
          value={minMemory}
          onChange={(event) => setMinMemory(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Maximum Graphical Memory</h3>
        <p className="text-base md:text-lg text-center">Memory: {maxMemory}</p>
        <input
          type="range"
          min="2"
          max="48"
          step="2"
          value={maxMemory}
          onChange={(event) => setMaxMemory(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Minimal GPU Core Clock</h3>
        <p className="text-base md:text-lg text-center">Clock: {minCoreClock}</p>
        <input
          type="range"
          min="0"
          max="3000"
          step="100"
          value={minCoreClock}
          onChange={(event) => setMinCoreClock(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Maximum GPU Core Clock</h3>
        <p className="text-base md:text-lg text-center">Clock: {maxCoreClock}</p>
        <input
          type="range"
          min="0"
          max="3000"
          step="100"
          value={maxCoreClock}
          onChange={(event) => setMaxCoreClock(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Minimal GPU Length</h3>
        <p className="text-base md:text-lg text-center">Length: {minLength}</p>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={minLength}
          onChange={(event) => setMinLength(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Maximum GPU Length</h3>
        <p className="text-base md:text-lg text-center">Length: {maxLength}</p>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={maxLength}
          onChange={(event) => setMaxLength(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <button className="primary-button w-full text-center my-6 hover:cursor-pointer" onClick={handleFiltersClick}>Apply Filters</button>
    </div>
  )
}

export default GraphicalCardFilters; 