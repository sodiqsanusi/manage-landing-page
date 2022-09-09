const navButton = document.getElementById('mobileNavButton');
const navButtonImage = document.querySelector('#mobileNavButton img');
const mobileNavPanel = document.querySelector('.mobileNav');
const emailForm = document.querySelector('.input-email');
const userInput = document.querySelector('.input-email input');
const errMessage = document.getElementById('err-message');
const testimonialBtn1 = document.getElementById('btn1');
const testimonialBtn2 = document.getElementById('btn2');
const testimonialBtn3 = document.getElementById('btn3');
const testimonialBtn4 = document.getElementById('btn4');
const cardImage = document.querySelector('.card-active img');
const cardName = document.querySelector('.card-active h3');
const cardTestimonial = document.querySelector('.card-active p');

navButton.onclick = () => {
  let source = navButtonImage.getAttribute('src')
  if(source.includes('hamburger')){
    navButtonImage.setAttribute('src', './images/icon-close.svg');
    mobileNavPanel.style.display = 'block';
    document.body.style.overflow = 'hidden';
    return
  }
  navButtonImage.setAttribute('src', './images/icon-hamburger.svg');
  mobileNavPanel.style.display = 'none';
  document.body.style.overflow = 'initial';
}

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(userInput.value)){
    userInput.classList.add('error');
    errMessage.style.display = 'block';
    return;
  }
  userInput.classList.remove('error');
  errMessage.style.display = 'none';
})

const testimonialDetails = {
  btn1: {
    img: './images/avatar-anisha.png',
    name: 'Anisha Li',
    testimonial: "“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
  },
  btn2: {
    img: './images/avatar-ali.png',
    name: 'Ali Bravo',
    testimonial: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
  },
  btn3: {
    img: './images/avatar-richard.png',
    name: 'Richard Watts',
    testimonial: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”"
  },
  btn4: {
    img: './images/avatar-shanai.png',
    name: 'Shanai Gough',
    testimonial: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
  },
}

let changeTestimonialCard = (elem) => {
  if(elem.classList.contains('btn-active')){
    return
  }
  let dunce = document.querySelector('.btn-active');
  dunce.classList.remove('btn-active');
  elem.classList.add('btn-active')
  cardImage.setAttribute('src', testimonialDetails[elem.id].img)
  cardName.textContent = testimonialDetails[elem.id].name;
  cardTestimonial.textContent = testimonialDetails[elem.id].testimonial;
}

[testimonialBtn1, testimonialBtn2, testimonialBtn3, testimonialBtn4].forEach(elem => {
  elem.onclick = () => changeTestimonialCard(elem)
});