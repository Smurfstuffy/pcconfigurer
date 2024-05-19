
import amdCpu from '../img/generic/processor/amd-cpu.jpg';
import intelCpu from '../img/generic/processor/intel-cpu.jpg'

import corsairCase from '../img/generic/case/corsair-case.jpg';
import asusCase from '../img/generic/case/asus-case.jpg';
import coolerMasterCase from '../img/generic/case/coolermaster-case.jpg';
import deepcoolCase from '../img/generic/case/default-case.jpg';

const getImageGeneric = (name, path) => {
  let img = '';
  if (path.includes('processors')) {
    if (name.includes("AMD")) {
      img = amdCpu;
    } else {
      img = intelCpu;
    }
  } else if(path.includes('motherboards')) {

  } else if(path.includes('graphicalcards')) {

  } else if(path.includes('cases')) {

  } else if(path.includes('casefans')) {

  } else if(path.includes('cpucoolers')) {

  } else if(path.includes('memories')) {

  } else if(path.includes('storages')) {

  } else if(path.includes('powersupplies')) {
    
  }
  return img;
}

export default getImageGeneric;