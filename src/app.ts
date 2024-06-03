import express from 'express';
import containerRoutes from './routes/containerRoutes';
import movementRoutes from './routes/movementRoutes';
import reportRoutes from './routes/movementReportRoutes';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/containers', containerRoutes);
app.use('/movements', movementRoutes);
app.use('/report', reportRoutes);

export default app;
