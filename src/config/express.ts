import express from 'express';
import routes from '../routes';
const app = express();

//Config of app
routes(app);

export default app;
