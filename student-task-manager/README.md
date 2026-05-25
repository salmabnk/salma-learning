1. Project Folder Structure

Create this folder structure:
student-task-manager/
│
├── index.html
├── style.css
├── script.js
│
├── server/
│   ├── server.js
│   ├── package.json
│   │
│   ├── models/
│   │   └── Task.js
│   │
│   └── .env

2. Frontend Code (HTML)
index.html
3. Frontend Styling (CSS)
style.css
4. Frontend Logic (JavaScript)
script.js
5. Backend Setup (Node.js + Express)

# Step 1 — Open Terminal
Go to your project folder:
cd student-task-manager

# Step 2 — Create Backend Folder
mkdir server
cd server

# Step 3 — Initialize Node.js
use Git bash on Windows or zsh on Mac OS
npm init -y

# Step 4 — Install Packages
npm install express mongoose cors dotenv

6. Backend Server Code
server/server.js

7. MongoDB Model

Create folder:
mkdir models

8. MongoDB Setup
Step 1 — Install MongoDB
Download MongoDB Community Server:
MongoDB Community Download
Install MongoDB.

Step 2 — Create MongoDB Atlas Account (Recommended)
Go to: MongoDB Atlas
Create:
Free account
Free cluster
Database user
Password

Step 3 — Get Connection String
Example:
mongodb+srv://username:password@cluster.mongodb.net/studentDB

Step 4 — Create .env File
Inside /server
.env
MONGO_URI=your_mongodb_connection_string
Example:
MONGO_URI=mongodb+srv://admin:1234@cluster.mongodb.net/studentDB

9. Run the Backend Server
Inside /server
node server.js
You should see:
MongoDB Connected
Server running on port 5000

10. Run the Frontend
Open index.html in browser.
OR use VS Code Live Server.

11. Features Included

✅ Add Tasks
✅ Delete Tasks
✅ Mark Complete
✅ MongoDB Database
✅ Responsive Design
✅ REST API
✅ HTML CSS JavaScript Frontend

12. Future Improvements
You can add:
User Login System
Calendar View
Notifications
Dark Mode
Task Categories
Due Date Reminders
Search Tasks
Edit Tasks
Mobile App Version

# Student Task Manager project now has:

Frontend using HTML, CSS, and JavaScript
Backend using Node.js and Express
MongoDB database connection
Task CRUD operations
Complete project setup steps
Next Recommended Features

You can improve the project by adding:

User Authentication
Register/login pages
JWT authentication
User-specific tasks
Edit Task Feature
Update task title and description
Calendar Integration
Show due
Task Filters
Completed
Pending
Due today
Better UI Design
Bootstrap or Tailwind CSS
Dark mode
Deployment
Frontend → Netlify
Backend → Render
Database → MongoDB Atlas
Useful Tools
Visual Studio Code
Node.js
MongoDB Compass
Postman API Tester
Recommended Next Step

Run the project locally first:

cd server
node server.js

Then open index.html in your browser and test:

Add task
Complete task
Delete task

After that, you can start improving the design and adding login functionality.