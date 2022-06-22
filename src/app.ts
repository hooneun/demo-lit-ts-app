import { Router } from '@vaadin/router';
import { routes } from './route';
import { getLottos } from './lotto/lib/data'; 

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes(routes);

const data = getLottos();
console.log(data);