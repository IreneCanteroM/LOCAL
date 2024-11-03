// menu que se encoje y redondea al hacer scroll

const menu = document.getElementById("menu");
const navbarCollapse = document.getElementById("navbarNav");

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
 
    menu.style.borderRadius = scrollY === 0 ? '0' : '900px';

    if (scrollY > 50) { 
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

navbarCollapse.addEventListener('show.bs.collapse', function () {
    menu.style.borderRadius = "30px";
});

navbarCollapse.addEventListener('hide.bs.collapse', function () {
    menu.style.borderRadius = "900px";
});

$(window).scroll(function () {
  scrollIndicator();
});

function scrollIndicator() {
  var winScroll = $(document).scrollTop();
  var height = $(document).height() - $(window).height();
  var scrolled = (winScroll / height) * 100;
  $("#bar").width(scrolled + "%");
}

function playAnimation()
{
    document.getElementById('flecha').src = "media/flecha.gif";
    document.getElementById('flecha').style.filter = 'sepia(41%) brightness(64%) hue-rotate(23deg) saturate(84%)';
}
function showStatic()
{
    document.getElementById('flecha').src = "media/flecha-estatica.jpg";
    document.getElementById('flecha').style.filter = 'none';
}

// Solo ocurre en el index.html
// tenemos que detectar en que página estamos
// SI estamos en index.html todo este bloque de código se tiene que activar
const currentFile = window.location.pathname.split("/").pop();

if (currentFile === "index.html") {
  // checkboxes
  const items = [
    { checkboxId: "calamares", imageId: "bl-1", color: "red" },
    { checkboxId: "jamon", imageId: "bl-2", color: "yellow" },
    { checkboxId: "churros", imageId: "bl-3", color: "green" },
    { checkboxId: "rastro", imageId: "bl-4", color: "blue" },
    { checkboxId: "cocido", imageId: "bl-5", color: "orange" },
    { checkboxId: "granvia", imageId: "bl-6", color: "orange" },
    { checkboxId: "tortilla", imageId: "bl-7", color: "red" },
    { checkboxId: "torres", imageId: "bl-8", color: "blue" },
    { checkboxId: "palacio", imageId: "bl-9", color: "green" },
    { checkboxId: "retiro", imageId: "bl-10", color: "yellow" },
    { checkboxId: "metro", imageId: "bl-11", color: "yellow" },
    { checkboxId: "prado", imageId: "bl-12", color: "green" },
    { checkboxId: "plaza", imageId: "bl-13", color: "orange" },
    { checkboxId: "oso", imageId: "bl-14", color: "red" },
    { checkboxId: "puerta", imageId: "bl-15", color: "blue" }
  ];
  
  function toggleColor(checkbox, image, color) {
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        image.classList.add(color);
      } else {
        image.classList.remove(color);
      }
    });
  
    image.addEventListener("click", function() {
      this.classList.toggle(color);
      this.classList.toggle("img-bl-hover");
      checkbox.checked = !checkbox.checked;
      
    });
  }
  
  items.forEach(item => {
    const checkbox = document.getElementById(item.checkboxId);
    const image = document.getElementById(item.imageId);
    toggleColor(checkbox, image, item.color);
  });

  // typed
  var typed2 = new Typed('#typed', {
    strings: ['Local Issue I', 'Madrid mola mucho'],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
    
  // slideshow
  $(document).ready(function() {
    var i = 0;
    var images = [
        "media/slide-1.jpg",
        "media/slide-2.jpg",
        "media/slide-3.jpg",
        "media/slide-4.jpg",
        "media/slide-5.jpg"
    ];
    var slideTime = 2000;

    function changePicture() {
        $("#slideshow").css("background-image", "url(" + images[i] + ")");

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout(changePicture, slideTime);
    }

    changePicture();
});

};









