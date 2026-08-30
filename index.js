const toggleButtonOpen = document.querySelector('.toggle-button-open')
const sidebar = document.querySelector('.sidebar')
const toggleButtonClose = document.querySelector('.toggle-button-close')

toggleButtonOpen.addEventListener('click',()=>{
    sidebar.classList.add("sidebar-open")
})
toggleButtonClose.addEventListener('click',()=>{
    sidebar.classList.remove("sidebar-open")
})
