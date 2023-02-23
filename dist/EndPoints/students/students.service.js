"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
let StudentsService = class StudentsService {
    constructor() {
        this.Students = [];
        this.id = 0;
    }
    create(StudentDto) {
        var newStudent = StudentDto;
        newStudent["id"] = ++this.id;
        this.Students.push(newStudent);
        return newStudent;
    }
    findAll() {
        return this.Students;
    }
    findOne(id) {
        return this.Students.find((student) => { return +student["id"] === +id; }) || {};
    }
    update(id, StudentDto) {
        var i;
        var UpdateStudent = StudentDto;
        var StudentID = id;
        this.Students.find((student, index) => {
            i = index;
            return student["id"] == StudentID;
        });
        UpdateStudent["id"] = StudentID;
        this.Students[i] = UpdateStudent;
        return UpdateStudent;
    }
    remove(id) {
        var StudentID = id;
        var i;
        this.Students.find((student, index) => {
            i = index;
            return student["id"] == StudentID;
        });
        this.Students.splice(i, 1);
        return this.Students;
    }
};
StudentsService = __decorate([
    (0, common_1.Injectable)()
], StudentsService);
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map