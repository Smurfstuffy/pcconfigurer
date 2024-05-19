import { useLocation } from "react-router-dom"
import getImageGeneric from "../../functions/getImageGeneric";

const Card = ({ name, id, imgUrl }) => {
  const location = useLocation()

  if (!imgUrl) {
    imgUrl = getImageGeneric(name, location.pathname);
  }

  return (
    <div className="card hover:shadow-2xl hover:cursor-pointer">
      <img src={imgUrl} alt={name} className="h-37 md:h-64  w-full object-cover" />
      <div className="m-4 text-center">
        <span className="font-bold text-base md:text-lg">{name}</span>
      </div>
    </div>
  )
}

export default Card