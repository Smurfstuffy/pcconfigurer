const Card = ({img}) => {
  return (
    <div class="card hover:shadow-2xl hover:cursor-pointer">
      <img src={img} alt="stew" class="h-36 md:h-56 w-full object-cover" />
      <div class="m-4">
        <span class="font-bold text-base md:text-lg">Name</span>
        <span class="block text-gray-500 text-sm md:text-base">User</span>
      </div>
    </div>
  )
}

export default Card