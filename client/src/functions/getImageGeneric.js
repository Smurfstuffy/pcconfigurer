
// CPU
import amdCpu from '../img/generic/processor/amd-cpu.jpg';
import intelCpu from '../img/generic/processor/intel-cpu.jpg'

// Case
import corsairCase from '../img/generic/case/corsair-case.jpg';
import asusCase from '../img/generic/case/asus-case.jpg';
import coolerMasterCase from '../img/generic/case/coolermaster-case.jpg';
import deepcoolCase from '../img/generic/case/deepcool-case.jpg';
import defaultCase from '../img/generic/case/default-case.jpg';
import hyteCase from '../img/generic/case/hyte-case.jpg';
import lianCase from '../img/generic/case/lian-case.jpg';
import montechCase from '../img/generic/case/montech-case.jpg';
import nzxtCase from '../img/generic/case/nzxt-case.jpg';
import samaCase from '../img/generic/case/sama-case.jpg';
import silverstoneCase from '../img/generic/case/silverstone-case.jpg';

// CPU Cooler
import amdCpuCooler from '../img/generic/cpucooler/amd-cpu-cooler.jpg';
import arcticCpuCooler from '../img/generic/cpucooler/arctic-cpu-cooler.jpg';
import bequitCpuCooler from '../img/generic/cpucooler/bequit-cpu-cooler.jpg';
import coolerMasterCpuCooler from '../img/generic/cpucooler/coolermaster-cpu-cooler.jpg';
import corsairCpuCooler from '../img/generic/cpucooler/corsair-cpu-cooler.jpg';
import deepcoolCpuCooler from '../img/generic/cpucooler/deepcool-cpu-cooler.jpg';
import defaultCpuCooler from '../img/generic/cpucooler/default-cpu-cooler.jpg';
import idcoolingCpuCooler from '../img/generic/cpucooler/idcooling-cpu-cooler.jpg';
import noctuaCpuCooler from '../img/generic/cpucooler/noctua-cpu-cooler.jpg';
import nzxtCpuCooler from '../img/generic/cpucooler/nzxt-cpu-cooler.jpg';
import thermalrightCpuCooler from '../img/generic/cpucooler/thermalright-cpu-cooler.jpg';

// Case Fans
import arcticFan from '../img/generic/casefan/arctic-fan.jpg';
import bequitFan from '../img/generic/casefan/bequit-fan.jpg';
import corsairFan from '../img/generic/casefan/corsair-fan.jpg';
import deepcoolFan from '../img/generic/casefan/deepcool-fan.jpg';
import defaultFan from '../img/generic/casefan/default-fan.jpg';
import lianFan from '../img/generic/casefan/lian-fan.jpg';
import noctuaFan from '../img/generic/casefan/noctua-fan.jpg';
import nzxtFan from '../img/generic/casefan/nzxt-fan.jpg';
import thermalrightFan from '../img/generic/casefan/thermalright-fan.jpg';

// Memory
import adataRam from '../img/generic/memory/adata-ram.jpg';
import corsairRam from '../img/generic/memory/corsair-ram.jpg';
import defaultRam from '../img/generic/memory/default-ram.jpg';
import geilRam from '../img/generic/memory/geil-ram.jpg';
import goodRam from '../img/generic/memory/goodram-ram.jpg';
import gskillRam from '../img/generic/memory/gskill-ram.jpg';
import kingstonRam from '../img/generic/memory/kingston-ram.jpg';
import lexarRam from '../img/generic/memory/lexar-ram.jpg';
import mushkinRam from '../img/generic/memory/mushkin-ram.jpg';
import oloyRam from '../img/generic/memory/oloy-ram.jpg';
import siliconRam from '../img/generic/memory/silicon-ram.jpg';
import teamgroupRam from '../img/generic/memory/teamgroup-ram.jpg';

