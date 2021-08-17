import Project from '../models/Project';

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll();
        res.json({
            data: projects
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Algo salió mal, intente mas tarde',
            data: {}
        });
    }
};

export async function createProject(req, res) {
    const { nombre, prioridad, descripcion, fecha_entrega } = req.body;
    try {
        var newProject = await Project.create({
            nombre,
            prioridad,
            descripcion,
            fecha_entrega
        }, {
            fields: ['nombre', 'prioridad', 'descripcion', 'fecha_entrega']
        });
        if(newProject) {
            res.json({
                message: 'Proyecto creado satisfactoriamente!',
                data: newProject
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Algo salió mal, intente mas tarde',
            data: {}
        });
    }
}

export async function getOneProject(req, res) {
    const { id } = req.params
    try {
        const project = await Project.findOne({
            where: {
                id
            }
        });
        res.json({
            data: project
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Algo salió mal, intente mas tarde',
            data: {}
        })
    }
}

export async function deleteProject(req, res) {
    const { id } = req.params
    try {
        const project = await Project.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'El proyecto fue eliminado satisfactoriamente',
            count: project
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Algo salió mal, intente mas tarde',
            data: {}
        })
    }
}

export async function updateProject(req, res) {
    const { id } = req.params;
    const { nombre, prioridad, descripcion, fecha_entrega } = req.body;

    const projects = await Project.findAll({
        attributes: ['id', 'nombre', 'prioridad', 'descripcion', 'fecha_entrega'],
        where: {
            id
        }
    });

    if(projects.length > 0 ){
        projects.forEach(async project => {
            await project.update({
                nombre,
                prioridad,
                descripcion,
                fecha_entrega
            })
        });
    }

    return res.json({
        message: "Proyecto actualizado satisfactoriamente",
        data: projects
    })
}
