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
 .to("#septer",{opacity: 0}, "transition")

 .to("#ie",{opacity: 1}, "transition")
 .to("#netscape",{opacity: 1}, "transition")
 
 .to("#n_face",{opacity: 1})
 .to("#n_face",{y: 10, duration: 0.1})
 .to("#n_face",{y: 0, duration: 0.1})
 .to("#n_face",{y: 10, duration: 0.1})
 .to("#n_face",{y: 0, duration: 0.1})
 .to("#n_face",{y: 10, duration: 0.1})
 .to("#n_face",{y: 0, duration: 0.1})
 .to("#n_face",{y: 10, duration: 0.1})
 .to("#n_face",{y: 0, duration: 0.1})
 .to("#w_gun",{opacity: 1})
 .to("#w_gun",{opacity: 1, transformOrigin: "center center", rotation:-25})
 .to("#water",{opacity: 1})
 .to("#water",{opacity: 0, duration: 0.1}, "splash")
 .to("#w_gun",{opacity: 1, transformOrigin: "center center", rotation:0}, "splash")
 .to("#w_gun",{opacity: 0}, "face_transition")
 .to("#n_face",{opacity: 0})
 .to("#ie_face",{opacity: 1})
 .to("#rpg",{opacity: 1})
 .to("#rpg",{rotation: -35, transformOrigin: "center center"})
 
 .to("#rpg",{x:20}, "launch")
 .to("#rpg",{x:0}, "launch")
 .to("#rocket",{x: -600, y:-400}, "launch")

 .to("#boom",{opacity: 1}, "logo_change")
 .to("#rocket",{opacity: 0}, "logo_change")
 .to("#mozilla",{opacity: 1}, "logo_change")
 .to("#netscape",{opacity: 0}, "logo_change")

 .to("#rpg",{rotation: 20, transformOrigin: "center right", x: 250, y: 100})

 .to("#ie_face",{opacity: 0}, "no_rpg")
 .to("#rpg",{opacity: 0}, "no_rpg")

 .to("#boom",{opacity: 0})

 


 