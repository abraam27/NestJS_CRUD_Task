import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDto } from './dto/student.dto';
// import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('/students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @UsePipes(ValidationPipe)
  @Post('add')
  create(@Body() StudentDto: StudentDto) {
    return this.studentsService.create(StudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() StudentDto: StudentDto) {
    return this.studentsService.update(+id, StudentDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
