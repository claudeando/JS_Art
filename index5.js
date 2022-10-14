window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = innerWidth
    canvas.height = innerHeight

    function Paricle(x, y, dx, dy, size) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.size = size

        this.draw = () => {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
            ctx.stroke()
        }

        this.update = () => {
            // if (this.x + this.size > innerWidth || this.x < innerWidth) {
            //     this.x -= this.dx
            // }
            // if (this.y + this.size > innerHeight || this.y > innerHeight) {
            //     this.y -= this.dy
            // }

            this.draw()
        }
    }

    let particleArray = []
    const init = () => {
        particleArray = []
        for (let i = 0; 0 < 100; i++) {
            x = Math.random * innerWidth
            y = Math.random * innerHeight
            dx = Math.random * 10
            dy = Math.random * 10
            size = Math.random * 10 + 5
            particleArray.push(new Paricle(x, y, dx, dy, size))
        }

        console.log(particleArray)
    }


    const animate = () => {
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < particleArray.length; i++) {
            particleArray[i].update()
        }
    }

    init()
    animate()
})