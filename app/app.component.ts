import {Component} from '@angular/core';
import { Task } from './task/task';

let TASKS:Task[] = [
    {id: 1, name: 'Trabalhar'},
    {id: 2, name: 'Lavar pratos'},
    {id: 3, name: 'Tirar poeira'},
    {id: 4, name: 'Compras no supermercado'},
    {id: 5, name: 'Cuidar das crianças'},
    {id: 6, name: 'Jogar videogame'},
    {id: 7, name: 'Almoçar'},
    {id: 8, name: 'Jantar'},
    {id: 9, name: 'Fazer exercício'},
    {id: 10, name: 'Pagar contas'}
];



declare var module: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    moduleId: module.id
})
export class AppComponent{

}


//pode se usar o module para carregar um template externo