const tasks = require("../data/taskData");

// Get all tasks
function getAllTasks() {
    return tasks;
}

// Get a task by ID
function getTaskById(id) {
    return tasks.find(task => task.id === Number(id));
}

// Create a new task
function createTask(taskData) {
    const newTask = {
        id: tasks.length > 0
            ? Math.max(...tasks.map(task => task.id)) + 1
            : 1,
        title: taskData.title,
        description: taskData.description,
        status: taskData.status || "Pending",
        priority: taskData.priority || "Medium",
        assignee: taskData.assignee || "Unassigned",
        createdAt: new Date().toISOString()
    };

    tasks.push(newTask);

    return newTask;
}

// Update an existing task
function updateTask(id, updatedData) {
    const task = getTaskById(id);

    if (!task) {
        return null;
    }

    Object.assign(task, updatedData);
    task.updatedAt = new Date().toISOString();

    return task;
}

// Delete a task
function deleteTask(id) {
    const taskIndex = tasks.findIndex(
        task => task.id === Number(id)
    );

    if (taskIndex === -1) {
        return null;
    }

    const deletedTask = tasks.splice(taskIndex, 1);

    return deletedTask[0];
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};