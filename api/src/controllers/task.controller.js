import Task from "../models/Task";

export async function createTask(req, res) {
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