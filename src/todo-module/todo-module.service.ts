import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoTdo } from 'src/DTO/create-todo';
import { UpdateTodoTdo } from 'src/DTO/update-todo';
import { IT } from 'src/injection-token';
import { Todo, TodoStatusEnum } from 'src/todo/todo';

@Injectable()
export class TodoModuleService {
    @Inject(IT.COMMON_MODULE) uuid;

    private todos: Array<Todo> = [];

    createTodo(data: CreateTodoTdo): Todo{
        const todo: Todo = new Todo();
        
        todo.id = this.uuid();
        todo.name = data.name ?? "";
        todo.description = data.description ?? "";
        todo.createdAt = new Date();
        todo.status = TodoStatusEnum.waiting;
        this.todos.push(todo)
        return todo;
    }

    getAll(): Array<Todo> {
        return this.todos
    }

    getById(id: string): any {
        const todo=this.todos.find((e) => e.id == id);
        if (!todo) {
            return new NotFoundException(`Todo with id ${id} not found`);
          }
        return todo;
    }

    deleteById(id: string): any {
        const idx = this.todos.findIndex((e) => e.id == id);
        if(idx == -1) return new NotFoundException(`Todo with id ${id} not found`);

        return this.todos.splice(idx, 1)[0];
    }

    updateTodo(data: UpdateTodoTdo){
        const todo: Todo = new Todo();
        const idx = this.todos.findIndex((e) => e.id == data.id);
        if(idx == -1) return new NotFoundException(`Todo not found`);
        todo.id = data.id;
        todo.name = data.name ?? this.todos[idx].name;
        todo.description = data.description ?? this.todos[idx].description;
        todo.status = data.status ?? this.todos[idx].status;

        this.todos.splice(idx, 1, todo);
        return todo;
    }
}
