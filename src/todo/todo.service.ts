import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoServiceFirebase } from './dal/firebase';

@Injectable()
export class TodoService {
  constructor(private entityCrud: TodoServiceFirebase) {}

  create(project: string, createTodoDto: CreateTodoDto) {
    return this.entityCrud.create({project}, createTodoDto);
  }

  async findAll(project: string) {
    return await this.entityCrud.findAll({project});
  }

  async findOne(project: string,  name: string) {
    return await this.entityCrud.findOne({project, name});
  }

  async update(project: string, name: string, updateTodoDto: UpdateTodoDto) {
    return await this.entityCrud.update({project, name}, updateTodoDto);
  }

  async remove(project: string, name: string) {
    return await this.entityCrud.remove({project, name});
  }
}
