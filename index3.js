window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    // window.addEventListener('resize', () => {
    // })

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight


    // let x = 100  // let is vaiable (if you want to move the cube)
    // let y = 100  // let is vaiable (if you want to move the cube)
    // let size = Math.random() * 250 + 100
    // let dx = Math.random() * 20
    // let dy = Math.random() * 20


    function Box(x, y, dx, dy, size) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.size = size

        this.draw = () => {
            ctx.beginPath()
            ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)'
            ctx.fillRect(this.x, this.y, this.size, this.size)
        }

        this.update = () => {
            if (this.x + this.size > innerWidth || this.x < 0) {
                this.dx = -this.dx
            }
            if (this.y + this.size > innerHeight || this.y < 0) {
                this.dy = -this.dy
            }

            this.x += this.dx
            this.y += this.dy

            hue += .01

            this.draw()
        }
    }



    let hue = 0

    let boxArray = []
    const init = () => {
        boxArray = []
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * window.innerWidth
            let y = Math.random() * window.innerHeight
            let dx = Math.random() * 20
            let dy = Math.random() * 20
            let size = Math.random() * 100
            boxArray.push(new Box(x, y, dx, dy, size)).update
        }
    }

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        requestAnimationFrame(animate)
        for (let i = 0; i < boxArray.length; i++) {
            boxArray[i].update()
        }
    }

    init()
    animate()

})

