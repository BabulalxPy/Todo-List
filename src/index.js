//@ts-check

import "./styles.css";
import { display } from "./ui.js";
import { todo } from "./todo.js";
import { createProject } from "./project.js";
import { portfolio } from "./portfolio.js";

console.log("TODO");
console.log("working tree");
//display.sidebar_fn();
//display.content_fn();

const getData = () =>{

    let activeProject = null;
    let editingTodo = null;
    let defaultProjectObj = null;

    const saveToLocal = () => {
        const currentData = portfolio.getprojects();
        localStorage.setItem("myTodoVault", JSON.stringify(currentData))
    };

    const handleSwitchProject = (clickedProject) =>{
        activeProject = clickedProject;
        display.displayTodolist(activeProject, handleDeleteTodo, handleEditTodo);
    };

    const handleDeleteProject = (deletedProject) =>{
        const freshPortfolio = portfolio.removeproject(deletedProject);
        
        if(activeProject === deletedProject){
            activeProject = defaultProjectObj;
            display.displayTodolist(activeProject, handleDeleteTodo, handleEditTodo);
        }
        
        saveToLocal();
        display.displayPortfolio(freshPortfolio, handleSwitchProject, handleDeleteProject);
    
    };

    const handleDeleteTodo = (deletedTodo) =>{
        activeProject.removetodo(deletedTodo);
        saveToLocal();
        display.displayTodolist(activeProject, handleDeleteTodo, handleEditTodo);
    };

    const handleEditTodo = (todoToEdit) =>{
        
        editingTodo = todoToEdit;
        display.todo_input_display(handleSaveTodo,todoToEdit);

    };

    const handleSaveTodo = (todo_data) =>{
        if(activeProject === null) return;

        if(editingTodo !== null){
            editingTodo.title = todo_data.todo_title;
            editingTodo.desc = todo_data.todo_desc;
            editingTodo.dueDate = todo_data.todo_due;
            editingTodo.priority = todo_data.todo_priority;
            editingTodo.notes = todo_data.todo_notes;
            editingTodo.checklist = todo_data.todo_check;

            editingTodo = null;

        } else {
            const todoObj = todo(
                todo_data.todo_title,
                todo_data.todo_desc,
                todo_data.todo_due,
                todo_data.todo_priority,
                todo_data.todo_notes,
                todo_data.todo_check
            );
            activeProject.addtodo(todoObj);
        }
        saveToLocal();
        display.displayTodolist(activeProject, handleDeleteTodo, handleEditTodo);
    };

    const vaultdata = localStorage.getItem("myTodoVault");

    if (vaultdata) {
        
        const parsedData = JSON.parse(vaultdata);

        parsedData.forEach(parsedProject => {

            const restoredProject = createProject(parsedProject.name);

            parsedProject.tasks.forEach(parsedtask => {
                const restoredTask = todo(
                    parsedtask.title,
                    parsedtask.desc,
                    parsedtask.dueDate,
                    parsedtask.priority,
                    parsedtask.notes,
                    parsedtask.checklist
                );

                restoredProject.addtodo(restoredTask);
            });

            portfolio.addproject(restoredProject);

            if (restoredProject.name === "Default") {
                defaultProjectObj = restoredProject;
            }
        });
        activeProject = portfolio.getprojects()[0];
    } else {
        defaultProjectObj = createProject("Default");
        portfolio.addproject(defaultProjectObj);
        activeProject = defaultProjectObj;
    };


    const projectDataFlow = display.sidebar_fn(
        defaultProjectObj,
        handleSwitchProject,

        (projectname) =>{

            const newProjectObj = createProject(projectname);
            const updatedPortfolio = portfolio.addproject(newProjectObj);

            activeProject = newProjectObj;

            saveToLocal();
            display.displayTodolist(activeProject, handleDeleteTodo, handleEditTodo);
            display.displayPortfolio(updatedPortfolio, handleSwitchProject, handleDeleteProject);

            console.log(updatedPortfolio);
        }
    );

    const todoDataFlow = display.content_fn(handleSaveTodo);

    display.displayTodolist(activeProject,handleDeleteTodo, handleEditTodo);
    display.displayPortfolio(portfolio.getprojects(), handleSwitchProject, handleDeleteProject);
    
    console.log(projectDataFlow);

};
getData();