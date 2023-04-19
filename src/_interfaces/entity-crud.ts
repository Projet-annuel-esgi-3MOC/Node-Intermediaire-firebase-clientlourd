interface EntityCrud {
    create(createProjectDto);
    
    findAll();

    findOne(id: unknown);

    update(id: unknown, updateProjectDto);

    remove(id: unknown);
}