const menuh = document.getElementById("menuh")
const sobrep = document.getElementById("overlay")

function menu() {

    if (nav.style.display == 'none') {
        nav.style.display = 'flex'
        overlay.style.display = 'flex'
    }
    else {
    nav.style.display = 'none'
    overlay.style.display = 'none'
    }
}

function fechaMenu() {

    if (overlay.style.display = 'flex') {
        nav.style.display = 'none'
        overlay.style.display = 'none'
    }
        
}