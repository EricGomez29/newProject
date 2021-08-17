"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)(); //  /api/tasks

router.post('/', _task.createTask);
var _default = router;
exports["default"] = _default;