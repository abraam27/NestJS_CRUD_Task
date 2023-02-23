import { CoursesService } from './courses.service';
import { CourseDto } from './dto/course.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(createCourseDto: CourseDto): CourseDto;
    findAll(): {}[];
    findOne(id: string): {};
    update(id: string, updateCourseDto: CourseDto): CourseDto;
    remove(id: string): {}[];
}
