// Open Nav Menu

const btnNavMenu = document.getElementById('btn_navMenu')
const contentNavMenu = document.getElementById('content_navMenu')

btnNavMenu.addEventListener("click", () => {
    if(contentNavMenu.classList.contains('hidden')){
        contentNavMenu.classList.remove('hidden')
    }else{
        contentNavMenu.classList.add('hidden')
    }
})

window.addEventListener("resize",()=>{
    contentNavMenu.classList.add('hidden')
})
