// Sélectionne les sections et les liens du menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

// Fonction pour activer dynamiquement le menu
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const sectionId = section.getAttribute("id");

            navLinks.forEach((link) => {
                link.classList.remove("active"); // Retire la classe active
                if (link.getAttribute("href").includes(sectionId)) {
                    link.classList.add("active"); // Ajoute la classe active
                }
            });
        }
    });
});

// Fonction pour afficher un message lors de l'affichage d'un projet
function voirProjet() {
    alert("Vous êtes sur le point de voir ce projet !");
}

function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
}



document.addEventListener("DOMContentLoaded", function() {
    let bars = document.querySelectorAll(".progress");

    bars.forEach(bar => {
        let width = bar.style.width;
        bar.style.width = "0";
        
        setTimeout(() => {
            bar.style.transition = "width 1.5s ease-in-out";
            bar.style.width = width;
        }, 500);
    });
});


// Gestionnaire de formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    alert("Merci pour votre message ! Je reviendrai vers vous bientôt.");
	 document.getElementById('contact-form').reset();
});

