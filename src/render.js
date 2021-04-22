import { allProjects, addTaskToProject, project, pushToAllProjects } from "./logic.js"

const createDiv = (name, location, className, id) => {
    const div = document.createElement('button');
    div.className = className;
    div.innerText = name;
    div.id = id;

    location.appendChild(div);
}

export const renderProjects = (selector, location) => {
    const projectFields = document.querySelectorAll(selector)
    for (let index = 0; index < projectFields.length; index++) {
        location.removeChild(projectFields[index]);
    }
    for (let index = 0; index < allProjects.length; index++) {
        const createProject = createDiv(allProjects[index].name, location, "projects", `project${index}`);     
    }
};

// how to get the proper project number?
export const activeProject = (e) => {
    let activeProject = 0;
    
    const id = e.target.id;
    activeProject = Number(id.slice(7));

    let number = activeProject;
    console.log(`active project number: ${number}`);
    console.log(typeof(number));

    return activeProject
}

export const deleteTasks = (selector, location) => {
    const allFields = document.querySelectorAll(selector)
    for (let index = 0; index < allFields.length; index++) {
        location.removeChild(allFields[index]);
    }
}

export const populateTasks = (selector, location, projectNumber) => {
    const project = allProjects[projectNumber];
    const projectName = allProjects[projectNumber].name;
    const taskList = project.taskList

    for (let index = 0; index < taskList.length; index++) {
        const taskName = createDiv(taskList[index].name, location, "tasks", `${projectName}task${index}`);
    }
}

export const renderTasks = (selector, location, projectNumber) => {
    deleteTasks(selector, location);
    populateTasks(selector, location, projectNumber);
};

const readInput = (selector) => {
    const input = document.getElementById(selector);
    const text = input.value;
    return text;
}

export const pushNewProject = (selector) => {
    const text = readInput(selector)
    const newProjectObject = project(text);
    pushToAllProjects(newProjectObject);
}

export const pushNewTask = (selector, projectNumber) => {
    const text = readInput(selector)
    const newTaskObject = addTaskToProject(projectNumber, text);
}



