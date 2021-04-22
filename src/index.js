import "./css/style.css";
import loadPage from "./page-loader.js";
import { renderProjects, renderTasks } from "./render";
import { checkListeners } from "./dom.js"
import { addSampleProject } from "./logic";


loadPage();
addSampleProject();
renderProjects('.projects', sidebar)
renderTasks('.tasks', main, 0);

document.addEventListener('click', (e) => {
  checkListeners(e)
})


