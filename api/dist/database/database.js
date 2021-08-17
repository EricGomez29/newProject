"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var _process$env = process.env,
    DB_HOST = _process$env.DB_HOST,
    DB_USER = _process$env.DB_USER,
    DB_PASS = _process$env.DB_PASS;
var sequelize = new _sequelize["default"]('postgres', "".concat(DB_USER), "".concat(DB_PASS), {
  host: "".concat(DB_HOST),
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;