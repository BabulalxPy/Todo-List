// @ts-check
const displayMenu = (() =>{
    const content = document.querySelector(".content");

    const menu_head = () => {
        const menu_head = document.createElement("h1");
        menu_head.classList.add("menu_head");
        menu_head.textContent = "MENU";

        content?.appendChild(menu_head);
    };

    const beverages = () =>{
        const bev_title = document.createElement("h2");
        bev_title.classList.add("bev_title");
        bev_title.textContent = "Beverages";

        const milkTea = document.createElement("div");
        milkTea.classList.add("milkTea");

        const milkTea_title = document.createElement("h3");
        milkTea_title.classList.add("milkTea_title");
        milkTea_title.textContent = "Milk Tea";

        const milkTea_des = document.createElement("div");
        milkTea_des.classList.add("milkTea_des");
        milkTea_des.textContent = "A warm creamy tea made with the pure Buffalo milk and fresh tea leaves to start your day off right!";

        const milkTea_price = document.createElement("div");
        milkTea_price.classList.add("milkTea_price");
        milkTea_price.textContent = "Price: 15 INR";

        const milkTea_img = document.createElement("img");
        milkTea_img.classList.add("milkTea_img");
        //milkTea_img.src = "./image.jpg";
        milkTea.appendChild(milkTea_title);
        milkTea.appendChild(milkTea_des);
        milkTea.appendChild(milkTea_price);
        milkTea.appendChild(milkTea_img);
        
        //more beverages to add
        content?.appendChild(bev_title);
        content?.appendChild(milkTea);

    };
    const side = () =>{
        const side_title = document.createElement("h2");
        side_title.classList.add("side_title");
        side_title.textContent = "Sides";

        const TnJ = document.createElement("div");
        TnJ.classList.add("TnJ");

        const TnJ_title = document.createElement("h3");
        TnJ_title.classList.add("TnJ_title");
        TnJ_title.textContent = "Toast and Jam";

        const TnJ_des = document.createElement("div");
        TnJ_des.classList.add("TnJ_des");
        TnJ_des.textContent = "A slice of toast, your choice of bread, and our homemade blackberyy or raspberyy jam.";
        
        const TnJ_price = document.createElement("div");
        TnJ_price.classList.add("TnJ_price");
        TnJ_price.textContent = "Price: 20 INR";

        const TnJ_img = document.createElement("img");
        TnJ_img.classList.add("TnJ_img");
        //TnJ_img.src = ./jpg;  

        TnJ.appendChild(TnJ_title);
        TnJ.appendChild(TnJ_des);
        TnJ.appendChild(TnJ_price);
        TnJ.appendChild(TnJ_img);

        content?.appendChild(side_title);
        content?.appendChild(TnJ);
    };
    const mainDish = () =>{
        const side_title = document.createElement("h2");
        side_title.classList.add("side_title");
        side_title.textContent = "Sides";

        const TnJ = document.createElement("div");
        TnJ.classList.add("TnJ");

        const TnJ_title = document.createElement("h3");
        TnJ_title.classList.add("TnJ_title");
        TnJ_title.textContent = "Toast and Jam";

        const TnJ_des = document.createElement("div");
        TnJ_des.classList.add("TnJ_des");
        TnJ_des.textContent = "A slice of toast, your choice of bread, and our homemade blackberyy or raspberyy jam.";
        
        const TnJ_price = document.createElement("div");
        TnJ_price.classList.add("TnJ_price");
        TnJ_price.textContent = "Price: 20 INR";

        const TnJ_img = document.createElement("img");
        TnJ_img.classList.add("TnJ_img");
        //TnJ_img.src = ./jpg;  

        TnJ.appendChild(TnJ_title);
        TnJ.appendChild(TnJ_des);
        TnJ.appendChild(TnJ_price);
        TnJ.appendChild(TnJ_img);

        content?.appendChild(side_title);
        content?.appendChild(TnJ);

    };

    return {menu_head, beverages, side, mainDish};

})();

export { displayMenu };