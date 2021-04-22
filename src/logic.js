
export const allProjects = [];

export const project = (projectName) => {
    const name = projectName;

    let taskList = [];
    const addTask = (task) => taskList.push(task);

    return { taskList, name, addTask };
}

const task = (taskName, taskDescription) => {
    const name = taskName;
    const description = taskDescription;

    return { name, description };
}

export const addSampleProject = () => {
    const sampleTask = task("Sample Task", "description");
    const sampleProject = project("Sample Project");

    sampleProject.addTask(sampleTask);
    pushToAllProjects(sampleProject);
}

export const addTaskToProject = (projectNumber, inputValue) => {
    const targetProject = allProjects[projectNumber];
    const newTask = task(inputValue, "description");

    targetProject.addTask(newTask);
}

export const pushToAllProjects = (project) => allProjects.push(project);





