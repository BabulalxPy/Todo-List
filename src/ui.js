//@ts-check
const display = (() =>{
    const container = document.querySelector(".container");
    const sidebar = () =>{
        const sidebar = document.createElement("div");
        sidebar.classList.add("sidebar");
        
        const default_btn = document.createElement("button");
        default_btn.classList.add("default_btn");
        default_btn.textContent = "Default";
        default_btn.addEventListener("click", () =>{
            //display default page
        });

        const newProject_btn = document.createElement("button");
        newProject_btn.classList.add("newProject_btn");
        newProject_btn.textContent = "New Project";
        newProject_btn.addEventListener("click", () =>{
            //display new project portfolio.js
            project_input_display();

        });
        const project_title_box = document.createElement("div");
        project_title_box.classList.add("project_title_box");
        const project_input_display = () =>{
            if(project_title_box.textContent !== ""){
                project_title_box.textContent = "";
            };
            const ip_project_title = document.createElement("input"); ip_project_title.placeholder = "Project Name";
            const project_save_btn = document.createElement("button");
            project_save_btn.classList.add("projectsavebtn");
            project_save_btn.textContent = "Create Project";
            project_save_btn.addEventListener("click", () =>{
                //display and store
            });
            project_title_box.appendChild(ip_project_title);
            project_title_box.appendChild(project_save_btn);

        };

        sidebar.appendChild(default_btn);
        sidebar.appendChild(newProject_btn);
        sidebar.appendChild(project_title_box);
        container?.appendChild(sidebar);
    };
    const content = () =>{
        const content = document.createElement("div");
        content.classList.add("content");

        const new_todo_btn = document.createElement("button");
        new_todo_btn.classList.add("new_todo_btn");
        new_todo_btn.textContent = "+";
        new_todo_btn.addEventListener("click", () =>{
            //add todo
            todo_input_display();
        });
        let todo_ip_box = document.createElement("div");
        todo_ip_box.classList.add("todoipbox");
        

        const todo_input_display = () =>{

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

            //notes
            //checklist

            const todo_save_btn = document.createElement("button");
            todo_save_btn.classList.add("todo_save_btn");
            todo_save_btn.textContent = "Save";
            todo_save_btn.addEventListener("click", () =>{
                //save display and store
            });
    
            todo_card.appendChild(title_pre);
            todo_card.appendChild(ip_title);
            todo_card.appendChild(desc_pre);
            todo_card.appendChild(ip_desc);
            todo_card.appendChild(dueDate_pre);
            todo_card.appendChild(ip_dueDate);
            todo_card.appendChild(priority_pre);
            todo_card.appendChild(ip_priority);
            todo_card.appendChild(todo_save_btn);
            todo_ip_box.appendChild(todo_card);        
        };
        
        content.appendChild(new_todo_btn);
        content.appendChild(todo_ip_box);
        container?.appendChild(content);
    };
    

    return { sidebar, content };
})();

export { display };