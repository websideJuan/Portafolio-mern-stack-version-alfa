import "./utils/observer.js"
import "./utils/toggleMenu.js"
import skillsetRenderUI from "./ui/renderSkillset.js"


async function main () {
    await skillsetRenderUI()
}


window.addEventListener('DOMContentLoaded', main())