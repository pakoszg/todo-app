import {
  allProjects,
  addTaskToProject,
  project,
  pushToAllProjects,
  updateTaskPriority,
  saveLocalStorage,
} from './logic.js'
import { createProjectDiv, createTaskDiv, createPromptDiv } from './dom.js'

export const renderProjects = (selector, location) => {
  const projectFields = document.querySelectorAll(selector)
  for (let index = 0; index < projectFields.length; index++) {
    location.removeChild(projectFields[index])
  }
  for (let index = 0; index < allProjects.length; index++) {
    createProjectDiv(
      allProjects[index].name,
      location,
      'projects',
      `project${index}`
    )
  }
  saveLocalStorage()
}

const deleteTasks = (selector, location) => {
  const allFields = document.querySelectorAll(selector)
  for (let index = 0; index < allFields.length; index++) {
    location.removeChild(allFields[index])
  }
}

const populateTasks = (selector, location, projectNumber) => {
  const project = allProjects[projectNumber]
  const taskList = project.taskList

  for (let index = 0; index < taskList.length; index++) {
    let task = project.taskList[index]
    createTaskDiv(
      task.completed,
      task.name,
      task.description,
      task.dueDate,
      task.priority,
      `task${index}`
    )
  }
}

export const renderTasks = (selector, location, projectNumber) => {
  deleteTasks(selector, location)
  populateTasks(selector, location, projectNumber)
  saveLocalStorage()
}

export const readTaskInput = (selector) => {
  const inputName = document.getElementById(`${selector}taskInputTitle`)
  const inputDescription = document.getElementById(
    `${selector}taskInputDescription`
  )
  const inputDate = document.getElementById(`${selector}taskInputDate`)
  const inputPrio = document.getElementById(`switch${selector}taskInput`)
  const name = inputName.value
  const description = inputDescription.value
  const date = inputDate.value
  let priority = 'normal'

  if (inputPrio.childNodes[0].checked === true) {
    priority = 'low'
  } else if (inputPrio.childNodes[2].checked === true) {
    priority = 'normal'
  } else {
    priority = 'zhigh'
  }

  return { name, description, date, priority }
}

export const readProjectInput = (selector) => {
  const inputName = document.getElementById(selector)
  const name = inputName.value

  return { name }
}

export const pushNewProject = (selector) => {
  const text = readProjectInput(selector).name
  const newProjectObject = project(text)
  pushToAllProjects(newProjectObject)
}

export const pushNewTask = (selector, projectNumber) => {
  const name = readTaskInput('').name
  const description = readTaskInput('').description
  const date = readTaskInput('').date
  const priority = readTaskInput('').priority

  addTaskToProject(projectNumber, name, description, date, priority)
}

export const changePriority = (e, activeProject) => {
  if (e.target.className === 'low') {
    const id = e.target.htmlFor
    let taskNumber = Number(id.slice(7))
    const className = e.target.className
    console.log(taskNumber)
    updateTaskPriority(activeProject, taskNumber, className)
  } else if (e.target.className === 'normal') {
    const id = e.target.htmlFor
    let taskNumber = Number(id.slice(10))
    const className = e.target.className
    console.log(taskNumber)
    updateTaskPriority(activeProject, taskNumber, className)
  } else {
    const id = e.target.htmlFor
    let taskNumber = Number(id.slice(8))
    const className = e.target.className
    console.log(taskNumber)
    updateTaskPriority(activeProject, taskNumber, className)
  }
}

export const deletePrompt = (item) => {
  createPromptDiv(item)
}
