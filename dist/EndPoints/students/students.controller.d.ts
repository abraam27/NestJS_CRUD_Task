import { StudentsService } from './students.service';
import { StudentDto } from './dto/student.dto';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    create(StudentDto: StudentDto): StudentDto;
    findAll(): {}[];
    findOne(id: string): {};
    update(id: string, StudentDto: StudentDto): StudentDto;
    remove(id: string): {}[];
}
