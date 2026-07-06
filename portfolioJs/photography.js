
let intro_video = document.querySelector('#myIntroVideo');
let butn  = document.querySelector('#icon_button');
let abt_animat  = document.querySelector('#abt_animation');
let hading = document.querySelector('#animat_hading');
let para = document.querySelector('#animatPara');
let Hading = document.querySelector('#animatHading');
let service_animat = document.querySelector('#service_animation');
let s_images = document.querySelectorAll('.s_imge');
let s_hading = document.querySelectorAll('.service_hading');
let s_para = document.querySelectorAll('.service_para');
let nav_audio  = document.querySelectorAll('.navAudio');


butn.addEventListener('click',()=>{
    butn.style.transform = 'TranslateY(-50%) scale(0)';
    butn.style.opacity = '0';
   butn.style.pointer_events = 'none';
   intro_video.play();
   intro_video.style.opacity = '1';
})

abt_animat.addEventListener('click',()=>{
hading.classList.remove('focus-in-expand');
para.classList.remove('text-focus-in');
Hading.classList.remove('text-focus-in');

// Trigger a reflow (this line forces the browser to notice the removal)
  void hading.offsetWidth;
  void para.offsetWidth;
  void Hading.offsetWidth;

hading.classList.add('focus-in-expand');
para.classList.add('text-focus-in');
Hading.classList.add('text-focus-in');
})

service_animat.addEventListener('click', () => {
  s_hading.forEach((h3)=>{
 h3.classList.remove('focus-in-contract');   
// Trigger a reflow (this line forces the browser to notice the removal)
  void h3.offsetWidth;

h3.classList.add('focus-in-contract');

  });

   s_para.forEach((p)=>{
 p.classList.remove('text-focus-in');  
 p.style.animationDelay = '0s' ;
// Trigger a reflow (this line forces the browser to notice the removal)
  void p.offsetWidth;

p.classList.add('text-focus-in');

  });
 
    servicesActivated = true;
});

s_images.forEach((img) => {
    img.addEventListener("mouseenter", () => {
        if (servicesActivated) {
            img.classList.remove('slide-bck-center');
            // Trigger a reflow so the browser resets the animation state
            void img.offsetWidth;
            img.classList.add('slide-bck-center');
        }
    });
});




nav_audio.forEach((a) => {
  a.addEventListener("click", () => {
    // 1. Create the audio element pointing to your sound file
    let clickSound = new Audio("assets/audio/bubbleClickAudio.wav"); // Update with your actual sound path
    
    // 2. Play the sound instantly
    clickSound.play().catch((error) => {
      console.log("Audio play blocked or failed:", error);
    });
  });
  });