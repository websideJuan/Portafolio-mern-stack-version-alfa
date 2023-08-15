import fetchingData from "../data/fetchingData.js";


export default async function projectsController () {
    const {projects} = await fetchingData()

    const projectsItems = projects.map((project) => {
        const {project_ID, project_title, project_urls, project_stack, project_image} = project

        const containerProject = document.createElement('div')

        containerProject.className = 'col-span-1'
        containerProject.setAttribute('data-id', project_ID)
        
        containerProject.innerHTML = `
        <article class="rounded overflow-hidden transition-transform hover:scale-105 hover:shadow-lg relative group">
            <figure>
                <img src=${project_image} class="max-w-full h-auto" alt="Trabajo desarrolo web">
            </figure>

            <div class="absolute inset-0 bg-black-thing/90 opacity-0 transition-opacity group-hover:opacity-100 group-hover:z-50">
                <div class="grid grid-rows-4 place-items-center h-full">
                    <div class="row-span-1">
                        <h5 class="text-xs md:text-xl underline">${project_title}</h5>
                    </div>
                    <div class="row-span-2 flex items-center justify-center h-full gap-4 md:gap-10">
                        <div class="w-10 h-10 md:w-16 md:h-16 grid place-content-center rounded-full border hover:bg-black-thing/50 cursor-pointer">
                            <a href=${project_urls.project_displayed} target="blank">
                                <i class="fa-solid fa-link text-lg md:text-2xl"></i>
                            </a>
                        </div>
                        <div class="w-10 h-10 md:w-16 md:h-16 grid place-content-center rounded-full border hover:bg-black-thing/50 cursor-pointer">
                            <a href=${project_urls.project_repo} target="blank">
                                <i class="fa-brands fa-github text-lg md:text-2xl"></i>
                            </a>
                        </div>
                    </div>
                    <div class="row-span-1 text-sm md:text-base">
                        ${
                            project_stack.map((stacks) => {return `<span class="text-blue-500">${stacks}</span>`}).join(' / ')
                        }
                    </div>
                </div>
            </div>
        
      </article>
        `

        return containerProject

    })

    return projectsItems
}

// <span class="text-orange-400">HTML </span>/
// <span class="text-blue-500">CSS </span>/
// <span class="text-yellow-400"> JavaScript</span>