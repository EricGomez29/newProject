"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTasksByProject = exports.deleteTask = exports.updateTask = exports.getOneTask = exports.getTasks = exports.createTask = void 0;

var _Task = _interopRequireDefault(require("../models/Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createTask = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, finalizada, project_id, newTask;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, finalizada = _req$body.finalizada, project_id = _req$body.project_id;
            _context.next = 3;
            return _Task["default"].create({
              nombre: nombre,
              finalizada: finalizada,
              project_id: project_id
            }, {
              fields: ['nombre', 'finalizada', 'project_id']
            });

          case 3:
            newTask = _context.sent;
            res.json({
              message: "Nueva tarea creada",
              data: newTask
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createTask(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTask = createTask;

var getTasks = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getTasks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTasks = getTasks;

var getOneTask = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getOneTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getOneTask = getOneTask;

var updateTask = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateTask = updateTask;

var deleteTask = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTask = deleteTask;

var getTasksByProject = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getTasksByProject(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getTasksByProject = getTasksByProject;