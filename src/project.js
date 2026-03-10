//@ts-check

export const project = (() => {
    let todo_array = [];
    
    const addtodo = (todoData) =>{
        todo_array.push(todoData);
        return todo_array;
        
    }
    return {addtodo};
    
})();
//const check = project.addtodo();
//console.log(check);