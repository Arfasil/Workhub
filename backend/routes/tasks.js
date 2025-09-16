import express from 'express';
import Employee from '../models/Employee.js';

const router = express.Router();

// Add task to employee
router.post('/:employeeId', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        const newTask = {
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            category: req.body.category,
            active: false,
            completed: false,
            failed: false,
            newtask: true
        };

        employee.tasks.push(newTask);
        employee.taskCount.newtask += 1;
        
        const updatedEmployee = await employee.save();
        const addedTask = updatedEmployee.tasks[updatedEmployee.tasks.length - 1];
        
        res.status(201).json(addedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update task
router.put('/:employeeId/:taskId', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        const taskIndex = employee.tasks.findIndex(task => task._id.toString() === req.params.taskId);
        if (taskIndex === -1) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const oldTask = employee.tasks[taskIndex];
        const updatedTask = { ...oldTask.toObject(), ...req.body };
        
        // Update task counts based on status changes
        if (oldTask.active !== updatedTask.active) {
            if (updatedTask.active) employee.taskCount.active += 1;
            else employee.taskCount.active -= 1;
        }
        
        if (oldTask.completed !== updatedTask.completed) {
            if (updatedTask.completed) employee.taskCount.completed += 1;
            else employee.taskCount.completed -= 1;
        }
        
        if (oldTask.failed !== updatedTask.failed) {
            if (updatedTask.failed) employee.taskCount.failed += 1;
            else employee.taskCount.failed -= 1;
        }
        
        if (oldTask.newtask !== updatedTask.newtask) {
            if (updatedTask.newtask) employee.taskCount.newtask += 1;
            else employee.taskCount.newtask -= 1;
        }

        employee.tasks[taskIndex] = updatedTask;
        const savedEmployee = await employee.save();
        
        res.json(savedEmployee.tasks[taskIndex]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete task
router.delete('/:employeeId/:taskId', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        const taskIndex = employee.tasks.findIndex(task => task._id.toString() === req.params.taskId);
        if (taskIndex === -1) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const task = employee.tasks[taskIndex];
        
        // Update task counts
        if (task.active) employee.taskCount.active -= 1;
        if (task.completed) employee.taskCount.completed -= 1;
        if (task.failed) employee.taskCount.failed -= 1;
        if (task.newtask) employee.taskCount.newtask -= 1;
        
        employee.tasks.splice(taskIndex, 1);
        await employee.save();
        
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get tasks by category
router.get('/category/:category', async (req, res) => {
    try {
        const employees = await Employee.find();
        const tasks = [];
        
        employees.forEach(emp => {
            emp.tasks.forEach(task => {
                if (task.category.toLowerCase() === req.params.category.toLowerCase()) {
                    tasks.push({ ...task.toObject(), employeeName: emp.firstname });
                }
            });
        });
        
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get employee tasks
router.get('/employee/:employeeId', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        
        res.json(employee.tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
