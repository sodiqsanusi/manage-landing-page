const navButton = document.getElementById('mobileNavButton');
const navButtonImage = document.querySelector('#mobileNavButton img');
const mobileNavPanel = document.querySelector('.mobileNav');
const emailForm = document.querySelector('.input-email');
const userInput = document.querySelector('.input-email input');
const errMessage = document.getElementById('err-message');

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