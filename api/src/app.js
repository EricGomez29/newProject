import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//initialization
const app = express();

// middlewars
app.use(morgan('dev'));     //muestra los datos o request que llegan
app.use(json());            //hace que entienda formatos json

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;