const $ = (sel) => document.querySelector(sel);

document.addEventListener('DOMContentLoaded', () => {

  const dropdown = $('.dropdown');
  const hamburgBtn = $('.hamburg');
  const cancelBtn = $('.cancel');

  if (hamburgBtn && dropdown) {
    hamburgBtn.addEventListener('click', () => {
      dropdown.style.transform = 'translateY(0px)';
    });
  } else {
    if (!hamburgBtn) console.warn('Hamburg button (.hamburg) not found.');
    if (!dropdown) console.warn('Dropdown (.dropdown) not found.');
  }

  if (cancelBtn && dropdown) {
    cancelBtn.addEventListener('click', () => {
      dropdown.style.transform = 'translateY(-500px)';
    });
  } else {
    if (!cancelBtn) console.warn('Cancel button (.cancel) not found.');
  }

  const texts = [
    "Medical Technology Student"
  ];

  const textElement = $('.typeWriter-text');

  if (!textElement) {
    console.warn('Typewriter element (.typeWriter-text) not found.');
    return;
  }

  let speed = 100; 
  let textIndex = 0;
  let charIndex = 0;

  function typeWriter() {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      textElement.innerHTML += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(eraseText, 1000);
    }
  }

  function eraseText() {
    if (textElement.innerHTML.length > 0) {
      textElement.innerHTML = textElement.innerHTML.slice(0, -1);
      setTimeout(eraseText, 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      charIndex = 0;
      setTimeout(typeWriter, 500);
    }
  }

  typeWriter();

}); 
