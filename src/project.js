//@ts-check

export const createProject = (projectname) => {

    let tasks = [];
    
    const addtodo = (todoData) =>{
        tasks.push(todoData);
    };

    return {
        name: projectname,
        tasks,
        addtodo
    };
    
};
//const check = project.addtodo();
//console.log(check);