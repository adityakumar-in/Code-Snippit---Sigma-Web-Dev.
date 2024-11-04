let box = document.querySelector('#box');
const finalPath = "M 50 200 Q 900 200 1600 200";
let path = "M 50 200 Q 900 200 1600 200";

let isDragging = false; // show if mouse is in click state or not
let startX, startY; // Give the position of mouse when clicked

// Trigger when mouse is pressed
// dets - tells the position of mouse positions & various other details about mouse
box.addEventListener('mousedown', (dets) => {
    isDragging = true;
    startX = dets.x;
    startY = dets.y;
});

box.addEventListener('mousemove', (dets) => {
    if (isDragging) {
        // Calculate postion (start of click + (current position - start position)) i.e., total distance from start of click
        path = `M 50 200 Q ${startX + (dets.x - startX)} ${startY + (dets.y - startY)} 1600 200`;

        gsap.to('svg path', {
            attr: {d: path}, // Change path of SVG
            duration: 0.3,
            ease: 'power3.out'
        });
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;

    // Runs when mouse is released anywhere in the DOM
    gsap.to('svg path', {
        attr: {d: finalPath},
        duration: 1.5,
        ease: 'elastic.out(1,0.2)'
    });
});