// @ts-check
const displayHome = (() =>  {
    const content = document.querySelector(".content");
    
    const resto_title = () =>{
        const restoTitle = document.createElement("h1");
        restoTitle.classList.add("restoTitle");
        restoTitle.textContent = "Blal's Breakfast Bar";
        content?.appendChild(restoTitle);
    };
    const resto_intro = () =>{
        
        const resto_intro_combo = document.createElement("div");
        resto_intro_combo.classList.add("resto_intro_combo");

        const restoIntro = document.createElement("div");
        restoIntro.classList.add("restoIntro");
        restoIntro.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        
        const restoIntro_footer =document.createElement("div");
        restoIntro_footer.classList.add("restoIntro_footer");
        restoIntro_footer.textContent = "Jesse Pinkman";

        resto_intro_combo.appendChild(restoIntro);
        resto_intro_combo.appendChild(restoIntro_footer);

        content?.appendChild(resto_intro_combo);
    };

    const resto_timing = () =>{
        const resto_timing_combo = document.createElement("div");
        resto_timing_combo.classList.add("resto_timing_combo");

        const hours = document.createElement("h2");
        hours.classList.add("hours");
        hours.textContent = "HOURS";
        
        const timing = document.createElement("ul");
        timing.classList.add("timing");
        
        const sunday = document.createElement("li");
        sunday.classList.add("sunday");
        sunday.textContent = "Sunday: 8am to 1pm";

        const monday = document.createElement("li");
        monday.classList.add("monday");
        monday.textContent = "Monday: 6am to 6pm";

        const tuesday = document.createElement("li");
        tuesday.classList.add("tuesday");
        tuesday.textContent = "Tuesday: 6am to 6pm";

        const wednesday = document.createElement("li");
        wednesday.classList.add("wednesday");
        wednesday.textContent = "Wednesday: 6am to 6pm";

        const thursday = document.createElement("li");
        thursday.classList.add("thursday");
        thursday.textContent = "Thursday: 6am to 6pm";

        const friday = document.createElement("li");
        friday.classList.add("friday");
        friday.textContent = "Friday: 6am to 3pm";

        const saturday = document.createElement("li");
        saturday.classList.add("saturday");
        saturday.textContent = "Saturday: 8am to 12pm";

        timing.appendChild(sunday);
        timing.appendChild(monday);
        timing.appendChild(tuesday);
        timing.appendChild(wednesday);
        timing.appendChild(thursday);
        timing.appendChild(friday);
        timing.appendChild(saturday);
        resto_timing_combo.appendChild(hours);
        resto_timing_combo.appendChild(timing);
        content?.appendChild(resto_timing_combo);
    };

    const resto_location = () =>{
        const loc_combo = document.createElement("div");
        loc_combo.classList.add("resto_loc_combo")
        const loc_head = document.createElement("h2");
        loc_head.classList.add("loc_head");
        loc_head.textContent = "LOCATION";

        const location = document.createElement("div");
        location.classList.add("div");
        location.textContent = "124 Park Drive, Arther Lane, Wiseland";

        loc_combo.appendChild(loc_head);
        loc_combo.appendChild(location);
        content?.appendChild(loc_combo);
    };


    return {resto_title, resto_intro, resto_timing, resto_location};

})();
export { displayHome };