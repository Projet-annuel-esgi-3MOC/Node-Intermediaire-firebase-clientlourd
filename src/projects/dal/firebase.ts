import { db } from "src/_services/firebase";
import { CreateProjectDto } from "../dto/create-project.dto";
import { UpdateProjectDto } from "../dto/update-project.dto";
import { addDoc, collection, deleteDoc, doc, getDocs, refEqual, setDoc } from "firebase/firestore/lite";

export class ProjectsServiceFirebase implements EntityCrud {
 
    async create(createProjectDto: CreateProjectDto) {
        return await setDoc(
            doc(db, 'dev-projects', createProjectDto.name), createProjectDto
        );
    }
  
    async findAll() {
        const projectsCol = collection(db, 'dev-projects');
        const projectsSnapshot = await getDocs(projectsCol);
        const projectsList = projectsSnapshot.docs.map(doc => doc.data());
        return projectsList;
    }
  
    async findOne(name: string) {
        const projectsCol = collection(db, 'dev-projects');
        const projectsSnapshot = await getDocs(projectsCol);
        const projectsList = projectsSnapshot.docs
            .map(doc => doc.data()).filter(doc => doc.name === name)[0];
        return projectsList;
    }
  
    async update(name: string, updateProjectDto: UpdateProjectDto) {
        return await setDoc(
            doc(db, 'dev-projects', updateProjectDto.name), updateProjectDto
        );
    }
  
    async remove(name: string) {
        return await deleteDoc(
            doc(db, 'dev-projects', name)
        );
    }
  }
  