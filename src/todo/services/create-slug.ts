import uuid from "src/_services/uuid";
import { Todo } from "../entities/todo.entity";

export default function createSlug(todo: Todo) {
    return `${
        todo.project}-${
        todo.content.slice(0, 20)}-${
            Buffer.from(uuid()).toString('base64').slice(0, 6)}`;
}