import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('projects/:project/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(
    @Param('project') project: string, 
    @Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(project, createTodoDto);
  }

  @Get()
  findAll(@Param('project') project: string) {
    return this.todoService.findAll(project);
  }

  @Get(':id')
  findOne(@Param('project') project: string, @Param('id') id: string) {
    return this.todoService.findOne(project, id);
  }

  @Patch(':id')
  update(@Param('project') project: string, @Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(project, id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('project') project: string, @Param('id') id: string) {
    return this.todoService.remove(project, id);
  }
}
