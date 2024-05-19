import { useNavigate } from "react-router-dom"

const Configuration = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-center bg-indigo-900 text-white font-bold text-2xl py-2 md:text-4xl md:py-4">Configure your PC</h1>
      <div className="flex justify-center px-1 md:px-8 md:my-4 md:rounded-xl">
        <table className="table-auto w-screen mt-2">
          <thead>
            <tr className="text-gray-500 text-xs md:text-sm">
              <th className="text-left">Component</th>
              <th className="text-left">Selection</th>
              <th className="text-left">Base Price</th>
              <th className="text-left">Your Price</th>
              <th className="text-left">Where to Buy</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">CPU</td>
              <td className="text-left py-1 md:py-2">
                <button className="primary-button text-xs md:text-lg px-1 md:px-8" onClick={() => navigate('/products/processors')}>Add CPU</button>
              </td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">CPU Cooler</td>
              <td className="text-left py-1 md:py-2">
                <button className="primary-button text-xs md:text-lg px-1 md:px-2" onClick={() => navigate('/products/cpucoolers')}>Add CPU Cooler</button>
              </td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Motherboard</td>
              <td className="text-left py-1 md:py-2">
                <button className="primary-button text-xs md:text-lg px-1 md:px-2" onClick={() => navigate('/products/motherboards')}>Add Motherboard</button>
              </td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Graphical Card</td>
              <td className="text-left py-1 md:py-2">
                <button className="primary-button text-xs md:text-lg px-1 md:px-2" onClick={() => navigate('/products/graphicalcards')}>Add Graphical Card</button>
              </td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Memory</td>
              <td className="text-left py-1 md:py-2">
                <button className="primary-button text-xs md:text-lg px-1 md:px-2" onClick={() => navigate('/products/memories')}>Add Memory</button>
              </td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Storage</td>
              <td className="text-left py-1 md:py-2">
                <button className="primary-button text-xs md:text-lg px-1 md:px-2" onClick={() => navigate('/products/storages')}>Add Storage</button>
              </td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Power Supply</td>
              <td className="text-left py-1 md:py-2">
                <button className="primary-button text-xs md:text-lg px-1 md:px-2" onClick={() => navigate('/products/powersupplies')}>Add Power Supply</button>
              </td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Case Fan</td>
              <td className="text-left py-1 md:py-2">
                <button className="primary-button text-xs md:text-lg px-1 md:px-2" onClick={() => navigate('/products/casefans')}>Add Case Fan</button>
              </td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
            </tr>
            <tr>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Case</td>
              <td className="text-left py-1 md:py-2">
                <button className="primary-button text-xs md:text-lg px-1 md:px-2" onClick={() => navigate('/products/cases')}>Add Case</button>
              </td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
              <td className="text-left"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grow justify-end md:py-2 px-1 md:px-8 md:my-2">
        <p className="text-xl md:text-3xl text-end md:text-start text-gray-600">Base Total Price</p>
        <p className="text-xl md:text-3xl text-end md:text-start text-gray-600">Your Total Price</p>
      </div>
    </div>
  )
}

export default Configuration