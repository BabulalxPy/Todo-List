//@ts-check

import "./styles.css";
import { display } from "./ui.js";
import { todo } from "./todo.js";
import { project } from "./project.js";
import { portfolio } from "./portfolio.js";

console.log("TODO");
console.log("working tree");
display.sidebar_fn();
//display.content_fn();

const getData = () =>{
    const todo_rec = display.todo_input_display((todo_data) =>{
        //console.log(todo_data);
        const todoObj = todo(
            todo_data.todo_title,
            todo_data.todo_desc,
            todo_data.todo_due,
            todo_data.todo_priority,
            todo_data.todo_notes,
            todo_data.todo_check
        );
        console.log(todoObj);
        const projectdata = project.addtodo(todoObj);
        console.log(projectdata);
        const projectdatalist = portfolio.addproject(projectdata);
        console.log(projectdatalist);

    });
    console.log(todo_rec);

    let project_rec = display.project_input_display((project_title_saved) =>{
        console.log(project_title_saved);
        const newProjectObj = {
            name: project_title_saved,
            tasks: []
        };

        const updatedPortfolio = portfolio.addproject(newProjectObj);
        console.log(updatedPortfolio);

    });
    console.log(project_rec);

};
getData();