const flecheGauche = document.querySelector(".fleche-gauche");
const flecheDroite = document.querySelector(".fleche-droite");
const indicateurs = document.querySelectorAll(".indicateur");

let imageActuelle = 0;
let defilementAuto;

// Choisir la bonne galerie selon l'écran
function galerieActive() {
    if (window.innerWidth <= 767) {
        return document.querySelector(".galerie-images.mobile");
    } else {
        return document.querySelector(".galerie-images.ordinateur");
    }
}

// Afficher une image
function afficherImage(numero) {
    const galerie = galerieActive();

    if (!galerie) return;

    const largeurImage = galerie.clientWidth;

    galerie.scrollTo({
        left: largeurImage * numero,
        behavior: "smooth"
    });

    imageActuelle = numero;

    mettreAJourIndicateur();
}

// Mettre à jour les 5 points
function mettreAJourIndicateur() {
    indicateurs.forEach((indicateur, index) => {
        indicateur.classList.toggle(
            "actif",
            index === imageActuelle
        );
    });
}

// Image suivante
function imageSuivante() {
    const galerie = galerieActive();
    const nombreImages = galerie.querySelectorAll("img").length;

    imageActuelle++;

    if (imageActuelle >= nombreImages) {
        imageActuelle = 0;
    }

    afficherImage(imageActuelle);

    // Un clic sur la flèche arrête l'auto
    arreterDefilementAuto();
}

// Image précédente
function imagePrecedente() {
    const galerie = galerieActive();
    const nombreImages = galerie.querySelectorAll("img").length;

    imageActuelle--;

    if (imageActuelle < 0) {
        imageActuelle = nombreImages - 1;
    }

    afficherImage(imageActuelle);

    // Un clic sur la flèche arrête l'auto
    arreterDefilementAuto();
}

// Défilement automatique
function defilerAutomatiquement() {
    const galerie = galerieActive();
    const nombreImages = galerie.querySelectorAll("img").length;

    imageActuelle++;

    if (imageActuelle >= nombreImages) {
        imageActuelle = 0;
    }

    afficherImage(imageActuelle);
}

// Démarrer l'auto
function demarrerDefilementAuto() {
    defilementAuto = setInterval(
        defilerAutomatiquement,
        6300
    );
}

// Arrêter l'auto
function arreterDefilementAuto() {
    clearInterval(defilementAuto);
}

// Flèches
flecheGauche.addEventListener("click", imagePrecedente);
flecheDroite.addEventListener("click", imageSuivante);


// Galerie active
const galerieMobile = document.querySelector(".galerie-images.mobile");
const galerieOrdinateur = document.querySelector(".galerie-images.ordinateur");


// Arrêter l'auto lorsque l'utilisateur intervient
galerieMobile.addEventListener("touchstart", arreterDefilementAuto);
galerieMobile.addEventListener("mousedown", arreterDefilementAuto);
galerieMobile.addEventListener("wheel", arreterDefilementAuto);

galerieOrdinateur.addEventListener("touchstart", arreterDefilementAuto);
galerieOrdinateur.addEventListener("mousedown", arreterDefilementAuto);
galerieOrdinateur.addEventListener("wheel", arreterDefilementAuto);


// Lancer le défilement automatique
demarrerDefilementAuto();