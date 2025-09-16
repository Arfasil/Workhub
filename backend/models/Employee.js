import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    completed: {
        type: Boolean,
        default: false
    },
    failed: {
        type: Boolean,
        default: false
    },
    newtask: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tasks: [taskSchema],
    taskCount: {
        active: { type: Number, default: 0 },
        completed: { type: Number, default: 0 },
        failed: { type: Number, default: 0 },
        newtask: { type: Number, default: 0 }
    }
}, { timestamps: true });

export default mongoose.model('Employee', employeeSchema);
