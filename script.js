const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

// Set canvas fullscreen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize canvas dynamically
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Particles array
const particles = [];

// Particle class
class Particle {
    constructor(x, y, size, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.alpha = 1; // Opacity
    }

    update() {
        this.x += this.speedX * 0.5; // Reduce speed for stability
        this.y += this.speedY * 0.5;
        this.alpha -= 0.002; // Slower fade-out
        if (this.alpha < 0) this.alpha = 0;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}

// Heart shape formula
function createHeartParticles() {
    const density = 150; // Number of particles per frame
    for (let i = 0; i < density; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = Math.random() * 10 + 10; // Random radius for slight variation

        const x =
            canvas.width / 2 +
            r * 16 * Math.pow(Math.sin(angle), 3); // x-coordinate formula
        const y =
            canvas.height / 2 -
            r *
            (13 * Math.cos(angle) -
                5 * Math.cos(2 * angle) -
                2 * Math.cos(3 * angle) -
                Math.cos(4 * angle)); // y-coordinate formula

        const size = Math.random() * 2 + 1; // Particle size
        const color = `rgba(255, 0, 0, ${Math.random() * 0.5 + 0.5})`; // Bright red with transparency
        const speedX = (Math.random() - 0.5) * 1; // Slower movement
        const speedY = (Math.random() - 0.5) * 1;

        particles.push(new Particle(x, y, size, color, speedX, speedY));
    }
}

// Animation loop
function animate() {
    ctx.fillStyle = "rgba(30, 3, 34, 0.1)"; // Semi-transparent background for trailing effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
            particles.splice(index, 1); // Remove faded particles
        } else {
            particle.update();
            particle.draw();
        }
    });

    if (particles.length < 2000) {
        createHeartParticles(); // Maintain particle density
    }

    requestAnimationFrame(animate);
}

// Initialize particles and start animation
createHeartParticles();
animate();