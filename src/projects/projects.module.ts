import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { ProjectsServiceFirebase } from './dal/firebase';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectsServiceFirebase]
})
export class ProjectsModule {}
