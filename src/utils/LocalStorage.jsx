
const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
    id: 2,
    firstname: "Ishita",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
    id: 3,
    firstname: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
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
    id: 4,
    firstname: "Priya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
    id: 5,
    firstname: "Kabir",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        id: 19,
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
        id: 20,
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
        id: 21,
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
        id: 22,
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
        id: 23,
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
        id: 24,
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

const admin = [
  {
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
  }
];

// Initialize local storage with default data
const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }
}

// Get data from local storage
const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || [];
  return { employees, admin };
}

// Save data to local storage
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

// Add new employee
const addEmployee = (employeeData) => {
  const { employees } = getLocalStorage();
  const newEmployee = {
    ...employeeData,
    id: Date.now(),
    tasks: [],
    taskCount: { active: 0, completed: 0, failed: 0, newtask: 0 }
  };
  employees.push(newEmployee);
  saveToLocalStorage('employees', employees);
  return newEmployee;
}

// Update employee
const updateEmployee = (employeeId, updatedData) => {
  const { employees } = getLocalStorage();
  const index = employees.findIndex(emp => emp.id === employeeId);
  if (index !== -1) {
    employees[index] = { ...employees[index], ...updatedData };
    saveToLocalStorage('employees', employees);
    return employees[index];
  }
  return null;
}

// Delete employee
const deleteEmployee = (employeeId) => {
  const { employees } = getLocalStorage();
  const filteredEmployees = employees.filter(emp => emp.id !== employeeId);
  saveToLocalStorage('employees', filteredEmployees);
  return filteredEmployees;
}

// Add new task to employee
const addTask = (employeeId, taskData) => {
  const { employees } = getLocalStorage();
  const employeeIndex = employees.findIndex(emp => emp.id === employeeId);
  
  if (employeeIndex !== -1) {
    const newTask = {
      ...taskData,
      id: Date.now(),
      active: false,
      completed: false,
      failed: false,
      newtask: true
    };
    
    employees[employeeIndex].tasks.push(newTask);
    employees[employeeIndex].taskCount.newtask += 1;
    
    saveToLocalStorage('employees', employees);
    return newTask;
  }
  return null;
}

// Update task
const updateTask = (employeeId, taskId, updatedData) => {
  const { employees } = getLocalStorage();
  const employeeIndex = employees.findIndex(emp => emp.id === employeeId);
  
  if (employeeIndex !== -1) {
    const taskIndex = employees[employeeIndex].tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
      const oldTask = employees[employeeIndex].tasks[taskIndex];
      const newTask = { ...oldTask, ...updatedData };
      
      // Update task counts based on status changes
      if (oldTask.active !== newTask.active) {
        if (newTask.active) employees[employeeIndex].taskCount.active += 1;
        else employees[employeeIndex].taskCount.active -= 1;
      }
      
      if (oldTask.completed !== newTask.completed) {
        if (newTask.completed) employees[employeeIndex].taskCount.completed += 1;
        else employees[employeeIndex].taskCount.completed -= 1;
      }
      
      if (oldTask.failed !== newTask.failed) {
        if (newTask.failed) employees[employeeIndex].taskCount.failed += 1;
        else employees[employeeIndex].taskCount.failed -= 1;
      }
      
      if (oldTask.newtask !== newTask.newtask) {
        if (newTask.newtask) employees[employeeIndex].taskCount.newtask += 1;
        else employees[employeeIndex].taskCount.newtask -= 1;
      }
      
      employees[employeeIndex].tasks[taskIndex] = newTask;
      saveToLocalStorage('employees', employees);
      return newTask;
    }
  }
  return null;
}

// Delete task
const deleteTask = (employeeId, taskId) => {
  const { employees } = getLocalStorage();
  const employeeIndex = employees.findIndex(emp => emp.id === employeeId);
  
  if (employeeIndex !== -1) {
    const taskIndex = employees[employeeIndex].tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
      const task = employees[employeeIndex].tasks[taskIndex];
      
      // Update task counts
      if (task.active) employees[employeeIndex].taskCount.active -= 1;
      if (task.completed) employees[employeeIndex].taskCount.completed -= 1;
      if (task.failed) employees[employeeIndex].taskCount.failed -= 1;
      if (task.newtask) employees[employeeIndex].taskCount.newtask -= 1;
      
      employees[employeeIndex].tasks.splice(taskIndex, 1);
      saveToLocalStorage('employees', employees);
      return true;
    }
  }
  return false;
}

// Get employee by ID
const getEmployeeById = (employeeId) => {
  const { employees } = getLocalStorage();
  return employees.find(emp => emp.id === employeeId);
}

// Get task by ID
const getTaskById = (employeeId, taskId) => {
  const employee = getEmployeeById(employeeId);
  if (employee) {
    return employee.tasks.find(task => task.id === taskId);
  }
  return null;
}

// Get all tasks for an employee
const getEmployeeTasks = (employeeId) => {
  const employee = getEmployeeById(employeeId);
  return employee ? employee.tasks : [];
}

// Search employees by name or email
const searchEmployees = (searchTerm) => {
  const { employees } = getLocalStorage();
  const term = searchTerm.toLowerCase();
  return employees.filter(emp => 
    emp.firstname.toLowerCase().includes(term) || 
    emp.email.toLowerCase().includes(term)
  );
}

// Get tasks by category
const getTasksByCategory = (category) => {
  const { employees } = getLocalStorage();
  const tasks = [];
  employees.forEach(emp => {
    emp.tasks.forEach(task => {
      if (task.category.toLowerCase() === category.toLowerCase()) {
        tasks.push({ ...task, employeeName: emp.firstname });
      }
    });
  });
  return tasks;
}

// Clear all data (for testing/reset purposes)
const clearAllData = () => {
  localStorage.removeItem('employees');
  localStorage.removeItem('admin');
}

// Export all functions
export {
  setLocalStorage,
  getLocalStorage,
  saveToLocalStorage,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  addTask,
  updateTask,
  deleteTask,
  getEmployeeById,
  getTaskById,
  getEmployeeTasks,
  searchEmployees,
  getTasksByCategory,
  clearAllData
};


