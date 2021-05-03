import { renderProjects, renderTasks } from './render'

export let allProjects = []

export const project = (projectName) => {
  const name = projectName

  let taskList = []
  const addTask = (task) => taskList.push(task)

  return { taskList, name, addTask }
}

const task = (completed, name, description, dueDate, priority) => {
  return { completed, name, description, dueDate, priority }
}

export const addSampleProject = () => {
  const sampleTask = task(false, 'Buy Milk', '3 litres', '2020-12-30', 'low')
  const sampleTask2 = task(
    false,
    'Take out trash',
    'smelly',
    '2020-08-30',
    'zhigh'
  )
  const sampleTask3 = task(
    true,
    'Wash cat',
    'with soap',
    '2020-08-30',
    'normal'
  )
  const sampleProject = project('Weekly Chores')
  const sampleProject2 = project('Birthday Party')

  sampleProject.addTask(sampleTask)
  sampleProject.addTask(sampleTask2)
  sampleProject.addTask(sampleTask3)
  pushToAllProjects(sampleProject)
  pushToAllProjects(sampleProject2)
}

export const addTaskToProject = (
  projectNumber,
  title,
  description,
  date,
  priority
) => {
  const targetProject = allProjects[projectNumber]

  const newTask = task(false, title, description, date, priority)
  console.log(newTask)

  targetProject.taskList.push(newTask)
}

export const deleteProject = (number) => {
  allProjects.splice(number, 1)
}

export const deleteTask = (projectNumber, taskNumber) => {
  const tasks = allProjects[projectNumber].taskList
  tasks.splice(taskNumber, 1)
}

export const deleteTaskList = (projectNumber) => {
  allProjects[projectNumber].taskList = []
}

export const updateTaskPriority = (projectNumber, taskNumber, priority) => {
  const tasks = allProjects[projectNumber].taskList[taskNumber]
  tasks.priority = priority
}

export const updateProjectName = (newName, projectNumber) => {
  allProjects[projectNumber].name = newName
}

export const updateTask = (
  projectNumber,
  taskNumber,
  newName,
  newDescription,
  newDate,
  newPrio
) => {
  allProjects[projectNumber].taskList[taskNumber].name = newName
  allProjects[projectNumber].taskList[taskNumber].description = newDescription
  allProjects[projectNumber].taskList[taskNumber].dueDate = newDate
  allProjects[projectNumber].taskList[taskNumber].priority = newPrio
}

export const pushToAllProjects = (project) => allProjects.push(project)

export const updateSortedTasks = (projectNumber, results) => {
  results.forEach((e) => {
    allProjects[projectNumber].taskList.push(e)
  })

  console.log(allProjects)
}

export const changeTaskCompleteStatus = (e, taskNumber, projectNumber) => {
  if (e.target.checked === true) {
    allProjects[projectNumber].taskList[taskNumber].completed = true
  } else {
    allProjects[projectNumber].taskList[taskNumber].completed = false
  }
}

export const saveLocalStorage = () => {
  window.localStorage.setItem('user', JSON.stringify(allProjects))
}

export const loadLocalStorage = () => {
  if (localStorage.getItem('user') == null) {
    addSampleProject()
    renderProjects('.projects', sidebar)
    renderTasks('.tasks', main, 0)
  } else {
    allProjects = JSON.parse(window.localStorage.getItem('user'))
    renderProjects('.projects', sidebar)
    renderTasks('.tasks', main, 0)
  }
}
