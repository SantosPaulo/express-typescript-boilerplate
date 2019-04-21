import e from 'express';
import controllers from '@controllers/index';

const router: e.Router = e.Router();
const { main } = controllers;

router.get('/', main.index);

export default router;

