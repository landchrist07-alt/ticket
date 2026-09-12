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

    if (!galerie) return;

    const images = galerie.querySelectorAll("img");
    const nombreImages = images.length;

    if (nombreImages === 0) return;

    imageActuelle++;

    if (imageActuelle >= nombreImages) {
        imageActuelle = 0;
    }

    afficherImage(imageActuelle);
}

// Image précédente
function imagePrecedente() {
    const galerie = galerieActive();

    if (!galerie) return;

    const images = galerie.querySelectorAll("img");
    const nombreImages = images.length;

    if (nombreImages === 0) return;

    imageActuelle--;

    if (imageActuelle < 0) {
        imageActuelle = nombreImages - 1;
    }

    afficherImage(imageActuelle);
}

// Défilement automatique
function defilerAutomatiquement() {
    imageSuivante();
}

// Boutons de navigation
if (flecheDroite) {
    flecheDroite.addEventListener("click", imageSuivante);
}

if (flecheGauche) {
    flecheGauche.addEventListener("click", imagePrecedente);
}

// Défilement automatique toutes les 4 secondes
defilementAuto = setInterval(defilerAutomatiquement, 4000);


// Boutons des catégories
const boutonsCategories = document.querySelectorAll(".categorie");
const tickets = document.querySelectorAll(".tickets-container .ticket-card");

function afficherCategorie(nomCategorie) {

    // Cacher tous les tickets horizontaux
    tickets.forEach(function(ticket) {
        ticket.style.display = "none";
    });

    // Compter les tickets de la catégorie choisie
    let compteur = 0;

    tickets.forEach(function(ticket) {

        if (
            ticket.dataset.categorie === nomCategorie &&
            compteur < 6
        ) {
            ticket.style.display = "block";
            compteur++;
        }

    });
}


// Clic sur une catégorie
boutonsCategories.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const categorie = this.textContent.trim();

        // Retirer active des autres boutons
        boutonsCategories.forEach(function(btn) {
            btn.classList.remove("active");
        });
        

        // Activer le bouton cliqué
        this.classList.add("active");

        // Afficher les 6 tickets de cette catégorie
        afficherCategorie(categorie);

    });

});


// Au démarrage : Tout afficher
afficherCategorie("Tout afficher");

// Afficher/cacher le bouton "Tout afficher"
const boutonVoirTout = document.querySelector(".bouton-tout-afficher");
const categories = document.querySelectorAll(".categorie");

function gererBoutonToutAfficher() {
    const categorieActive = document.querySelector(".categorie.active");

    if (!categorieActive || categorieActive.textContent.trim() === "Tout afficher") {
        boutonVoirTout.style.display = "none";
    } else {
        boutonVoirTout.style.display = "flex";
    }
}

categories.forEach(function(categorie) {
    categorie.addEventListener("click", function() {
        setTimeout(gererBoutonToutAfficher, 0);
    });
});

gererBoutonToutAfficher();

// Tout afficher pour chaque catégorie verticale
const boutonsToutAfficherVertical =
    document.querySelectorAll(".tout-afficher-vertical");

boutonsToutAfficherVertical.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const categorieBloc = this.closest(".categorie-bloc");
        const ticketsCategorie =
            categorieBloc.querySelectorAll(".ticket-card");

        ticketsCategorie.forEach(function(ticket) {
            ticket.style.display = "block";
        });

        this.style.display = "none";
    });

});

const lirePlusDescription = document.querySelector(".description-lire-plus");
const lireMoinsDescription = document.querySelector(".description-lire-moins");
const suiteDescription = document.querySelector(".description-suite");

if (lirePlusDescription && lireMoinsDescription && suiteDescription) {

    lirePlusDescription.addEventListener("click", function () {
        suiteDescription.style.display = "block";

        lirePlusDescription.style.display = "none";
        lireMoinsDescription.style.display = "block";
    });

    lireMoinsDescription.addEventListener("click", function () {
        suiteDescription.style.display = "none";

        lirePlusDescription.style.display = "block";
        lireMoinsDescription.style.display = "none";
    });

}

/* =========================================================
   ACCORDEON DU PIED DE PAGE MOBILE
   ========================================================= */

document.querySelectorAll(".footer-mobile-titre").forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const section = bouton.closest(".footer-mobile-section");

        section.classList.toggle("ouvert");

    });

});

/* =========================================================
   TRADUCTION DU SITE
   ========================================================= */

const traductions = {

    fr: {

        help: "AIDE",

        popularProducts: "Produits les plus populaires",

        all: "Tout afficher",
        callCredit: "Crédit d'appel",
        paymentCredit: "Crédit de paiement",
        musicCards: "Carte cadeau musique, TV & apps",
        gameCards: "Carte cadeau jeux vidéo"

    },


    en: {

        help: "HELP",

        popularProducts: "Most popular products",

        all: "Show all",
        callCredit: "Call credit",
        paymentCredit: "Payment credit",
        musicCards: "Music, TV & Apps gift cards",
        gameCards: "Video game gift cards"

    },


    de: {

        help: "HILFE",

        popularProducts: "Beliebteste Produkte",

        all: "Alle anzeigen",
        callCredit: "Anrufguthaben",
        paymentCredit: "Zahlungsguthaben",
        musicCards: "Geschenkkarten für Musik, TV & Apps",
        gameCards: "Geschenkkarten für Videospiele"

    },


    nl: {

        help: "HULP",

        popularProducts: "Populairste producten",

        all: "Alles weergeven",
        callCredit: "Beltegoed",
        paymentCredit: "Betaalkrediet",
        musicCards: "Cadeaukaarten voor muziek, tv & apps",
        gameCards: "Cadeaukaarten voor videogames"

    }

};


