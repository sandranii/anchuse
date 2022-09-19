gsap.registerPlugin(ScrollTrigger);

gsap.from(".RimgFrame",{
    scrollTrigger: {
        trigger: ".row_round",
        start: "top center",
        // toggleActions: "restart pasue resume none"
    },
    x: -400,
    rotation: -90,
    duration: 1.6,
    opacity: 0,
    ease: "back"
});
gsap.from(".Rframe",{
    scrollTrigger: {
        trigger: ".row_round",
    },
    rotation: 360,
    duration: 28,
    repeat: Infinity,
    ease: "linear"
});
gsap.from(".title_hall",{
    scrollTrigger: {
        trigger: ".row_hall",
        start: "20% center"
    },
    x: 250,
    duration: 1.5,
    opacity: 0,
    ease: "back"
});
gsap.from(".title_room",{
    scrollTrigger: {
        trigger: ".row_round",
        start: "top center"
    },
    x: 250,
    duration: 1.5,
    delay: 0.8,
    opacity: 0,
    ease: "back"
});
gsap.from(".title_bath",{
    scrollTrigger: {
        trigger: ".row_bath",
        start: "20% center"
    },
    x: 250,
    duration: 1.5,
    opacity: 0,
    ease: "back"
});
gsap.from(".text_hall p",{
    scrollTrigger: {
        trigger: ".row_hall",
        start: "20% center"
    },
    x: 250,
    stagger: 0.2,
    duration: 1.5,
    delay: 0.2,
    opacity: 0,
    ease: "back"
});
gsap.from(".text_room p",{
    scrollTrigger: {
        trigger: ".row_round",
        start: "top center"
    },
    x: 250,
    stagger: 0.2,
    duration: 1.5,
    delay: 1,
    opacity: 0,
    ease: "back"
});
gsap.from(".text_bath p",{
    scrollTrigger: {
        trigger: ".row_bath",
        start: "20% center"
    },
    x: 250,
    stagger: 0.2,
    duration: 1.5,
    delay: 0.2,
    opacity: 0,
    ease: "back"
});
