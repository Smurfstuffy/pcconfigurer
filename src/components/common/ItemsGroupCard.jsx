import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ItemsGroupCard = ({popular}) => {
  const location = useLocation();
  const navigate = useNavigate();

  if(location.pathname !== '/') {
    return null
  }

  if(popular) {
    return (
      <div className="card flex flex-col justify-around bg-white px-1">
        <h1 className="font-bold text-2xl md:text-4xl">Popular PC components</h1>
        <span className="block text-gray-600 text-lg md:text-xl">Explore popular PC components to create your own configuration</span>
        <button className="primary-button rounded-xl" onClick={() => navigate('/configuration')}>Create your Build</button>
      </div>
    )  
  } else {
    return (
      <div className="card flex flex-col justify-around bg-white px-1">
        <h1 className="font-bold text-2xl md:text-4xl">Other users's builds</h1>
        <span className="block text-gray-600 text-lg md:text-xl">Research other's builds to inspire yourself and find better choice for you</span>
        <button className="primary-button rounded-xl" onClick={() => navigate('/usersbuilds')}>View more builds</button>
      </div>
    )
  }
}

export default ItemsGroupCard