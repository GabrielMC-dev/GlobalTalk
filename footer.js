let links1 = document.getElementById('afoot1')
let links2 = document.getElementById('afoot2')
let links3 = document.getElementById('afoot3')

function rodapeFooter1() {

    if(links1.style.display == 'flex') {
       links1.style.display = 'none'
    }
    else {
        links1.style.display = 'flex'
    }   
}
function rodapeFooter2() {

    if(links2.style.display == 'flex') {
       links2.style.display = 'none'
    }
    else {
        links2.style.display = 'flex'
    }   
}
function rodapeFooter3() {

    if(links3.style.display == 'flex') {
       links3.style.display = 'none'
    }
    else {
        links3.style.display = 'flex'
    }   
}

function fechaFoot1() {
    afoot1.style.display = 'none'
}
function fechaFoot2() {
    afoot2.style.display = 'none'
}
function fechaFoot3() {
    afoot3.style.display = 'none'
}