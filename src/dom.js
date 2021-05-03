export const createTaskInput = (id, location) => {
  const inputDiv = document.createElement('div')
  inputDiv.id = `${id}taskInput`
  inputDiv.className = `${id}taskinputPopup`

  const heading = document.createElement('h2')
  heading.innerText = 'Please enter new task details below'

  const inputTitle = document.createElement('input')
  inputTitle.setAttribute('type', 'text')
  inputTitle.id = `${id}taskInputTitle`
  inputTitle.placeholder = `Enter new ${id}task name`
  inputTitle.className = `${id}taskinputPopup`

  const inputDescription = document.createElement('input')
  inputDescription.setAttribute('type', 'text')
  inputDescription.id = `${id}taskInputDescription`
  inputDescription.placeholder = `Enter new ${id}task description`
  inputDescription.className = `${id}taskinputPopup`

  const inputDate = document.createElement('input')
  inputDate.setAttribute('type', 'date')
  inputDate.id = `${id}taskInputDate`
  inputDate.placeholder = `Enter new ${id}task due Date`
  inputDate.className = `${id}taskinputPopup`

  let submitButton = document.createElement('button')
  submitButton.setAttribute('type', 'button')
  submitButton.innerText = 'Submit'
  submitButton.setAttribute('id', `${id}taskSubmitButton`)
  submitButton.className = `${id}taskinputPopup`

  let cancelButton = document.createElement('button')
  cancelButton.setAttribute('type', 'button')
  cancelButton.innerText = 'Cancel'
  cancelButton.setAttribute('id', `${id}taskCancelButton`)
  cancelButton.className = `${id}taskinputPopup`

  inputDiv.appendChild(heading)
  inputDiv.appendChild(inputTitle)
  inputDiv.appendChild(inputDescription)
  inputDiv.appendChild(inputDate)

  inputDiv.appendChild(submitButton)
  inputDiv.appendChild(cancelButton)

  location.appendChild(inputDiv)

  createPriorityToggle(`${id}taskInput`, 'normal', 'input')
}

export const createProjectInput = (name, location) => {
  const inputDiv = document.createElement('div')
  inputDiv.id = `${name}projectInput`
  inputDiv.className = `${name}projectinputPopup`

  const inputTitle = document.createElement('input')
  inputTitle.setAttribute('type', 'text')
  inputTitle.id = `${name}projectInputTitle`
  inputTitle.placeholder = `Enter new ${name}project name`
  inputTitle.className = `${name}projectinputPopup`

  let submitButton = document.createElement('button')
  submitButton.setAttribute('type', 'button')
  submitButton.innerText = 'Submit'
  submitButton.setAttribute('id', `${name}projectSubmitButton`)
  submitButton.className = `${name}projectinputPopup`

  let cancelButton = document.createElement('button')
  cancelButton.setAttribute('type', 'button')
  cancelButton.innerText = 'Cancel'
  cancelButton.setAttribute('id', `${name}projectCancelButton`)
  cancelButton.className = `${name}projectinputPopup`

  inputDiv.appendChild(inputTitle)
  inputDiv.appendChild(submitButton)
  inputDiv.appendChild(cancelButton)

  location.appendChild(inputDiv)
}

export const toggleButton = (element) => {
  const button = document.getElementById(element)
  if (button.disabled === true) {
    button.disabled = false
  } else {
    button.disabled = true
  }
}
export const toggleProjectButtons = () => {
  const deleteButton = document.getElementsByClassName('deleteProjectButton')
  const editButton = document.getElementsByClassName('editProjectButton')

  for (let i = 0; i < deleteButton.length; i++) {
    if (deleteButton[i].disabled === true && editButton[i].disabled === true) {
      deleteButton[i].disabled = false
      editButton[i].disabled = false
    } else {
      deleteButton[i].disabled = true
      editButton[i].disabled = true
    }
  }
}

const deleteSubmitButton = (selector, name, location) => {
  const submitButton = document.getElementById(selector)
  const inputDiv = document.getElementById(`${name}Input`)
  inputDiv.removeChild(submitButton)
}

const deleteCancelButton = (selector, name, location) => {
  const cancelBtn = document.getElementById(selector)
  const inputDiv = document.getElementById(`${name}Input`)
  inputDiv.removeChild(cancelBtn)
}

const deleteTaskInputField = (selector, name, location) => {
  const inputName = document.getElementById(`${name}InputTitle`)
  const inputDescription = document.getElementById(`${name}InputDescription`)
  const inputDate = document.getElementById(`${name}InputDate`)

  const inputDiv = document.getElementById(`${name}Input`)

  inputDiv.removeChild(inputName)
  inputDiv.removeChild(inputDescription)
  inputDiv.removeChild(inputDate)

  location.removeChild(inputDiv)
}

const deleteProjectInputField = (selector, name, location) => {
  const inputName = document.getElementById(`${name}InputTitle`)
  const inputDiv = document.getElementById(`${name}Input`)

  inputDiv.removeChild(inputName)
  location.removeChild(inputDiv)
}

export const deleteAllTaskFields = (name, location) => {
  deleteCancelButton(`${name}CancelButton`, name, location)
  deleteSubmitButton(`${name}SubmitButton`, name, location)
  deleteTaskInputField(`${name}Input`, name, location)
}

export const deleteAllProjectFields = (name, location) => {
  deleteCancelButton(`${name}CancelButton`, name, location)
  deleteSubmitButton(`${name}SubmitButton`, name, location)
  deleteProjectInputField(`${name}Input`, name, location)
}

