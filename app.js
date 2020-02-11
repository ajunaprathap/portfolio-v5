const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const container = document.querySelectorAll('.container') [0];

const toggleClasses = () => {
  //Burger animation
  burger.classList.toggle('toggle');
  container.classList.toggle('no-scroll');
}

  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {

      if(link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards`;
      }
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
