import { renderProjects, renderTasks, pushNewProject, pushNewTask } from "./render";

let activeProject = 0;

export const createInput = (id, location) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.id = `${id}Input`;
    input.placeholder = "Enter new project name"

    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "button");
    submitButton.innerText = "Submit";
    submitButton.setAttribute("id", `${id}SubmitButton`);

    let cancelButton = document.createElement("button");
    cancelButton.setAttribute("type", "button");
    cancelButton.innerText = "Cancel";
    cancelButton.setAttribute("id", `${id}CancelButton`);

    location.appendChild(input);
    location.appendChild(submitButton);
    location.appendChild(cancelButton);
}

export const toggleButton = (element) => {
    const button = document.getElementById(element);
    if (button.style.display === "none") {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
}

const deleteSubmitButton = (selector, location) => {
    const submitButton = document.getElementById(selector);
    location.removeChild(submitButton);
}

const deleteCancelButton = (selector, location) => {
    const cancelBtn = document.getElementById(selector);
    location.removeChild(cancelBtn);
}

const deleteInputField = (selector, location) => {
    const input = document.getElementById(selector);
    location.removeChild(input);
}

export const deleteAllFields = (name, location) => {
    deleteCancelButton(`${name}CancelButton`, location);
    deleteInputField(`${name}Input`, location);
    deleteSubmitButton(`${name}SubmitButton`, location);
}

export const checkListeners = (e) => {  
  if (e.target.id === 'projectButton') {
    createInput('project', sidebar)
    toggleButton('projectButton');
  }
  if (e.target.id === 'taskButton') {
    createInput('task', main)
    toggleButton('taskButton');
  }
  if (e.target.id === 'projectSubmitButton') {
    pushNewProject('projectInput');
    deleteAllFields('project', sidebar);
    toggleButton('projectButton');
    renderProjects('.projects', sidebar)
  } 
  else if (e.target.id === 'projectCancelButton') {
    toggleButton('projectButton');
    deleteAllFields('project', sidebar);
  } 
  else if (e.target.id === 'taskSubmitButton') {
    pushNewTask('taskInput', activeProject);
    toggleButton('taskButton');
    deleteAllFields('task', main);
    renderTasks('.tasks', main, activeProject);
  } 
  else if (e.target.id === 'taskCancelButton') {
    toggleButton('taskButton');
    deleteAllFields('task', main);
  }
  else if (e.target.className === 'projects') {
    const id = e.target.id;
    activeProject = Number(id.slice(7));
    renderTasks('.tasks', main, activeProject);
  }
}

