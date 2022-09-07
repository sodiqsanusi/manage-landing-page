const navButton = document.getElementById('mobileNavButton');
const navButtonImage = document.querySelector('#mobileNavButton img');
const mobileNavPanel = document.querySelector('.mobileNav');

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