import express from 'express'
import { RegisterController,LoginController } from '../Controller/AuthController.js';

const routes = express.Router();

routes.post('/register',RegisterController);
routes.post('/login',LoginController);

export default routes;