import  express  from  'express';

import { router } from './routes';

import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use("/docs" , swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use ( router )

app.listen(8192 , () => console.log("APP listening port 8192"));