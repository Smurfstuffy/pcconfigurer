import { useState, useEffect } from "react";

const MotherboardFilters = ({ setBody }) => {
  const [sockets, setSockets] = useState([]);

  const [am4, setAm4] = useState(false);
  const [am5, setAm5] = useState(false);
  const [lga1200, setLga1200] = useState(false);
  const [lga1700, setLga1700] = useState(false);

  const [formFactor, setFormFactor] = useState([]);

  const [atx, setAtx] = useState(false);
  const [miniItx, setMiniItx] = useState(false);
  const [microAtx, setMicroAtx] = useState(false);
  const [eAtx, setEAtx] = useState(false);

  const [minMemory, setMinMemory] = useState(8);
  const [maxMemory, setMaxMemory] = useState(192);

  const [minMemorySlots, setMinMemorySlots] = useState(1);
  const [maxMemorySlots, setMaxMemorySlots] = useState(8);

  useEffect(() => {
    const updatedFormFactors = [];
    if (atx) updatedFormFactors.push('ATX');
    if (miniItx) updatedFormFactors.push('Mini ITX');
    if (microAtx) updatedFormFactors.push('Micro ATX');
    if (eAtx) updatedFormFactors.push('EATX');
    setFormFactor(updatedFormFactors);
  }, [atx, miniItx, microAtx, eAtx]);

  useEffect(() => {
    const updatedSockets = [];
    if (am4) updatedSockets.push('AM4');
    if (am5) updatedSockets.push('AM5');
    if (lga1200) updatedSockets.push('LGA1200');
    if (lga1700) updatedSockets.push('LGA1700');
    setSockets(updatedSockets);
  }, [am4, am5, lga1200, lga1700]);

  const handleFiltersClick = () => {
    setBody({
      socket: sockets,
      formFactor: formFactor,
      minMemory: minMemory,
      maxMemory: maxMemory,
      minMemorySlots: minMemorySlots,
      maxMemorySlots: maxMemorySlots,
    })
  }

  return (
    <div className="flex flex-col items-center px-6">
      <h2 className="font-bold text-2xl md:text-3xl mt-2">Filters</h2>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Sockets</h3>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={am4}
                onChange={() => setAm4(!am4)}
              />
              AM4
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={am5}
                onChange={() => setAm5(!am5)}
              />
              AM5
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={lga1200}
                onChange={() => setLga1200(!lga1200)}
              />
              LGA1200
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={lga1700}
                onChange={() => setLga1700(!lga1700)}
              />
              LGA1700
            </label>
          </div>

        </div>
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Form Factor</h3>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={atx}
                onChange={() => setAtx(!atx)}
              />
              ATX
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={miniItx}
                onChange={() => setMiniItx(!miniItx)}
              />
              Mini-ITX
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={microAtx}
                onChange={() => setMicroAtx(!microAtx)}
              />
              Micro-ATX
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={eAtx}
                onChange={() => setEAtx(!eAtx)}
              />
              E-ATX
            </label>
          </div>
        </div>
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Minimal Amount of Memory</h3>
        <p className="text-base md:text-lg text-center">Memory: {minMemory}</p>
        <input
          type="range"
          min="8"
          max="192"
          step="8"
          value={minMemory}
          onChange={(event) => setMinMemory(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Maximum Amount of Memory</h3>
        <p className="text-base md:text-lg text-center">Memory: {maxMemory}</p>
        <input
          type="range"
          min="8"
          max="192"
          step="8"
          value={maxMemory}
          onChange={(event) => setMaxMemory(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Minimal Number of Memory Slots</h3>
        <p className="text-base md:text-lg text-center">Slots: {minMemorySlots}</p>
        <input
          type="range"
          min="1"
          max="8"
          step="1"
          value={minMemorySlots}
          onChange={(event) => setMinMemorySlots(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Maximum Number of Memory Slots</h3>
        <p className="text-base md:text-lg text-center">Slots: {maxMemorySlots}</p>
        <input
          type="range"
          min="1"
          max="8"
          step="1"
          value={maxMemorySlots}
          onChange={(event) => setMaxMemorySlots(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <button className="primary-button w-full text-center my-6 hover:cursor-pointer" onClick={handleFiltersClick}>Apply Filters</button>
    </div>
  )
}

export default MotherboardFilters; 