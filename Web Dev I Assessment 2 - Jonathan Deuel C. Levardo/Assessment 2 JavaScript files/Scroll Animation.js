const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Reveal element when in view
        } else {
            entry.target.classList.remove('show'); // Hide element in view
        }
    });
});

// Look for .hidden class
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));