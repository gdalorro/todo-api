import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ToDo } from './schemas/todo.schema';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<ToDo> {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<ToDo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ToDo> {
    return this.todoService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<ToDo> {
    return this.todoService.updateById(id, updateTodoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ToDo> {
    return this.todoService.removeById(id);
  }
}
