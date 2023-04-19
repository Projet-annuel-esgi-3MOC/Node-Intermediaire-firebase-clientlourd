import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsServiceFirebase } from './dal/firebase';

@Injectable()
export class ProjectsService {
  constructor(private entityCrud: ProjectsServiceFirebase) {}

  create(createProjectDto: CreateProjectDto) {
    return this.entityCrud.create(createProjectDto);
  }

  async findAll() {
    return await this.entityCrud.findAll();
  }

  findOne(id: number) {
    return this.entityCrud.findOne(id);
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.entityCrud.update(id, updateProjectDto);
  }

  remove(id: number) {
    return this.entityCrud.remove(id);
  }
}
