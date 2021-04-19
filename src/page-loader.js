const createDiv = (name, id, text) => {
    let div = document.createElement('div');
    div.id = id;
    div.className = name;
    div.innerText = text;
    return div;
}

const createButton = (name, id, text) => {
    const button = document.createElement('button');
    button.className = name;
    button.id = id;
    button.innerText = text;
    return button;
}

function loadPage() {
    const content = document.getElementById('content');
    
    const wrapper = createDiv("wrapper", "wrapper", "")
    const header = createDiv("box", "header", "To-do-app");
    const sidebar = createDiv("box", "sidebar", "");
    const main = createDiv("box", "main", "");
   
    content.appendChild(wrapper);
    wrapper.appendChild(header);
    wrapper.appendChild(sidebar);
    wrapper.appendChild(main);

    const projectButton = createButton("project", "projectBtn", "New Project")
    sidebar.appendChild(projectButton);
};

export default loadPage;