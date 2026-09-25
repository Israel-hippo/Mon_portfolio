// ============================================
// GAVI ISRAËL — PORTFOLIO
// JAVASCRIPT
// ============================================


// ============================================
// ANIMATION AU DÉFILEMENT
// ============================================

const elements = document.querySelectorAll(
    ".section, .skill-category, .project-card, .contact-section"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elements.forEach((element) => {

        element.classList.add("hidden");

        observer.observe(element);

    });

} else {

    elements.forEach((element) => {
        element.classList.add("show");
    });

}


// ============================================
// MENU MOBILE
// ============================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    const icon = menuToggle.querySelector("i");


    // ----------------------------------------
    // FERMER LE MENU
    // ----------------------------------------

    const closeMenu = () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        if (icon) {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    };


    // ----------------------------------------
    // OUVRIR LE MENU
    // ----------------------------------------

    const openMenu = () => {

        navMenu.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        if (icon) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        }

    };


    // ----------------------------------------
    // BOUTON HAMBURGER
    // ----------------------------------------

    menuToggle.addEventListener("click", (event) => {

        event.stopPropagation();

        if (navMenu.classList.contains("active")) {

            closeMenu();

        } else {

            openMenu();

        }

    });


    // ----------------------------------------
    // LIENS DU MENU
    // ----------------------------------------

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });


    // ----------------------------------------
    // CLIQUER EN DEHORS DU MENU
    // ----------------------------------------

    document.addEventListener("click", (event) => {

        if (
            navMenu.classList.contains("active") &&
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            closeMenu();

        }

    });


    // ----------------------------------------
    // TOUCHE ÉCHAP
    // ----------------------------------------

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    });


    // ----------------------------------------
    // REDIMENSIONNEMENT
    // ----------------------------------------

    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {

            closeMenu();

        }

    });

}