window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    const navbar = document.getElementById('menu');
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

  