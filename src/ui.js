//@ts-check
const display = (() =>{
    const container = document.querySelector(".container");
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    const project_title_box = document.createElement("div");
    project_title_box.classList.add("project_title_box");
    const portfolio_container = document.createElement("div");
    portfolio_container.classList.add("portfolio_container");
    const sidebar_fn = (projectname) =>{
        
        const default_btn = document.createElement("button");
        default_btn.classList.add("default_btn");
        default_btn.textContent = "Default";
        default_btn.addEventListener("click", () =>{
            
            content_fn();
            todo_input_display();
            //resolve todoinput disappearance problem
        });

        const newProject_btn = document.createElement("button");
        newProject_btn.classList.add("newProject_btn");
        newProject_btn.textContent = "New Project";
        newProject_btn.addEventListener("click", () =>{
            //display new project portfolio.js
            project_input_display(projectname);

        });

        sidebar.appendChild(default_btn);
        sidebar.appendChild(newProject_btn);
        //sidebar.appendChild(project_title_box);
        container?.appendChild(sidebar);
    };

    const project_input_display = (project_title_saved) =>{
        
        project_title_box.innerHTML = "";

        const ip_project_title = document.createElement("input"); 
        ip_project_title.placeholder = "Project Name";
        
        const project_save_btn = document.createElement("button");
        project_save_btn.classList.add("projectsavebtn");
        project_save_btn.textContent = "Create Project";
        
        project_save_btn.addEventListener("click", () =>{
            project_title_saved(ip_project_title.value);
            //content_fn();
            //console.log(project_title_saved);
            project_title_box.innerHTML = "";
        
        });
        project_title_box.appendChild(ip_project_title);
        project_title_box.appendChild(project_save_btn);
        sidebar.appendChild(project_title_box);
        sidebar.appendChild(portfolio_container);
        //console.log(project_title_saved);
        

    };

    const content = document.createElement("div");
    content.classList.add("content");
    let todo_ip_box = document.createElement("div");
    todo_ip_box.classList.add("todoipbox");

    const tododisplay_container = document.createElement("div");
    tododisplay_container.classList.add("tododisplay");

    const content_fn = (todoData) =>{
        content.innerHTML = "";
        const new_todo_btn = document.createElement("button");
        new_todo_btn.classList.add("new_todo_btn");
        new_todo_btn.textContent = "+";
        new_todo_btn.addEventListener("click", () =>{
            //add todo
            todo_input_display(todoData);
        });
        
        content.appendChild(new_todo_btn);
        content.appendChild(todo_ip_box);
        content.appendChild(tododisplay_container);
        container?.appendChild(content);
    };

    const todo_input_display = (todo_data) =>{

        if(todo_ip_box.textContent !== ""){
            todo_ip_box.textContent = "";
        };

        const todo_card = document.createElement("div");
        todo_card.classList.add("todo_card");
        const title_pre = document.createElement("div");
        title_pre.classList.add("pre");
        title_pre.textContent = "Title";
        const ip_title = document.createElement("input");
        ip_title.classList.add("ip_title");

        const desc_pre = document.createElement("div");
        desc_pre.classList.add("pre");
        desc_pre.textContent = "Description";
        const ip_desc = document.createElement("input");
        ip_desc.classList.add("ip_desc");

        const dueDate_pre = document.createElement("div");
        dueDate_pre.classList.add("pre");
        dueDate_pre.textContent = "Due Date";
        const ip_dueDate = document.createElement("input"); 
        ip_dueDate.classList.add("ip_dueDate");
        ip_dueDate.type = "date";

        const priority_pre = document.createElement("div");
        priority_pre.classList.add("pre");
        priority_pre.textContent = "Priority";
        const ip_priority = document.createElement("input");
        //type setting afterwards
        ip_priority.classList.add("ip_priority");

        const notes_pre =document.createElement("div");
        notes_pre.classList.add("pre");
        notes_pre.textContent = "Notes";
        const ip_notes = document.createElement("input");
        ip_notes.classList.add("ip_notes");

        const checklist_pre = document.createElement("div");
        checklist_pre.classList.add("pre");
        checklist_pre.textContent = "Done";
        const ip_checklist = document.createElement("input");
        ip_checklist.classList.add("ip_checklist");
        ip_checklist.type = "checkbox";

        const todo_save_btn = document.createElement("button");
        todo_save_btn.classList.add("todo_save_btn");
        todo_save_btn.textContent = "Save";
        todo_save_btn.addEventListener("click", () =>{
            //save display and store
            const allData= {
                todo_title: ip_title.value,
                todo_desc: ip_desc.value,
                todo_due: ip_dueDate.value,
                todo_priority: ip_priority.value,
                todo_notes: ip_notes.value,
                todo_check: ip_checklist.value
            };
            todo_data(allData);
            todo_ip_box.innerHTML = "";
        });

        todo_card.appendChild(title_pre);
        todo_card.appendChild(ip_title);
        todo_card.appendChild(desc_pre);
        todo_card.appendChild(ip_desc);
        todo_card.appendChild(dueDate_pre);
        todo_card.appendChild(ip_dueDate);
        todo_card.appendChild(priority_pre);
        todo_card.appendChild(ip_priority);
        todo_card.appendChild(notes_pre);
        todo_card.appendChild(ip_notes);
        todo_card.appendChild(checklist_pre);
        todo_card.appendChild(ip_checklist);
        todo_card.appendChild(todo_save_btn);
        todo_ip_box.appendChild(todo_card);        
    };

    const displayPortfolio = (projectName) =>{

        const projectsList = document.createElement("div");
        projectsList.classList.add("projectList");

        projectName.forEach((myProject, index) =>{

            projectsList.innerHTML = "";

            const projectcard = document.createElement("button");
            projectcard.classList.add("projectcard");
            projectcard.textContent = myProject.name;

            projectcard.addEventListener("click", () =>{
                //open todolist of particular project
            });
            
            const removeProject = document.createElement("button");
            removeProject.classList.add("remove");
            removeProject.textContent = "Delete";
            removeProject.addEventListener("click", () =>{
                //remove the project card from portfolio
            });
            projectsList.appendChild(projectcard);

        })

        portfolio_container.appendChild(projectsList);
    
    };

    const displayTodolist = (todoData) =>{

        const todolistbox = document.createElement("div");
        todolistbox.classList.add("todolistbox");
        
        todoData.forEach((mytodo, index) =>{

            todolistbox.innerHTML = "";

            const card = document.createElement("div");
            card.classList.add("card");

            const title_disp = document.createElement("h3");
            title_disp.textContent = mytodo.title;
            
            const desc_disp = document.createElement("p");
            desc_disp.textContent = mytodo.desc;

            const due_disp = document.createElement("p");
            due_disp.textContent = mytodo.dueDate;

            const pri_disp = document.createElement("p");
            pri_disp.textContent = mytodo.priority;

            const notes_disp = document.createElement("p");
            notes_disp.textContent = mytodo.notes;

            const check_disp = document.createElement("p");
            check_disp.textContent = mytodo.checklist;

            card.appendChild(title_disp);
            card.appendChild(desc_disp);
            card.appendChild(due_disp);
            card.appendChild(pri_disp);
            card.appendChild(notes_disp);
            card.appendChild(check_disp);
            todolistbox.appendChild(card);

        });
        tododisplay_container.appendChild(todolistbox);
        
    }; 

    return { sidebar_fn, content_fn, project_input_display, todo_input_display, displayPortfolio, displayTodolist };
})();

export { display };