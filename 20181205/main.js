
let n
initial()

setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend', (e) => { 
            makeEnter($(e.currentTarget)) 
        })
    makeCurrent(getImage(n+1))    
    n += 1
}, 2000)



function initial() {
    n = 1
    $(`.images>img:nth-child( ${n} )`).addClass('current')
    $(`.images>img:nth-child( ${n} )`).siblings().addClass('enter')
}

function makeCurrent($node) {
    $node.removeClass('enter').addClass('current')
}

function makeLeave($node) {
    return $node.removeClass('current').addClass('leave')
}

function makeEnter($node) {
    $node.removeClass('leave').addClass('enter')
}

function getImage(n) {
    return $(`.images>img:nth-child( ${getNum(n)} )`)
}

function getNum(n) {
    let size = $('.images').children().length
    if(n > size) {
        n = n % size
    }
    if(n == 0) {
        n = size
    }
    return n
}