gsap.from('#box1', {
    fontSize: '0px',
    duration: 0.5
})

// Scroll Trigger - Will Pin the element until all the animation is not done
gsap.to('#box2 h1', {
    transform: 'translateX(-87%)',
    scrollTrigger: {
        trigger: '#box2',
        scroller: 'body',
        start: 'top 0%',
        end: 'top -150%',
        scrub: 2, // Move the element scroll smooth while between start and end
        pin: true // while using pin, we trigger parent element
    },
    
})

// Scroll Trigger - It'll trigger when the element is in the viewport
gsap.from('#box3 h2', {
    x: '-90%',
    rotate: '720',
    scrollTrigger: {
        trigger: '#box3 h2',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 50%',
        scrub: 2
    }
})