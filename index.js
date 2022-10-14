window.addEventListener('load', () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    canvas.style.background = 'white'

    const particlesArray = []
    let hue = 0

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const mouse = {
        x: undefined,
        y: undefined,
    }


    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX
        mouse.y = e.clientY
        for (let i = 0; i < 20; i++) {
            particlesArray.push(new Particle())
        }
    })

    class Particle {
        constructor() {
            this.x = mouse.x
            this.y = mouse.y
            // this.x = Math.random() * canvas.width
            // this.y = Math.random() * canvas.height
            this.size = Math.random() * 25 + 1
            this.speedX = Math.random() * 3 - 1.5
            this.speedY = Math.random() * 3 - 1.5
            this.color = 'hsl(' + hue + ', 100%, 50%)'
        }

        update() {
            this.x += this.speedX
            this.y += this.speedY
            if (this.size > 0.2) this.size -= 0.1
        }
        draw() {
            // ctx.lineWidth = 5
            ctx.strokeStyle = this.color
            ctx.beginPath()
            ctx.arc(this.x * 10, this.y * 10, this.size, 0, Math.PI * 2, false)
            // ctx.rect(this.x, this.y, this.size, this.size)
            ctx.stroke()
        }
    }

    const init = () => {
        for (let i = 0; i < 150; i++) {
            particlesArray.push(new Particle())
        }
    }

    init()

    const handleParticles = () => {
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update()
            particlesArray[i].draw()
            for (let j = i; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x
                const dy = particlesArray[i].y - particlesArray[j].y
                const distance = Math.sqrt(dx * dx + dy * dy)
                if (distance < 100) {
                    ctx.beginPath()
                    ctx.strokeStyle = particlesArray[i].color
                    ctx.lineWidth = .2
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
                    ctx.stroke()
                    ctx.closePath
                }
            }
            if (particlesArray[i].size <= 0.3) {
                particlesArray.splice(i, 1)
                i--
            }
        }
    }

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        // ctx.fillStyle = 'rgba(0,0,0,0.01)'
        // ctx.fillRect(0, 0, canvas.width, canvas.height)
        requestAnimationFrame(animate)
        handleParticles()
        hue += 5
    }
    animate()

})   