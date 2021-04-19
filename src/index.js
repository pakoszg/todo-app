import "./style.css";
import loadPage from "./page-loader.js";
import sampleProject, { createInput } from "./projects";

loadPage();
sampleProject();

const newProject = document.getElementById('projectBtn');
newProject.addEventListener('click', () => createInput());

