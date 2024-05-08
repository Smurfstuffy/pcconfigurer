import Card from "./Card"
import curry from '../../img/PC_Components.jpg'
import noodles from '../../img/noodles.jpg'
import stew from '../../img/stew.jpg'

const ItemsGroud = () => {
  const testArr = [curry, noodles, stew]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {testArr.map((img) => (
        <Card img={img}/>
      ))}
    </div>
  )
}

export default ItemsGroud