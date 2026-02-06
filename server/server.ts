import express, { Application } from 'express';
import { getAllCourses } from './server/get-courses.route';
import { saveCourse } from './server/save-course.route';
import cors from 'cors';

const app: Application = express();

app.use(cors({ origin: true }));
app.use(express.json()); // Using built-in JSON parser

// Define routes
app.route('/api/courses').get(getAllCourses);
app.route('/api/courses/:id').put(saveCourse);

// Start the server
const PORT = 9000;
const httpServer = app.listen(PORT, () => {
    console.log(`HTTP REST API Server running at http://localhost:${PORT}`);
});
