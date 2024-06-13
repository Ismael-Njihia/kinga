import {sendContact} from '../controllers/contact.js';	
import express from 'express';

const router = express.Router();

router.route('/').post(sendContact);

export default router;