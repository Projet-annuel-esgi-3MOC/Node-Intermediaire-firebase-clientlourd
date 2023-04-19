import { db } from "src/_services/firebase";
import { CreateProjectDto } from "../dto/create-project.dto";
import { UpdateProjectDto } from "../dto/update-project.dto";
import { collection, getDocs } from "firebase/firestore/lite";

export class ProjectsServiceFirebase implements EntityCrud {
 
    create(createProjectDto: CreateProjectDto) {
    //   return this.entityCrud.create(createProjectDto);
    }
  
    async findAll() {
        const projectsCol = collection(db, 'cities');
        const projectsSnapshot = await getDocs(projectsCol);
        const projectsList = projectsSnapshot.docs.map(doc => doc.data());
        return projectsList;
    }
  
    findOne(id: number) {
    //   return this.entityCrud.findOne(id);
    }
  
    update(id: number, updateProjectDto: UpdateProjectDto) {
    //   return this.entityCrud.update(id, updateProjectDto);
    }
  
    remove(id: number) {
    //   return this.entityCrud.remove(id);
    }
  }
  