gsap.registerPlugin(ScrollTrigger);

// ===========================================掉下來滾出去
    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".frame_one",
    //         start: "center 70%",
    //         end: "center 20%",
    //     },
    // })
    // .from(".frame_one",{
    //     y:-400,
    //     duration: 1.6,
    //     opacity: 0,
    //     ease: "bounce"
    // })
    // .to(".frame_one",{
    //     x:-800,
    //     rotate: -360,
    //     duration: 3,
    //     ease: "linear"
    // });


    gsap.from(".frame_one",{
        scrollTrigger: {
            trigger: ".frame_one",
            start: "30% center",
        },
        x: -300,
        rotation: -45,
        // y: -500,
        duration: 2,
        opacity: 0,
        ease: "bounce"
    });


    gsap.from(".text_one p",{
        scrollTrigger: {
            trigger: ".container_1",
            start: "center 70%",
            end: "center 20%",
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
            start: "center 70%",
            end: "center 20%",
        },
        duration: 1,
        delay: 1,
        x:200,
        opacity: 0,
        ease: "bounce"
    });

// ========================================圖片文字做交換(雙節點)
    // gsap.fromTo(
    //     ".frame_one",
    //     {
    //       x: -375,
    //       opacity: 0
    //     },
    //     {
    //       x: 0,
    //       opacity: 1,
    //       ease: "back",
    //       duration: 2,
    //       scrollTrigger: {
    //         trigger: ".frame_one",
    //         start: "center 70%",
    //         end: "center 20%",
    //         toggleActions: "restart pasue resume none"
    //       }
    //     },
    //     0.2
    //   );
      
    //   gsap.fromTo(
    //     ".frame_one",
    //     {
    //       x: 0,
    //       opacity: 1
    //     },
    //     {
    //       x: 600,
    //     //   opacity: 0,
    //       ease: "power4",
    //       duration: 4,
    //       scrollTrigger: {
    //         trigger: ".frame_one",
    //         // start: "center -= 300px",
    //         start: "center+=300px 70%",
    //         end: "center 20%",
    //         markers: "true",
    //         toggleActions: "restart pasue resume none"
    //       }
    //     }
    //   );