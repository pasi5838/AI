
function confetti() {
    const duration = 1 * 1000;
    const end = Date.now() + duration;
    (function frame() {
        confettiEffect();
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function confettiEffect() {
    const colors = ['#ff0', '#0f0', '#0ff', '#f0f', '#f00'];
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.top = Math.random() * window.innerHeight + 'px';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.zIndex = 1000;
    confetti.style.borderRadius = '50%';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1000);
}
