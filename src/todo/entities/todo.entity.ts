import { Project } from "src/projects/entities/project.entity";

export class Todo {
    project: Project;
    content: string;
    dueDate: Date;
}
