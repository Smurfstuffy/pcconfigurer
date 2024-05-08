import ItemsGroud from '../common/ItemsGroud';

import backgroundImage from '../../img/PC_Components.jpg'

const Home = () => {
  return (
    <>
      <div className="relative">
        <img src={backgroundImage} alt="PC_Components" className="w-screen object-cover h-[50vh]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-2xl md:text-6xl font-bold text-shadow">PC Configurer</h1>
            <p className="text-l md:text-3xl text-shadow">Personalize Your Power with PC Configurer </p>
          </div>
        </div>
      </div>
      <ItemsGroud/>
    </>
  );
};

export default Home