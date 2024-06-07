const SkeletonBuildCard = () => {
  return (
    <div className="card animate-pulse hover:shadow-2xl flex flex-col items-center">
      <div className="bg-gray-300 h-72 md:h-96 w-full"></div>
      <div className="m-4 w-full flex flex-col items-center">
        <div className="bg-gray-300 h-6 w-3/4 mb-2"></div>
        <div className="bg-gray-300 h-6 w-1/2 mb-2"></div>
        <div className="bg-gray-300 h-6 w-1/4"></div>
      </div>
    </div>
  );
};

export default SkeletonBuildCard;