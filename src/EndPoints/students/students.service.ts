import { Injectable } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';

@Injectable()
export class StudentsService {

  private Students:{}[] = [];
  private id:number = 0;

  create(StudentDto: StudentDto) {
    var newStudent = StudentDto;
    newStudent["id"] = ++this.id;
    this.Students.push(newStudent);
    return newStudent;
  }

  findAll() {
    return this.Students;
  }

  findOne(id: number) {
    return this.Students.find((student)=>{return +student["id"] === +id})||{}
  }

  update(id: number, StudentDto: StudentDto) {
    var i:number;
    var UpdateStudent = StudentDto;
    var StudentID = id;
    this.Students.find((student,index)=>{
        i = index;
        return student["id"] == StudentID;
    })
    UpdateStudent["id"] = StudentID;
    this.Students[i] = UpdateStudent;
    return UpdateStudent;
  }

  remove(id: number) {
    var StudentID = id;
    var i:number;
    this.Students.find((student,index)=>{
        i = index;
        return student["id"] == StudentID;
    })
    this.Students.splice(i,1);
    return this.Students;
  }
}
