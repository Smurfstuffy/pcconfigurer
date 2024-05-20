import { useState, useEffect } from "react";

const CaseFilters = ({ setBody }) => {
  const [type, setTypes] = useState([]);

  const [atx, setAtx] = useState(false);
  const [miniItx, setMiniItx] = useState(false);
  const [microAtx, setMicroAtx] = useState(false);
  const [eAtx, setEAtx] = useState(false);

  const [formFactor, setFormFactor] = useState([]);

  const [midTower, setMidTower] = useState(false);
  const [miniTower, setMiniTower] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [fullTower, setFullTower] = useState(false);

  useEffect(() => {
    const updatedTypes = [];
    if (atx) updatedTypes.push('ATX');
    if (miniItx) updatedTypes.push('Mini ITX');
    if (microAtx) updatedTypes.push('MicroATX');
    if (eAtx) updatedTypes.push('EATX');
    setTypes(updatedTypes);
  }, [atx, miniItx, microAtx, eAtx]);

  useEffect(() => {
    const updatedFormFactors = [];
    if (midTower) updatedFormFactors.push('Mid Tower');
    if (miniTower) updatedFormFactors.push('Mini Tower');
    if (desktop) updatedFormFactors.push('Desktop');
    if (fullTower) updatedFormFactors.push('Full Tower');
    setFormFactor(updatedFormFactors);
  }, [midTower, miniTower, desktop, fullTower]);

  const handleFiltersClick = () => {
    setBody({
      type: type,
      formFactor: formFactor,
    })
  }

  return (
    <div className="flex flex-col items-center px-6">
      <h2 className="font-bold text-2xl md:text-3xl mt-2">Filters</h2>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Case Types</h3>
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
            </label></div>
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
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Case Form Factor</h3>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={midTower}
                onChange={() => setMidTower(!midTower)}
              />
              Mid Tower
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={miniTower}
                onChange={() => setMiniTower(!miniTower)}
              />
              Mini Tower
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={desktop}
                onChange={() => setDesktop(!desktop)}
              />
              Desktop
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={fullTower}
                onChange={() => setFullTower(!fullTower)}
              />
              Full Tower
            </label>
          </div>
        </div>
      </form>

      <botton className="primary-button w-full text-center my-6 hover:cursor-pointer" onClick={handleFiltersClick}>Apply Filters</botton>
    </div>
  )
}

export default CaseFilters; 