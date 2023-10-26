let circle = document.querySelector('#circle');

window.addEventListener('mousemove',function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;

    setTimeout(function(){
        circle.style.top =`${yValue}px`;
        circle.style.left =`${xValue}px`;
    },50);
});


var tl = gsap.timeline();

tl
.from('#wrapper',{
    duration:3,
    scale: .7,
    ease:'Expo.easeInOut',
    opacity:0
})
.from('#whitestrip',{
    duration: 1.7,
    width:0,
    ease:'Expo.easeInOut',
}, '-=2.5')
.from('#blackcard',{
    duration:1.5,
    x:50,
    ease:'Expo.easeInOut',
    opacity:0
}, '-=1')
.from('#lineelem',{
    duration:1.5,
    x:50,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1')

.from('#blackcard p',{
    duration:1.2,
    y:30,
    ease:'Expo.easeInOut',
    opacity:0
},'-=2')

.from('#bottomelem p',{
    duration:2,
    y:30,
    ease:'Expo.easeInOut',
    opacity:0
},'-=2')