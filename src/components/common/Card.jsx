const Card = ({name, id}) => {
  return (
    <div class="card hover:shadow-2xl hover:cursor-pointer">
      <img src='https://images.prom.ua/1953370251_w600_h600_1953370251.jpg' alt={name} class="h-38 md:h-56  w-full object-cover" />
      <div class="m-4 text-center">
        <span class="font-bold text-base md:text-lg">{name}</span>
      </div>
    </div>
  )
}

export default Card