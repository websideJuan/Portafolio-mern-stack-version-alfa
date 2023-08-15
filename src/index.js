import "./utils/observer.js"
import "./utils/toggleMenu.js"
import skillsetRenderUI from "./ui/renderSkillset.js"
import renderProjectsUI from "./ui/renderProjects.js"


async function main () {

    // skillsets secction
    await skillsetRenderUI()
    
    // project section
    await renderProjectsUI()

}


window.addEventListener('DOMContentLoaded', main())