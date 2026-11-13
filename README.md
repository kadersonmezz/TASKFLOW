# TASKFLOW

Task Management API

TASKFLOW is a task management system API that I developed as part of my backend development internship project. The main purpose of this project is to create a simple system where tasks can be managed through API requests.

During this project, I worked with Node.js and Express.js and learned how to create a REST API, organize project files and handle different types of requests.

The system allows users to add new tasks, view all tasks, see the details of a specific task, update task information and delete tasks. Each task contains information such as title, description, status, priority and assignee.

I organized the project into different folders to keep the code more understandable. Routes handle incoming requests, controllers manage the responses and services contain the functions used for task operations. I also added a Logger Middleware to record incoming requests with their date, time, method and URL.

**Technologies Used**

JavaScript, Node.js, Express.js and Postman.

**API Endpoints**

GET /api/tasks – Lists all tasks.

GET /api/tasks/:id – Shows the details of a specific task.

POST /api/tasks – Creates a new task.

PUT /api/tasks/:id – Updates an existing task.

DELETE /api/tasks/:id – Deletes a task.

**Installation and Running**
**Installation and Running**

First, clone the project from GitHub and open the project folder:

git clone https://github.com/kadersonmezz/TASKFLOW.git

cd TASKFLOW

Install the required packages:

npm install

After the installation is complete, start the server:

node server.js

The server runs on http://localhost:3000.

**Testing**

I used Postman to test the API. I checked whether tasks could be created, listed, viewed, updated and deleted successfully. I also tested how the system responds when a task cannot be found or when a task is created without a title.

**Data Storage**

For this project, task information is stored in a JavaScript array. This means that the tasks are not permanently saved and the data resets when the server is restarted.