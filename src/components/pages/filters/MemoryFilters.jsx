import { useState, useEffect } from "react";

const MemoryFilters = ({ setBody }) => {
  const [latency, setLatency] = useState([]);

  const [cl9, setCl9] = useState(false);
  const [cl10, setCl10] = useState(false);
  const [cl11, setCl11] = useState(false);
  const [cl14, setCl14] = useState(false);
  const [cl15, setCl15] = useState(false);
  const [cl16, setCl16] = useState(false);
  const [cl17, setCl17] = useState(false);
  const [cl18, setCl18] = useState(false);
  const [cl19, setCl19] = useState(false);
  const [cl20, setCl20] = useState(false);
  const [cl21, setCl21] = useState(false);
  const [cl22, setCl22] = useState(false);
  const [cl30, setCl30] = useState(false);
  const [cl32, setCl32] = useState(false);
  const [cl36, setCl36] = useState(false);
  const [cl38, setCl38] = useState(false);
  const [cl40, setCl40] = useState(false);
  const [cl42, setCl42] = useState(false);
  const [cl46, setCl46] = useState(false);

  const [speed, setSpeed] = useState([]);

  const [speed2133, setSpeed2133] = useState(false);
  const [speed2666, setSpeed2666] = useState(false);
  const [speed3200, setSpeed3200] = useState(false);
  const [speed3600, setSpeed3600] = useState(false);
  const [speed4000, setSpeed4000] = useState(false);
  const [speed4600, setSpeed4600] = useState(false);
  const [speed4800, setSpeed4800] = useState(false);
  const [speed5200, setSpeed5200] = useState(false);
  const [speed5600, setSpeed5600] = useState(false);
  const [speed6000, setSpeed6000] = useState(false);

  const [sticks, setSticks] = useState([]);

  const [sticks1, setSticks1] = useState(false);
  const [sticks2, setSticks2] = useState(false);
  const [sticks4, setSticks4] = useState(false);
  const [sticks8, setSticks8] = useState(false);

  const [capacity, setCapacity] = useState([]);

  const [capacity8, setCapacity8] = useState(false);
  const [capacity16, setCapacity16] = useState(false);
  const [capacity32, setCapacity32] = useState(false);
  const [capacity64, setCapacity64] = useState(false);

  useEffect(() => {
    const updatedLatency = [];
    if (cl9) updatedLatency.push(9);
    if (cl10) updatedLatency.push(10);
    if (cl11) updatedLatency.push(11);
    if (cl14) updatedLatency.push(14);
    if (cl15) updatedLatency.push(15);
    if (cl16) updatedLatency.push(16);
    if (cl17) updatedLatency.push(17);
    if (cl18) updatedLatency.push(18);
    if (cl19) updatedLatency.push(19);
    if (cl20) updatedLatency.push(20);
    if (cl21) updatedLatency.push(21);
    if (cl22) updatedLatency.push(22);
    if (cl30) updatedLatency.push(30);
    if (cl32) updatedLatency.push(32);
    if (cl36) updatedLatency.push(36);
    if (cl38) updatedLatency.push(38);
    if (cl40) updatedLatency.push(40);
    if (cl42) updatedLatency.push(42);
    if (cl46) updatedLatency.push(46);
    setLatency(updatedLatency);
  }, [cl9, cl10, cl11, cl14, cl15, cl16, cl17, cl18, cl19, cl20, cl21, cl22, cl30, cl32, cl36, cl38, cl40, cl42, cl46]);

  useEffect(() => {
    const updatedCapacity = [];
    if (capacity8) updatedCapacity.push(1);
    if (capacity16) updatedCapacity.push(16);
    if (capacity32) updatedCapacity.push(32);
    if (capacity64) updatedCapacity.push(64);
    setCapacity(updatedCapacity);
  }, [capacity8, capacity16, capacity32, capacity64]);

  useEffect(() => {
    const updatedSticks = [];
    if (sticks1) updatedSticks.push(1);
    if (sticks2) updatedSticks.push(2);
    if (sticks4) updatedSticks.push(4);
    if (sticks8) updatedSticks.push(8);
    setSticks(updatedSticks);
  }, [sticks1, sticks2, sticks4, sticks8]);

  useEffect(() => {
    const updatedSpeed = [];
    if (speed2133) updatedSpeed.push(2133);
    if (speed2666) updatedSpeed.push(2666);
    if (speed3200) updatedSpeed.push(3200);
    if (speed3600) updatedSpeed.push(3600);
    if (speed4000) updatedSpeed.push(4000);
    if (speed4600) updatedSpeed.push(4600);
    if (speed4800) updatedSpeed.push(4800);
    if (speed5200) updatedSpeed.push(5200);
    if (speed5600) updatedSpeed.push(5600);
    if (speed6000) updatedSpeed.push(6000);
    setSpeed(updatedSpeed);
  }, [speed2133, speed2666, speed3200, speed3600, speed4000, speed4600, speed4800, speed5200, speed5600, speed6000]);

  const handleFiltersClick = () => {
    setBody({
      speed: speed,
      sticks: sticks,
      capacity: capacity,
    })
  }

  return (
    <div className="flex flex-col items-center px-6">
      <h2 className="font-bold text-2xl md:text-3xl mt-2">Filters</h2>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-4">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Speed</h3>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={speed2133}
                onChange={() => setSpeed2133(!speed2133)}
              />
              2133
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={speed2666}
                onChange={() => setSpeed2666(!speed2666)}
              />
              2666
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={speed3200}
                onChange={() => setSpeed3200(!speed3200)}
              />
              3200
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={speed3600}
                onChange={() => setSpeed3600(!speed3600)}
              />
              3600
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={speed4000}
                onChange={() => setSpeed4000(!speed4000)}
              />
              4000
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={speed4600}
                onChange={() => setSpeed4600(!speed4600)}
              />
              4600
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={speed4800}
                onChange={() => setSpeed4800(!speed4800)}
              />
              4800
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={speed5200}
                onChange={() => setSpeed5200(!speed5200)}
              />
              5200
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={speed5600}
                onChange={() => setSpeed5600(!speed5600)}
              />
              5600
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={speed6000}
                onChange={() => setSpeed6000(!speed6000)}
              />
              6000
            </label>
          </div>
        </div>
      </form>


      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Capacity</h3>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={capacity8}
                onChange={() => setCapacity8(!capacity8)}
              />
              8
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={capacity16}
                onChange={() => setCapacity16(!capacity16)}
              />
              16
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={capacity32}
                onChange={() => setCapacity32(!capacity32)}
              />
              32
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={capacity64}
                onChange={() => setCapacity64(!capacity64)}
              />
              64
            </label>
          </div>
        </div>
      </form>

      <form className="flex flex-col w-full rounded-xl bg-white border-gray-200 px-2 py-1 mt-6">
        <h3 className="font-semibold text-lg md:text-2lg text-center">Choose Number of Sticks</h3>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={sticks1}
                onChange={() => setSticks1(!sticks1)}
              />
              1
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={sticks2}
                onChange={() => setSticks2(!sticks2)}
              />
              2
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={sticks4}
                onChange={() => setSticks4(!sticks4)}
              />
              4
            </label>
          </div>
          <div className="basis-1/2">
            <label className="text-base md:text-lg">
              <input
                type="checkbox"
                className="mr-1"
                checked={sticks8}
                onChange={() => setSticks8(!sticks8)}
              />
              8
            </label>
          </div>
        </div>
      </form>

      <button className="primary-button w-full text-center my-6 hover:cursor-pointer" onClick={handleFiltersClick}>Apply Filters</button>
    </div>
  )
}

export default MemoryFilters; 