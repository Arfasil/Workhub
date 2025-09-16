import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://chanchleshkumar3:qEx7hlRytcJfiSfJ@cluster0.zuftncu.mongodb.net/employee-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
import employeesRouter from './routes/employees.js';
import tasksRouter from './routes/tasks.js';
import authRouter from './routes/auth.js';

app.use('/api/employees', employeesRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/auth', authRouter);

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Employee Management API is running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
