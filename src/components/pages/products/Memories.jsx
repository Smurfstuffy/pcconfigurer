import { useState } from "react";
import ItemsGroup from "../../common/ItemsGroup";
import MemoryFilters from "../filters/MemoryFilters";

const Memories = () => {
  const url = 'http://localhost:8080/api/memories';
  const [opened, setOpened] = useState(false);
  const [body, setBody] = useState({});

  const toggleFilter = () => {
    setOpened(prev => !prev);
  }

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-center bg-indigo-900 text-white font-bold text-2xl py-2 md:text-4xl md:py-4" onClick={toggleFilter}>Choose a Memory</h1>
      <div className="flex">
        <div className={`h-screen md:basis-1/5 md:block ${opened ? "block basis-full" : "hidden"}`}>
          <MemoryFilters setBody={setBody} />
        </div>
        <div className={`md:basis-4/5 md:block ${opened ? "hidden" : "block basis-full"}`}>
          <ItemsGroup url={url} body={body} />
        </div>
      </div>
    </div>
  )
}

export default Memories;