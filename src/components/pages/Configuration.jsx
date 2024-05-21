import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import PCConfig from "../../store/PCConfig";
import { isObjEmpty } from "../../functions/isObjEmpty";

const Configuration = observer(() => {
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
              <th className="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">CPU</td>
              <td className="text-left py-1 md:py-2">
                {isObjEmpty(PCConfig.config.processor) ?
                  <button className="primary-button text-xs md:text-lg px-1 md:px-8" onClick={() => navigate('/products/processors')}>Add CPU</button> :
                  <div className="flex items-center justify-between">
                    <p className="text-base md:text-lg text-gray-600 font-semibold hover:text-blue-600 hover:cursor-pointer"
                      onClick={() => navigate(`/products/processors/${PCConfig.config.processor._id}`)}>
                      {PCConfig.config.processor.name}
                    </p>
                    <button className="neutral-button text-xs md:text-lg px-1 md:px-8" onClick={() => PCConfig.removeProcessor()}>Remove CPU</button>
                  </div>
                }
              </td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">CPU Cooler</td>
              <td className="text-left py-1 md:py-2">
                {isObjEmpty(PCConfig.config.cooler) ?
                  <button className="primary-button text-xs md:text-lg px-1 md:px-8" onClick={() => navigate('/products/cpucoolers')}>Add CPU Cooler</button> :
                  <div className="flex items-center justify-between">
                    <p className="text-base md:text-lg text-gray-600 font-semibold hover:text-blue-600 hover:cursor-pointer"
                      onClick={() => navigate(`/products/cpucoolers/${PCConfig.config.cooler._id}`)}>
                      {PCConfig.config.cooler.name}
                    </p>
                    <button className="neutral-button text-xs md:text-lg px-1 md:px-8" onClick={() => PCConfig.removeCooler()}>Remove CPU Cooler</button>
                  </div>
                }
              </td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Motherboard</td>
              <td className="text-left py-1 md:py-2">
                {isObjEmpty(PCConfig.config.motherboard) ?
                  <button className="primary-button text-xs md:text-lg px-1 md:px-8" onClick={() => navigate('/products/motherboards')}>Add Motherboard</button> :
                  <div className="flex items-center justify-between">
                    <p className="text-base md:text-lg text-gray-600 font-semibold hover:text-blue-600 hover:cursor-pointer"
                      onClick={() => navigate(`/products/motherboards/${PCConfig.config.motherboard._id}`)}>
                      {PCConfig.config.motherboard.name}
                    </p>
                    <button className="neutral-button text-xs md:text-lg px-1 md:px-8 md:ml-8" onClick={() => PCConfig.removeMotherboard()}>Remove Motherboard</button>
                  </div>
                }
              </td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Graphical Card</td>
              <td className="text-left py-1 md:py-2">
                {isObjEmpty(PCConfig.config.graphicalCard) ?
                  <button className="primary-button text-xs md:text-lg px-1 md:px-8" onClick={() => navigate('/products/graphicalcards')}>Add Graphical Card</button> :
                  <div className="flex items-center justify-between">
                    <p className="text-base md:text-lg text-gray-600 font-semibold hover:text-blue-600 hover:cursor-pointer"
                      onClick={() => navigate(`/products/graphicalcards/${PCConfig.config.graphicalCard._id}`)}>
                      {PCConfig.config.graphicalCard.name}
                    </p>
                    <button className="neutral-button text-xs md:text-lg px-1 md:px-8 md:ml-8" onClick={() => PCConfig.removeGraphicalCard()}>Remove Graphical Card</button>
                  </div>
                }
              </td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Memory</td>
              <td className="text-left py-1 md:py-2">
                {isObjEmpty(PCConfig.config.memory) ?
                  <button className="primary-button text-xs md:text-lg px-1 md:px-8" onClick={() => navigate('/products/memories')}>Add Memory</button> :
                  <div className="flex items-center justify-between">
                    <p className="text-base md:text-lg text-gray-600 font-semibold hover:text-blue-600 hover:cursor-pointer"
                      onClick={() => navigate(`/products/memories/${PCConfig.config.memory._id}`)}>
                      {PCConfig.config.memory.name}
                    </p>
                    <button className="neutral-button text-xs md:text-lg px-1 md:px-8 md:ml-8" onClick={() => PCConfig.removeMemory()}>Remove Memory</button>
                  </div>
                }
              </td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Storage</td>
              <td className="text-left py-1 md:py-2">
                {isObjEmpty(PCConfig.config.storage) ?
                  <button className="primary-button text-xs md:text-lg px-1 md:px-8" onClick={() => navigate('/products/storages')}>Add Storage</button> :
                  <div className="flex items-center justify-between">
                    <p className="text-base md:text-lg text-gray-600 font-semibold hover:text-blue-600 hover:cursor-pointer"
                      onClick={() => navigate(`/products/storages/${PCConfig.config.storage._id}`)}>
                      {PCConfig.config.storage.name}
                    </p>
                    <button className="neutral-button text-xs md:text-lg px-1 md:px-8 md:ml-8" onClick={() => PCConfig.removeStorage()}>Remove Storage</button>
                  </div>
                }
              </td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Power Supply</td>
              <td className="text-left py-1 md:py-2">
                {isObjEmpty(PCConfig.config.powerSupply) ?
                  <button className="primary-button text-xs md:text-lg px-1 md:px-8" onClick={() => navigate('/products/powersupplies')}>Add Power Supply</button> :
                  <div className="flex items-center justify-between">
                    <p className="text-base md:text-lg text-gray-600 font-semibold hover:text-blue-600 hover:cursor-pointer"
                      onClick={() => navigate(`/products/powersupplies/${PCConfig.config.powerSupply._id}`)}>
                      {PCConfig.config.powerSupply.name}
                    </p>
                    <button className="neutral-button text-xs md:text-lg px-1 md:px-8 md:ml-8" onClick={() => PCConfig.removePowerSupply()}>Remove Power Supply</button>
                  </div>
                }
              </td>
            </tr>
            <tr className='border-y border-y-gray-400'>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Case Fan</td>
              <td className="text-left py-1 md:py-2">
                {isObjEmpty(PCConfig.config.fan) ?
                  <button className="primary-button text-xs md:text-lg px-1 md:px-8" onClick={() => navigate('/products/casefans')}>Add Case Fan</button> :
                  <div className="flex items-center justify-between">
                    <p className="text-base md:text-lg text-gray-600 font-semibold hover:text-blue-600 hover:cursor-pointer"
                      onClick={() => navigate(`/products/casefans/${PCConfig.config.fan._id}`)}>
                      {PCConfig.config.fan.name}
                    </p>
                    <button className="neutral-button text-xs md:text-lg px-1 md:px-8 md:ml-8" onClick={() => PCConfig.removeFan()}>Remove Case Fan</button>
                  </div>
                }
              </td>
            </tr>
            <tr>
              <td className="text-lg md:text-xl text-blue-600 font-semibold">Case</td>
              <td className="text-left py-1 md:py-2">
                {isObjEmpty(PCConfig.config.case) ?
                  <button className="primary-button text-xs md:text-lg px-1 md:px-8" onClick={() => navigate('/products/cases')}>Add Case</button> :
                  <div className="flex items-center justify-between">
                  <p className="text-base md:text-lg text-gray-600 font-semibold hover:text-blue-600 hover:cursor-pointer"
                    onClick={() => navigate(`/products/cases/${PCConfig.config.case._id}`)}>
                    {PCConfig.config.case.name}
                  </p>
                    <button className="neutral-button text-xs md:text-lg px-1 md:px-8 md:ml-8" onClick={() => PCConfig.removeCase()}>Remove Case</button>
                  </div>
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
})

export default Configuration