gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  markers: false
});


var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets){

    crsr.style.left =dets.x+"px"
    crsr.style.top =dets.y+"px"
})

var crsr_blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){

    crsr_blur.style.left =dets.x - 110+"px"
    crsr_blur.style.top =dets.y - 110 +"px"
})

var nav_h4_all = document.querySelectorAll("#nav h4")
nav_h4_all.forEach(function(elem){

    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"


    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    
    
    })
})


gsap.to("#nav", {

    backgroundColor : "black",
    height : "95px",
    duration : 0.1,

    scrollTrigger :{
        trigger : "#nav",
        scroller : "body",
        markers : "false",
        start  : "top -5.4%",
        end : "top -4.4%",
        scrub: 2,
    }
})

gsap.to("#main",{

    backgroundColor : "black",
    scrollTrigger :{

        trigger : "#main",
        scroller : "body",
        markers:"false",
        start : "top -30%",
        end : "top -80%",
        scrub : 2
    }
})

gsap.from("#aboutus_text",{

  y:200,
  opacity: 0,
  duration: 0.1,

    scrollTrigger:{

        trigger : "#aboutus_text",
        scroller : "body",
        markers :"false",
        start: "top 98%",
        end: "top 108%",
        scrub :2,
    }
})

gsap.from("#aboutus img",{

    scale: 0,
    opacity: 0,
    duration: 0.1,
  
      scrollTrigger:{
  
          trigger : "#aboutus img",
          scroller : "body",
          markers :"false",
          start: "top 85%",
          end: "top 95%",
          scrub :2,
      }
  })

