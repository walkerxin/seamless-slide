setTimeout(function() {
    // .css() 相当于改变style属性，为什么不叫.style()
    $('.images>img:nth-child(1)').css({ transform: 'translateX(-100%)' })
        .one('transitionend', function(e) {
            $(e.currentTarget).addClass('right').css({ transform: 'translateX(0)' })
        })
    $('.images>img:nth-child(2)').css({ transform: 'translateX(-100%)' })
}, 2000)

setTimeout(function() {
    $('.images>img:nth-child(2)').css({ transform: 'translateX(-200%)' })
        .one('transitionend', function(e) {
            $(e.currentTarget).addClass('right').css({ transform: 'none' })
        })
    $('.images>img:nth-child(3)').css({ transform: 'translateX(-100%)' })
}, 4000)

setTimeout(function() {
    $('.images>img:nth-child(3)').css({ transform: 'translateX(-200%)' })
        .one('transitionend', function(e) {
            $(e.currentTarget).addClass('right').css({ transform: 'none' })
        })
    $('.images>img:nth-child(1)').css({ transform: 'translateX(-100%)', 'z-index': '1'})
    // 此处第一张到右边需加z-index，否则因为文档流最后一张浮在上面，会看到最后一张飘过
}, 6000)