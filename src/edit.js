import { allProjects, updateProjectName, updateTask } from './logic.js'
import { createProjectInput, createTaskInput } from './dom.js'
import { readTaskInput, readProjectInput } from './render.js'

let activeEditProject = null
let activeEditTask = null

export const editProjectName = (e) => {
  createProjectInput('edit', sidebar)

  const id = e.target.id
  activeEditProject = Number(id.slice(11))
  populateField('editprojectInputTitle', activeEditProject)
}

export const populateField = (selector, activeProject) => {
  const inputField = document.getElementById(selector)
  inputField.value = allProjects[activeProject].name
}

export const changeProjectName = (e) => {
  let newName = readProjectInput('editprojectInputTitle').name
  console.log(activeEditProject)
  updateProjectName(newName, activeEditProject)
}

export const editTask = (e, activeProject) => {
  createTaskInput('edit', wrapper)

  const id = e.target.id
  activeEditTask = Number(id.slice(8))
  populateTaskField(activeProject, activeEditTask)
}

export const populateTaskField = (activeProject, taskNumber) => {
  const inputName = document.getElementById('edittaskInputTitle')
  const inputDescription = document.getElementById('edittaskInputDescription')
  const inputDate = document.getElementById('edittaskInputDate')
  const inputPrio = document.getElementById('switchedittaskInput')

  inputName.value = allProjects[activeProject].taskList[taskNumber].name
  inputDescription.value =
    allProjects[activeProject].taskList[taskNumber].description
  inputDate.value = allProjects[activeProject].taskList[taskNumber].dueDate
  let priority = allProjects[activeProject].taskList[taskNumber].priority

  if (priority === 'low') {
    inputPrio.childNodes[0].checked = true
  } else if (priority === 'normal') {
    inputPrio.childNodes[2].checked = true
  } else {
    inputPrio.childNodes[4].checked = true
  }
}

export const changeTask = (e, activeProject) => {
  const newName = readTaskInput('edit').name
  const newDescription = readTaskInput('edit').description
  const newDate = readTaskInput('edit').date
  const newPrio = readTaskInput('edit').priority

  updateTask(
    activeProject,
    activeEditTask,
    newName,
    newDescription,
    newDate,
    newPrio
  )
}
