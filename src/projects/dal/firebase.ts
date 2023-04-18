import { CreateProjectDto } from "../dto/create-project.dto";
import { UpdateProjectDto } from "../dto/update-project.dto";

export class ProjectsServiceFirebase implements EntityCrud {
    constructor(private entityCrud: EntityCrud) {}
  
    create(createProjectDto: CreateProjectDto) {
      return this.entityCrud.create(createProjectDto);
    }
  
    findAll() {
      return `This action returns all projects`;
    }
  
    findOne(id: number) {
      return `This action returns a #${id} project`;
    }
  
    update(id: number, updateProjectDto: UpdateProjectDto) {
      return `This action updates a #${id} project`;
    }
  
    remove(id: number) {
      return `This action removes a #${id} project`;
    }
  }
  