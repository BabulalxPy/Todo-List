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

    const projectDataFlow = display.sidebar_fn((projectname) =>{
        //console.log(projectname);

        const newProjectObj = createProject(projectname);

        const updatedPortfolio = portfolio.addproject(newProjectObj);

        //display project list on sidebar
        display.displayPortfolio(updatedPortfolio);

        const todoDataFlow = display.content_fn((todo_data) =>{
            //console.log(todo_data);
            const todoObj = todo(
                todo_data.todo_title,
                todo_data.todo_desc,
                todo_data.todo_due,
                todo_data.todo_priority,
                todo_data.todo_notes,
                todo_data.todo_check
            );
            
            newProjectObj.addtodo(todoObj);
            display.displayTodolist(newProjectObj.tasks);

        });

        console.log(updatedPortfolio);

    })
    console.log(projectDataFlow);

};
getData();