gsap.registerPlugin(ScrollTrigger);
// ========================================按摩師 1
    gsap.from(".frame_one",{
        scrollTrigger: {
            trigger: ".frame_one",
            start: "30% center"
        },
        x: -300,
        rotation: -45,
        duration: 2,
        opacity: 0,
        ease: "back"
    });
    gsap.from(".text_one p",{
        scrollTrigger: {
            trigger: ".text_one",
            start: "top center"
        },
        duration: 1,
        stagger: 0.2,
        delay: 0.2,
        x: 150,
        opacity: 0,
        ease: "back"
    });
    gsap.from(".btnLittle_one",{
        scrollTrigger: {
            trigger: ".text_one",
            start: "top center"
        },
        duration: 1,
        delay: 1.2,
        x: 100,
        opacity: 0,
        ease: "back"
    });

// ========================================按摩師 2
    gsap.from(".frame_two",{
        scrollTrigger: {
            trigger: ".frame_two",
            start: "30% center"
        },
        x: -300,
        rotation: -45,
        duration: 2,
        opacity: 0,
        ease: "back"
    });
    gsap.from(".text_two p",{
        scrollTrigger: {
            trigger: ".text_two",
            start: "top center"
        },
        duration: 1,
        stagger: 0.2,
        delay: 0.2,
        x: 150,
        opacity: 0,
        ease: "back"
    });
    gsap.from(".btnLittle_two",{
        scrollTrigger: {
            trigger: ".text_two",
            start: "top center"
        },
        duration: 1,
        delay: 1,
        x: 100,
        opacity: 0,
        ease: "back"
    });    

// ========================================按摩師 3
    gsap.from(".frame_three",{
        scrollTrigger: {
            trigger: ".frame_three",
            start: "30% center"
        },
        x: -300,
        rotation: -45,
        duration: 2,
        opacity: 0,
        ease: "back"
    });
    gsap.from(".text_three p",{
        scrollTrigger: {
            trigger: ".text_three",
            start: "top center"
        },
        duration: 1,
        stagger: 0.2,
        delay: 0.2,
        x: 150,
        opacity: 0,
        ease: "back"
    });
    gsap.from(".btnLittle_three",{
        scrollTrigger: {
            trigger: ".text_three",
            start: "top center"
        },
        duration: 1,
        delay: 1,
        x: 100,
        opacity: 0,
        ease: "back"
    });    

// ========================================按摩師 4
    gsap.from(".frame_four",{
        scrollTrigger: {
            trigger: ".frame_four",
            start: "30% center"
        },
        x: -300,
        rotation: -45,
        duration: 2,
        opacity: 0,
        ease: "back"
    });
    gsap.from(".text_four p",{
        scrollTrigger: {
            trigger: ".text_four p",
            start: "top center"
        },
        duration: 1,
        stagger: 0.2,
        delay: 0.2,
        x: 150,
        opacity: 0,
        ease: "back"
    });
    gsap.from(".btnLittle_four",{
        scrollTrigger: {
            trigger: ".text_four",
            start: "top center"
        },
        duration: 1,
        delay: 1,
        x: 100,
        opacity: 0,
        ease: "back"
    });