// Power Supply
import apeviaPs from '../img/generic/powersupply/apevia-ps.jpg';
import asusPs from '../img/generic/powersupply/asus-ps.jpg';
import coolerMasterPs from '../img/generic/powersupply/coolermaster-ps.jpg';
import corsairPs from '../img/generic/powersupply/corsair-ps.jpg';
import defaultPs from '../img/generic/powersupply/default-ps.jpg';
import evgaPs from '../img/generic/powersupply/evga-ps.jpg';
import gigabytePs from '../img/generic/powersupply/gigabyte-ps.jpg';
import msiPs from '../img/generic/powersupply/msi-ps.jpg';
import seasonicPs from '../img/generic/powersupply/seasonic-ps.jpg';
import thermaltakePs from '../img/generic/powersupply/thermaltake-ps.jpg';

// Motherboard
import asrockMb from '../img/generic/motherboard/asrock-mb.jpg';
import asusMb from '../img/generic/motherboard/asus-mb.jpg';
import biostarMb from '../img/generic/motherboard/biostar-mb.jpg';
import defaultMb from '../img/generic/motherboard/default-mb.jpg';
import gigabyteMb from '../img/generic/motherboard/gigabyte-mb.jpg';
import msiMb from '../img/generic/motherboard/msi-mb.jpg';

// Graphical Card
import asusGpu from '../img/generic/graphicalCard/asus-gpu.jpg';
import defaultGpu from '../img/generic/graphicalCard/default-gpu.jpg';
import gigabyteGpu from '../img/generic/graphicalCard/gigabyte-gpu.jpg';
import inno3dGpu from '../img/generic/graphicalCard/inno3d-gpu.jpg';
import msiGpu from '../img/generic/graphicalCard/msi-gpu.jpg';
import palitGpu from '../img/generic/graphicalCard/palit-gpu.jpg';

// Storage
import crucialS from '../img/generic/storage/crucial-s.jpg';
import defaultS from '../img/generic/storage/default-s.jpg';
import samsungS from '../img/generic/storage/samsung-s.jpg';
import siliconS from '../img/generic/storage/silicon-s.jpg';
import teamgroupS from '../img/generic/storage/teamgroup-s.jpg';
import westernDigitalS from '../img/generic/storage/westerndigital-s.jpg'

