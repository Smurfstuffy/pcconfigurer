import backgroundImage from '../../../img/background/PC_Components.jpg'

const SkeletonParticularUserBuild = () => {
  return (
    <div className="relative flex flex-col h-full">
      <img src={backgroundImage} alt="PC_Components_2" className="w-screen object-cover h-full" />
      <div className="flex flex-col justify-center lg:px-64 absolute inset-0">
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 py-4 h-full">
          <div className="animate-pulse flex flex-col items-center border-gray-500">
            <div className="bg-gray-300 w-5/6 h-72 md:h-96"></div>
          </div>
          <div className="flex flex-col border-gray-500">
            <div className="animate-pulse flex flex-col h-full">
              <p className=" bg-gray-300 w-full text-center h-8 lg:h-10 mb-2"></p>
              {[...Array(11)].map((_, i) => (
                <div key={i} className="flex pl-2 py-2">
                  <p className="bg-gray-300 h-6 w-full mr-2"></p>
                </div>
              ))}
            </div>      
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonParticularUserBuild