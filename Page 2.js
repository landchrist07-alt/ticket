/* =========================================================
   TRADUCTIONS DU SITE
   ========================================================= */

const traductions = {

    fr: {
        help: "AIDE",
        countryRegion: "Pays/Région",
        description: "Sélectionnez la région de votre choix pour vos achats",
        search: "Rechercher",

        banner1: "Plus grande boutique en ligne de cartes de paiement",
        banner2: "Revendeur certifié",
        banner3: "Paiement sûr et sécurisé",
        banner4: "Livraison en ligne instantanée",

        countries: {
            "Belgique": "Belgique",
            "France": "France",
            "Allemagne": "Allemagne",
            "Royaume-Uni": "Royaume-Uni",
            "Pays-Bas": "Pays-Bas"
        }
    },

    en: {
        help: "HELP",
        countryRegion: "Country/Region",
        description: "Select your preferred region for your purchases",
        search: "Search",

        banner1: "Largest online payment card store",
        banner2: "Certified reseller",
        banner3: "Safe and secure payment",
        banner4: "Instant online delivery",

        countries: {
            "Belgique": "Belgium",
            "France": "France",
            "Allemagne": "Germany",
            "Royaume-Uni": "United Kingdom",
            "Pays-Bas": "Netherlands"
        }
    },

    de: {
        help: "HILFE",
        countryRegion: "Land/Region",
        description: "Wählen Sie Ihre bevorzugte Region für Ihre Einkäufe",
        search: "Suchen",

        banner1: "Größter Online-Shop für Zahlungskarten",
        banner2: "Zertifizierter Wiederverkäufer",
        banner3: "Sichere Zahlung",
        banner4: "Sofortige Online-Lieferung",

        countries: {
            "Belgique": "Belgien",
            "France": "Frankreich",
            "Allemagne": "Deutschland",
            "Royaume-Uni": "Vereinigtes Königreich",
            "Pays-Bas": "Niederlande"
        }
    },

    nl: {
        help: "HULP",
        countryRegion: "Land/Regio",
        description: "Selecteer de gewenste regio voor uw aankopen",
        search: "Zoeken",

        banner1: "Grootste online winkel voor betaalkaarten",
        banner2: "Gecertificeerde wederverkoper",
        banner3: "Veilige betaling",
        banner4: "Directe online levering",

        countries: {
            "Belgique": "België",
            "France": "Frankrijk",
            "Allemagne": "Duitsland",
            "Royaume-Uni": "Verenigd Koninkrijk",
            "Pays-Bas": "Nederland"
        }
    }
};


/* =========================================================
   MENU DES LANGUES
   ========================================================= */

const boutonLangue =
    document.getElementById("boutonLangue");

const menuLangues =
    document.getElementById("menuLangues");

const modalLangues =
    document.getElementById("modalLangues");

const fermerLangues =
    document.getElementById("fermerLangues");

const codeLangue =
    document.getElementById("codeLangue");

const optionsPays =
    document.querySelectorAll(".pays-option, .pays-modal");


/* =========================================================
   OUVRIR LE MENU DES LANGUES
   ========================================================= */

if (boutonLangue) {

    boutonLangue.addEventListener("click", function(event) {

        event.stopPropagation();

        if (window.innerWidth <= 767) {

            if (modalLangues) {
                modalLangues.classList.add("ouvert");
            }

        } else {

            if (menuLangues) {
                menuLangues.classList.toggle("ouvert");
            }

        }

    });

}


/* =========================================================
   FERMER LE MODAL MOBILE
   ========================================================= */

if (fermerLangues) {

    fermerLangues.addEventListener("click", function() {

        if (modalLangues) {
            modalLangues.classList.remove("ouvert");
        }

    });

}


/* =========================================================
   TRADUIRE TOUT LE SITE
   ========================================================= */

function changerLangue(langue) {

    const t = traductions[langue];

    if (!t) return;


    /* =====================================================
       BANNIÈRE
       ===================================================== */

    const texte1 =
        document.querySelector(".texte-1 span:last-child");

    const texte2 =
        document.querySelector(".texte-2 span:last-child");

    const texte3 =
        document.querySelector(".texte-3 span:last-child");

    const texte4 =
        document.querySelector(".texte-4 span:last-child");


    if (texte1)
        texte1.textContent = t.banner1;

    if (texte2)
        texte2.textContent = t.banner2;

    if (texte3)
        texte3.textContent = t.banner3;

    if (texte4)
        texte4.textContent = t.banner4;


    /* =====================================================
       BOUTON AIDE
       ===================================================== */

    const boutonAide =
        document.querySelector(".bouton-aide");

    if (boutonAide) {
        boutonAide.textContent = t.help;
    }


    /* =====================================================
       MODAL PAYS / RÉGION
       ===================================================== */

    const titrePays =
        document.querySelector(".modal-entete h2");

    const descriptionPays =
        document.querySelector(".description-langues");

    const recherchePays =
        document.getElementById("recherchePays");


    if (titrePays) {
        titrePays.textContent = t.countryRegion;
    }

    if (descriptionPays) {
        descriptionPays.textContent = t.description;
    }

    if (recherchePays) {
        recherchePays.placeholder = t.search;
    }


    /* =====================================================
       NOMS DES PAYS
       ===================================================== */

    document.querySelectorAll(".nom-pays").forEach(function(pays) {

        const paysOriginal =
            pays.dataset.original ||
            pays.textContent.trim();

        pays.dataset.original = paysOriginal;

        if (t.countries[paysOriginal]) {
            pays.textContent =
                t.countries[paysOriginal];
        }

    });


    /* =====================================================
       LANGUE DU DOCUMENT
       ===================================================== */

    document.documentElement.lang = langue;


    /* =====================================================
       MÉMORISER LA LANGUE
       ===================================================== */

    localStorage.setItem(
        "langueChoisie",
        langue
    );

}


/* =========================================================
   CHOISIR UN DRAPEAU
   ========================================================= */

optionsPays.forEach(function(option) {

    option.addEventListener("click", function(event) {

        event.stopPropagation();


        const langue =
            option.dataset.lang;

        const code =
            option.dataset.code;


        /* =================================================
           CHANGER FR / GB / DE / NL
           ================================================= */

        if (codeLangue) {
            codeLangue.textContent = code;
        }


        /* =================================================
           CHANGER LE DRAPEAU
           ================================================= */

        const drapeauActuel =
            document.getElementById("drapeauActuel");

        const drapeauChoisi =
            option.querySelector(".drapeau-pays");


        if (drapeauActuel && drapeauChoisi) {

            if (
                drapeauChoisi.classList.contains("drapeau-be")
            ) {
                drapeauActuel.className = "drapeau-be";
            }

            else if (
                drapeauChoisi.classList.contains("drapeau-fr")
            ) {
                drapeauActuel.className = "drapeau-fr";
            }

            else if (
                drapeauChoisi.classList.contains("drapeau-de")
            ) {
                drapeauActuel.className = "drapeau-de";
            }

            else if (
                drapeauChoisi.classList.contains("drapeau-gb")
            ) {
                drapeauActuel.className = "drapeau-gb";
            }

            else if (
                drapeauChoisi.classList.contains("drapeau-nl")
            ) {
                drapeauActuel.className = "drapeau-nl";
            }


            drapeauActuel.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;

        }


        /* =================================================
           CHANGER LA SÉLECTION
           ================================================= */

        optionsPays.forEach(function(element) {

            element.classList.remove("selectionne");

        });

        option.classList.add("selectionne");


        /* =================================================
           FERMER LE MENU PC
           ================================================= */

        if (menuLangues) {
            menuLangues.classList.remove("ouvert");
        }


        /* =================================================
           FERMER LE MODAL MOBILE
           ================================================= */

        if (modalLangues) {
            modalLangues.classList.remove("ouvert");
        }


        /* =================================================
           MÉMORISER LE CODE DU PAYS
           ================================================= */

        localStorage.setItem(
            "codeLangue",
            code
        );


        /* =================================================
           TRADUIRE IMMÉDIATEMENT LE SITE
           ================================================= */

        changerLangue(langue);

    });

});


/* =========================================================
   CHARGER LA LANGUE ENREGISTRÉE AU DÉMARRAGE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const langueEnregistree =
        localStorage.getItem("langueChoisie") || "fr";

    const codeEnregistre =
        localStorage.getItem("codeLangue") || "FR";


    if (codeLangue) {
        codeLangue.textContent =  codeEnregistre;
    }


    changerLangue(langueEnregistree);

});


/* =========================================================
   DONNÉES DES TICKETS
   ========================================================= */

const produits = {

    /* =========================================
       CRÉDIT DE PAIEMENT
       ========================================= */

    paysafecard: {
        image: "Crédit de paiement/PaysafeCard.png",
        titre: "Recharge PaysafeCard en ligne",

        prix: {
            10:  { maximum: 10 },
            25:  { maximum: 10 },
            50:  { maximum: 10 },
            100: { maximum: 5 },
            150: { maximum: 3 }
        },

        textes: [
            "Livraison en ligne instantanée",
            "Paiement sûr et sécurisé",
            "Revendeur certifié"
        ]
    },


    cashlib: {
        image: "Crédit de paiement/CASHlib.png",
        titre: "Recharge CASHlib en ligne",

        prix: {
            5:   { maximum: 10 },
            10:  { maximum: 10 },
            20:  { maximum: 10 },
            50:  { maximum: 10 },
            100: { maximum: 5 },
            150: { maximum: 3 }
        },

        textes: [
            "Livraison en ligne instantanée",
            "Paiement sûr et sécurisé",
            "Revendeur certifié"
        ]
    },


    pcs: {
        image: "Crédit de paiement/PCS.png",
        titre: "Recharge PCS en ligne",

        prix: {
            20:  { maximum: 10 },
            50:  { maximum: 4 },
            100: { maximum: 2 },
            150: { maximum: 1 }
        },

        textes: [
            "Livraison en ligne instantanée",
            "Paiement sûr et sécurisé",
            "Revendeur certifié"
        ]
    },


    transcash: {
    image: "Crédit de paiement/Transcash.png",
    titre: "Recharge Transcash en ligne",

    prix: {
        20:  { maximum: 10 },
        50:  { maximum: 9 },
        100: { maximum: 5 },
        150: { maximum: 3 }
    },

    prixVente: {
        20: "21.50",
        50: "54",
        100: "107,00",
        150: "160,00"
    },

    textes: [
        "Livraison en ligne instantanée",
        "Paiement sûr et sécurisé",
        "Revendeur certifié"
    ]
},

    neosurf: {
        image: "Crédit de paiement/Neosurf.png",
        titre: "Recharge Neosurf en ligne",

        prix: {
            5:   { maximum: 10 },
            10:  { maximum: 10 },
            15:  { maximum: 10 },
            30:  { maximum: 6 },
            50:  { maximum: 4 },
            100: { maximum: 2 }
        },

        textes: [
            "Livraison en ligne instantanée",
            "Paiement sûr et sécurisé",
            "Revendeur certifié"
        ]
    },


    "paysafecard players pass x steam": {
        image: "Crédit de paiement/PaysafeCard Players Pass x Steam.png",
        titre: "PaysafeCard Players Pass x Steam",

        prix: {
            10:  { maximum: 10 },
            20:  { maximum: 10 },
            30:  { maximum: 10 },
            50:  { maximum: 10 },
            100: { maximum: 5 },
            150: { maximum: 3 }
        },

        textes: [
            "Livraison en ligne instantanée",
            "Paiement sûr et sécurisé",
            "Revendeur certifié"
        ]
    },


    flexepin: {
        image: "Crédit de paiement/Flexepin.png",
        titre: "Recharge Flexepin en ligne",

        prix: {
            10:  { maximum: 10 },
            20:  { maximum: 10 },
            30:  { maximum: 10 },
            50:  { maximum: 10 },
            100: { maximum: 5 },
            150: { maximum: 3 }
        },

        textes: [
            "Livraison en ligne instantanée",
            "Paiement sûr et sécurisé",
            "Revendeur certifié"
        ]
    },


    "toneo first": {
        image: "Crédit de paiement/Toneo First.png",
        titre: "Recharge Toneo First en ligne",

        prix: {
            7.5:  { maximum: 10 },
            15:   { maximum: 10 },
            30:   { maximum: 10 },
            50:   { maximum: 10 },
            100:  { maximum: 5 },
            150:  { maximum: 3 }
        },

        textes: [
            "Livraison en ligne instantanée",
            "Paiement sûr et sécurisé",
            "Revendeur certifié"
        ]
    },


    aplauz: {
        image: "Crédit de paiement/Aplauz.png",
        titre: "Recharge Aplauz en ligne",

        prix: {
            10:  { maximum: 10 },
            25:  { maximum: 10 },
            50:  { maximum: 10 },
            100: { maximum: 5 }
        },

        textes: [
            "Livraison en ligne instantanée",
            "Paiement sûr et sécurisé",
            "Revendeur certifié"
        ]
    },


    bitsa: {
        image: "Crédit de paiement/Bitsa.png",
        titre: "Recharge Bitsa en ligne",

        prix: {
            15:  { maximum: 10 },
            25:  { maximum: 10 },
            50:  { maximum: 10 },
            100: { maximum: 5 }
        },

        textes: [
            "Livraison en ligne instantanée",
            "Paiement sûr et sécurisé",
            "Revendeur certifié"
        ]
    },


    mint: {
        image: "Crédit de paiement/MINT.png",
        titre: "Recharge MINT en ligne",

        prix: {
            5:   { maximum: 10 },
            10:  { maximum: 10 },
            20:  { maximum: 10 },
            50:  { maximum: 10 },
            100: { maximum: 5 },
            150: { maximum: 3 }
        },

        textes: [
            "Livraison en ligne instantanée",
            "Paiement sûr et sécurisé",
            "Revendeur certifié"
        ]
    },


    "rewarble advanced cash": {
        image: "Crédit de paiement/Rewarble Advanced Cash.png",
        titre: "Rewarble Advanced Cash",

        indisponible: true,

        message:
            "Ce produit n'est pas disponible pour le moment. Veuillez réessayer plus tard.",

        prix: {},

        textes: []
    },


    /* =========================================
       AUTRES TICKETS
       PRIX PAR DÉFAUT
       ========================================= */

    defaut: {
        prix: {
            5:   { maximum: 10 },
            10:  { maximum: 10 },
            20:  { maximum: 10 },
            50:  { maximum: 10 },
            100: { maximum: 5 },
            150: { maximum: 3 }
        },

        textes: [
            "Livraison en ligne instantanée",
            "Paiement sûr et sécurisé",
            "Revendeur certifié"
        ]
    }

};


