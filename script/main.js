let canva = $('.canva')
let par = $('p')

for(i = 0; i < 511; i++) {
    let createP = document.createElement('p')
    createP.innerHTML = 'C'
    canva.append(createP)
    $('p').addClass('sy')
}

let cursor = $('.cursor')

$(document).mousemove(function(e) {
    cursor.css({
        top: e.clientY + 'px',
        left: e.clientX + 'px'
    })
})

let sy = $('.sy')

let syArray = ' .1uitPGHTC'

sy.hover(function() {
    let indx = $(this).index()
    let i = 0

    function changeSys() {
        if (syArray.length > i) {
            i++
            $(sy[indx]).text(syArray[i])
            $(sy[indx - 1]).text(syArray[i])
            $(sy[indx + 1]).text(syArray[i])
        } 
        setTimeout(changeSys, 200)
    }
    changeSys();
})