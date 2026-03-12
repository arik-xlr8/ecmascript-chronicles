gsap.registerPlugin(ScrollTrigger);

var animationScroll = gsap.timeline({
    scrollTrigger:{
    trigger:".enterance",
    start:"10px top",
    end:"500px top",
    scrub:2,
    toggleActions:"restart none none reverse",
    }
})

var startValue = getComputedStyle(document.documentElement).getPropertyValue('--start_value');
startValue = parseInt(startValue.trim());
var start = startValue + "px 500px";
var animationSubtitles = gsap.timeline({
    scrollTrigger:{
        trigger:".first_chapter",
        start: start,
        end:"+=4520% top",
        scrub:true,
        toggleActions:"restart none none reverse",
    }
})

var animationFirstChapter = gsap.timeline({
    scrollTrigger: {
        trigger: ".first_chapter",
        start: "0px top",
        end: "+=4520% top",
        scrub: 1,
        pin: true,
        toggleActions: "restart none none none"
    }
});




 animationScroll.to("#scroll_dot",{y:160,transformOrigin:"center center",scale:0,ease:"power1.in"},"entry_label")
 .to("#shine",{x:300,y:700},"entry_label")

 