const createDiv = (name, id, text) => {
  let div = document.createElement('div')
  div.id = id
  div.className = name
  div.innerText = text
  return div
}

const button = (name, id, text, location) => {
  const button = document.createElement('button')
  button.className = name
  button.id = id
  button.innerText = text
  return button
}

function mainHeader() {
  const mainHeader = createDiv('box', 'mainHeader', '')

  const finishDiv = createDiv('box', 'finish', '')
  const titleDiv = createDiv('box', 'title', '')
  const descriptionDiv = createDiv('box', 'description', '')
  const dateDiv = createDiv('box', 'date', '')
  const priorityDiv = createDiv('box', 'priority', '')

  const finish = document.createElement('p')
  const title = document.createElement('p')
  const description = document.createElement('p')
  const date = document.createElement('p')
  const priority = document.createElement('p')

  finish.innerText = ''
  title.innerText = 'Title'
  description.innerText = 'Description'
  date.innerText = 'Due Date'
  priority.innerText = 'Priority'

  finishDiv.appendChild(finish)
  titleDiv.appendChild(title)
  descriptionDiv.appendChild(description)
  dateDiv.appendChild(date)
  priorityDiv.appendChild(priority)

  mainHeader.appendChild(finishDiv)
  mainHeader.appendChild(titleDiv)
  mainHeader.appendChild(descriptionDiv)
  mainHeader.appendChild(dateDiv)
  mainHeader.appendChild(priorityDiv)
  main.appendChild(mainHeader)
}

function loadPage() {
  const content = document.getElementById('content')

  const wrapper = createDiv('wrapper', 'wrapper', '')
  const header = createDiv('box', 'header', 'TO-DOs')
  const sidebar = createDiv('box', 'sidebar', '')
  const rightBar = createDiv('box', 'rightbar', '')
  const main = createDiv('box', 'main', '')

  content.appendChild(wrapper)
  wrapper.appendChild(header)
  wrapper.appendChild(sidebar)
  wrapper.appendChild(main)
  wrapper.appendChild(rightBar)

  mainHeader()

  const projectButton = button('project', 'projectButton', 'New Project')
  sidebar.appendChild(projectButton)

  const taskButton = button('taskButton', 'taskButton', '+')
  rightBar.appendChild(taskButton)
}

export default loadPage
