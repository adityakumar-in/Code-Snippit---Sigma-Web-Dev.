// Timeline will arrange the animations like a train boggie and then animation will run one after anothe
const tl = gsap.timeline()
const play = document.getElementById("play")
const pause = document.getElementById("pause")
const reverse = document.getElementById("reverse")

// Move the box from initial to final - 800px
tl.to("#box1", {
    x: 800,
    duration: 2,
    // ease: "bounce" // Will bounce at the end like a ball
})

// Move the box from initial to final - 800px, scale it to 1.5, rotate it 360deg
tl.to("#box2", {
    x: 800,
    scale: 1.5,
    duration: 3,
    rotate: 360
})

// Move the box from initial to final - 800px, scale it to 0.5, rotate it 360deg
tl.to("#box3", {
    x: 800,
    scale: 0.5,
    duration: 3,
    rotate: 360
})

// Move the box from initial to final - 800px, scale it to 1.5, make it a circle
tl.to("#box4", {
    x: 800,
    scale: 1.5,
    duration: 4,
    borderRadius: "50%",
})

// Move the box from initial to final - 800px, scale it to 0.5, make it a circle
tl.to("#box5", {
    x: 800,
    scale: 0.5,
    duration: 4,
    borderRadius: "50%",
})

// Move the box from final to initial - 800px
tl.from("#Rbox1", {
    x: 800,
    duration: 2,
    // ease: "bounce" // Will bounce at the end like a ball
})

// Move the box from final to initial - 800px, scale it from 1.5 to 1, rotate it 360deg
tl.from("#Rbox2", {
    x: 800,
    scale: 1.5,
    duration: 3,
    rotate: 360
})

// Move the box from final to initial - 800px, scale it from 0.5 to 1, rotate it 360deg
tl.from("#Rbox3", {
    x: 800,
    scale: 0.5,
    duration: 3,
    rotate: 360
})

// Move the box from final to initial - 800px, scale it from 1.5 to 1, make it a circle
tl.from("#Rbox4", {
    x: 800,
    scale: 1.5,
    duration: 4,
    borderRadius: "50%",
})

// Move the box from final to initial - 800px, scale it from 0.5 to 1, make it a circle
tl.from("#Rbox5", {
    x: 800,
    scale: 0.5,
    duration: 4,
    borderRadius: "50%",
})


// Pause Timeline - byDefault
tl.pause()

// Start Timeline
play.addEventListener("click", () => {
    tl.play()
})

// Pause Timeline
pause.addEventListener("click", () => {
    tl.pause()
})

// Reverse Timeline
reverse.addEventListener("click", () => {
    tl.reverse()
})