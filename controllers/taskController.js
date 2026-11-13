const taskService = require("../services/taskService");

// Get all tasks
function getAllTasks(req, res) {
    const tasks = taskService.getAllTasks();

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
}

// Get a single task
function getTaskById(req, res) {
    const task = taskService.getTaskById(req.params.id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found."
        });
    }

    res.status(200).json({
        success: true,
        data: task
    });
}

// Create a new task
function createTask(req, res) {
    if (!req.body.title || !req.body.title.trim()) {
        return res.status(400).json({
            success: false,
            message: "Task title is required."
        });
    }

    const newTask = taskService.createTask(req.body);

    res.status(201).json({
        success: true,
        message: "Task created successfully.",
        data: newTask
    });
}

// Update a task
function updateTask(req, res) {
    const updatedTask = taskService.updateTask(
        req.params.id,
        req.body
    );

    if (!updatedTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found."
        });
    }

    res.status(200).json({
        success: true,
        message: "Task updated successfully.",
        data: updatedTask
    });
}

// Delete a task
function deleteTask(req, res) {
    const deletedTask = taskService.deleteTask(req.params.id);

    if (!deletedTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found."
        });
    }

    res.status(200).json({
        success: true,
        message: "Task deleted successfully.",
        data: deletedTask
    });
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};