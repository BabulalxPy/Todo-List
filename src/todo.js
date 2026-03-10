
export const todo = (ip_title, ip_desc, ip_dueDate, ip_priority, ip_notes, ip_checklist) =>{
    const title = ip_title;
    const desc = ip_desc;
    const dueDate = ip_dueDate;
    const priority = ip_priority;
    const notes = ip_notes;
    const checklist = ip_checklist;

    return {title, desc, dueDate, priority, notes, checklist};
}

