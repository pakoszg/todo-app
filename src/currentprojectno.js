let activeProject = 0;

document.addEventListener('click', (e) => {
    if (e.target.className === 'projects') {
        const id = e.target.id;
        activeProject = Number(id.slice(7));
        console.log(`active project number: ${activeProject}`);
         console.log(typeof(activeProject));
  }
})





const currentProjectNumber = (activeProject) => {
    let projectNumber = activeProject
    return projectNumber
    console.log(`active project number function: ${projectNumber}`);
}