/* =========================================================
   RÉCUPÉRER LE TICKET CLIQUÉ
   ========================================================= */

const parametres = new URLSearchParams(window.location.search);

const nomTicket = (parametres.get("ticket") || "").trim();
const imageTicket = parametres.get("image");

/* =========================================================
   PRODUIT SÉLECTIONNÉ
   ========================================================= */

const cleProduit = nomTicket.toLowerCase();

const produitSelectionne =
    produits[cleProduit] || produits.defaut;


/* =========================================================
   AFFICHER L'IMAGE DU TICKET
   ========================================================= */

const imageProduit =
    document.getElementById("imageProduit");

if (imageProduit) {

    if (produitSelectionne && produitSelectionne.image) {

        imageProduit.src =
            produitSelectionne.image;

        imageProduit.alt =
            produitSelectionne.titre || "Ticket";

    } else if (imageTicket) {

        imageProduit.src =
            decodeURIComponent(imageTicket);

        imageProduit.alt =
            nomTicket || "Ticket";
    }
}


/* =========================================================
   AFFICHER LE TITRE DU TICKET
   ========================================================= */

const titreProduit =
    document.querySelector(".commande-zone h1");

if (titreProduit) {

    titreProduit.textContent =
        produitSelectionne.titre ||
        ("Recharge " + nomTicket + " en ligne");
}




/* =========================================================
   AFFICHER LES PRIX DU TICKET
   ========================================================= */

function afficherPrix(produit) {

    const conteneur =
        document.querySelector(".montants");

    if (!conteneur || !produit || !produit.prix) return;

    conteneur.innerHTML = "";

    Object.keys(produit.prix).forEach(function(prix) {

        const bouton =
            document.createElement("button");

        bouton.className = "montant";

        bouton.dataset.prix = prix;

        bouton.textContent =
            prix + " EUR";

        conteneur.appendChild(bouton);


        bouton.addEventListener("click", function() {

            /* Retirer l'ancien prix */

            conteneur
                .querySelectorAll(".montant")
                .forEach(function(element) {

                    element.classList.remove("actif");

                });


            /* Activer le nouveau prix */

            bouton.classList.add("actif");


            /* Prix choisi */

            const prixChoisi =
                Number(bouton.dataset.prix);


            /* Prix unitaire */

            mettreAJourPrixUnitaire(
                prixChoisi
            );


            /* Prix de vente Transcash */

            if (
                nomTicket &&
                nomTicket.toLowerCase() === "transcash" &&
                produit.prixVente &&
                boutonAcheter
            ) {

                boutonAcheter.textContent =
                    "Acheter • " +
                    produit.prixVente[prixChoisi] +
                    " EUR";

            }


            /* Maximum correspondant à CE prix */

            const maximum =
                produit.prix[prixChoisi].maximum;


            /* Remettre la quantité à 1 */

            const selectQuantite =
                document.querySelector(".select-quantite");

            if (selectQuantite) {

                selectQuantite.dataset.quantite = "1";

                selectQuantite.dataset.maximum =
                    maximum;

                selectQuantite.innerHTML = `
                    <span class="libelle-quantite">Quantité</span>
                    <span class="valeur-quantite">1</span>
                    <span class="fleche-quantite">⌄</span>
                `;

            }

        });

    });


    /* Sélectionner automatiquement le premier prix */

    const premierPrix =
        conteneur.querySelector(".montant");

    if (premierPrix) {
        premierPrix.click();
    }

}


/* =========================================================
   AFFICHER LA CATÉGORIE
   ========================================================= */

function afficherCategorie(produit) {

    const categorie =
        document.getElementById("nom-categorie");

    if (!categorie || !produit) return;

    const cheminImage =
        produit.image || "";

    const partieCategorie =
        cheminImage.split("/")[0];

    if (partieCategorie) {

        categorie.textContent =
            partieCategorie;

    }

}


/* =========================================================
   RETOUR À LA PAGE PRÉCÉDENTE
   ========================================================= */

const retourCategorie =
    document.getElementById("retourCategorie");

if (retourCategorie) {

    retourCategorie.addEventListener("click", function() {

        window.history.back();

    });

}

/* =========================================================
   SÉLECTEUR DE QUANTITÉ
   ========================================================= */

const boutonQuantite =
    document.querySelector(".select-quantite");

if (boutonQuantite) {

    boutonQuantite.addEventListener("click", function() {

        const maximum =
            Number(boutonQuantite.dataset.maximum) || 1;


        /* Supprimer une ancienne liste */

        const ancienneListe =
            document.querySelector(".liste-quantites");

        if (ancienneListe) {
            ancienneListe.remove();
        }


        /* Créer la liste */

        const liste =
            document.createElement("div");

        liste.className =
            "liste-quantites";


        /* Créer les quantités */

        for (let i = 1; i <= maximum; i++) {

            const option =
                document.createElement("button");

            option.textContent = i;

            option.type = "button";

            option.addEventListener("click", function(event) {

                event.stopPropagation();

                boutonQuantite.innerHTML = `
    <span class="libelle-quantite">Quantité</span>
    <span class="valeur-quantite">${i}</span>
    <span class="fleche-quantite">⌄</span>
`;

                boutonQuantite.dataset.quantite = i;

                liste.remove();

            });

            liste.appendChild(option);

        }


        /* Afficher la liste */

        boutonQuantite.insertAdjacentElement("afterend", liste);
    });

}

/* =========================================================
   PRIX UNITAIRE
   ========================================================= */

function mettreAJourPrixUnitaire(prix) {

    const prixAffiche =
        document.querySelector(".prix-unitaire");

    if (!prixAffiche) return;

    prixAffiche.textContent =
        prix + " EUR";
}


/* =========================================================
   AFFICHER LES TEXTES DU TICKET
   ========================================================= */

function afficherTextes(produit) {

    if (!produit || !produit.textes) return;

    const textes =
        document.querySelectorAll(".texte-avantage");

    textes.forEach(function(element, index) {

        if (produit.textes[index]) {

            element.textContent =
                produit.textes[index];

        } else {

            element.style.display = "none";

        }

    });

}

/* =========================================================
   AFFICHER LE TITRE DU TICKET
   ========================================================= */

function afficherTitre(produit) {

    const titre =
        document.querySelector(".commande-zone h1");

    if (!titre || !produit) return;

    titre.textContent =
        produit.titre;
}

/* =========================================================
   BOUTON ACHETER → PAGE DE PAIEMENT
   ========================================================= */

const boutonAcheter =
    document.querySelector(".bouton-acheter");

if (boutonAcheter) {

    boutonAcheter.addEventListener("click", function () {

        const prixSelectionne =
            document.querySelector(".montant.actif");

        const quantiteSelectionnee =
            document.querySelector(".select-quantite");


        /* Prix choisi par le client */
        const prix =
            prixSelectionne
                ? Number(prixSelectionne.dataset.prix)
                : 0;


        /* Quantité choisie */
        const quantite =
            quantiteSelectionnee
                ? Number(
                    quantiteSelectionnee.dataset.quantite
                ) || 1
                : 1;


        /* Produit */
        const produit =
            nomTicket || "";


        /*
         * Prix de vente réel.
         * Pour Transcash, le prix affiché au paiement
         * est celui défini dans prixVente.
         */

        let prixVente = prix;


        if (
            produit.toLowerCase() === "transcash" &&
            produitSelectionne &&
            produitSelectionne.prixVente &&
            produitSelectionne.prixVente[prix]
        ) {

            prixVente =
                Number(
                    produitSelectionne.prixVente[prix]
                );

        }


        /*
         * Envoyer les informations vers
         * la page de paiement
         */

        const urlPaiement =
    "Paiement.html" +
    "?produit=" +
    encodeURIComponent(produit) +
    "&prix=" +
    encodeURIComponent(prix) +
    "&prixVente=" +
    encodeURIComponent(prixVente) +
    "&quantite=" +
    encodeURIComponent(quantite);

window.location.href = urlPaiement;

    });

}

/* =========================================================
   AFFICHER L'IMAGE DU TICKET
   ========================================================= */

function afficherImage(produit) {

    const image =
        document.getElementById("imageProduit");

    if (!image) return;


    /* Image provenant de l'URL */
    if (imageTicket) {

        image.src =
            decodeURIComponent(imageTicket);

        image.alt =
            nomTicket || "Ticket";

        return;
    }


    /* Image provenant des données du ticket */
    if (produit && produit.image) {

        image.src =
            produit.image;

        image.alt =
            produit.titre || "Ticket";
    }

}
const contenusTickets = {

    /* =====================================================
       CONTENU PAR DÉFAUT
       ===================================================== */

    defaut: {
        titre1: "Acheter une recharge en ligne",

        textes1: [
            "Achetez votre recharge en ligne rapidement et simplement.",
            "Choisissez le montant souhaité et la quantité.",
            "Effectuez votre paiement et recevez votre ticket en ligne."
        ],

        titre2: "Comment fonctionne cette recharge ?",

        textes2: [
            "Sélectionnez votre montant, choisissez la quantité puis finalisez votre commande."
        ],

        faqTitre: "Questions fréquemment posées",

        faq: [
            {
                question: "Comment acheter ce ticket ?",
                reponses: [
                    "Choisissez le montant souhaité, sélectionnez la quantité puis cliquez sur le bouton Acheter."
                ]
            },
            {
                question: "Comment utiliser mon ticket ?",
                reponses: [
                    "Utilisez le code reçu conformément aux conditions et instructions du service concerné."
                ]
            },
            {
                question: "Comment vérifier mon ticket ?",
                reponses: [
                    "Consultez les informations fournies avec votre ticket ou auprès du service concerné."
                ]
            }
        ]
    },


    /* =====================================================
       PAYSAFECARD
       ===================================================== */

    paysafecard: {

        titre1: "Acheter une recharge PaysafeCard en ligne – code de recharge numérique envoyé instantanément",

        textes1: [
            "Avec PaysafeCard, vous achetez facilement du crédit prépayé pour vos achats en ligne, sans utiliser de carte bancaire comme moyen de paiement.",
            "Achetez votre recharge PaysafeCard en ligne sur Recharge.fr et recevez votre code de recharge numérique immédiatement par e-mail après validation de votre paiement.",
            "PaysafeCard est une solution de paiement prépayée largement utilisée pour les achats numériques.",
            "Vous pouvez utiliser votre code PIN à 16 chiffres sur les sites partenaires compatibles.",
            "Avec un compte myPaysafecard, vous pouvez bénéficier de fonctionnalités supplémentaires.",
            "Vous pouvez également demander une PaysafeCard Mastercard, selon les conditions du service.",
            "Que vous recherchiez une PaysafeCard en ligne ou une recharge PaysafeCard rapide, vous pouvez commander votre code en quelques étapes.",
            "Effectuez votre paiement et recevez votre ticket en ligne."
        ],

        titre2: "Pourquoi acheter une recharge PaysafeCard sur Recharge.fr ?",

        textes2: [
            "Livraison instantanée de votre code de recharge PaysafeCard par e-mail",
            "Revendeur certifié & autorisé",
            "Paiement sécurisé avec PayPal, carte bancaire, Google Pay, Apple Pay, etc.",
            "Plus de 7 millions de commandes depuis 2020",
            "Un service rapide, fiable et reconnu dans la vente de produits digitaux"
        ],

        titre3: "Avantages de PaysafeCard et de la recharge PaysafeCard",

        textes3: [
            "La PaysafeCard est une solution prépayée qui permet de régler certains achats et services en ligne sur les sites qui l’acceptent.",
            "Paiements sécurisés : les paiements effectués avec PaysafeCard suivent les protocoles de sécurité du service.",
            "Large acceptation : PaysafeCard est acceptée sur de nombreux sites compatibles.",
            "Budget contrôlé : vous utilisez uniquement le montant de votre recharge PaysafeCard.",
            "Recharge simple et rapide : recevez votre ticket PaysafeCard par e-mail puis utilisez-le sur un site partenaire.",
            "Achat en ligne : commandez votre recharge PaysafeCard directement sur Recharge.fr."
        ],

        titre4: "À quoi peut servir votre recharge PaysafeCard ?",

        textes4: [
            "Les recharges PaysafeCard conviennent pour différents usages en ligne, selon les règles et conditions de chaque site partenaire.",
            "Jeux vidéo : idéal pour certains achats numériques, services compatibles ou contenus additionnels.",
            "Divertissement & services numériques : certaines plateformes acceptent PaysafeCard.",
            "Shopping en ligne : votre recharge PaysafeCard peut être utilisée sur les sites marchands partenaires.",
            "Gestion du budget : pratique pour définir un montant fixe à utiliser pour ses achats en ligne.",
            "Une recharge PaysafeCard vous permet de choisir à l’avance le montant que vous souhaitez consacrer à vos achats numériques."
        ],

        titre5: "Sécurité et prévention des fraudes",

        texte5: "Ne partagez jamais votre code de recharge PaysafeCard avec un tiers. Utilisez vos codes uniquement sur votre compte myPaysafecard ou sur les sites partenaires du service.",

        titre6: "Toutes les offres",

        textes6: [
            "Recharge PaysafeCard 10 EUR",
            "Recharge PaysafeCard 25 EUR",
            "Recharge PaysafeCard 50 EUR",
            "Recharge PaysafeCard 100 EUR",
            "Recharge PaysafeCard 150 EUR"
        ],

        faqTitre: "Questions fréquemment posées",

        faq: [
            {
                question: "Comment utiliser ma recharge PaysafeCard ?",
                reponses: [
                    "Vous pouvez utiliser votre recharge PaysafeCard en saisissant votre code PIN à 16 chiffres au moment du paiement sur un site partenaire.",
                    "Vous pouvez également l’ajouter à votre compte myPaysafecard selon les conditions du service.",
                    "Ne partagez jamais votre code à 16 chiffres."
                ]
            },

            {
                question: "Qui peut acheter une PaysafeCard ?",
                reponses: [
                    "En France, toute personne majeure de 18 ans et plus peut acheter une PaysafeCard, en ligne ou dans des points de vente partenaires."
                ]
            },

            {
                question: "Comment vérifier mon ticket ?",
                reponses: [
                    "Consultez les informations fournies avec votre ticket ou auprès du service concerné."
                ]
            },

            {
                question: "Puis-je utiliser PaysafeCard sans créer de compte ?",
                reponses: [
                    "Dans certains pays, vous pouvez utiliser un code PaysafeCard pour effectuer des paiements ponctuels sans créer de compte myPaysafecard, selon les conditions du service."
                ]
            },

            {
                question: "Où acheter PaysafeCard en ligne ?",
                reponses: [
                    "Sélectionnez votre recharge PaysafeCard, choisissez le montant et la quantité puis finalisez votre commande."
                ]
            }
        ]
    },


    /* =====================================================
       CASHLIB
       ===================================================== */

    cashlib: {

        titre1: "Acheter une recharge CASHlib en ligne",

        textes1: [
            "Achetez votre recharge CASHlib en ligne sur Recharge.fr et recevez un code à 16 chiffres immédiatement par e-mail.",
            "CASHlib est une solution de paiement prépayée utilisée pour certains services numériques.",
            "Cette recharge en ligne permet de mieux maîtriser ses dépenses tout en évitant de saisir directement ses informations bancaires."
        ],

        titre2: "Pourquoi acheter une recharge CASHlib sur Recharge.fr ?",

        textes2: [
            "Livraison instantanée de votre code par e-mail",
            "Revendeur certifié & autorisé CASHlib",
            "Paiement sécurisé avec PayPal, carte bancaire, Google Pay, etc.",
            "Plus de 7 millions de commandes depuis 2020",
            "Un service fiable, rapide et reconnu dans la vente de produits digitaux"
        ],

        titre3: "Avantages de CASHlib",

        textes3: [
            "Paiement en ligne avec un code prépayé CASHlib sur les sites partenaires.",
            "Utilisable sur certaines plateformes numériques partenaires.",
            "Les paiements sont possibles dans la limite du solde associé au code CASHlib.",
            "Votre recharge peut être payée avec les moyens de paiement disponibles au moment de l’achat."
        ],

        titre4: "À quoi peut servir votre recharge CASHlib ?",

        textes4: [
            "Une recharge CASHlib peut être utilisée pour certains services numériques acceptant CASHlib.",
            "Les modalités d’utilisation, plateformes acceptées et limites applicables sont définies par CASHlib."
        ],

        titre5: "Sécurité et prévention des fraudes",

        texte5: "Utilisez votre code CASHlib uniquement sur des sites partenaires officiels. Ne communiquez jamais votre code à un tiers.",

        titre6: "Toutes les offres",

        textes6: [
            "CASHlib 5 €",
            "CASHlib 10 €",
            "CASHlib 20 €"
        ],

        faqTitre: "Questions fréquemment posées",

        faq: [
            {
                question: "Comment vérifier mon ticket ?",
                reponses: [
                    "Sur un site partenaire, sélectionnez CASHlib comme mode de paiement puis saisissez le code reçu après votre achat."
                ]
            },

            {
                question: "Qui peut acheter une recharge CASHlib ?",
                reponses: [
                    "Toute personne majeure peut acheter CASHlib via un revendeur agréé."
                ]
            },

            {
                question: "Pourquoi utiliser CASHlib ?",
                reponses: [
                    "CASHlib permet d’effectuer certains paiements avec un code prépayé."
                ]
            },

            {
                question: "Puis-je payer sans renseigner ma carte bancaire avec CASHlib ?",
                reponses: [
                    "Oui. Les paiements effectués avec un code CASHlib ne nécessitent pas de saisir directement vos informations bancaires sur le site marchand."
                ]
            }
        ]
    },


    /* =====================================================
       PCS
       ===================================================== */

    pcs: {

        titre1: "Acheter une recharge PCS en ligne – Code de recharge numérique",

        textes1: [
            "Achetez une recharge PCS en ligne sur Recharge.fr et recevez un code de recharge numérique par e-mail après validation de votre paiement.",
            "Recharge.fr facilite l’achat PCS en ligne et la recharge de votre carte PCS.",
            "Vous pouvez choisir le montant adapté à vos besoins et obtenir votre recharge PCS rapidement."
        ],

        titre2: "Pourquoi acheter une recharge PCS sur Recharge.fr ?",

        textes2: [
            "Livraison instantanée de votre code de recharge PCS par e-mail",
            "Revendeur certifié & autorisé PCS",
            "Paiement sécurisé avec PayPal, carte bancaire, Google Pay, Apple Pay, etc.",
            "Plus de 7 millions de commandes depuis 2020",
            "Un service fiable, rapide et reconnu dans la vente de produits digitaux"
        ],

        titre3: "Avantages de la carte PCS et de la recharge PCS",

        textes3: [
            "Paiements sécurisés selon les règles applicables à la carte PCS.",
            "Large acceptation chez les commerçants compatibles Mastercard.",
            "Recharge PCS simple et rapide : recevez votre code par e-mail puis rechargez votre carte.",
            "Gestion en ligne : utilisez MyPCS ou votre espace client PCS pour gérer votre carte et consulter votre solde."
        ],

        titre4: "À quoi peut servir votre carte PCS ?",

        textes4: [
            "Une recharge PCS permet d’alimenter une carte PCS existante.",
            "Effectuer des paiements en ligne ou en magasin auprès des commerçants acceptant Mastercard.",
            "Régler certains services numériques compatibles.",
            "Gérer un budget personnel ou familial dans la limite du solde chargé.",
            "Réaliser des paiements en France ou à l’étranger selon les conditions définies par PCS."
        ],

        titre5: "Informations importantes sur les produits PCS",

        textes5: [
            "Les recharges PCS ne constituent pas un produit bancaire, un crédit ou un placement financier.",
            "Elles ne permettent pas de percevoir des intérêts ni de réaliser des investissements.",
            "Une carte PCS et un compte PCS sont nécessaires pour utiliser une recharge PCS."
        ],

        titre6: "Sécurité et prévention des fraudes avec une recharge PCS",

        textes6: [
            "Utilisez votre code de recharge PCS uniquement dans votre compte PCS, votre espace MyPCS ou l’application officielle PCS.",
            "Ne communiquez jamais votre code de recharge PCS à un tiers."
        ],

        titre7: "Toutes les offres",

        textes7: [
            "Carte PCS 20 €",
            "Carte PCS 50 €",
            "Carte PCS 100 €",
            "Carte PCS 150 €"
        ],

        faqTitre: "Questions fréquemment posées",

        faq: [
            {
                question: "Comment utiliser ma recharge PCS pour recharger ma carte ?",
                reponses: [
                    "Utilisez votre recharge PCS dans l’application MyPCS ou dans votre espace client PCS selon les conditions applicables."
                ]
            },

            {
                question: "Comment utiliser ma carte PCS Mastercard ?",
                reponses: [
                    "Votre carte PCS Mastercard peut être utilisée chez les commerçants qui acceptent Mastercard, dans la limite du solde disponible."
                ]
            },

            {
                question: "Comment consulter le solde de ma carte PCS ?",
                reponses: [
                    "Connectez-vous à votre compte PCS ou à l’application MyPCS pour consulter votre solde."
                ]
            },

            {
                question: "Puis-je utiliser ma carte PCS sans créer de compte ?",
                reponses: [
                    "Un compte PCS est nécessaire pour gérer votre carte et vos recharges."
                ]
            }
        ]
    },


    /* =====================================================
       TRANSCASH
       ===================================================== */

    transcash: {

        titre1: "Acheter une recharge Transcash en ligne",

        textes1: [
            "Achetez votre recharge Transcash en ligne sur Recharge.fr et recevez votre ticket Transcash par e-mail après confirmation de votre paiement.",
            "Une recharge Transcash permet d'ajouter du crédit à une carte Transcash conformément aux conditions du service.",
            "Choisissez le montant souhaité, finalisez votre commande puis utilisez le code reçu dans votre espace Transcash ou l’application officielle.",
            "La recharge Transcash en ligne constitue une solution rapide pour ajouter un montant déterminé à votre carte."
        ],

        titre2: "Comment fonctionne une recharge Transcash ?",

        textes2: [
            "Une recharge Transcash fonctionne comme un code prépayé destiné à alimenter une carte Transcash existante.",
            "Après votre achat, vous recevez votre ticket Transcash par e-mail.",
            "Votre carte peut ensuite être utilisée selon ses conditions et dans la limite du solde disponible."
        ],

        titre3: "Pourquoi acheter une recharge Transcash sur Recharge.fr ?",

        textes3: [
            "Avec Recharge.fr, vous pouvez acheter votre recharge Transcash en ligne et recevoir votre code sans attendre la livraison d’un produit physique."
        ],

        titre4: "Quels sont les avantages d’une recharge Transcash ?",

        textes4: [
            "Paiements sécurisés selon les règles applicables au service Transcash.",
            "Votre carte Transcash est utilisable chez les commerçants qui acceptent Mastercard, selon les conditions applicables.",
            "Rechargez uniquement le montant souhaité et suivez vos dépenses dans votre espace Transcash."
        ],

        titre5: "À quoi peut servir votre ticket Transcash ?",

        textes5: [
            "Un ticket Transcash sert à ajouter du crédit à une carte Transcash existante.",
            "Une fois votre recharge ajoutée à la carte, le solde peut être utilisé selon les conditions du service.",
            "Transcash peut notamment être utilisé pour certains achats auprès des commerçants acceptant Mastercard."
        ],

        titre6: "Informations importantes sur Transcash",

        textes6: [
            "Les recharges Transcash sont destinées à ajouter du crédit à une carte Transcash existante.",
            "Elles ne constituent pas un produit bancaire, un crédit ou un placement financier.",
            "Une carte Transcash et un compte Transcash sont nécessaires pour utiliser une recharge."
        ],

        titre7: "Sécurité et prévention des fraudes",

        textes7: [
            "Utilisez votre code de recharge Transcash uniquement dans votre espace Transcash ou dans l’application officielle.",
            "Ne communiquez jamais votre ticket Transcash ou son code à une autre personne.",
            "Toute demande vous invitant à transmettre directement un code Transcash à un tiers doit être considérée avec prudence."
        ],

        titre8: "Toutes les offres",

        textes8: [
            "Transcash 20 €",
            "Transcash 50 €",
            "Transcash 100 €",
            "Transcash 150 €"
        ],

        faqTitre: "Questions fréquemment posées",

        faq: [
            {
                question: "Comment utiliser un ticket Transcash ?",
                reponses: [
                    "Après l’achat de votre ticket Transcash, connectez-vous à votre espace Transcash ou à l’application officielle."
                ]
            },

            {
                question: "Comment vérifier mon ticket Transcash ou mon solde ?",
                reponses: [
                    "Consultez votre compte Transcash ou l’application officielle."
                ]
            },

            {
                question: "Puis-je utiliser Transcash sans créer de compte ?",
                reponses: [
                    "Consultez les conditions officielles de Transcash pour connaître les possibilités d’utilisation."
                ]
            },

            {
                question: "Où acheter un ticket Transcash en ligne ?",
                reponses: [
                    "Sélectionnez le ticket Transcash souhaité sur notre site, choisissez le montant et la quantité puis finalisez votre commande."
                ]
            }
        ]
    },


    /* =====================================================
       SFR
       ===================================================== */

    sfr: {

        titre1: "Acheter une recharge SFR en ligne",

        textes1: [
            "Achetez votre recharge SFR en ligne sur Recharge.fr et recevez votre code de recharge directement par e-mail après validation de votre paiement.",
            "SFR propose notamment des solutions prépayées pour les utilisateurs qui souhaitent davantage de flexibilité.",
            "Avec une recharge SFR en ligne, vous choisissez simplement le montant souhaité, finalisez votre paiement puis recevez votre code par e-mail.",
            "Vous pouvez acheter votre code directement sur Recharge.fr et l’utiliser selon les instructions SFR."
        ],

        titre2: "Pourquoi acheter une recharge SFR sur Recharge.fr ?",

        textes2: [
            "Recharge rapide et réception du code par e-mail.",
            "Revendeur fiable de produits prépayés.",
            "Plus de 7 millions de commandes depuis 2020.",
            "Un fournisseur rapide, fiable et reconnu.",
            "Plusieurs moyens de paiement disponibles."
        ],

        titre3: "Les principaux avantages de SFR",

        textes3: [
            "Large gamme d’offres sans engagement.",
            "Bonne couverture réseau.",
            "Certaines offres permettent des appels internationaux selon les conditions applicables.",
            "Selon votre offre, certains services mobiles peuvent être utilisés dans l’Union européenne.",
            "Facile à recharger : achetez votre recharge SFR en ligne sans vous déplacer.",
            "Une recharge SFR permet de contrôler vos dépenses mobiles."
        ],

        titre4: "À quoi pouvez-vous utiliser votre recharge SFR ?",

        textes4: [
            "Votre recharge SFR peut servir à ajouter du crédit à votre ligne prépayée.",
            "Appels en France.",
            "SMS.",
            "Données mobiles.",
            "Certains appels internationaux.",
            "Utilisation mobile lorsque vous voyagez, selon les conditions de votre offre."
        ],

        titre5: "Informations importantes",

        texte5: "Une recharge SFR en ligne permet de continuer à utiliser votre ligne sans souscrire nécessairement à un nouvel abonnement. Vérifiez toujours les conditions correspondant à votre carte SIM et à votre offre SFR.",

        titre6: "Toutes les offres",

        faqTitre: "Questions fréquemment posées",

        faq: [
            {
                question: "Comment acheter une recharge SFR ?",
                reponses: [
                    "Sélectionnez la recharge SFR souhaitée, choisissez le montant et la quantité puis finalisez votre commande."
                ]
            },

            {
                question: "Comment utiliser une recharge SFR ?",
                reponses: [
                    "Utilisez le code reçu conformément aux instructions de SFR."
                ]
            },

            {
                question: "Comment vérifier ma recharge SFR ?",
                reponses: [
                    "Consultez les informations fournies avec votre recharge ou auprès du service SFR concerné."
                ]
            }
        ]
    }

};

/* =========================================================
   AFFICHER TITRES + TEXTES + FAQ
   ========================================================= */

function afficherContenuInformations() {

    const colonneGauche =
        document.getElementById("colonneInformation");

    const colonneDroite =
        document.getElementById("colonneFaq");

    if (!colonneGauche || !colonneDroite) {
        return;
    }

    /* =====================================================
       CHOISIR LE CONTENU DU TICKET
       ===================================================== */

   const nom =
    (nomTicket || "").toLowerCase().trim();

const contenu =
    contenusTickets[nom];

/* Aucun contenu par défaut */
if (!contenu) {

    colonneGauche.innerHTML = "";
    colonneDroite.innerHTML = "";

    return;
}


    /* =====================================================
       COLONNE GAUCHE
       ===================================================== */

    let htmlGauche = "";


    /* TITRE 1 */

    if (contenu.titre1) {

        htmlGauche += `
            <h2>${contenu.titre1}</h2>
        `;
    }


    /* TEXTES 1 */

    if (contenu.textes1) {

        contenu.textes1.forEach(function(texte) {

            htmlGauche += `
                <p>${texte}</p>
            `;

        });
    }


    /* TITRE 2 */

    if (contenu.titre2) {

        htmlGauche += `
            <h2>${contenu.titre2}</h2>
        `;
    }


    /* TEXTES 2 */

    if (contenu.textes2) {

        contenu.textes2.forEach(function(texte) {

            htmlGauche += `
                <p>${texte}</p>
            `;

        });
    }


    /* TITRE 3 */

    if (contenu.titre3) {

        htmlGauche += `
            <h2>${contenu.titre3}</h2>
        `;
    }


    /* TEXTES 3 */

    if (contenu.textes3) {

        contenu.textes3.forEach(function(texte) {

            htmlGauche += `
                <p>${texte}</p>
            `;

        });
    }


    /* TITRE 4 */

    if (contenu.titre4) {

        htmlGauche += `
            <h2>${contenu.titre4}</h2>
        `;
    }


    /* TEXTES 4 */

    if (contenu.textes4) {

        contenu.textes4.forEach(function(texte) {

            htmlGauche += `
                <p>${texte}</p>
            `;

        });
    }


    /* TITRE 5 */

    if (contenu.titre5) {

        htmlGauche += `
            <h2>${contenu.titre5}</h2>
        `;
    }


    /* TEXTE 5 */

    if (contenu.texte5) {

        htmlGauche += `
            <p>${contenu.texte5}</p>
        `;
    }


    /* TITRE 6 */

    if (contenu.titre6) {

        htmlGauche += `
            <h2>${contenu.titre6}</h2>
        `;
    }


    /* TEXTES 6 */

    if (contenu.textes6) {

        contenu.textes6.forEach(function(texte) {

            htmlGauche += `
                <p>${texte}</p>
            `;

        });
    }


    /* AFFICHER LA COLONNE GAUCHE */

    colonneGauche.innerHTML =
        htmlGauche;


    /* =====================================================
       COLONNE DROITE — FAQ
       ===================================================== */

    let htmlFaq = "";


    if (contenu.faqTitre) {

        htmlFaq += `
            <h2>${contenu.faqTitre}</h2>
        `;
    }


    if (Array.isArray(contenu.faq)) {

        contenu.faq.forEach(function(item) {

            htmlFaq += `
                <details>

                    <summary>

                        <span class="question-titre">
                            ${item.question}
                        </span>

                        <span class="fleche-faq">
                            ⌄
                        </span>

                    </summary>

                    <div class="faq-contenu">

                        ${(item.reponses || [])
                            .map(function(reponse) {
                                return `<p>${reponse}</p>`;
                            })
                            .join("")}

                    </div>

                </details>
            `;

        });
    }


    /* AFFICHER LA FAQ */

    colonneDroite.innerHTML =
        htmlFaq;
}

/* =========================================================
   CHARGER LE PRODUIT SÉLECTIONNÉ
   ========================================================= */

function chargerProduit(produit) {

    if (!produit) {
        return;
    }

    /* IMAGE */

    afficherImage(produit);


    /* TITRE */

    afficherTitre(produit);


    /* PRIX */

    afficherPrix(produit);


    /* TEXTES SOUS LE PRODUIT */

    afficherTextes(produit);


    /* TITRES + TEXTES + FAQ */

    afficherContenuInformations();
}

/* =========================================================
   CHARGER LE PRODUIT SÉLECTIONNÉ
   ========================================================= */

chargerProduit(produitSelectionne);

/* =========================================================
   FERMER LA PUBLICITÉ MOBILE
   ========================================================= */

const fermerPublicite =
    document.getElementById("fermerPublicite");

const publiciteMobile =
    document.getElementById("publiciteMobile");

if (fermerPublicite && publiciteMobile) {

    fermerPublicite.addEventListener("click", function(event) {

        event.stopPropagation();

        publiciteMobile.style.display = "none";

    });

}

/* =========================================================
   TICKETS SUIVANTS
   AFFICHER UNIQUEMENT LE TICKET DE LA PAGE
   ========================================================= */

const listeTicketsSuivants =
    document.getElementById("listeTicketsSuivants");


function afficherTicketsSuivants() {

    if (!listeTicketsSuivants) return;

    listeTicketsSuivants.innerHTML = "";

    /* Récupérer uniquement le ticket actuellement ouvert */
    if (!nomTicket) return;

    const produit =
        produits[nomTicket.toLowerCase()];

    if (!produit || !produit.prix) return;


    /* Créer les cartes uniquement pour les prix
       de CE ticket */
    Object.keys(produit.prix).forEach(function(prix) {

    const carte = document.createElement("div");

    carte.className = "ticket-suivant";

    const maximum = produit.prix[prix].maximum;

    carte.innerHTML = `
        <div class="ticket-entete">

            <img
                class="ticket-logo"
                src="${produit.image || ""}"
                alt="${nomTicket}"
            >

            <h3 class="ticket-nom">
                ${nomTicket} ${prix} €
            </h3>

        </div>

        <div class="ticket-quantite">

            <span>Quantité</span>

            <strong>1</strong>

           <span class="fleche-ticket">⌄</span>

        </div>

        <div class="liste-quantites-ticket">

            ${Array.from(
                { length: maximum },
                (_, index) => `
                    <button
                        type="button"
                        data-quantite="${index + 1}"
                    >
                        ${index + 1}
                    </button>
                `
            ).join("")}

        </div>

        <button
            class="ticket-acheter"
            type="button"
        >
            Acheter • ${prix},00 EUR
        </button>
    `;

    const boutonQuantite =
        carte.querySelector(".ticket-quantite");

    const listeQuantites =
        carte.querySelector(".liste-quantites-ticket");

    const valeurQuantite =
        boutonQuantite.querySelector("strong");

    listeQuantites.style.display = "none";

    boutonQuantite.addEventListener("click", function() {

        if (listeQuantites.style.display === "none") {
            listeQuantites.style.display = "flex";
        } else {
            listeQuantites.style.display = "none";
        }

    });

    listeQuantites
        .querySelectorAll("button")
        .forEach(function(bouton) {

            bouton.addEventListener("click", function(event) {

                event.stopPropagation();

                valeurQuantite.textContent =
                    bouton.dataset.quantite;

                listeQuantites.style.display = "none";

            });

        });
      /* =========================================================
   BOUTON ACHETER DU TICKET APRÈS LA PUBLICITÉ
   ========================================================= */

const boutonAcheterTicket =
    carte.querySelector(".ticket-acheter");

if (boutonAcheterTicket) {

    boutonAcheterTicket.addEventListener("click", function(event) {

        event.preventDefault();
        event.stopPropagation();

        const quantite =
            Number(valeurQuantite.textContent) || 1;

        const prixChoisi =
            Number(prix);

        let prixVente =
            prixChoisi;

        if (
            produit.prixVente &&
            produit.prixVente[prixChoisi] !== undefined
        ) {

            prixVente =
                Number(
                    String(
                        produit.prixVente[prixChoisi]
                    ).replace(",", ".")
                );

        }

        const urlPaiement =
            "Paiement.html" +
            "?produit=" +
            encodeURIComponent(nomTicket) +
            "&prix=" +
            encodeURIComponent(prixChoisi) +
            "&prixVente=" +
            encodeURIComponent(prixVente) +
            "&quantite=" +
            encodeURIComponent(quantite);

        console.log("Redirection vers :", urlPaiement);

        window.location.assign(urlPaiement);

    });

}

    listeTicketsSuivants.appendChild(carte);
        
});

}


/* Lancer l'affichage */
afficherTicketsSuivants();








