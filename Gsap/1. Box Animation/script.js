// Move the box from initial to final - 800px
gsap.to("#box1", {
    x: 800,
    duration: 2,
    delay: 1,
    // ease: "bounce" // Will bounce at the end like a ball
})

// Move the box from initial to final - 800px, scale it to 1.5, rotate it 360deg
gsap.to("#box2", {
    x: 800,
    scale: 1.5,
    duration: 3,
    delay: 1,
    rotate: 360
})

// Move the box from initial to final - 800px, scale it to 0.5, rotate it 360deg
gsap.to("#box3", {
    x: 800,
    scale: 0.5,
    duration: 3,
    delay: 1,
    rotate: 360
})

// Move the box from initial to final - 800px, scale it to 1.5, make it a circle
gsap.to("#box4", {
    x: 800,
    scale: 1.5,
    duration: 4,
    borderRadius: "50%",
    delay: 1,
})

// Move the box from initial to final - 800px, scale it to 0.5, make it a circle
gsap.to("#box5", {
    x: 800,
    scale: 0.5,
    duration: 4,
    borderRadius: "50%",
    delay: 1,
})

// Move the box from final to initial - 800px
gsap.from("#Rbox1", {
    x: 800,
    duration: 2,
    delay: 1,
    // ease: "bounce" // Will bounce at the end like a ball
})

// Move the box from final to initial - 800px, scale it from 1.5 to 1, rotate it 360deg
gsap.from("#Rbox2", {
    x: 800,
    scale: 1.5,
    duration: 3,
    delay: 1,
    rotate: 360
})

// Move the box from final to initial - 800px, scale it from 0.5 to 1, rotate it 360deg
gsap.from("#Rbox3", {
    x: 800,
    scale: 0.5,
    duration: 3,
    delay: 1,
    rotate: 360
})

// Move the box from final to initial - 800px, scale it from 1.5 to 1, make it a circle
gsap.from("#Rbox4", {
    x: 800,
    scale: 1.5,
    duration: 4,
    borderRadius: "50%",
    delay: 1,
})

// Move the box from final to initial - 800px, scale it from 0.5 to 1, make it a circle
gsap.from("#Rbox5", {
    x: 800,
    scale: 0.5,
    duration: 4,
    borderRadius: "50%",
    delay: 1,
})