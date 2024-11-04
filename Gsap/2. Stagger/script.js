gsap.from('#head', {
    y: -30,
    opacity: 0,
    duration: 0.5
})
gsap.from('h3', {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5, // Stagger helps to run animation on multiple elements one after another [if they have same selector like here it's h3]
    delay: 1
})