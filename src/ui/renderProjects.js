import projectsController from "../controller/projects.controller.js";

const listProjects = document.querySelector('#projectList')

export default async function renderProjectsUI () {
    const listItemsProject = await projectsController()

    listItemsProject.forEach(itemsProject => {
        listProjects.appendChild(itemsProject)
    });
}