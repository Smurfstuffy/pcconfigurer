import { useState, useEffect } from "react";

const PowerSupplyFilter = ({ setBody }) => {
  const [types, setTypes] = useState([]);

  const [atx, setAtx] = useState(false);
  const [tfx, setTfx] = useState(false);
  const [sfx, setSfx] = useState(false);

  const [efficiency, setEfficiency] = useState([]);

  const [white, setWhite] = useState(false);
  const [bronze, setBronze] = useState(false);
  const [silver, setSilver] = useState(false);
  const [gold, setGold] = useState(false);
  const [platinum, setPlatinum] = useState(false);
  const [titanium, setTitanium] = useState(false);

  const [minWattage, setMinWattage] = useState(200);
  const [maxWattage, setMaxWattage] = useState(1800);

  useEffect(() => {
    const updatedTypes = [];
    if (atx) updatedTypes.push('ATX');
    if (tfx) updatedTypes.push('TFX');
    if (sfx) updatedTypes.push('SFX');
    setTypes(updatedTypes);
  }, [atx, tfx, sfx]);

  useEffect(() => {
    const updatedEfficiency = [];
    if (white) updatedEfficiency.push('white');
    if (bronze) updatedEfficiency.push('bronze');
    if (silver) updatedEfficiency.push('silver');
    if (gold) updatedEfficiency.push('gold');
    if (platinum) updatedEfficiency.push('platinum');
    if (titanium) updatedEfficiency.push('titanium');
    setEfficiency(updatedEfficiency);
  }, [white, bronze, silver, gold, platinum, titanium]);

  const handleFiltersClick = () => {
    setBody({
      type: types,
      efficiency: efficiency,
      minWattage: minWattage,
      maxWattage: maxWattage,
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
            checked={atx}
            onChange={() => setAtx(!atx)}
          />
          ATX
        </label>
        <label className="text-base md:text-lg">
          <input
            type="checkbox"
            className="mr-1"
            checked={tfx}
            onChange={() => setTfx(!tfx)}
          />
          TFX
        </label>
        <label className="text-base md:text-lg">
          <input
            type="checkbox"
            className="mr-1"
            checked={sfx}
            onChange={() => setSfx(!sfx)}
          />
          SFX
        </label>
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Efficiency Certificate</h3>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={bronze}
                onChange={() => setBronze(!bronze)}
              />
              Bronze
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={white}
                onChange={() => setWhite(!white)}
              />
              White
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={silver}
                onChange={() => setSilver(!silver)}
              />
              Silver
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={gold}
                onChange={() => setGold(!gold)}
              />
              Gold
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={platinum}
                onChange={() => setPlatinum(!platinum)}
              />
              Platinum
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={titanium}
                onChange={() => setTitanium(!titanium)}
              />
              Titanium
            </label>
          </div>
        </div>
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Minimal Wattage</h3>
        <p className="text-base md:text-lg text-center">Wattage: {minWattage}</p>
        <input
          type="range"
          min="200"
          max="1800"
          step="100"
          value={minWattage}
          onChange={(event) => setMinWattage(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Maximum Wattage</h3>
        <p className="text-base md:text-lg text-center">Capacity: {maxWattage}</p>
        <input
          type="range"
          min="200"
          max="1800"
          step="100"
          value={maxWattage}
          onChange={(event) => setMaxWattage(event.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer my-1" />
      </form>

      <botton className="primary-button w-full text-center my-6 hover:cursor-pointer" onClick={handleFiltersClick}>Apply Filters</botton>
    </div>
  )
}

export default PowerSupplyFilter; 