import { Router } from '@vaadin/router';
import { routes } from './route';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes(routes);