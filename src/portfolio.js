export const portfolio = (() =>{
    let project_array = [];

    const addproject = (projects) =>{
        project_array.push(projects);
        return project_array;
    }

    const removeproject = (rmproject) =>{
        project_array = project_array.filter(item => item !== rmproject);
        return project_array;
    };
    const getprojects = () =>{
        return project_array;
    };

    return { addproject, removeproject, getprojects };
})();