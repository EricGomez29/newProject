import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Task from './Task';

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nombre: {
        type: Sequelize.TEXT
    },
    prioridad: {
        type: Sequelize.INTEGER
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    fecha_entrega: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Project.hasMany(Task, { foreingKey: 'project_id', sourceKey: 'id' });
Task.belongsTo(Project, { foreingKey: 'proyect_id', sourceKey: 'id' });

export default Project;