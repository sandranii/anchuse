gsap.registerPlugin(ScrollTrigger);

    gsap.from(".frame_one",{
        scrollTrigger: {
            trigger: ".frame_one",
            start: "top 70%"
        },
        duration: 2, 
        rotationX: 60, 
        scale: 0.6,
        opacity: 0,
        x: -400,
        z: -200,
        ease: "back"
    });
    gsap.from(".frame_two",{
        scrollTrigger: {
            trigger: ".frame_two",
            start: "top 70%"
        },
        duration: 2, 
        rotationX: 60, 
        scale: 0.6,
        opacity: 0,
        x: -400,
        z: -200,
        ease: "back"
    });
    gsap.from(".text_one p",{
        scrollTrigger: {
            trigger: ".frame_one",
            start: "top 70%"
        },
        x: 150,
        stagger: 0.2,
        duration: 1,
        delay: 0.8,
        opacity: 0,
        ease: "back"
    });
    gsap.from(".text_two p",{
        scrollTrigger: {
            trigger: ".frame_two",
            start: "top 70%"
        },
        x: 150,
        stagger: 0.2,
        duration: 1,
        delay: 0.8,
        opacity: 0,
        ease: "back"
    });
    gsap.from(".circle",{
        scrollTrigger: {
            trigger: ".name",
            start: "top 70%"
        },
        y:300,
        stagger: 0.1,
        duration: 1.2,
        opacity: 0,
        ease: "power3"
    });
    gsap.from(".btnLarge",{
        scrollTrigger: {
            trigger: ".btnLarge",
            start: "top bottom"
        },
        y:100,
        stagger: 0.2,
        duration: 1,
        opacity: 0,
        ease: "back"
    });
