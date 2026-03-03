const displayContact = (() =>{
    const content = document.querySelector(".content");
    const contact_head = () =>{
        const contact_head = document.createElement("H1");
        contact_head.classList.add("contact_head");
        contact_head.textContent = "CONTACT US";

        content.appendChild(contact_head);
    };
    const contact1 = () =>{
        const hiroshi = document.createElement("div");
        hiroshi.classList.add("hiroshi");

        const hiroshi_name = document.createElement("h3");
        hiroshi_name.classList.add("hiroshi_name");
        hiroshi_name.textContent = "Hiroshi Nohara";
        
        const hiroshi_tag = document.createElement("div");
        hiroshi_tag.classList.add("hiroshi_tag");
        hiroshi_tag.textContent = "Chef";

        const hiroshi_nos = document.createElement("div");
        hiroshi_nos.classList.add("hiroshi_nos");
        hiroshi_nos.textContent = "PhoneNO.: 6789778321";

        const hiroshi_mail = document.createElement("div");
        hiroshi_mail.classList.add("hiroshi_mail");
        hiroshi_mail.textContent = "hiroshinaharo@blalresto.com";

        hiroshi.appendChild(hiroshi_name);
        hiroshi.appendChild(hiroshi_tag);
        hiroshi.appendChild(hiroshi_nos);
        hiroshi.appendChild(hiroshi_mail);

        content.appendChild(hiroshi);
    };

    const contact2 = () =>{
        const hiroshi = document.createElement("div");
        hiroshi.classList.add("hiroshi");

        const hiroshi_name = document.createElement("h3");
        hiroshi_name.classList.add("hiroshi_name");
        hiroshi_name.textContent = "Hiroshi Nohara";
        
        const hiroshi_tag = document.createElement("div");
        hiroshi_tag.classList.add("hiroshi_tag");
        hiroshi_tag.textContent = "Chef";

        const hiroshi_nos = document.createElement("div");
        hiroshi_nos.classList.add("hiroshi_nos");
        hiroshi_nos.textContent = "PhoneNO.: 6789778321";

        const hiroshi_mail = document.createElement("div");
        hiroshi_mail.classList.add("hiroshi_mail");
        hiroshi_mail.textContent = "hiroshinaharo@blalresto.com";

        hiroshi.appendChild(hiroshi_name);
        hiroshi.appendChild(hiroshi_tag);
        hiroshi.appendChild(hiroshi_nos);
        hiroshi.appendChild(hiroshi_mail);

        content.appendChild(hiroshi);
    };

    return { contact_head, contact1, contact2 };

})();

export { displayContact };