import { useState, useEffect } from "react";

const ProcessorFilters = ({ setBody, setSearchQuery, setOpened }) => {
  const [manufacturers, setManufacturers] = useState([]);

  const [isAmd, setAmd] = useState(false);
  const [isIntel, setIntel] = useState(false);

  const [minCore, setMinCore] = useState(2);
  const [maxCore, setMaxCore] = useState(64);

  const [minClock, setMinClock] = useState(2);
  const [maxClock, setMaxClock] = useState(5);

  const [minTdp, setMinTdp] = useState(35);
  const [maxTdp, setMaxTdp] = useState(350);

  const [isSmt, setSmt] = useState(false);

  useEffect(() => {
    const updatedManufacturers = [];
    if (isAmd) updatedManufacturers.push('AMD');
    if (isIntel) updatedManufacturers.push('Intel');
    setManufacturers(updatedManufacturers);
  }, [isAmd, isIntel]);

  const handleFiltersClick = () => {
    setSearchQuery('');
    setBody({
      manufacturer: manufacturers,
      minCoreCount: minCore,
      maxCoreCount: maxCore,
      minCoreClock: minClock,
      maxCoreClock: maxClock,
      minTdp: minTdp,
      maxTdp: maxTdp,
      smt: isSmt,
    });
    setOpened(prev => !prev);
  }

  return (
    <div className="flex flex-col items-center px-6">
      <h2 className="font-bold text-2xl md:text-3xl mt-2">Filters</h2>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Manufacturer</h3>
        <label className="text-base md:text-lg">
          <input
            type="checkbox"
            className="mr-1"
            checked={isAmd}
            onChange={() => setAmd(!isAmd)}
          />
          AMD
        </label>
        <label className="text-base md:text-lg">
          <input
            type="checkbox"
            className="mr-1"
            checked={isIntel}
            onChange={() => setIntel(!isIntel)}
          />
          Intel
        </label>
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Minimal Core Count</h3>
        <p className="text-base md:text-lg text-center">Cores: {minCore}</p>
        <input
          type="range"
          min="2"
          max="64"
          step="2"
          value={minCore}
          onChange={(event) => setMinCore(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Maximum Core Count</h3>
        <p className="text-base md:text-lg text-center">Cores: {maxCore}</p>
        <input
          type="range"
          min="2"
          max="64"
          step="2"
          value={maxCore}
          onChange={(event) => setMaxCore(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Minimal Frequency</h3>
        <p className="text-base md:text-lg text-center">Frequency: {minClock}</p>
        <input
          type="range"
          min="2"
          max="5"
          step="0.1"
          value={minClock}
          onChange={(event) => setMinClock(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Maximum Frequency</h3>
        <p className="text-base md:text-lg text-center">Frequency: {maxClock}</p>
        <input
          type="range"
          min="2"
          max="5"
          step="0.1"
          value={maxClock}
          onChange={(event) => setMaxClock(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Minimal TDP</h3>
        <p className="text-base md:text-lg text-center">TDP: {minTdp}</p>
        <input
          type="range"
          min="35"
          max="350"
          step="1"
          value={minTdp}
          onChange={(event) => setMinTdp(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Maximum TDP</h3>
        <p className="text-base md:text-lg text-center">TDP: {maxTdp}</p>
        <input
          type="range"
          min="35"
          max="350"
          step="1"
          value={maxTdp}
          onChange={(event) => setMaxTdp(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Select if SMT</h3>
        <label className="text-base md:text-lg">
          <input
            type="radio"
            className="mr-1"
            value={true}
            checked={isSmt === true}
            onChange={() => setSmt(!isSmt)}
          />
          Yes
        </label>
        <label className="text-base md:text-lg">
          <input
            type="radio"
            className="mr-1"
            value={false}
            checked={isSmt === false}
            onChange={() => setSmt(!isSmt)}
          />
          No
        </label>
      </form>

      <button className="primary-button w-full text-center my-6 hover:cursor-pointer" onClick={handleFiltersClick}>Apply Filters</button>
    </div>
  )
}

export default ProcessorFilters; 