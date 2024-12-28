import rozetka from '../../img/icons/rozetka.png';
import telemart from '../../img/icons/telemart.png';
import moyo from '../../img/icons/moyo.png';
import foxtrot from '../../img/icons/foxtrot.png';
import allo from '../../img/icons/allo.png';

const Icon = ({shop}) => {
  switch (shop) {
    case 'rozetka':
      return <img src={rozetka} alt="rozetka" className='h-6' />
    case 'Telemart':
      return <img src={telemart} alt="telemart" className='h-6' />
    case 'moyo':
      return <img src={moyo} alt="moyo" className='h-6' />
    case 'foxtrot':
      return <img src={foxtrot} alt="foxtrot" className='h-6' />
    case 'Allo':
      return <img src={allo} alt="allo" className='h-6' />
    default:
      return <></>
  }
}

export default Icon;