
const createProjectBtn = (id, text) => {
    const sidebar = document.getElementById('sidebar');
    const projectDiv = document.createElement('button');
    projectDiv.className = "projects"
    projectDiv.id = id;
    projectDiv.innerText = text;

    sidebar.appendChild(projectDiv);
}

export const createInput = () => {
    const newDiv = document.createElement('div');
    newDiv.id = "inputDiv";

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.id = 'inputPopup';
    input.placeholder = "Enter new project name"

    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "button");
    submitButton.innerText = "Submit";
    submitButton.setAttribute("id", "submitButton");

    sidebar.appendChild(input);
    sidebar.appendChild(submitButton);
}

const sampleProject = () => {
    const sampleProject = createProjectBtn("sample", "Sample Project");
};

export default sampleProject;


export const createNewProject = () => {

    const newProject = createProjectBtn(id, text);
}
