import mongoose from 'mongoose';
import Employee from './models/Employee.js';
import Admin from './models/Admin.js';

// MongoDB Connection
mongoose.connect('mongodb+srv://chanchleshkumar3:qEx7hlRytcJfiSfJ@cluster0.zuftncu.mongodb.net/employee-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB for seeding'))
.catch(err => console.error('MongoDB connection error:', err));

const initialEmployees = [
    {
        firstname: "Aarav",
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                title: "Prepare sales report",
                description: "Compile and analyze last quarter's sales data",
                date: "2025-08-15",
                category: "Reporting",
                active: true,
                completed: false,
                failed: false,
                newtask: false
            },
            {
                title: "Client meeting",
                description: "Discuss project requirements with client X",
                date: "2025-08-16",
                category: "Meetings",
                active: false,
                completed: true,
                failed: false,
                newtask: false
            },
            {
                title: "Database backup",
                description: "Perform weekly backup of production database",
                date: "2025-08-18",
                category: "Maintenance",
                active: false,
                completed: false,
                failed: true,
                newtask: false
            },
            {
                title: "New marketing strategy",
                description: "Brainstorm and plan next quarter's marketing ideas",
                date: "2025-08-31",
                category: "Marketing",
                active: true,
                completed: false,
                failed: false,
                newtask: true
            }
        ],
        taskCount: { active: 2, completed: 1, failed: 1, newtask: 1 }
    },
    {
        firstname: "Ishita",
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                title: "UI bug fixes",
                description: "Resolve styling issues on dashboard",
                date: "2025-08-14",
                category: "Development",
                active: true,
                completed: false,
                failed: false,
                newtask: false
            },
            {
                title: "Write documentation",
                description: "Document API endpoints for frontend team",
                date: "2025-08-20",
                category: "Documentation",
                active: false,
                completed: true,
                failed: false,
                newtask: false
            },
            {
                title: "Optimize images",
                description: "Reduce size of images for faster load times",
                date: "2025-08-22",
                category: "Performance",
                active: false,
                completed: false,
                failed: true,
                newtask: false
            },
            {
                title: "Team standup",
                description: "Daily progress discussion",
                date: "2025-08-13",
                category: "Meetings",
                active: true,
                completed: false,
                failed: false,
                newtask: false
            },
            {
                title: "API testing",
                description: "Test new API endpoints for bugs and response time",
                date: "2025-08-30",
                category: "Testing",
                active: true,
                completed: false,
                failed: false,
                newtask: false
            }
        ],
        taskCount: { active: 3, completed: 1, failed: 1, newtask: 0 }
    },
    {
        firstname: "Rohan",
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                title: "Market research",
                description: "Collect competitor data for Q3",
                date: "2025-08-25",
                category: "Research",
                active: false,
                completed: false,
                failed: false,
                newtask: false
            },
            {
                title: "Social media campaign",
                description: "Launch new promotional posts",
                date: "2025-08-19",
                category: "Marketing",
                active: true,
                completed: false,
                failed: false,
                newtask: false
            },
            {
                title: "Customer feedback analysis",
                description: "Review and summarize survey results",
                date: "2025-08-21",
                category: "Customer Service",
                active: false,
                completed: false,
                failed: true,
                newtask: false
            },
            {
                title: "Website redesign",
                description: "Plan the layout for new homepage design",
                date: "2025-09-01",
                category: "Design",
                active: true,
                completed: false,
                failed: false,
                newtask: true
            }
        ],
        taskCount: { active: 2, completed: 0, failed: 1, newtask: 1 }
    },
    {
        firstname: "Priya",
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                title: "System upgrade",
                description: "Upgrade office PCs to latest OS",
                date: "2025-08-27",
                category: "IT",
                active: true,
                completed: false,
                failed: false,
                newtask: false
            },
            {
                title: "Network troubleshooting",
                description: "Fix recurring connectivity issues",
                date: "2025-08-14",
                category: "IT",
                active: false,
                completed: true,
                failed: false,
                newtask: false
            },
            {
                title: "Printer maintenance",
                description: "Service and clean printers",
                date: "2025-08-29",
                category: "Maintenance",
                active: false,
                completed: false,
                failed: true,
                newtask: false
            },
            {
                title: "Security audit",
                description: "Check compliance with IT security policies",
                date: "2025-08-23",
                category: "Security",
                active: true,
                completed: false,
                failed: false,
                newtask: false
            },
            {
                title: "Cloud migration",
                description: "Migrate services to cloud platform",
                date: "2025-09-02",
                category: "IT",
                active: true,
                completed: false,
                failed: false,
                newtask: true
            }
        ],
        taskCount: { active: 3, completed: 1, failed: 1, newtask: 1 }
    },
    {
        firstname: "Kabir",
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                title: "Inventory check",
                description: "Review and update stock records",
                date: "2025-08-28",
                category: "Inventory",
                active: true,
                completed: false,
                failed: false,
                newtask: false
            },
            {
                title: "Supplier negotiation",
                description: "Discuss contract terms with new supplier",
                date: "2025-08-26",
                category: "Procurement",
                active: false,
                completed: true,
                failed: false,
                newtask: false
            },
            {
                title: "Warehouse inspection",
                description: "Inspect safety compliance in warehouse",
                date: "2025-08-30",
                category: "Safety",
                active: false,
                completed: false,
                failed: true,
                newtask: false
            },
            {
                title: "Budget report",
                description: "Prepare next month's expense forecast",
                date: "2025-08-24",
                category: "Finance",
                active: true,
                completed: false,
                failed: false,
                newtask: false
            },
            {
                title: "Team meeting",
                description: "Discuss inventory management improvements",
                date: "2025-08-15",
                category: "Meetings",
                active: false,
                completed: true,
                failed: false,
                newtask: false
            },
            {
                title: "Vendor onboarding",
                description: "Add and verify new vendors in system",
                date: "2025-09-03",
                category: "Procurement",
                active: true,
                completed: false,
                failed: false,
                newtask: true
            }
        ],
        taskCount: { active: 3, completed: 2, failed: 1, newtask: 1 }
    }
];

const initialAdmin = [
    {
        email: "admin@me.com",
        password: "123"
    }
];

const seedDatabase = async () => {
    try {
        // Clear existing data
        await Employee.deleteMany({});
        await Admin.deleteMany({});
        
        // Insert new data
        await Employee.insertMany(initialEmployees);
        await Admin.insertMany(initialAdmin);
        
        console.log('Database seeded successfully!');
        console.log(`${initialEmployees.length} employees created`);
        console.log(`${initialAdmin.length} admin created`);
        
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
