const SkeletonCard = () => {
  return (
    <div className="card animate-pulse flex flex-col items-center">
      <div className="bg-gray-300 h-64 md:h-80 w-full"></div>
      <div className="m-4 w-full">
        <div className="bg-gray-300 h-6 w-3/4 mx-auto"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
