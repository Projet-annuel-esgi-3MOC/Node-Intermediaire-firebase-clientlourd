import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsServiceFirebase } from './dal/firebase';

@Injectable()
export class ProjectsService {
  constructor(private entityCrud: ProjectsServiceFirebase) {}

  create(createProjectDto: CreateProjectDto) {
    return this.entityCrud.create({}, createProjectDto);
  }

  async findAll() {
    return await this.entityCrud.findAll();
  }

  findOne({name}: {[U: string]: string}) {
    return this.entityCrud.findOne({name});
  }

  update({name}: {[U: string]: string}, updateProjectDto: UpdateProjectDto) {
    return this.entityCrud.update({name}, updateProjectDto);
  }

  remove({name}: {[U: string]: string}) {
    return this.entityCrud.remove({name});
  }
}
