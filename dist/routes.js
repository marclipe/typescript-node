"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function CreateCourse(request, response) {
    CreateCourseService_1.default.execute({
        name: "Nodejs",
        educator: "MarcLipe",
        duration: 10
    });
    CreateCourseService_1.default.execute({
        name: "ReactJS",
        educator: 'Lipe'
    });
    return response.send();
}
exports.CreateCourse = CreateCourse;
