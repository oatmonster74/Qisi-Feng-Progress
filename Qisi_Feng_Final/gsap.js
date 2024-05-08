//Landing section GSAP---------

//Grab headings to get them ready
const lpheadings=document.querySelectorAll('.lph');

//Animate Headings
lpheadings.forEach((element,index) =>{
  gsap.from(element,{
    duration: 1.8, // Animation duration
    x: -100, // Start the animation from 100 pixels to the left (off-screen)
    opacity: 0, 
    ease: 'power2.inOut',
    delay: index * 0.2 // delay to each animation
    
  });
});


//Make landing page to flow/ streatch a little bit!
//set timeline to organize anis
const tl1=gsap.timeline({ 
  repeat: -1,
  yoyo:true //repeat it so it doesn't stop!
}); 

// flow animation with diagonal effect by skew
tl1.to('.landing_page_bgimage', { 
  duration: 3, 
  scaleY: 1.05, 
  skewX: 3, 
  ease: 'power1.inOut'
 });


//Extended about page gsap---------
//Make heading to drop one by one
const letters=document.querySelectorAll('.ext_about_page_headingbox h1 span');
const tl2=gsap.timeline({paused:true});

// Add staggered animation to each letter
tl2.staggerTo(letters, 0.4, { 
  y: 0, 
  opacity: 1, 
  ease: "power2.out" 
}, 0.3);

// Play the tl2 to start the animation
tl2.play();

//Now, I want to make my letters to vanish when scroll!
const tl3=gsap.timeline({paused:true});
tl3.to(letters,{opacity:0,
   duration:0.5
  });

//Scrolling 
window.addEventListener('scroll',function(){
  const desiredpos=window.scrollY;

// Check if the scroll position is greater than a certain amt
if (desiredpos > 200) { 
   tl3.play()
}else{
    tl3.reverse()
  }
});

//Make bgimage appear from right
gsap.to('.ext_about_page_maininfobox', { 
  right: 0, 
  duration: 0.5 
});

//Scrolling Replace
window.addEventListener("wheel", function (event) {
  if (event.deltaY < 0) { // Scrolling up
      const section2 = document.querySelector('.ext_magazines_page_section2')
      gsap.to(section2, { 
        opacity: 1, 
        duration: 1 
      });
  }
});


//Resources Page
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  //R1
  gsap.to(".R1_text", {
    yPercent: 120,
    ease: "none",
    scrollTrigger: {
      trigger: ".R1",
      scrub: true
    }, 
  });
  
  gsap.to(".R1_img", {
    yPercent: 70,
    ease: "none",
    scrollTrigger: {
      trigger: ".R1",
      scrub: true
    }, 
  });

  //R2
  gsap.to(".R2_text", {
    yPercent: 120,
    ease: "none",
    scrollTrigger: {
      trigger: ".R2",
      scrub: true
    }, 
  });
  
  gsap.to(".R2_img", {
    yPercent: 70,
    ease: "none",
    scrollTrigger: {
      trigger: ".R2",
      scrub: true
    }, 
  });

  //R3
  gsap.to(".R3_text", {
    yPercent: 120,
    ease: "none",
    scrollTrigger: {
      trigger: ".R3",
      scrub: true
    }, 
  });
  
  gsap.to(".R3_img", {
    yPercent: 70,
    ease: "none",
    scrollTrigger: {
      trigger: ".R3",
      scrub: true
    }, 
  });

});


  










