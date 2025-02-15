const textArray = ["Programmer. ", "UX Desinger. ", "Pentester. ", "Embedded Developer. "];
const fonts = ["Xanh Mono", "Courier Prime", "Monospace"]
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; 
const outputElement = document.getElementById("typewriterHeading");

function typeWriter() {
  const currentText = textArray[currentIndex];
  
  if (isDeleting) {
    // Deleting characters
    outputElement.innerHTML = currentText.substring(0, charIndex);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % textArray.length; // Cycle through words
      outputElement.style.fontFamily = fonts[currentIndex];
    }
  } else {
    // Typing characters
    outputElement.innerHTML = currentText.substring(0, charIndex);
    charIndex++;

    if (charIndex === currentText.length) {
      // Wait a moment after typing, then start deleting
      isDeleting = true;
      setTimeout(typeWriter, 1000); // Delay before starting to delete
      return;
    }
  }

  setTimeout(typeWriter, speed); // Continue typing/deleting
}

typeWriter(); // Start the typewriter effect