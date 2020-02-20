const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const container = document.querySelectorAll('.container') [0];

const toggleClasses = () => {
  //Burger animation
  burger.classList.toggle('toggle');
  container.classList.toggle('no-scroll');

  //Toggle Nav
  nav.classList.toggle('nav-active');
}

  burger.addEventListener('click', () => {
    //Animate Links
    navLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
          toggleClasses ();
        }
      });
    });
  toggleClasses();
 });
}
navSlide();
