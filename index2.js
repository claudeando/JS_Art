window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    // window.addEventListener('resize', () => {
    // })

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let x = 100  // let is vaiable (if you want to move the cube)
    let y = 100  // let is vaiable (if you want to move the cube)
    let size = Math.random() * 250 + 100
    let dx = Math.random() * 20
    let dy = Math.random() * 20

    let hue = 0

    const animate = () => {
        // ctx.clearRect(0, 0, canvas.width, canvas.height)
        requestAnimationFrame(animate)


        ctx.beginPath()
        ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)'
        ctx.fillRect(x, y, size, size)

        if (x + size > innerWidth || x < 0) {
            dx = -dx
        }
        if (y + size > innerHeight || y < 0) {
            dy = -dy
        }

        x += dx
        y += dy

        hue += 2

    }

    animate()

})