import { useNavigate } from "react-router-dom";

const HomeComponentCard = ({ img, link, name }) => {
  const navigate = useNavigate();

  return (
    <div className="card hover:shadow-2xl hover:cursor-pointer" onClick={() => navigate(link)}>
      <img src={img} alt={name} className="h-64 md:h-80 w-full object-cover" />
      <div className="m-4 text-center">
        <span className="font-bold text-xl lg:text-xl">{name}</span>
      </div>
    </div>
  )

}

export default HomeComponentCard;