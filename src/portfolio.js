export const portfolio = (() =>{
    let project_array = [];

    const addproject = (projects) =>{
        project_array.push(projects);
        return project_array;
    }

    return { addproject };
})();