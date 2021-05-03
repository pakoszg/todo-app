import {
  renderProjects,
  renderTasks,
  pushNewProject,
  pushNewTask,
  changePriority,
  deletePrompt,
} from './render'
import {
  editProjectName,
  changeProjectName,
  editTask,
  changeTask,
} from './edit'
import {
  deleteProject,
  deleteTask,
  changeTaskCompleteStatus,
  saveLocalStorage,
} from './logic'
import {
  createProjectInput,
  createTaskInput,
  toggleButton,
  toggleProjectButtons,
  toggleTaskColor,
  deleteAllProjectFields,
  deleteAllTaskFields,
  deletePromptRemove,
} from './dom'

import {
  sortTaskNames,
  sortTaskDescription,
  sortTaskDates,
  sortTaskPriorities,
} from './sort.js'

export let activeProject = 0
let activeDelete = 0

export const checkClickListeners = (e) => {
  if (e.target.id === 'projectButton') {
    createProjectInput('', sidebar)
    toggleButton('projectButton')
  }
  if (e.target.id === 'taskButton') {
    createTaskInput('', wrapper)
    toggleButton('taskButton')
  }
  if (e.target.id === 'projectSubmitButton') {
    pushNewProject('projectInputTitle')
    deleteAllProjectFields('project', sidebar)
    toggleButton('projectButton')
    renderProjects('.projects', sidebar)
  } else if (e.target.id === 'projectCancelButton') {
    toggleButton('projectButton')
    deleteAllProjectFields('project', sidebar)
  } else if (e.target.id === 'taskSubmitButton') {
    pushNewTask('taskInput', activeProject)
    toggleButton('taskButton')
    deleteAllTaskFields('task', wrapper)
    renderTasks('.tasks', main, activeProject)
  } else if (e.target.id === 'taskCancelButton') {
    toggleButton('taskButton')
    deleteAllTaskFields('task', wrapper)
  } else if (e.target.className === 'projects') {
    const id = e.target.id
    activeProject = Number(id.slice(7))
    console.log(activeProject)
    renderTasks('.tasks', main, activeProject)
  } else if (e.target.className === 'projectTitle') {
    let test = e.target.parentNode.id
    activeProject = Number(test.slice(7))
    renderTasks('.tasks', main, activeProject)
  } else if (e.target.className === 'deleteProjectButton') {
    const id = e.target.id
    activeDelete = Number(id.slice(13))
    console.log(activeDelete)
    toggleProjectButtons()

    deletePrompt('project')
  } else if (e.target.id === 'projectyesDelete') {
    deleteProject(activeDelete)
    toggleProjectButtons()
    deletePromptRemove('project')
    renderProjects('.projects', sidebar)
    renderTasks('.tasks', main, activeProject)
  } else if (e.target.id === 'noDelete') {
    deletePromptRemove('project')
    toggleProjectButtons()
  } else if (e.target.className === 'deleteTaskButton') {
    const id = e.target.id
    let taskNumber = Number(id.slice(10))
    deleteTask(activeProject, taskNumber)
    renderTasks('.tasks', main, activeProject)
  } else if (e.target.nodeName === 'LABEL' && e.target.id !== 'input') {
    changePriority(e, activeProject)
  } else if (e.target.className === 'editProjectButton') {
    editProjectName(e)
  } else if (e.target.id === 'editprojectCancelButton') {
    deleteAllProjectFields('editproject', sidebar)
  } else if (e.target.id === 'editprojectSubmitButton') {
    changeProjectName()
    deleteAllProjectFields('editproject', sidebar)
    renderProjects('.projects', sidebar)
  } else if (e.target.className === 'editTaskButton') {
    editTask(e, activeProject)
    toggleButton('taskButton')
  } else if (e.target.id === 'edittaskCancelButton') {
    deleteAllTaskFields('edittask', wrapper)
    toggleButton('taskButton')
  } else if (e.target.id === 'edittaskSubmitButton') {
    toggleButton('taskButton')
    changeTask(e, activeProject)
    deleteAllTaskFields('edittask', wrapper)
    renderTasks('.tasks', main, activeProject)
  } else if (
    e.target.innerText === 'Title' ||
    (e.target.id === 'Title' && e.target.parentNode.id === 'mainHeader')
  ) {
    sortTaskNames(e, activeProject)
  } else if (
    e.target.innerText === 'Description' ||
    (e.target.id === 'Description' && e.target.parentNode.id === 'mainHeader')
  ) {
    sortTaskDescription(e, activeProject)
  } else if (
    e.target.innerText === 'Due Date' ||
    (e.target.id === 'Due Date' && e.target.parentNode.id === 'mainHeader')
  ) {
    sortTaskDates(e, activeProject)
  } else if (
    e.target.innerText === 'Priority' ||
    (e.target.id === 'Priority' && e.target.parentNode.id === 'mainHeader')
  ) {
    sortTaskPriorities(e, activeProject)
  }
}

export const checkChangeListeners = (e) => {
  if (e.target.type == 'checkbox') {
    const id = e.target.id
    const taskNumber = id.slice(4, 5)
    toggleTaskColor(taskNumber)
    changeTaskCompleteStatus(e, taskNumber, activeProject)
    renderTasks('.tasks', main, activeProject)
  }
}
