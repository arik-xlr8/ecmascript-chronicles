gsap.registerPlugin(ScrollTrigger);

// var animationScroll = gsap.timeline({
//     scrollTrigger:{
//     trigger:".enterance",
//     start:"10px top",
//     end:"500px top",
//     scrub:2,
//     toggleActions:"restart none none reverse",
//     }
// })

// var startValue = getComputedStyle(document.documentElement).getPropertyValue('--start_value');
// startValue = parseInt(startValue.trim());
// var start = startValue + "px 500px";
// var animationSubtitles = gsap.timeline({
//     scrollTrigger:{
//         trigger:".first_chapter",
//         start: start,
//         end:"+=4520% top",
//         scrub:true,
//         toggleActions:"restart none none reverse",
//     }
// })

var animationFirstChapter = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-chapter",
        start: "0px top",
        end: "+=4520% top",
        scrub: 1,
        pin: true,
        toggleActions: "restart none none none"
    }
});




 animationFirstChapter.to("#rect_yellow",{opacity:0},"entry_label")
 .to("#septer",{scale:0.07, transformOrigin: "center top", x:1000, y: 2250})
 .to("#septer",{duration: 1, x: 1500, rotation: -30, transformOrigin: "center center"}, "#septer_label")
 .to("#glow",{duration: 1, opacity:0.5, transformOrigin: "center center", scale: 5}, "septer_label")
 .to("#balls",{opacity:1, duration:1}, "septer_label")
 .to("#glow",{duration: 0.5, opacity:0, transformOrigin: "center center", scale: 0}, "no_glow_label")
 .to("#b17",{x:200, y: 250, duration:0.2}, "balls")
 .to("#b16",{x:250, y: 0, duration:0.2}, "balls")
 .to("#b15",{x:200, y: -250, duration:0.3}, "balls")
 .to("#b14",{x:-150, y: -250, duration:0.4}, "balls")
 .to("#b13",{x:-250, y: 0, duration:0.5}, "balls")
 .to("#b12",{x:-200, y: 250, duration:0.6}, "balls")
 .to("#b17",{x:0, y: 0, duration:0.2}, "nballs")
 .to("#b16",{x:0, y: 0, duration:0.2}, "nballs")
 .to("#b15",{x:0, y: -0, duration:0.3}, "nballs")
 .to("#b14",{x:-0, y: -0, duration:0.4}, "nballs")
 .to("#b13",{x:-0, y: 0, duration:0.5}, "nballs")
 .to("#b12",{x:-0, y: 0, duration:0.6}, "nballs")
 .to("#balls",{display: "none"}, "balls_remove")
 .to("#septer",{duration: 1, x: 1000, rotation: -10, transformOrigin: "center center"})

 


 