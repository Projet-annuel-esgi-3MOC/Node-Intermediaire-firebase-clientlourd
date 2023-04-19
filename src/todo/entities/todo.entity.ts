import { Project } from "src/projects/entities/project.entity";
import createSlug from "../services/create-slug";

export class Todo {
    project: string;
    content: string;
    dueDate: Date;

    getSlug() {
        return createSlug(this)
    }
}
