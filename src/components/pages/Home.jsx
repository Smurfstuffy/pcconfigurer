import ItemsGroud from '../common/ItemsGroud';

import backgroundImage from '../../img/PC_Components.jpg'

const Home = () => {
  return (
    <>
      <div className="relative">
        <img src={backgroundImage} alt="PC_Components" className="w-screen object-cover h-[50vh]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center p-2 md:p-6 rounded-2xl backdrop-blur-md shadow-2xl">
            <h1 className="text-3xl md:text-6xl font-bold cursor-default">PC Configurer</h1>
            <p className="text-xl md:text-3xl cursor-default">Personalize Your Power with PC Configurer</p>
          </div>
        </div>
      </div>
      <div className='bg-gray-200 px-10 md:px-24'><ItemsGroud /></div>
    </>
  );
};

export default Home