"use strict";
/*
  * name - string
  * duration - number
  * educator - string
*/
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    //para executar o nosso curso
    execute({ duration = 8, educator, name }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
