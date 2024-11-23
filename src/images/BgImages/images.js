import tree from './bg_desktop7@1x.png';
import tree2 from './bg_desktop7@2x.png';
import treem from './bg_mobile3@1x.png';
import treem2 from './bg_mobile3@2x.png';
import treet from './bg_tablet12@1x.png';
import treemt2 from './bg_tablet12@2x.png';

import sky from './bg_desktop2@1x.png';
import sky2 from './bg_desktop2@2x.png';
import skym from './bg_mobile4@1x.png';
import skym2 from './bg_mobile4@2x.png';
import skyt from './bg_tablet11@1x.png';
import skyt2 from './bg_tablet11@2x.png';

import aerostats from './bg_desktop1@1x.png';
import aerostats2 from './bg_desktop1@1x.png';
import aerostatst from './bg_tablet13@1x.png';
import aerostatst2 from './bg_tablet13@2x.png';
import aerostatsm from './bg_mobile1@1x.png';
import aerostatsm2 from './bg_mobile1@1x.png';

import halfmoon from './bg_desktop8@1x.png';
import halfmoon2 from './bg_desktop8@2x.png';
import halfmoont from './bg_tablet9@1x.png';
import halfmoont2 from './bg_tablet9@2x.png';
import halfmoonm from './bg_mobile15@1x.png';
import halfmoonm2 from './bg_mobile15@2x.png';

import leavs from './bg_desktop3@1x.png';
import leavs2  from './bg_desktop3@2x.png';
import leavst  from './bg_tablet8@1x.png';
import leavst2  from './bg_tablet8@2x.png';
import leavsm  from './bg_mobile14@1x.png';
import leavsm2  from './bg_mobile14@2x.png';

import clouds  from './bg_desktop4@1x.png';
import clouds2 from './bg_desktop4@2x.png';
import cloudst  from './bg_tablet6@1x.png';
import cloudst2  from './bg_tablet6@2x.png';
import cloudsm  from './bg_mobile5@1x.png';
import cloudsm2  from './bg_mobile5@2x.png';

import canyon from './bg_desktop9@1x.png';
import canyon2 from './bg_desktop9@2x.png';
import canyont  from './bg_tablet5@1x.png';
import canyont2  from './bg_tablet5@2x.png';
import canyonm  from './bg_mobile12@1x.png';
import canyonm2  from './bg_mobile12@2x.png';

import colors from './bg_desktop5@1x.png';
import colors2 from './bg_desktop5@2x.png';
import colorst  from './bg_tablet3@1x.png';
import colorst2  from './bg_tablet3@2x.png';
import colorsm  from './bg_mobile6@1x.png';
import colorsm2  from './bg_mobile6@2x.png';

import fullmoon from './bg_desktop10@1x.png';
import fullmoon2 from './bg_desktop10@2x.png';
import fullmoont  from './bg_tablet2@1x.png';
import fullmoont2  from './bg_tablet2@2x.png';
import fullmoonm  from './bg_mobile7@1x.png';
import fullmoonm2  from './bg_mobile7@2x.png';

import boat from './bg_desktop6@1x.png';
import boat2 from './bg_desktop6@2x.png';
import boatt  from './bg_tablet14@1x.png';
import boatt2  from './bg_tablet14@2x.png';
import boatm  from './bg_mobile2@1x.png';
import boatm2  from './bg_mobile2@2x.png';

import balloon from './bg_desktop11@1x.png';
import balloon2 from './bg_desktop11@2x.png';
import balloont  from './bg_tablet15@1x.png';
import balloont2  from './bg_tablet15@2x.png';
import balloonm  from './bg_mobile9@1x.png';
import balloonm2  from './bg_mobile9@2x.png';

import mountains from './bg_desktop12@1x.png';
import mountains2 from './bg_desktop12@2x.png';
import mountainst  from './bg_tablet10@1x.png';
import mountainst2  from './bg_tablet10@2x.png';
import mountainsm  from './bg_mobile10@1x.png';
import mountainsm2  from './bg_mobile10@2x.png';

