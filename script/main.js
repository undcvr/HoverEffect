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

let syArray = ' 480designC'

sy.hover(function() {
    let indx = $(this).index()
    let i = 0
    setInterval(() => {
        if (i <= syArray.length) {
            i++
            $(sy[indx]).text(syArray[i])
            $(sy[indx - 1]).text(syArray[i])
            $(sy[indx + 1]).text(syArray[i])
        } else {
            i = syArray.length
        }
    }, 200);
})