import express from 'express'
import { RegisterController } from '../Controller/AuthController.js';

const routes = express.Router();

routes.post('/register',RegisterController);

export default routes;