export const createPriorityToggle = (name, priority, attribute) => {
  const div = document.createElement('div')
  div.className = `switch-toggle switch-3 switch-candy switch${name}`
  div.id = `switch${name}`

  const inputNormal = document.createElement('input')
  const normalLabel = document.createElement('label')
  inputNormal.name = `radioInput${name}`
  inputNormal.setAttribute('type', 'radio')

  inputNormal.id = `normal${name}`
  normalLabel.setAttribute('for', `normal${name}`)
  normalLabel.innerText = 'Normal'
  normalLabel.className = 'normal'
  normalLabel.id = attribute

  const inputLow = document.createElement('input')
  const lowLabel = document.createElement('label')
  inputLow.name = `radioInput${name}`
  inputLow.setAttribute('type', 'radio')
  inputLow.id = `low${name}`
  lowLabel.setAttribute('for', `low${name}`)
  lowLabel.innerText = 'Low'
  lowLabel.className = 'low'
  lowLabel.id = attribute

  const inputHigh = document.createElement('input')
  const highLabel = document.createElement('label')
  inputHigh.name = `radioInput${name}`
  inputHigh.setAttribute('type', 'radio')
  inputHigh.id = `high${name}`
  highLabel.setAttribute('for', `high${name}`)
  highLabel.innerText = 'High'
  highLabel.className = 'zhigh'
  highLabel.id = attribute

  if (priority === 'normal') {
    inputNormal.checked = true
  } else if (priority === 'low') {
    inputLow.checked = true
  } else {
    inputHigh.checked = true
  }

  div.appendChild(inputLow)
  div.appendChild(lowLabel)

  div.appendChild(inputNormal)
  div.appendChild(normalLabel)

  div.appendChild(inputHigh)
  div.appendChild(highLabel)

  const parent = document.querySelector(`#${name}`)
  parent.appendChild(div)
}

export const createProjectDiv = (name, location, className, id) => {
  const div = document.createElement('div')
  const deleteButton = document.createElement('button')
  const editButton = document.createElement('button')
  const title = document.createElement('p')

  div.className = className
  div.id = id
  title.innerText = name
  title.className = 'projectTitle'
  deleteButton.innerText = 'Delete'
  deleteButton.id = `delete${id}`
  deleteButton.className = 'deleteProjectButton'
  editButton.innerText = 'Edit'
  editButton.id = `edit${id}`
  editButton.className = 'editProjectButton'

  location.appendChild(div)
  div.appendChild(title)
  div.appendChild(deleteButton)
  div.appendChild(editButton)
}

export const createTaskDiv = (
  completed,
  name,
  description,
  dueDate,
  priority,
  id
) => {
  const div = document.createElement('div')
  const checkBox = document.createElement('input')
  const label = document.createElement('label')
  const title = document.createElement('h2')
  const descript = document.createElement('p')
  const date = document.createElement('p')
  const deleteButton = document.createElement('button')
  const editButton = document.createElement('button')

  checkBox.checked = completed
  if (checkBox.checked) {
    div.style.backgroundColor = 'rgb(175 204 181)'
  }
  checkBox.type = 'checkbox'
  checkBox.id = `${id}CheckBox`
  checkBox.className = 'checkBox'
  label.htmlFor = `${id}CheckBox`

  div.className = 'tasks'
  div.id = id
  title.innerText = name
  descript.innerText = description
  date.innerText = dueDate
  deleteButton.innerText = 'Delete'
  deleteButton.id = `delete${id}`
  deleteButton.className = 'deleteTaskButton'
  editButton.innerText = 'Edit'
  editButton.id = `edit${id}`
  editButton.className = 'editTaskButton'

  main.appendChild(div)
  div.appendChild(checkBox)
  div.appendChild(label)
  div.appendChild(title)
  div.appendChild(descript)
  div.appendChild(date)
  div.appendChild(deleteButton)
  div.appendChild(editButton)

  createPriorityToggle(id, priority)
}

export const createPromptDiv = (item) => {
  const promptDiv = document.createElement('div')
  promptDiv.id = 'deletePrompt'

  const promptTitle = document.createElement('p')
  promptTitle.id = 'titlePrompt'
  promptTitle.innerText = `Sure you want to delete this ${item}?`

  const yesButton = document.createElement('button')
  yesButton.innerText = 'Yes'
  yesButton.id = `${item}yesDelete`

  const noButton = document.createElement('button')
  noButton.innerText = 'No'
  noButton.id = 'noDelete'

  promptDiv.appendChild(promptTitle)
  promptDiv.appendChild(yesButton)
  promptDiv.appendChild(noButton)

  wrapper.appendChild(promptDiv)
}

export const deletePromptRemove = (item) => {
  const promptDiv = document.getElementById('deletePrompt')

  const promptTitle = document.getElementById('titlePrompt')
  const yesButton = document.getElementById(`${item}yesDelete`)
  const noButton = document.getElementById('noDelete')

  promptDiv.removeChild(promptTitle)
  promptDiv.removeChild(yesButton)
  promptDiv.removeChild(noButton)

  wrapper.removeChild(promptDiv)
}

export const toggleTaskColor = (taskNumber, e) => {
  const task = document.getElementById(`task${taskNumber}`)

  if (task.style.backgroundColor === '') {
    task.style.backgroundColor = 'rgb(175 204 181)'
  } else {
    task.style.backgroundColor = ''
  }
}
