import { useState } from "react";
import ItemsGroup from "../../common/ItemsGroup";

const GraphicalCards = () => {
  const url = 'http://localhost:8080/api/graphicalcards';
  const [opened, setOpened] = useState(false);
  
  const toggleFilter = () => {
    setOpened(prev => !prev);
  }

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-center bg-indigo-900 text-white font-bold text-2xl py-2 md:text-4xl md:py-4" onClick={toggleFilter}>Choose a GPU</h1>
      <div className="flex">
        <div className={`bg-yellow-700 md:basis-1/5 md:block ${opened ? "block basis-full" : "hidden"}`}>filters here</div>
        <div className={`bg-gray-200 md:basis-4/5 md:block ${opened ? "hidden" : "block basis-full"}`}>
          <ItemsGroup url={url}/>
        </div>
      </div>
    </div>
  )
}

export default GraphicalCards;