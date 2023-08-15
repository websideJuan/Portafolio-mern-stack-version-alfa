import fetchingData from "../data/fetchingData.js";

export default async function skillController () {
    const {skillsets} = await fetchingData()
    
    const skillsetsItems = skillsets.map((skillset) => {
        
        const {skill_ID, skill_description, skill_icon, skill_icon_existing, skill_name} = skillset
        const containerSkillset = document.createElement('div')

        containerSkillset.className = 'bg-black/20 flex flex-col px-8 col-1 py-12 rounded-lg transition-transform gap-10 sm:col-2 md:min-w-fit hover:shadow-lg border-t border-blue-500'
        containerSkillset.setAttribute('data-id', skill_ID)
        
        containerSkillset.innerHTML = `
            <div class="flex flex-col items-center gap-4 text-blue-500 text-2xl">
                ${skill_icon_existing ? `<i class='${skill_icon.icon_name.concat(' ', skill_icon.icon_color)} text-4xl '></i>`: `<img class="w-10 h-10" src=${skill_icon.icon_name} alt="..."/>`}
                <h5 class="text-gradiente font-bold">${skill_name}</h5>
            </div>
            <div class="text-center">
                <p>
                    ${skill_description[0]}
                    <span>
                        ${skill_description[1]}
                    </span>
                </p>
            </div>
        `

        return containerSkillset

    })

    return skillsetsItems
}