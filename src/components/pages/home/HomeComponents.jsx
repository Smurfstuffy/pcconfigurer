import HomeComponentCard from "./HomeComponentCard";
import ItemsGroupCard from "../../common/ItemsGroupCard";

import processorImage from '../../../img/generic/processor/amd-cpu.jpg';
import motherboardImage from '../../../img/generic/motherboard/default-mb.jpg';
import graphicalCardImage from '../../../img/generic/graphicalCard/default-gpu.jpg'


const HomeComponents = () => {

  const urls = [
    { link: 'products/processors', img: processorImage, name: 'Processors' },
    { link: 'products/motherboards', img: motherboardImage, name: 'Motherboards' },
    { link: 'products/graphicalcards', img: graphicalCardImage, name: 'Graphical Cards' }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
      <ItemsGroupCard popular={true} />
      {urls.map((url, index) => (
        <HomeComponentCard img={url.img} link={url.link} name={url.name} key={index} />
      ))}
    </div>
  )
}

export default HomeComponents;