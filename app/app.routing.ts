/**
 * Created by boomerang on 05/05/17.
 */

import {RouterModule, Routes} from "@angular/router";
import {TaskListComponent} from "./task/task-list.component";
import {ModuleWithProviders} from "@angular/core";
import {TaskEditComponent} from "./task/task-edit.component";


const appRoutes: Routes =
    [
        {
            path: '',
            redirectTo: '/tasks/list',
            pathMatch: 'full'
        },

        {
            path: 'tasks/list',
            component: TaskListComponent
        },

        {
            path: 'task/edit',
            component: TaskEditComponent
        }
    ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)