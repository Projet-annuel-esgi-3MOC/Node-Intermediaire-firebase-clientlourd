import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoServiceFirebase } from './dal/firebase';

@Module({
  controllers: [TodoController],
  providers: [TodoService, TodoServiceFirebase]
})
export class TodoModule {}
