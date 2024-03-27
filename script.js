// // eye animation on hover
// let eyesbox=document.getElementById('eyes');
// let eyes = document.querySelectorAll('.eye');
// // mousemove event to know the mouse position
// window.addEventListener('mousemove',(event)=>{

//     const {clientX,clientY}=event; // to get x and y position of mouse

//      // for eyes 
//      eyes.forEach((eye)=>{
//         let eyeRect=eye.getBoundingClientRect(); // to get height,width and position of the element

//         // center in x and y axis
//         let eyeCenterX=eyeRect.left+eyeRect.width/2;
//         let eyeCenterY=eyeRect.top+eyeRect.height/2;

//         // mouse position - eyes ceneter to get the angle
//         let deltaX=clientX-eyeCenterX;
//         let deltaY=clientY-eyeCenterY;
        
//         let radian=Math.atan2(deltaY,deltaX);
//         let angle=radian* (180/Math.PI);
//         eye.style.transform=`rotate(${angle}deg)`;
        
//     })
// })
// var tl=gsap.timeline({
//     scrollTrigger:{
//         trigger:'.landingPage',
//         start:"top top",
//         end:'bottom top',
//         pin:true,
//         markers:true,
//         scrub:2
//     },
// })
// tl.to('.hero',{
//     '--clip':'100%'
// })

///color change theme
document.querySelectorAll('.section').forEach((sec)=>{
    ScrollTrigger.create({
        trigger:sec,
        start:'top 50%',
        end:"bottom 50%",
        onEnter:function(){
            document.body.setAttribute("theme",sec.dataset.color);
        },
        onEnterBack:function(){
            document.body.setAttribute("theme",sec.dataset.color);
        }
    })
})
//about para
var para="";
document.querySelector('.paratext').textContent.split('').forEach((e)=>{
    if(e==" ")para+=`<span>&nbsp;</span>`
    para+=`<span >${e}</span>`
})
document.querySelector('.paratext').innerHTML=para;
gsap.set(".paratext span",{opacity:.1})
gsap.to(".paratext span",{
    scrollTrigger:{
        trigger:'.paratext',
        start:"top center",
        end:"bottom center",
        markers:true,
        scrub:2
    },
    opacity:1,
    stagger:.01,
    ease:Power4
})
// slide projects
gsap.to(".slide",{
    scrollTrigger:{
        trigger:'.real',
        start:"top top",
        end:"bottom bttom",
        scrub:1
    },
    xPercent:-200,
    ease:Power4
})

//gsap cursor animation
let posX = 0,
  posY = 0;

let mouseX = 0,
  mouseY = 0;

gsap.to(".cursor", {
  duration: 0.018,
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 8;
    posY += (mouseY - posY) / 8;

    gsap.set(".cursor", {
      css: {
        left: posX - 1,
        top: posY - 2
      }
    });
  }
});

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
let cursor=document.getElementById('cursor');
let img=document.getElementById('pimg');
img.addEventListener('mousemove',()=>{
  cursor.style.height='50px';
  cursor.style.width='50px';
})
img.addEventListener('mouseleave',()=>{
  cursor.style.height='25px';
  cursor.style.width='25px';
})