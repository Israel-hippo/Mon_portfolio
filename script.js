// ===============================
// MENU MOBILE
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    const icon = menuToggle.querySelector("i");

    // Fermer le menu
    const closeMenu = () => {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    };

    // Ouvrir le menu
    const openMenu = () => {
        navMenu.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");

        if (icon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }
    };

    // Bouton hamburger
    menuToggle.addEventListener("click", () => {

        if (navMenu.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    // Fermer le menu lorsqu'on clique sur un lien
    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            closeMenu();
        });

    });

    // Fermer le menu lorsqu'on clique en dehors
    document.addEventListener("click", event => {

        if (
            navMenu.classList.contains("active") &&
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }

    });

    // Fermer avec la touche Échap
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

    // Fermer automatiquement si on repasse en écran ordinateur
    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {
            closeMenu();
        }

    });

}