const getImageGeneric = (name, path) => {
  let img = '';
  if (path.includes('processors')) {
    if (name.includes("AMD")) {
      img = amdCpu;
    } else {
      img = intelCpu;
    }
  } else if (path.includes('motherboards')) {
    if (name.includes('ASRock')) {
      img = asrockMb;
    } else if (name.includes('Asus')) {
      img = asusMb;
    } else if (name.includes('Biostar')) {
      img = biostarMb;
    } else if (name.includes('Gigabyte')) {
      img = gigabyteMb;
    } else if (name.includes('MSI')) {
      img = msiMb;
    } else {
      img = defaultMb;
    }
  } else if (path.includes('graphicalcards')) {
    if (name.includes('Asus')) {
      img = asusGpu;
    } else if(name.includes('Gigabyte')) {
      img = gigabyteGpu;
    } else if(name.includes('Inno3D')) {
      img = inno3dGpu;
    } else if(name.includes('MSI')) {
      img = msiGpu;
    } else if(name.includes('Palit')) {
      img = palitGpu;
    } else {
      img = defaultGpu;
    }

  } else if (path.includes('cases')) {
    if (name.includes("Asus")) {
      img = asusCase;
    } else if (name.includes("Cooler Master")) {
      img = coolerMasterCase;
    } else if (name.includes("Corsair")) {
      img = corsairCase;
    } else if (name.includes("Deepcool")) {
      img = deepcoolCase;
    } else if (name.includes("HYTE")) {
      img = hyteCase;
    } else if (name.includes("Lian")) {
      img = lianCase;
    } else if (name.includes("Montech")) {
      img = montechCase;
    } else if (name.includes("NZXT")) {
      img = nzxtCase;
    } else if (name.includes("SAMA")) {
      img = samaCase;
    } else if (name.includes("Silverstone")) {
      img = silverstoneCase;
    } else {
      img = defaultCase;
    }
  } else if (path.includes('casefans')) {
    if (name.includes('ARCTIC')) {
      img = arcticFan;
    } else if (name.includes('be quiet!')) {
      img = bequitFan;
    } else if (name.includes('Corsair')) {
      img = corsairFan;
    } else if (name.includes('Deepcool')) {
      img = deepcoolFan;
    } else if (name.includes('Lian')) {
      img = lianFan;
    } else if (name.includes('Noctua')) {
      img = noctuaFan;
    } else if (name.includes('NZXT')) {
      img = nzxtFan;
    } else if (name.includes('Thermalright')) {
      img = thermalrightFan;
    } else {
      img = defaultFan;
    }
  } else if (path.includes('cpucoolers')) {
    if (name.includes('AMD')) {
      img = amdCpuCooler;
    } else if (name.includes('ARCTIC')) {
      img = arcticCpuCooler;
    } else if (name.includes('be quiet!')) {
      img = bequitCpuCooler;
    } else if (name.includes('Cooler Master')) {
      img = coolerMasterCpuCooler;
    } else if (name.includes('Corsair')) {
      img = corsairCpuCooler;
    } else if (name.includes('Deepcool')) {
      img = deepcoolCpuCooler;
    } else if (name.includes('ID-COOLING')) {
      img = idcoolingCpuCooler;
    } else if (name.includes('Noctua')) {
      img = noctuaCpuCooler;
    } else if (name.includes('NZXT')) {
      img = nzxtCpuCooler;
    } else if (name.includes('Thermalright')) {
      img = thermalrightCpuCooler;
    } else {
      img = defaultCpuCooler;
    }
  } else if (path.includes('memories')) {
    if (name.includes('ADATA')) {
      img = adataRam;
    } else if (name.includes('Corsair')) {
      img = corsairRam;
    } else if (name.includes('GeIL')) {
      img = geilRam;
    } else if (name.includes('GOODRAM')) {
      img = goodRam;
    } else if (name.includes('G.Skill')) {
      img = gskillRam;
    } else if (name.includes('Kingston')) {
      img = kingstonRam;
    } else if (name.includes('Lexar')) {
      img = lexarRam;
    } else if (name.includes('Mushkin')) {
      img = mushkinRam;
    } else if (name.includes('OLOy')) {
      img = oloyRam;
    } else if (name.includes('Silicon')) {
      img = siliconRam;
    } else if (name.includes('TEAMGROUP')) {
      img = teamgroupRam;
    } else {
      img = defaultRam;
    }
  } else if (path.includes('storages')) {
    if(name.includes('Crucial')) {
      img = crucialS;
    } else if(name.includes('Samsung')) {
      img = samsungS;
    } else if(name.includes('Silicon')) {
      img = siliconS;
    } else if(name.includes('TEAMGROUP')) {
      img = teamgroupS;
    } else if (name.includes('Western Digital')) {
      img = westernDigitalS;
    } else {
      img = defaultS;
    }
  } else if (path.includes('powersupplies')) {
    if (name.includes('Apevia')) {
      img = apeviaPs;
    } else if (name.includes('Asus')) {
      img = asusPs;
    } else if (name.includes('Cooler Master')) {
      img = coolerMasterPs;
    } else if (name.includes('Corsair')) {
      img = corsairPs;
    } else if (name.includes('EVGA')) {
      img = evgaPs;
    } else if (name.includes('Gigabyte')) {
      img = gigabytePs;
    } else if (name.includes('MSI')) {
      img = msiPs;
    } else if (name.includes('SeaSonic')) {
      img = seasonicPs;
    } else if (name.includes('Thermaltake')) {
      img = thermaltakePs;
    } else {
      img = defaultPs;
    }
  }
  return img;
}

export default getImageGeneric;