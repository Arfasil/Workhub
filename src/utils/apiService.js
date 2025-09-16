const API_BASE_URL = 'http://localhost:5000/api';

// Employee API calls
export const getEmployees = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/employees`);
        if (!response.ok) throw new Error('Failed to fetch employees');
        return await response.json();
    } catch (error) {
        console.error('Error fetching employees:', error);
        return [];
    }
};

export const getEmployeeById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/employees/${id}`);
        if (!response.ok) throw new Error('Failed to fetch employee');
        return await response.json();
    } catch (error) {
        console.error('Error fetching employee:', error);
        return null;
    }
};

export const createEmployee = async (employeeData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/employees`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employeeData),
        });
        if (!response.ok) throw new Error('Failed to create employee');
        return await response.json();
    } catch (error) {
        console.error('Error creating employee:', error);
        return null;
    }
};

export const updateEmployee = async (id, employeeData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employeeData),
        });
        if (!response.ok) throw new Error('Failed to update employee');
        return await response.json();
    } catch (error) {
        console.error('Error updating employee:', error);
        return null;
    }
};

export const deleteEmployee = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete employee');
        return true;
    } catch (error) {
        console.error('Error deleting employee:', error);
        return false;
    }
};

export const searchEmployees = async (searchTerm) => {
    try {
        const response = await fetch(`${API_BASE_URL}/employees/search/${searchTerm}`);
        if (!response.ok) throw new Error('Failed to search employees');
        return await response.json();
    } catch (error) {
        console.error('Error searching employees:', error);
        return [];
    }
};

// Task API calls
export const createTask = async (employeeId, taskData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/tasks/${employeeId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });
        if (!response.ok) throw new Error('Failed to create task');
        return await response.json();
    } catch (error) {
        console.error('Error creating task:', error);
        return null;
    }
};

export const updateTask = async (employeeId, taskId, taskData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/tasks/${employeeId}/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });
        if (!response.ok) throw new Error('Failed to update task');
        return await response.json();
    } catch (error) {
        console.error('Error updating task:', error);
        return null;
    }
};

export const deleteTask = async (employeeId, taskId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/tasks/${employeeId}/${taskId}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete task');
        return true;
    } catch (error) {
        console.error('Error deleting task:', error);
        return false;
    }
};

export const getTasksByCategory = async (category) => {
    try {
        const response = await fetch(`${API_BASE_URL}/tasks/category/${category}`);
        if (!response.ok) throw new Error('Failed to fetch tasks by category');
        return await response.json();
    } catch (error) {
        console.error('Error fetching tasks by category:', error);
        return [];
    }
};

export const getEmployeeTasks = async (employeeId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/tasks/employee/${employeeId}`);
        if (!response.ok) throw new Error('Failed to fetch employee tasks');
        return await response.json();
    } catch (error) {
        console.error('Error fetching employee tasks:', error);
        return [];
    }
};

// Authentication API calls
export const employeeLogin = async (credentials) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/employee/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) throw new Error('Invalid credentials');
        return await response.json();
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const employeeSignup = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/employee/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) throw new Error('Failed to create account');
        return await response.json();
    } catch (error) {
        console.error('Error during signup:', error);
        throw error;
    }
};

export const adminLogin = async (credentials) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) throw new Error('Invalid credentials');
        return await response.json();
    } catch (error) {
        console.error('Error during admin login:', error);
        throw error;
    }
};
