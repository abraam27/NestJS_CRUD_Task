import { Injectable } from '@nestjs/common';
import { CourseDto } from './dto/course.dto';

@Injectable()
export class CoursesService {

  private Courses:{}[] = [];
  private id:number = 0;
  
  create(CourseDto: CourseDto) {
    var newCourse = CourseDto;
    newCourse["id"] = ++this.id;
    this.Courses.push(newCourse);
    return newCourse;
  }

  findAll() {
    return this.Courses;
  }

  findOne(id: number) {
    return this.Courses.find((course)=>{return +course["id"] === +id})||{}
  }

  update(id: number, CourseDto: CourseDto) {
    var i:number;
    var UpdateCourse = CourseDto;
    var CourseID = id;
    this.Courses.find((course,index)=>{
        i = index;
        return course["id"] == CourseID;
    })
    UpdateCourse["id"] = CourseID;
    this.Courses[i] = UpdateCourse;
    return UpdateCourse;
  }

  remove(id: number) {
    var CourseID = id;
    var i:number;
    this.Courses.find((course,index)=>{
        i = index;
        return course["id"] == CourseID;
    })
    this.Courses.splice(i,1);
    return this.Courses;
  }
}
