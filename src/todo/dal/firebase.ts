import { db } from "src/_services/firebase";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { addDoc, collection, deleteDoc, doc, getDocs, refEqual, setDoc } from "firebase/firestore/lite";

export class TodoServiceFirebase implements EntityCrud {
    private getCollection(project: string) {
        return 'dev-projects/' + project + '/todos';
    }
 
    async create({project}: {[U: string]: string}, createTodoDto: CreateTodoDto) {
        return await setDoc(
            doc(db, this.getCollection(project), createTodoDto.getSlug()), 
            Object.assign({}, createTodoDto)
        );
        // https://stackoverflow.com/questions/37300338/how-can-i-convert-a-typescript-object-to-a-plain-object
    }
  
    async findAll({project}: {[U: string]: string}) {
        const projectsCol = collection(db, this.getCollection(project));
        const projectsSnapshot = await getDocs(projectsCol);
        const projectsList = projectsSnapshot.docs.map(doc => doc.data());
        return projectsList;
    }
  
    async findOne({project, name}: {[U: string]: string}) {
        const projectsCol = collection(db, this.getCollection(project));
        const projectsSnapshot = await getDocs(projectsCol);
        const projectsList = projectsSnapshot.docs
            .map(doc => doc.data()).filter(doc => doc.slug === name)[0];
        return projectsList;
    }
  
    async update({project, name}: {[U: string]: string}, createTodoDto: UpdateTodoDto) {
        return await setDoc(
            doc(db, this.getCollection(project), createTodoDto.getSlug()), createTodoDto
        );
    }
  
    async remove({project, name}: {[U: string]: string}) {
        return await deleteDoc(
            doc(db, this.getCollection(project), name)
        );
    }
  }
  