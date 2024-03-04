import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo } from './schemas/todo.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(ToDo.name) private toDoModel: mongoose.Model<ToDo>
  ){}

  async create(todo: CreateTodoDto): Promise<ToDo> {
    const res = await this.toDoModel.create(todo)
    return res;
  }

  async findAll(): Promise<ToDo[]> {
    const res = await this.toDoModel.find().sort({'isCompleted': 1, 'updatedAt': -1});
    return res;
  }

  async findById(id: string): Promise<ToDo> {
    const res = await this.toDoModel.findById(id);

    if(!res){
      throw new NotFoundException('To Do not found.');
    }

    return res;
  }

  async updateById(id: string, todo: UpdateTodoDto): Promise<ToDo> {
    const res =  await this.toDoModel.findByIdAndUpdate(id, todo, {
      new: true,
      runValidators: true
    });

    if(!res){
      throw new NotFoundException('To Do not found. Nothing to update.');
    }

    return res;
  }

  async removeById(id: string): Promise<ToDo> {
    const res = await this.toDoModel.findByIdAndDelete(id)
    return res;
  }
}
