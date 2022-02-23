import app from './config/app';
const port = process.env['PORT'] || 5000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App is running on port : ${port}`));
