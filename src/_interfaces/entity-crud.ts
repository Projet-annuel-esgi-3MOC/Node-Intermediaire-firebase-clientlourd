interface UnknownStrings {
    [U: string]: string;
}

interface EntityCrud {
    create (string: UnknownStrings, createProjectDto);
    
    findAll(string: UnknownStrings);

    findOne(string: UnknownStrings);

    update(string: UnknownStrings, updateProjectDto);

    remove(string: UnknownStrings);
}