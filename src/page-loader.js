const createDiv = (name, id, text) => {
    let div = document.createElement('div');
    div.id = id;
    div.className = name;
    div.innerText = text;
    return div;
}

const button = (name, id, text, location) => {
    const button = document.createElement('button');
    button.className = name;
    button.id = id;
    button.innerText = text;
    return button;
}

function loadPage() {
    const content = document.getElementById('content');
    
    const wrapper = createDiv("wrapper", "wrapper", "")
    const header = createDiv("box", "header", "TO-DO APPLICATION");
    const sidebar = createDiv("box", "sidebar", "");
    const rightBar = createDiv("box", "rightbar", "");
    const main = createDiv("box", "main", "");
   
    content.appendChild(wrapper);
    wrapper.appendChild(header);
    wrapper.appendChild(sidebar);
    wrapper.appendChild(main);
    wrapper.appendChild(rightBar);

    const projectButton = button("project", "projectButton", "New Project")
    sidebar.appendChild(projectButton);

    const taskButton = button("taskButton", "taskButton", "+")
    rightBar.appendChild(taskButton);
    
};

export default loadPage;