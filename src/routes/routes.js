import { Router } from 'express';
import { autentificacion, consultaSaldo, seguirConversacion } from '../services/usuario.js';



const router = new Router();

router.post('/daquichat/auth', autentificacion);
router.get('/daquichat/verificacion/:codigoAuth', seguirConversacion);
router.get('/daquichat/consultaSaldo/:usuario', consultaSaldo);


export default router;