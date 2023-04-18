interface EntityCrud {
    create(createProjectDto);
    
    findAll();

    findOne(id: number);

    update(id: number, updateProjectDto);

    remove(id: number);
}