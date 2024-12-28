import { useState } from "react";
import ItemsGroup from "../../common/ItemsGroup";
import StorageFilters from "../filters/StorageFilters";

const Storages = () => {
  const url = 'http://localhost:8080/api/storages';
  const searchUrl = 'http://localhost:8080/api/searchstorages';
  const [opened, setOpened] = useState(false);
  const [body, setBody] = useState({});
  const [searchQuery, setSearchQuery] = useState();
  
  const toggleFilter = () => {
    setOpened(prev => !prev);
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between md:justify-center bg-indigo-900 text-white font-bold text-xl md:text-2xl py-2 md:py-3 px-6 md:px-0" >
        <button className="secondary-button px-2 block md:hidden" onClick={toggleFilter}>Filters</button>
        <input type="text" placeholder='I search...' className='input font-semibold text-black' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      </div>
      <div className="flex">
      <div className={`h-screen md:basis-1/5 md:block ${opened ? "block basis-full" : "hidden"}`}>
          <StorageFilters setBody={setBody} setSearchQuery={setSearchQuery} setOpened={setOpened}/>
        </div>
        <div className={`md:basis-4/5 md:block ${opened ? "hidden" : "block basis-full"}`}>
        {!searchQuery ?
            <ItemsGroup url={url} body={body} /> :
            <ItemsGroup url={searchUrl} body={{ query: searchQuery }} />
          }
        </div>
      </div>
    </div>
  )
}

export default Storages;