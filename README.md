# Workhub
# Employee Task Management System

A comprehensive employee task management system built with React and enhanced with robust local storage functionality.

## Features

### 🔐 Authentication
- Admin login (admin@me.com / 123)
- Employee login with individual credentials
- Session persistence using local storage

### 👥 Employee Management
- **Add New Employees**: Create new employee accounts with name, email, and password
- **Edit Employees**: Update employee information
- **Delete Employees**: Remove employees from the system
- **Employee Dashboard**: Individual view of assigned tasks and progress

### 📋 Task Management
- **Create Tasks**: Assign tasks to specific employees with title, description, date, and category
- **Task Status Management**: 
  - New → Active → Completed/Failed
  - Reactivate completed/failed tasks
  - Retry failed tasks
- **Task Categories**: Development, Design, Marketing, Sales, IT, HR, Finance, Operations, Research, Customer Service, Maintenance, Security, Procurement, Inventory, Safety, Meetings, Reporting, Testing, Documentation, Performance, Other
- **Task Filtering**: Filter by employee, category, and status

### 💾 Local Storage Integration
- **Data Persistence**: All data is automatically saved to browser's local storage
- **Session Continuity**: Data persists across browser sessions and page refreshes
- **Data Export**: Download all data as JSON file for backup
- **Data Import**: Import previously exported data files
- **Data Reset**: Restore system to default state
- **Real-time Updates**: All changes are immediately reflected and persisted

### 📊 Dashboard & Analytics
- **Overview Dashboard**: Summary of all employees and their task counts
- **Task Statistics**: Real-time counts of active, completed, failed, and new tasks
- **Employee Performance**: Track individual employee task completion rates
- **Category Analysis**: Monitor task distribution across different categories

### 🎨 User Interface
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Theme**: Modern dark interface with color-coded task statuses
- **Tabbed Navigation**: Organized admin interface with multiple management sections
- **Interactive Elements**: Hover effects, transitions, and visual feedback

## Technical Implementation

### Local Storage Functions
- `addEmployee()`: Create new employee records
- `updateEmployee()`: Modify existing employee data
- `deleteEmployee()`: Remove employee records
- `addTask()`: Create new tasks with automatic status management
- `updateTask()`: Modify task properties and status
- `deleteTask()`: Remove tasks from the system
- `getLocalStorage()`: Retrieve current data
- `saveToLocalStorage()`: Persist data changes
- `exportData()`: Download data as JSON
- `importData()`: Import data from JSON files

### Data Structure
```json
{
  "employees": [
    {
      "id": 1,
      "firstname": "Employee Name",
      "email": "employee@example.com",
      "password": "password",
      "tasks": [...],
      "taskCount": {
        "active": 2,
        "completed": 1,
        "failed": 0,
        "newtask": 1
      }
    }
  ],
  "admin": [...]
}
```

### Task Status Flow
1. **New Task**: Created by admin, assigned to employee
2. **Active**: Employee accepts and works on the task
3. **Completed**: Task finished successfully
4. **Failed**: Task could not be completed
5. **Reactivate**: Completed/failed tasks can be reactivated

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Navigate to the project directory: `cd employee`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and navigate to `http://localhost:5173`

### Default Login Credentials
- **Admin**: admin@me.com / 123
- **Employee**: employee1@example.com / 123 (and others)

## Usage

### For Admins
1. **Overview Tab**: Monitor all employees and their task counts
2. **Create Task Tab**: Assign new tasks to employees
3. **Employee Management Tab**: Add, edit, or remove employees
4. **Task Management Tab**: View, edit, and manage all tasks
5. **Data Management Tab**: Export, import, or reset system data

### For Employees
1. **Dashboard**: View assigned tasks and progress
2. **Task Actions**: Accept new tasks, mark as completed/failed
3. **Progress Tracking**: Monitor personal task statistics

## Data Management

### Exporting Data
- Navigate to Data Management tab
- Click "Export Data" to download JSON file
- File includes all employees, tasks, and system data

### Importing Data
- Use "Import Data" feature to restore from backup
- Select previously exported JSON file
- System validates data structure before import
- **Warning**: Importing will replace all current data

### Resetting Data
- Use "Reset to Default" to restore system to initial state
- **Warning**: This action cannot be undone

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Local Storage Limits
- Most browsers support 5-10MB of local storage
- Large datasets may require regular export/cleanup
- Consider data archiving for long-term use

## Security Notes
- Data is stored locally in the browser
- No server-side authentication or data protection
- Suitable for personal or small team use
- For production use, implement proper backend security

## Contributing
Feel free to submit issues and enhancement requests!

## License
This project is open source and available under the MIT License.