/* =========================================================
   MENU DES LANGUES
   ========================================================= */

const boutonLangue = document.getElementById("boutonLangue");
const menuLangues = document.getElementById("menuLangues");

const modalLangues = document.getElementById("modalLangues");
const fermerLangues = document.getElementById("fermerLangues");

const codeLangue = document.getElementById("codeLangue");

const optionsPays = document.querySelectorAll(
    ".pays-option, .pays-modal"
);

/* OUVRIR LE BON MENU */

boutonLangue.addEventListener("click", function (event) {

    event.stopPropagation();

    if (window.innerWidth <= 767) {

        /* MOBILE */
        modalLangues.classList.add("ouvert");

    } else {

        /* PC */
        menuLangues.classList.toggle("ouvert");

    }

});


/* FERMER LE MODAL MOBILE */

if (fermerLangues) {

    fermerLangues.addEventListener("click", function () {

        modalLangues.classList.remove("ouvert");

    });

}


/* =========================================================
   CHOISIR UN PAYS — PC + MOBILE
   ========================================================= */

optionsPays.forEach(function(option) {

    option.addEventListener("click", function(event) {

        event.stopPropagation();

        const langue = option.dataset.lang;
        const code = option.dataset.code;


        /* =========================
           CHANGER LE CODE FR / BE...
           ========================= */

        codeLangue.textContent = code;


        /* =========================
           CHANGER LE DRAPEAU DU BOUTON
           ========================= */

        const drapeauActuel =
            document.getElementById("drapeauActuel");

        const drapeauChoisi =
            option.querySelector(".drapeau-pays");


        if (drapeauActuel && drapeauChoisi) {

            drapeauActuel.className =
                "drapeau-fr";

            /* récupérer le type de drapeau */

            if (drapeauChoisi.classList.contains("drapeau-be")) {

                drapeauActuel.className = "drapeau-be";

            }

            else if (drapeauChoisi.classList.contains("drapeau-fr")) {

                drapeauActuel.className = "drapeau-fr";

            }

            else if (drapeauChoisi.classList.contains("drapeau-de")) {

                drapeauActuel.className = "drapeau-de";

            }

            else if (drapeauChoisi.classList.contains("drapeau-gb")) {

                drapeauActuel.className = "drapeau-gb";

            }

            else if (drapeauChoisi.classList.contains("drapeau-nl")) {

                drapeauActuel.className = "drapeau-nl";

            }


            /* conserver les 3 bandes */

            drapeauActuel.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;

        }


        /* =========================
           RETIRER L'ANCIENNE SÉLECTION
           ========================= */

        optionsPays.forEach(function(element) {

            element.classList.remove("selectionne");

        });


        /* =========================
           SÉLECTIONNER LE NOUVEAU
           ========================= */

        option.classList.add("selectionne");


        /* =========================
           FERMER LE MENU PC
           ========================= */

        if (menuLangues) {

            menuLangues.classList.remove("ouvert");

        }


        /* =========================
           FERMER LE MODAL MOBILE
           ========================= */

        if (modalLangues) {

            modalLangues.classList.remove("ouvert");

        }


        /* =========================
           LANGUE DU DOCUMENT
           ========================= */

        document.documentElement.lang = langue;


        /* =========================
           MÉMORISER
           ========================= */

        localStorage.setItem(
            "langueChoisie",
            langue
        );

        localStorage.setItem(
            "codeLangue",
            code
        );


        /* =========================
           TRADUCTION
           ========================= */

        if (typeof changerLangue === "function") {

            changerLangue(langue);

        }

    });

});




/* =========================================================
   ENVOYER LE TICKET CLIQUÉ VERS PAGE 2
   ========================================================= */

const ticketsPage2 = document.querySelectorAll(".ticket-card");ticketsPage2.forEach(function(ticket) {    const bouton = ticket.querySelector("button");
    const image = ticket.querySelector("img");
    const nom = ticket.querySelector("span");

    if (!bouton || !image || !nom) return;

    bouton.addEventListener("click", function() {

        const nomTicket = nom.textContent.trim();

        const imageTicket = image.getAttribute("src");

        const url =
            "Page 2.html" +
            "?ticket=" +
            encodeURIComponent(nomTicket) +
            "&image=" +
            encodeURIComponent(imageTicket);

        window.location.href = url;

    });

});

/* =========================================================
   OUVRIR PAGE 2 AVEC LE TICKET CLIQUÉ
   ========================================================= */

const ticketsPourPage2 =
    document.querySelectorAll(".tickets-container .ticket-card");

ticketsPourPage2.forEach(function(ticket) {

    const bouton = ticket.querySelector("button");
    const image = ticket.querySelector("img");
    const nom = ticket.querySelector("span");

    if (!bouton || !image || !nom) return;

    bouton.addEventListener("click", function() {

        const nomTicket =
            nom.textContent.trim();

        const imageTicket =
            image.getAttribute("src");

        window.location.href =
            "Page 2.html" +
            "?ticket=" +
            encodeURIComponent(nomTicket) +
            "&image=" +
            encodeURIComponent(imageTicket);

    });

});











