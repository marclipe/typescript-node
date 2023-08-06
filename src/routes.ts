import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function CreateCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "Nodejs", 
    educator: "MarcLipe", 
    duration: 10
  })

  CreateCourseService.execute({
    name: "ReactJS", 
    educator: 'Lipe'
  })

  return response.send();
} 