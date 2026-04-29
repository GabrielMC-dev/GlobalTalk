const menuh = document.getElementById("menuh")
const nav = document.getElementById("nav")
const sobrep = document.getElementById("overlay")

function menu() {
    if (nav.style.display == 'none') {
        nav.style.display = 'flex'
        overlay.style.display = 'flex'
    }
    else {
    nav.style.display = 'none'
    sobrep.style.display = 'none'
    }
}

function fechaMenu() {

    if (sobrep.style.display = 'flex') {
        nav.style.display = 'none'
        sobrep.style.display = 'none'
    }
        
}

function fechaMenu() {
    nav.style.display = 'none'
    sobrep.style.display = 'none'
}