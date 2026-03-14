gsap.registerPlugin(ScrollTrigger);


var animationFirstChapter = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-chapter",
        start: "0px top",
        end: "+=4520% center",
        scrub: 1,
        pin: true,
        toggleActions: "restart none none none"
    }
});



 animationFirstChapter.to("#rect_yellow",{opacity:0},"entry_label")
 .to("#septer",{scale:0.07, transformOrigin: "center top", x:1000, y: 2250})
 .to("#septer",{duration: 1, x: 1500, rotation: -30, transformOrigin: "center center"}, "#septer_label")
 .to("#glow",{duration: 0.5, opacity:0.5, transformOrigin: "center center", scale: 5}, "septer_label")
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

 .to("#mozilla",{opacity: 0}, "transition_two")
 .to("#ie",{opacity: 0}, "transition_two")
 .to("#lines",{y: -20}, "transition_two")
 .to("#date",{y: 100}, "transition_two")
 

 .to("#dates",{opacity: 1}, "date_roll")
 .to("#lines",{y: 0}, "date_roll")
 .to("#date",{y: 0}, "date_roll")
 .to("#dates",{opacity: 0})

 .to("#brendon",{opacity: 1})
 .to("#fast_text",{opacity: 1})
 .to("#we",{opacity: 1})
 .to("#fast",{opacity: 1})

 .to("#eye_red",{opacity: 1}, "anger")
 .to("#eye_red-2",{opacity: 1}, "anger")

 .to("#eye_glow",{opacity: 0.5}, "anger_glow")
 .to("#eye_glow-2",{opacity: 0.5}, "anger_glow")

 .to("#brendon",{opacity: 0})
 .to("#fast_text",{opacity: 0})

 .to("#anvil",{opacity: 1})
 .to("#hammer",{opacity: 1})
 .to("#mocha",{opacity: 1})

 .to("#hammer",{y:-50}, "hammer")
 .to("#hammer",{rotation: -60, transformOrigin: "center center", y:50})
 .to("#sparkles",{opacity: 1, duration: 0.1})
 .to("#sparkles",{opacity: 0, duration: 0.1})
 .to("#hammer",{y:-50, rotation: 0, transformOrigin: "center center"})

 .to("#hammer",{rotation: -60, transformOrigin: "center center", y:50})
 .to("#sparkles",{opacity: 1, duration: 0.1})
 .to("#sparkles",{opacity: 0, duration: 0.1})
 .to("#hammer",{y:-50, rotation: 0, transformOrigin: "center center"})

 .to("#hammer",{rotation: -60, transformOrigin: "center center", y:50})
 .to("#sparkles",{opacity: 1, duration: 0.1})
 .to("#sparkles",{opacity: 0, duration: 0.1})
 .to("#hammer",{y:-50, rotation: 0, transformOrigin: "center center"})

 .to("#hammer",{rotation: -60, transformOrigin: "center center", y:50})
 .to("#sparkles",{opacity: 1, duration: 0.1})
 .to("#sparkles",{opacity: 0, duration: 0.1})
 .to("#hammer",{y:-50, rotation: 0, transformOrigin: "center center"})
 

 .to("#anvil",{opacity: 0})
 .to("#hammer",{opacity: 0})

 .to("#mocha",{transformOrigin: "center center", scale: 4})
 .to("#flame",{opacity: 0}, "mocha")
 .to("#septer",{scale: 1.2, opacity:0, y: 5000, x: -180, rotation: 1}, "mocha")

 .to("#septer",{opacity: 1}, "mocha_disappear")
 .to("#mocha",{opacity: 0}, "mocha_disappear") 
 .to("#glow",{scale: 0.1}, "mocha_disappear")
 .to("#glow",{opacity: 1, scale: 10})
 
 .to("#rect_door",{opacity: 1}, "prison")
 .to("#prison",{opacity: 1}, "prison")
 .to("#glow",{opacity: 0, scale: 1}, "disappear")
 .to("#septer",{opacity: 1, scale: 0.5, y: 3500, x: 550}, "disappear")

 .to("#d1",{opacity: 0}, "disappear")
 .to("#d2",{opacity: 0}, "disappear")
 .to("#d3",{opacity: 0}, "disappear")
 .to("#d4",{opacity: 0}, "disappear")
 .to("#d5",{opacity: 0}, "disappear")
 .to("#d6",{opacity: 0}, "disappear")
 .to("#d7",{opacity: 0}, "disappear")

 .to("#js",{opacity: 1}, "disappear")
 .to("#my_hand",{x: 250}, "disappear")
 .to("#my_hand",{opacity: 1})
 .to("#rect_door",{x:-2000,duration:0.9})
  .to("#big_circle",{transformOrigin:"center center",rotate : 30,duration:1.2},"circles")
  .to("#little_circle",{transformOrigin:"center center",rotate : -35,duration:1.2},"circles")
  .to(".first_wall_part",{x:2000,duration:0.8},"walls")
  .to(".second_wall_part",{x:-2000,duration:0.8},"walls")
  
  .to("#glow",{opacity: 0.3, y: -100, x: -20, transformOrigin: "center center", rotation: 350})
  .to("#my_hand",{x:-500,y:220,transformOrigin:"center center",rotate:-5,duration:1.5}, "hand")
  .to("#glow",{ rotation: 710, duration: 1.5}, "hand")
  .to("#my_hand",{y:124,transformOrigin:"center center",rotate:0,duration:0.5},"final")
  .to("#js",{y: -224}, "final")
  .to("#glow",{y: -254, rotation: 1070, scale: 2, transformOrigin: "center center"}, "final")
  .to("#my_hand",{x:700,duration:0.6},"finall")
  .to("#js",{x: 1924}, "finall")
  .to("#glow",{x: 2925 , rotation: 1430, scale: 3, transformOrigin: "center center"}, "finall")

 .to("#prison",{opacity: 0}, "prison_disappear")
 .to("#rect_door",{opacity: 0}, "prison_disappear")

 .to("#node",{opacity: 1})
 .to("#react",{opacity: 1})
 .to("#electron",{opacity: 1})



 