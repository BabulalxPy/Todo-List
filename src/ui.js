//@ts-check

import deleteIcon from "./svg/delete.svg";
import editIcon from "./svg/edit.svg";
import addIcon from "./svg/newtodo.svg";
import saveIcon from "./svg/saveproj.svg";
import savetodoIcon from "./svg/savetodo.svg";

const display = (() =>{

    const container = document.querySelector(".container");
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    const project_title_box = document.createElement("div");
    project_title_box.classList.add("project_title_box");
    const portfolio_container = document.createElement("div");
    portfolio_container.classList.add("portfolio_container");
    
    const sidebar_fn = (defaultProjectObj, switchcallback, projectname) =>{
        
        const default_btn = document.createElement("button");
        default_btn.classList.add("default_btn");
        default_btn.textContent = "Default";
        default_btn.addEventListener("click", () =>{

            switchcallback(defaultProjectObj);
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
        sidebar.appendChild(portfolio_container);
        container?.appendChild(sidebar);
    };

    const project_input_display = (project_title_saved) =>{
        
        project_title_box.innerHTML = "";

        const ip_project_title = document.createElement("input"); 
        ip_project_title.classList.add("inputproj");
        ip_project_title.placeholder = "Project Name";
        
        const project_save_btn = document.createElement("button");
        project_save_btn.classList.add("projectsavebtn");

        const saveproj = document.createElement("img");
        saveproj.src = saveIcon;
        saveproj.alt = "save project";
        project_save_btn.appendChild(saveproj);
        
        project_save_btn.addEventListener("click", () =>{
            project_title_saved(ip_project_title.value);
            //content_fn();
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

    const tododisplay_container = document.createElement("div");
    tododisplay_container.classList.add("tododisplay");

    const content_fn = (todoData) =>{
        content.innerHTML = "";
        const new_todo_btn = document.createElement("button");
        new_todo_btn.classList.add("new_todo_btn");

        const addImg = document.createElement("img");
        addImg.src = addIcon;
        addImg.alt = "Add Todo";
        new_todo_btn.appendChild(addImg);

        new_todo_btn.addEventListener("click", () =>{
            //add todo
            todo_input_display(todoData, null);
        });
        
        content.appendChild(new_todo_btn);
        content.appendChild(todo_ip_box);
        content.appendChild(tododisplay_container);
        container?.appendChild(content);
    };

    /**
     * 
     * @param {*} todo_data 
     * @param {*} existingtodo 
     */
    const todo_input_display = (todo_data, existingtodo = null) =>{

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
        const ip_priority = document.createElement("select");
        ip_priority.classList.add("ip_priority");

        const options = ["Low", "Medium", "High"];
        options.forEach(level => {
            const option = document.createElement("option");
            option.value = level;
            option.textContent = level;
            ip_priority.appendChild(option);
        });

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

        if(existingtodo !== null){
            ip_title.value = existingtodo.title;
            ip_desc.value = existingtodo.desc;
            ip_dueDate.value = existingtodo.dueDate;
            ip_priority.value = existingtodo.priority;
            ip_notes.value = existingtodo.notes;
            ip_checklist.value = existingtodo.checklist;
        };

        const todo_save_btn = document.createElement("button");
        todo_save_btn.classList.add("todo_save_btn");

        const todosaveImg = document.createElement("img");
        todosaveImg.src = savetodoIcon;
        todosaveImg.alt = "save todo";
        todo_save_btn.appendChild(todosaveImg);

        todo_save_btn.addEventListener("click", () =>{
            //save display and store
            const allData= {
                todo_title: ip_title.value,
                todo_desc: ip_desc.value,
                todo_due: ip_dueDate.value,
                todo_priority: ip_priority.value,
                todo_notes: ip_notes.value,
                todo_check: ip_checklist.checked
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

    const displayPortfolio = (projectName, switchProjectCallback, deleteProjectCallback) =>{
        portfolio_container.innerHTML = "";

        const projectsList = document.createElement("div");
        projectsList.classList.add("projectList");

        projectName.forEach((myProject, index) =>{

            if(myProject.name === "Default") return;

            const projectbox = document.createElement("div");
            projectbox.classList.add("projectbox");

            const projectcard = document.createElement("button");
            projectcard.classList.add("projectcard");
            projectcard.textContent = myProject.name;

            projectcard.addEventListener("click", () =>{
                //open todolist of particular project
                switchProjectCallback(myProject);
            });
            
            const removeProject = document.createElement("button");
            removeProject.classList.add("remove");

            const deleteImg = document.createElement("img");
            deleteImg.src = deleteIcon;
            deleteImg.alt = "delete project";
            removeProject.appendChild(deleteImg);

            removeProject.addEventListener("click", () =>{
                //remove the project card from portfolio
                deleteProjectCallback(myProject);
            });
            projectbox.appendChild(projectcard);
            projectbox.appendChild(removeProject);
            projectsList.appendChild(projectbox);
        })

        portfolio_container.appendChild(projectsList);
    
    };

    const displayTodolist = (activeProject, deletetodocallback, editTodoCallback) =>{
        tododisplay_container.innerHTML = "";

        const projectHeading = document.createElement("h2");
        projectHeading.textContent = activeProject.name;
        tododisplay_container.appendChild(projectHeading);

        const todolistbox = document.createElement("div");
        todolistbox.classList.add("todolistbox");
        
        activeProject.tasks.forEach((mytodo, index) =>{

            //todolistbox.innerHTML = "";

            const card = document.createElement("div");
            card.classList.add("card");

            if(mytodo.priority === "High") card.style.borderLeft = "6px solid Red";
            if(mytodo.priority === "Medium") card.style.borderLeft = "6px solid Yellow";
            if(mytodo.priority === "Low") card.style.borderLeft = "6px solid Green";

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

            const check_wrapper = document.createElement("div");
            const check_label = document.createElement("span");
            check_label.textContent = "Done: ";

            const live_checkbox = document.createElement("input");
            live_checkbox.type = "checkbox";
            live_checkbox.checked = mytodo.checklist;

            if (mytodo.checklist === true) {
                card.style.opacity = "0.5";
                title_disp.style.textDecoration = "line-through";
            }

            live_checkbox.addEventListener("change", () =>{

                mytodo.checklist = live_checkbox.checked;

                if (live_checkbox.checked) {
                    card.style.opacity = "0.5";
                    title_disp.style.textDecoration = "line-through";
                } else {
                    card.style.opacity = "1";
                    title_disp.style.textDecoration = "none";
                };
            });

            check_wrapper.appendChild(check_label);
            check_wrapper.appendChild(live_checkbox);

            //remove todo here
            const removetodo = document.createElement("button");
            removetodo.classList.add("remove");

            const deleteTodo = document.createElement("img");
            deleteTodo.src = deleteIcon;
            deleteTodo.alt = "Delete Todo";
            removetodo.appendChild(deleteTodo);

            removetodo.addEventListener("click", () =>{
                deletetodocallback(mytodo);
            });

            //edit todo here
            const editTodo = document.createElement("button");
            editTodo.classList.add("edit");

            const editImg = document.createElement("img");
            editImg.src = editIcon;
            editImg.alt = "Edit todo";
            editTodo.appendChild(editImg);
            
            editTodo.addEventListener("click", () =>{
                editTodoCallback(mytodo);

            });

            card.appendChild(title_disp);
            card.appendChild(desc_disp);
            card.appendChild(due_disp);
            card.appendChild(pri_disp);
            card.appendChild(notes_disp);
            card.appendChild(check_disp);
            card.appendChild(check_wrapper);
            card.appendChild(editTodo);
            card.appendChild(removetodo);
            todolistbox.appendChild(card);

        });
        tododisplay_container.appendChild(todolistbox);
        
    }; 

    return { sidebar_fn, content_fn, project_input_display, todo_input_display, displayPortfolio, displayTodolist };
})();

export { display };