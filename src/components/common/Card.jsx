const Card = ({img}) => {
  return (
    <div class="card hover:shadow-lg">
      <img src={img} alt="stew" class="h-32 sm:h-48 w-full object-cover" />
      <div class="m-4">
        <span class="font-bold">Name</span>
        <span class="block text-gray-500 text-sm">User</span>
      </div>
    </div>
  )
}

export default Card