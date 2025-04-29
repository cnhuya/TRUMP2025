let sections = document.querySelectorAll('.section');
let currentSection = 0;
let isScrolling = false;

window.addEventListener('wheel', (e) => {
    if (isScrolling) return; 
    isScrolling = true;
    
    if (e.deltaY > 0) {
        if (currentSection < sections.length - 1) {
            currentSection++;
        }
    } else {
        if (currentSection > 0) {
            currentSection--;
        }
    }

    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        isScrolling = false;
    }, 100);
});
