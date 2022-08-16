import { ProjectType } from "../types/projectTypes";
import HttpException from "../utils/httpExtention";

export function sanitizeProject(project: ProjectType): ProjectType {
    let sanitizedProject = <ProjectType>{};

    sanitizedProject.title = sanitizeTitle(project.title)

    return sanitizedProject;
}


function sanitizeTitle(title: string): string{
    
    if(title === undefined){
        throw new HttpException('Title is undefined', 400)
    }
    if(typeof title !== 'string'){
        throw new HttpException('Title is not a string', 400)
    }
    
    title = title.trim()
    if(title.length < 3){
        throw new HttpException('Title must be at least three characters', 400)
    }
    if(title.length < 3){
        throw new HttpException('Title must be less than 50 characters', 400)
    }


    return title
}