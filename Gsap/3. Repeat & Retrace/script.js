// Move the box from initial to final - 800px
gsap.to("#box1", {
    x: 800,
    duration: 2,
    delay: 1,
    repeat: 1, // Repeat two times
    repeat: -1, // Repeat infinitely
    yoyo: true // Yoyo effect - it will go back to initial position
})