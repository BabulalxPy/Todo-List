//@ts-check

import "./styles.css";
import { display } from "./ui.js";
import { todo } from "./todo.js";
import { project } from "./project.js";
import { portfolio } from "./portfolio.js";

console.log("TODO");
console.log("working tree");
//display.sidebar_fn();
//display.content_fn();

const getData = () =>{
    
    //console.log(todoDataFlow);

    const projectDataFlow = display.sidebar_fn((projectname) =>{
        //console.log(projectname);
        const newProjectObj = {
            name: projectname,
            tasks: []
        };
        const updatedPortfolio = portfolio.addproject(newProjectObj);
        //display.content_fn()
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
            //console.log(todoObj);
            //const projectdata = project.addtodo(todoObj);
            const projectdata1 = newProjectObj.tasks.push(todoObj);
            //console.log(projectdata);
            //const projectdatalist = portfolio.addproject(projectdata);
            //console.log(projectdatalist);
            console.log(updatedPortfolio);

        });
        console.log(todoDataFlow);
        console.log(updatedPortfolio);
    })
    console.log(projectDataFlow);

};
getData();