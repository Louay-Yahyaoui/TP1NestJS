import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { CreateTodoTdo } from 'src/DTO/create-todo';
import { UpdateTodoTdo } from 'src/DTO/update-todo';
import { TodoModuleService } from './todo-module.service';

@Controller('/todo')
export class TodoModuleController {
    constructor(private todoModuleService: TodoModuleService){}

    @Get()
    getTodos(){
        return this.todoModuleService.getAll();
    }

    @Get('/:id')
    getTodo(@Param('id') id: string){
        return this.todoModuleService.getById(id);
    }

    @Delete('/:id')
    deleteTodo(@Param('id') id: string){
        return this.todoModuleService.deleteById(id);
    }

    @Patch()
    updateTodo(@Body() body: UpdateTodoTdo){
        return this.todoModuleService.updateTodo(body);
    }

    @Post()
    createTodo(@Body() body: CreateTodoTdo){
        return this.todoModuleService.createTodo(body);
    }
}
