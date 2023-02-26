import { TodoStatusEnum } from "src/todo/todo";

export class UpdateTodoTdo {
    id: string;
    name?: string;
    description?: string;
    status?: TodoStatusEnum;
}