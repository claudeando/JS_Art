window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    // window.addEventListener('resize', () => {
    // })

    canvas.width = innerWidth
    canvas.height = innerHeight




    let mouse = {
        x: undefined,
        y: undefined
    }

    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.x
        mouse.y = e.y
        console.log('hello')
    })



    function Box(x, y, dx, dy, size) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.size = size

        this.draw = () => {
            ctx.beginPath()
            ctx.lineWidth = 5
            ctx.strokeStyle = '#980000'
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
            ctx.stroke()
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


            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.size < 40) { this.size += 20 }
            } else if (this.size > 2) {
                this.size -= 1
            }

            this.draw()
        }
    }

    let boxArray = []
    const init = () => {
        boxArray = []
        for (let i = 0; i < 500; i++) {
            x = Math.random() * innerWidth - this.size
            y = Math.random() * innerHeight - this.size
            dx = Math.random() * 0
            dy = Math.random() * 2
            size = Math.random() * 50
            boxArray.push(new Box(x, y, dx, dy, size))
        }
    }

    init()


    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        requestAnimationFrame(animate)
        for (let i = 0; i < boxArray.length; i++) {
            boxArray[i].update()
        }
    }

    animate()
})