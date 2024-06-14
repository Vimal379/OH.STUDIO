function anime1(){
    gsap.from("#page1-content",{
        opacity:0,
        y: 150,
        stagger: 0.2,
        duration : 1
    })
    gsap.from("#page2",{
        opacity:0,
        y: 150,
        stagger: 0.2,
        duration : 1
    })   
    // gsap.from("#footer #f-h2",{
    //     y: 15,
    //     opacity:0,
    //     stagger: 0.1,
    //     duration : 1.9,
    //     scrollTrigger: {
    //         trigger : "#footer",
    //         scroller : "body",
    //         start: "top 70%",
    //         end: "top 55%",
    //         markers: true
    //     }
    // })
    gsap.from("#footer-content",{
        opacity:0,
        y: 15,
        stagger: 0.2,
        duration : 1.9,
        scrollTrigger :{
            trigger: "#footer",
            scroller : "body",
            start: "top 90%",
            end: "top 80%",
            // markers: true,
        }
    })
}

anime1();
