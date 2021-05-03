import { allProjects, deleteTaskList, updateSortedTasks } from './logic.js'
import { renderTasks } from './render'

let toggleSwitch = true

function toggle() {
  toggleSwitch = toggleSwitch ? false : true
}

const multipier = (input) => {
  let value = 0
  if (input === true) {
    value = 1
  } else {
    value = -1
  }
  return { value }
}

const compare = (propName, toggle) => (a, b) =>
  a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1 * toggle

export const sortTaskNames = (e, activeProject) => {
  toggle()

  const results = allProjects[activeProject].taskList.sort(
    compare('name', multipier(toggleSwitch).value)
  )

  deleteTaskList(activeProject)
  updateSortedTasks(activeProject, results)
  renderTasks('.tasks', main, activeProject)
}

export const sortTaskDescription = (e, activeProject) => {
  toggle()
  console.log(multipier(toggleSwitch).value)

  const results = allProjects[activeProject].taskList.sort(
    compare('description', multipier(toggleSwitch).value)
  )

  deleteTaskList(activeProject)
  updateSortedTasks(activeProject, results)
  renderTasks('.tasks', main, activeProject)
}

export const sortTaskDates = (e, activeProject) => {
  toggle()
  console.log(multipier(toggleSwitch).value)

  const results = allProjects[activeProject].taskList.sort(
    compare('dueDate', multipier(toggleSwitch).value)
  )

  deleteTaskList(activeProject)
  updateSortedTasks(activeProject, results)
  renderTasks('.tasks', main, activeProject)
}

export const sortTaskPriorities = (e, activeProject) => {
  toggle()
  console.log(multipier(toggleSwitch).value)

  const results = allProjects[activeProject].taskList.sort(
    compare('priority', multipier(toggleSwitch).value)
  )
  console.log(results)

  deleteTaskList(activeProject)
  updateSortedTasks(activeProject, results)
  renderTasks('.tasks', main, activeProject)
}
