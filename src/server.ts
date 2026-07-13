import app from './app';
import {env} from './config/env';
import {createLogger} from './infrastructor/logger/create-logger';
import {errorHandler} from './interface/http/v1/middlewares/errorHandler';
import apiRoute from './interface/http/v1/routes/api/api';

const port = env.PORT;
const logger = createLogger();

app.use(errorHandler);

app.use('/api/v1',apiRoute);

app.listen(port,()=>{
    logger.info(`Server is running on port ${port}`);
});