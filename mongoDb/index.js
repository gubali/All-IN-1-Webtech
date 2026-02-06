import express from 'express';
import 'dotenv/config';
import { connectionMongoDB } from './connections.js';
import router from './routes/user.routes.js'
const app = express();
const PORT = process.env.PORT ?? 8000;
connectionMongoDB(process.env.MONGO_DB).then(() =>
    console.log('MongoDb connected')
);
app.use(express.json());
app.use('/user', router);
app.listen(PORT, () => console.log(`Server runnig on PORT ${PORT}`));
