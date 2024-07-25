let sections = document.querySelectorAll(".section")
let navLinks = document.querySelectorAll(".nav-item")


window.addEventListener('scroll', () => {
        let current = '';
    
        sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop 
        - section.clientHeight / 3) {
            current = section.getAttribute('id');
        }
        });
    
        navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
    });
});


