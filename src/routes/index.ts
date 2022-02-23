import test from './test.routes';

const setUpRoutes = (app) => {
    app.use('/', test);
};

export default setUpRoutes;
