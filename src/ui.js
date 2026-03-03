const display = (() =>{
   const sidebar = () =>{
        const sidebar = document.createElement("div");
        sidebar.classList.add("sidebar");
        
        const default_btn = document.createElement("button");
        default_btn.classList.add("default_btn");
        default_btn.addEventListener("click", () =>{
            //display default page
        });

        const newProject_btn = document.createElement("button");
        newProject_btn.classList.add("newProject_btn");
        newProject_btn.addEventListener("click", =>{
            //display new project
        });

   };
})();