import skillController from "../controller/skill.crontoller.js"

const listSkillsets = document.querySelector('#skillsets > div')

export default async function skillsetRenderUI () {
    const listItemsSkill = await skillController()
    
    listItemsSkill.forEach(itemSkill => {
        listSkillsets.appendChild(itemSkill)
    });
    
} 