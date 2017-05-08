"use strict";
/**
 * Created by boomerang on 05/05/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TASKS = [
    { id: 1, name: 'Programar' },
    { id: 2, name: 'Correr' },
    { id: 3, name: 'Jiu Jitsu' },
    { id: 4, name: 'Muay Thai' },
    { id: 5, name: 'MMA' },
    { id: 6, name: 'Metal' },
    { id: 7, name: 'Mariana' },
    { id: 8, name: 'Fusca' },
    { id: 9, name: 'Besouro' },
    { id: 10, name: 'Programar' }
];
var TaskService = (function () {
    function TaskService() {
    }
    TaskService.prototype.getTasks = function () {
        return TASKS;
    };
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map