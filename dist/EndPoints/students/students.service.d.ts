import { StudentDto } from './dto/student.dto';
export declare class StudentsService {
    private Students;
    private id;
    create(StudentDto: StudentDto): StudentDto;
    findAll(): {}[];
    findOne(id: number): {};
    update(id: number, StudentDto: StudentDto): StudentDto;
    remove(id: number): {}[];
}
