"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Task = _interopRequireDefault(require("./Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Project = _database.sequelize.define('projects', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  prioridad: {
    type: _sequelize["default"].INTEGER
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  },
  fecha_entrega: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

Project.hasMany(_Task["default"], {
  foreingKey: 'project_id',
  sourceKey: 'id'
});

_Task["default"].belongsTo(Project, {
  foreingKey: 'proyect_id',
  sourceKey: 'id'
});

var _default = Project;
exports["default"] = _default;