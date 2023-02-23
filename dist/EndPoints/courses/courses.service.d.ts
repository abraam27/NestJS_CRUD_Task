import { CourseDto } from './dto/course.dto';
export declare class CoursesService {
    private Courses;
    private id;
    create(CourseDto: CourseDto): CourseDto;
    findAll(): {}[];
    findOne(id: number): {};
    update(id: number, CourseDto: CourseDto): CourseDto;
    remove(id: number): {}[];
}
