gsap.registerPlugin(ScrollTrigger);

    gsap.from(".frame_one",{
        scrollTrigger: {
            trigger: ".frame_one",
            start: "30% center",
        },
        x: -300,
        rotation: -45,
        duration: 1.6,
        opacity: 0,
        ease: "back"
    });


    gsap.from(".text_one p",{
        scrollTrigger: {
            trigger: ".container_1",
            start: "35% center",
            // markers: true
        },
        x: 250,
        stagger: 0.2,
        duration: 1.2,
        delay: 0.2,
        opacity: 0,
        ease: "back"
    });

    gsap.from(".btnLittle_one",{
        scrollTrigger: {
            trigger: ".container_1",
            start: "36% center",
            markers: true
        },
        duration: 0.8,
        delay: 1.2,
        scale: 0,
        ease: "back"
    });