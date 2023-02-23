"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
let CoursesService = class CoursesService {
    constructor() {
        this.Courses = [];
        this.id = 0;
    }
    create(CourseDto) {
        var newCourse = CourseDto;
        newCourse["id"] = ++this.id;
        this.Courses.push(newCourse);
        return newCourse;
    }
    findAll() {
        return this.Courses;
    }
    findOne(id) {
        return this.Courses.find((course) => { return +course["id"] === +id; }) || {};
    }
    update(id, CourseDto) {
        var i;
        var UpdateCourse = CourseDto;
        var CourseID = id;
        this.Courses.find((course, index) => {
            i = index;
            return course["id"] == CourseID;
        });
        UpdateCourse["id"] = CourseID;
        this.Courses[i] = UpdateCourse;
        return UpdateCourse;
    }
    remove(id) {
        var CourseID = id;
        var i;
        this.Courses.find((course, index) => {
            i = index;
            return course["id"] == CourseID;
        });
        this.Courses.splice(i, 1);
        return this.Courses;
    }
};
CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map