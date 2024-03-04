import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoSchema } from './schemas/todo.schema';

@Module({
  imports: [ 
    MongooseModule.forFeature([{ name: 'ToDo', schema: ToDoSchema }]) 
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
