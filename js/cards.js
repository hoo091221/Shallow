window.onload = function () {
    setInterval(cards(), 100);
}

function cards() {
let observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
        
    setTimeout(() => {
        if (e.isIntersecting) {
            e.target.style.transition = 'all 2s';
            e.target.style.opacity = 1;
            e.target.style.transform = 'translate(-50%, -50%)';
        } else {
            e.target.style.transition = 'all 0s';
            e.target.style.opacity = 0;
            e.target.style.transform = 'translate(-50%, -20%)';
        }
    }, 700 - (1/e.target.getBoundingClientRect().x*2) * 100000);
    })
})

let container = document.querySelectorAll('.container-1');

container.forEach((container) => {
    observer.observe(container)
})
}