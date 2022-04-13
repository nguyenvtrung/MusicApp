window.addEventListener('mousemove',e =>{
    const body = $('body')
    const animate = document.createElement('span')
    const x = e.pageX
    const y = e.pageY
    const size = (Math.random() * 34).toFixed()
    const rotate = (Math.random() * 360).toFixed()

    animate.style.position = "absolute"
    animate.style.left = x + 'px'
    animate.style.top = y + 'px'
    animate.style.width = size + 'px'
    animate.style.height = size + 'px'
    animate.style.transform = `rotate(${rotate}deg)`
    animate.setAttribute("class" , "trung-cursor")

    body.appendChild(animate)

    setTimeout(function(){
        animate.remove()
    } , 700)
})