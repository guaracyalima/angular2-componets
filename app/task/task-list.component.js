"use strict";
/**
 * Created by boomerang on 05/05/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_service_1 = require("./task.service");
var TaskListComponent = (function () {
    function TaskListComponent() {
        this.taskService = new task_service_1.TaskService();
        this.tasks = this.taskService.getTasks();
    }
    TaskListComponent.prototype.selectTask = function (task) {
        this.selectedTask = task;
    };
    TaskListComponent.prototype.deleteTask = function (id) {
        var index = this.tasks.findIndex(function (item) { return item.id == id; });
        if (index != -1) {
            this.tasks.splice(index, 1);
        }
    };
    return TaskListComponent;
}());
TaskListComponent = __decorate([
    core_1.Component({
        selector: 'task-list',
        templateUrl: 'task-list.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [])
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map