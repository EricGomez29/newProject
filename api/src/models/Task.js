import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Project from './Project';

const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    finalizada: {
        type: Sequelize.BOOLEAN
    },
    project_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Task;