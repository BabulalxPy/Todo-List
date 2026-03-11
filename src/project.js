//@ts-check

export const project = (() => {
    
    const addtodo = (todoData) =>{
        let todo_array = [];
        todo_array.push(todoData);
        return todo_array;
        
    }
    return {addtodo};
    
})();
//const check = project.addtodo();
//console.log(check);