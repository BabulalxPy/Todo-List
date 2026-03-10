//@ts-check
const display = (() =>{
    const container = document.querySelector(".container");
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    const project_title_box = document.createElement("div");
    project_title_box.classList.add("project_title_box");
    const sidebar_fn = () =>{
        
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
            project_input_display();

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
            content_fn();
            //console.log(project_title_saved);
            project_title_box.innerHTML = "";
        });
        project_title_box.appendChild(ip_project_title);
        project_title_box.appendChild(project_save_btn);
        sidebar.appendChild(project_title_box);
        //console.log(project_title_saved);
        

    };

    const content = document.createElement("div");
    content.classList.add("content");
    let todo_ip_box = document.createElement("div");
    todo_ip_box.classList.add("todoipbox");

    const content_fn = () =>{
        content.innerHTML = "";
        const new_todo_btn = document.createElement("button");
        new_todo_btn.classList.add("new_todo_btn");
        new_todo_btn.textContent = "+";
        new_todo_btn.addEventListener("click", () =>{
            //add todo
            todo_input_display();
        });
        
        content.appendChild(new_todo_btn);
        content.appendChild(todo_ip_box);
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

    return { sidebar_fn, content_fn, project_input_display, todo_input_display };
})();

export { display };