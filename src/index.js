import './css/style.css'
import loadPage from './page-loader.js'
import { checkClickListeners, checkChangeListeners } from './listeners.js'
import { addSampleProject, loadLocalStorage } from './logic'

loadPage()
loadLocalStorage()

document.addEventListener('click', (e) => {
  checkClickListeners(e)
})

document.addEventListener('change', (e) => {
  checkChangeListeners(e)
})
