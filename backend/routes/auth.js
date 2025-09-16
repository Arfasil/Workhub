import express from 'express';
import Employee from '../models/Employee.js';
import Admin from '../models/Admin.js';

const router = express.Router();

// Employee login
router.post('/employee/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const employee = await Employee.findOne({ email, password });
        
        if (!employee) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Employee signup
router.post('/employee/signup', async (req, res) => {
    try {
        const { firstname, email, password } = req.body;
        
        // Check if employee already exists
        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            return res.status(400).json({ message: 'Employee already exists' });
        }
        
        const employee = new Employee({
            firstname,
            email,
            password,
            tasks: [],
            taskCount: { active: 0, completed: 0, failed: 0, newtask: 0 }
        });
        
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Admin login
router.post('/admin/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email, password });
        
        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        res.json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
