import fetchingData from "../data/fetchingData.js";

export default async function skillController () {
    const skillsets = await fetchingData()
    
    const skillsetsItems = skillsets.map(skillset => {
        
        const {skill_ID, skill_description, skill_icon, skill_icon_existing, skill_name} = skillset
        const containerSkillset = document.createElement('div')

        containerSkillset.className = 'bg-black/20 flex flex-col px-8 py-5 rounded-lg transition-transform gap-4 md:min-w-fit hover:shadow-lg hover:scale-105 border-t border-blue-500'
        containerSkillset.setAttribute('data-id', skill_ID)
        
        containerSkillset.innerHTML = `
            <div class="flex flex-col items-center gap-4 text-blue-500 text-2xl">
                ${skill_icon_existing ? `<i class='${skill_icon.icon_name} ${skill_icon.icon_color}'></i>`: '<span class="hidden"></span>'}
                <h5>${skill_name}</h5>
            </div>
    
            <div class="text-center md:text-left">
                <p class="text-sm">
                    ${skill_description[0]}
                    <span class="block md:inline">
                        ${skill_description[1]}
                    </span>
                </p>
            </div>
        `

        return containerSkillset

    })

    return skillsetsItems
}


{/* <div class="bg-black/20 flex flex-col px-8 py-5 rounded-lg transition-transform gap-4 md:min-w-fit hover:shadow-lg hover:scale-105 border-t border-blue-500" data-id=${skill_ID}>
</div> */}