import sea from './bg_desktop13@1x.png';
import sea2 from './bg_desktop13@2x.png';
import seat  from './bg_tablet7@1x.png';
import seat2  from './bg_tablet7@2x.png';
import seam  from './bg_mobile11@1x.png';
import seam2  from './bg_mobile11@2x.png';

import city from './bg_desktop14@1x.png';
import city2 from './bg_desktop14@2x.png';
import cityt  from './bg_tablet4@1x.png';
import cityt2  from './bg_tablet4@2x.png';
import citym  from './bg_mobile13@1x.png';
import citym2  from './bg_mobile13@2x.png';

import starrysky from './bg_desktop15@1x.png';
import starrysky2 from './bg_desktop15@2x.png';
import starryskyt  from './bg_tablet1@1x.png';
import starryskyt2  from './bg_tablet1@2x.png';
import starryskym  from './bg_mobile8@1x.png';
import starryskym2  from './bg_mobile8@2x.png';

const isRetina = window.devicePixelRatio > 1;

const data = [
    { id: 'tree', 
      image: isRetina ? tree2 : tree,
      tablet: isRetina ? treemt2 : treet,
      mobile: isRetina ? treem2: treem
    },
    { id: 'sky', 
      image: isRetina? sky2 :sky,
      mobile: isRetina? skym2 : skym,
      tablet: isRetina ? skyt2 : skyt   
    },
    { id: 'aerostats', 
      image: isRetina ? aerostats2 : aerostats,
      tablet: isRetina ? aerostatst2 : aerostatst, 
      mobile: isRetina ? aerostatsm2: aerostatsm 
        },
    { id: 'halfmoon',
      image: isRetina ? halfmoon2 : halfmoon,
      tablet: isRetina ? halfmoont2 : halfmoont, 
      mobile: isRetina ? halfmoonm2: halfmoonm 
    },
    { id: 'leavs',
      image: isRetina ? leavs2 : leavs,
      tablet: isRetina ? leavst2 : leavst, 
      mobile: isRetina ? leavsm2: leavsm 
     },
    { id: 'clouds',
      image: isRetina ? clouds2 : clouds,
      tablet: isRetina ? cloudst2 : cloudst, 
      mobile: isRetina ? cloudsm2: cloudsm 
    },
    { id: 'canyon',
      image: isRetina ? canyon2 : canyon,
      tablet: isRetina ? canyont2 : canyont, 
      mobile: isRetina ? canyonm2: canyonm 
    },
    { id: 'colors',
      image: isRetina ? colors2 : colors,
      tablet: isRetina ? colorst2 : colorst, 
      mobile: isRetina ? colorsm2: colorsm 
    },
    { id: 'full-moon',
      image: isRetina ? fullmoon2 : fullmoon,
      tablet: isRetina ? fullmoont2 : fullmoont, 
      mobile: isRetina ? fullmoonm2: fullmoonm 
    },
    { id: 'boat',
      image: isRetina ? boat2 : boat,
      tablet: isRetina ? boatt2 : boatt, 
      mobile: isRetina ? boatm2: boatm 
    },
    { id: 'balloon',
      image: isRetina ? balloon2 : balloon,
      tablet: isRetina ? balloont2 : balloont, 
      mobile: isRetina ? balloonm2: balloonm 
    },
    { id: 'mountains',  
      image: isRetina ? mountains2 : mountains,
      tablet: isRetina ? mountainst2 : mountainst, 
      mobile: isRetina ? mountainsm2: mountainsm 
    },
    { id: 'sea', 
      image: isRetina ? sea2 : sea ,
      tablet: isRetina ? seat2 : seat, 
      mobile: isRetina ? seam2: seam 
    },
    { id: 'city',
      image: isRetina ? city2 : city ,
      tablet: isRetina ? cityt2 : cityt, 
      mobile: isRetina ? citym2: citym 
    },
    { id: 'starry-sky',
      image: isRetina ? starrysky2 : starrysky,
      tablet: isRetina ? starryskyt2 : starryskyt, 
      mobile: isRetina ? starryskym2: starryskym 
    },
  ];
  
  export default data;