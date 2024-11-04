let main = document.querySelector('#main');
let cursor = document.querySelector('#cursor');
let image = document.querySelector('#image');


// Move according to the cursor
main.addEventListener('mousemove', (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: 'power3.out',
    })
});

// When mouse enter the image then scale up the cursor
image.addEventListener('mouseenter', () => {
    gsap.to(cursor, {
        scale: 4,
        duration: 0.5,
        ease: 'power3.out',
        innerHTML: 'view more'
    })
});

// When mouse exit the image then scale default the cursor
image.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        ease: 'power3.out',
        innerHTML: ''
    })
});