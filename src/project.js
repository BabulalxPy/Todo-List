//@ts-check

export const createProject = (projectname) => {

    let tasks = [];
    
    const addtodo = (todoData) =>{
        tasks.push(todoData);
    };

    const removetodo = (rmtodoData) =>{
        const index = tasks.indexOf(rmtodoData);
        
        if(index > -1){
            tasks.splice(index, 1);
        }
        return tasks;
    }

    return {
        name: projectname,
        tasks,
        addtodo,
        removetodo
    };
    
};
//const check = project.addtodo();
//console.log(check);