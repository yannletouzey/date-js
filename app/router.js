import express from 'express';
import controller from './controller.js';

const router = express.Router();

router.get('/days', controller.days);
router.get('/hour', controller.hour);
router.get('/date', controller.date);
router.get('/tomorrow', controller.tomorrow);
router.get('/data', controller.data);
router.get('/weekday/:y/:m/:d', controller.weekday);
router.get('/age/:y/:m/:d', controller.age);
router.get('/date/:y/:m/:d/:locales?', controller.locals);
router.get('/howMuchDodo/:y/:m/:d', controller.howMuchDodo);

export default router;