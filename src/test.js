// tested the name of the render tasks

let projectNumber = 0

const allProjects = [];

const project = (projectName) => {
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

const addSampleProject = () => {
    const sampleTask = task("Sample Task", "description");
    const sampleProject = project("Sample Project");

    sampleProject.addTask(sampleTask);
    pushToAllProjects(sampleProject);
}

const addTaskToProject = (projectNumber, inputValue) => {
    const targetProject = allProjects[projectNumber];
    const newTask = task(inputValue, "description")

    targetProject.addTask(newTask);
}

const pushToAllProjects = (project) => allProjects.push(project);

addSampleProject();
const test = allProjects[projectNumber];
const projectName = allProjects[projectNumber].name;
const taskList = test.taskList
    console.log(projectName)
    console.log(taskList)


    
