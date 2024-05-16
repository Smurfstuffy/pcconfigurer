import Card from "./Card"
import curry from '../../img/curry.jpg'
import noodles from '../../img/noodles.jpg'
import stew from '../../img/stew.jpg'
import ItemsGroupCard from "./ItemsGroupCard"

const ItemsGroup = () => {
  const testArr = [curry, noodles, stew, curry, noodles, stew]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
      <ItemsGroupCard />
      {testArr.map((img) => (
        <Card img={img}/>
      ))}
    </div>
  )
}

export default ItemsGroup