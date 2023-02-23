import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseDto } from './dto/course.dto';

@Controller('/courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @UsePipes(ValidationPipe)
  @Post('add')
  create(@Body() createCourseDto: CourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateCourseDto: CourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
