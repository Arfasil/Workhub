# MongoDB Migration Setup Guide

## Prerequisites
- Node.js installed
- MongoDB Atlas account (already configured)

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Environment File
Create a `.env` file in the root directory with:
```
MONGODB_URI=mongodb+srv://chanchleshkumar3:qEx7hlRytcJfiSfJ@cluster0.zuftncu.mongodb.net/employee-management
PORT=5000
```

### 3. Seed the Database
```bash
npm run seed
```

### 4. Start the Backend Server
```bash
npm run server
```

### 5. Start the Frontend (in a new terminal)
```bash
npm run dev
```

## What Changed

### Backend
- Express server with MongoDB connection
- Employee and Task models
- RESTful API endpoints
- Authentication routes

### Frontend
- Replaced LocalStorage with API calls
- Updated components to use MongoDB data
- New API service layer

## API Endpoints

- `GET /api/employees` - Get all employees
- `POST /api/employees` - Create new employee
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee
- `POST /api/tasks/:employeeId` - Create task for employee
- `PUT /api/tasks/:employeeId/:taskId` - Update task
- `DELETE /api/tasks/:employeeId/:taskId` - Delete task
- `POST /api/auth/employee/login` - Employee login
- `POST /api/auth/admin/login` - Admin login

## Database Structure

### Employee Collection
- firstname, email, password
- tasks array (embedded documents)
- taskCount object

### Admin Collection
- email, password

## Notes
- The database will be automatically seeded with sample data
- All existing functionality is preserved
- Data is now persistent and shared across sessions
- MongoDB Atlas provides cloud hosting and backup
