import HomeComponentCard from "./HomeComponentCard";
import ItemsGroupCard from "../../common/ItemsGroupCard";

const HomeComponents = () => {

  const urls = [
    { link: 'products/processors', url: 'http://localhost:8080/api/processors?page=4&limit=1', name: 'Processors' },
    { link: 'products/motherboards', url: 'http://localhost:8080/api/motherboards?page=2&limit=1', name: 'Motherboards' },
    { link: 'products/storages', url: 'http://localhost:8080/api/memories?page=2&limit=1', name: 'Memory' }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
      <ItemsGroupCard popular={true}/>
      {urls.map((url, index) => (
        <HomeComponentCard url={url.url} link={url.link} name={url.name} key={index} />
      ))}
    </div>
  )
}

export default HomeComponents;