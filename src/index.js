//@ts-check
import "./styles.css";
import {displayHome} from "./home.js";
import {displayMenu} from "./menu.js";
import {displayContact} from "./contact.js";
console.log("Dora Cake");

const mainpage = (() =>{
    const content = document.querySelector("div");
    const startpage = () =>{
        displayHome.resto_title();
        displayHome.resto_intro();
        displayHome.resto_timing();
        displayHome.resto_location();
    };

    const homepage = () =>{
        const home_btn = document.querySelector(".home");
        home_btn.addEventListener("click", () =>{
            content.textContent = "";
            displayHome.resto_title();
            displayHome.resto_intro();
            displayHome.resto_timing();
            displayHome.resto_location();
        });
    };

    const menupage = () =>{
        const menu_btn = document.querySelector(".menu");
        menu_btn.addEventListener("click", () =>{
            content.textContent = "";
            displayMenu.menu_head();
            displayMenu.beverages();
            displayMenu.side();
            displayMenu.mainDish();
        });

    };

    const contactpage = () =>{
        const contact_btn = document.querySelector(".contact");
        contact_btn.addEventListener("click", () =>{
            content.textContent = "";
            displayContact.contact_head();
            displayContact.contact1();
            displayContact.contact2();
        });
    };

    return { startpage, homepage, menupage, contactpage};

})();
mainpage.startpage();
mainpage.homepage();
mainpage.menupage();
mainpage.contactpage();



