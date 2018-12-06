$('.images>img:nth-child(1)').addClass('current')
$('.images>img:nth-child(1)').siblings().addClass('enter')

let n = 1
setInterval(() => {

    $('.images>img:nth-child(' + getNum(n) + ')').removeClass('current').addClass('leave')
        .one('transitionend', function(e) {
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $('.images>img:nth-child(' + getNum(n+1) + ')').removeClass('enter').addClass('current')
    
    n += 1

}, 2000)

function getNum(num) {
    let size = $('.images').children().length
    if(num > size) {
        num = num % size
    }
    if(num == 0) {
        num = size
    }
    return num
}