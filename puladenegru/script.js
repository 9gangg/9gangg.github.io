const trailContainer = document.getElementById('trail-container');
const trailLength = 20; // Number of trail elements
const trailElements = [];

// Create trail elements
for (let i = 0; i < trailLength; i++) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trailContainer.appendChild(trail);
    trailElements.push(trail);
}

let mouseX = 0;
let mouseY = 0;

// Track mouse movement
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Animate the trail
function animateTrail() {
    for (let i = trailElements.length - 1; i > 0; i--) {
        trailElements[i].style.transform = trailElements[i - 1].style.transform;
    }
    trailElements[0].style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    requestAnimationFrame(animateTrail);
}

animateTrail();
