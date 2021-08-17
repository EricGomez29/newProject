import Task from "../models/Task";

export const createTask = async (req, res) => {
    const { nombre, finalizada, project_id } = req.body;
    const newTask = await Task.create({
        nombre,
        finalizada,
        project_id
    }, {
        fields: ['nombre', 'finalizada', 'project_id']
    });
    res.json({
        message: "Nueva tarea creada",
        data: newTask
    })
}

export const getTasks = async (req, res) => {
    
}

export const getOneTask = async (req, res) => {
    
}

export const updateTask = async (req, res) => {
    
}

export const deleteTask = async (req, res) => {
    
}

export const getTasksByProject = async (req, res) => {
    
}