const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');
const hide = document.querySelector('.hide');

// Show the menu and hide the hamburger icon
function showMenu() {
  navMenu.classList.add('active'); // Show the menu
  hamburger.classList.add('hidden'); // Hide the hamburger icon
  hide.classList.add('visible'); // Show the hide (cancel) icon
}

// Hide the menu and show the hamburger icon
function hideMenu() {
  navMenu.classList.remove('active'); // Hide the menu
  hamburger.classList.remove('hidden'); // Show the hamburger icon
  hide.classList.remove('visible'); // Hide the hide (cancel) icon
}

// Add event listeners
hamburger.addEventListener('click', showMenu);
hide.addEventListener('click', hideMenu);


// While scrolling it appears

const about_content= document.querySelector('.about-content');
const skillsSection = document.querySelector('.skills-content');
const detailSection = document.querySelector('.details');
const educationSection = document.querySelector('.education-content');
const educationSection1 = document.querySelectorAll('.education-content .box');
const projectSection = document.querySelector('.project-content');
const first =document.querySelector('.first')
const box =document.querySelectorAll('.project-content .box');


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // Add the 'show' class to animate
      }
    });
  },
  { threshold: 0.5 } // Trigger animation when 20% of the element is visible
);

observer.observe(skillsSection);
observer.observe(detailSection);
observer.observe(educationSection);
observer.observe(about_content);
observer.observe(first);

// YHA MULTIPLE BOXES HE ESLIYE FOREACH USE KRNA HE
box.forEach((box)=> observer.observe(box));
educationSection1.forEach((educationSection1)=> observer.observe(educationSection1));




