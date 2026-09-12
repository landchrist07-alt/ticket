/* =========================================================
   BANNIÈRE — TRADUCTIONS
   ========================================================= */

const traductions = {

    fr: {
        banner1: "Plus grande boutique en ligne de cartes de paiement",
        banner2: "Revendeur certifié",
        banner3: "Paiement sûr et sécurisé",
        banner4: "Livraison en ligne instantanée"
    },

    en: {
        banner1: "Largest online payment card store",
        banner2: "Certified reseller",
        banner3: "Safe and secure payment",
        banner4: "Instant online delivery"
    },

    de: {
        banner1: "Größter Online-Shop für Zahlungskarten",
        banner2: "Zertifizierter Wiederverkäufer",
        banner3: "Sichere Zahlung",
        banner4: "Sofortige Online-Lieferung"
    },

    nl: {
        banner1: "Grootste online winkel voor betaalkaarten",
        banner2: "Gecertificeerde wederverkoper",
        banner3: "Veilige betaling",
        banner4: "Directe online levering"
    }

};


/* =========================================================
   TRADUIRE LA BANNIÈRE
   ========================================================= */

function traduireBanniere(langue) {

    const t = traductions[langue];

    if (!t) return;


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

}




const emailStep =
    document.getElementById("emailStep");

const paymentStep =
    document.getElementById("paymentStep");

const email =
    document.getElementById("email");

const emailError =
    document.getElementById("emailError");

const continueButton =
    document.getElementById("continueButton");

const confirmedEmail =
    document.getElementById("confirmedEmail");

const editEmail =
    document.getElementById("editEmail");

const paymentMethods =
    document.querySelectorAll(".payment-method");

const totalPrice =
    document.getElementById("totalPrice");

const promoButton =
    document.getElementById("promoButton");

const promoArea =
    document.getElementById("promoArea");

const promoInput =
    document.getElementById("promoInput");

const applyPromo =
    document.getElementById("applyPromo");

const infoButton =
    document.getElementById("infoButton");

const serviceTooltip =
    document.getElementById("serviceTooltip");


/* =========================================================
   VALIDATION EMAIL
   ========================================================= */

function emailValide(value) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

}


/* =========================================================
   PASSER À L'ÉTAPE PAIEMENT
   ========================================================= */

continueButton.addEventListener(
    "click",
    function () {

        const valeur =
            email.value.trim();


        if (!emailValide(valeur)) {

            emailError.textContent =
                "Veuillez saisir une adresse e-mail valide.";

            emailError.style.display =
                "block";

            document
                .querySelector(".email-field")
                .classList.add("erreur");

            email.focus();

            return;
        }


        emailError.style.display =
            "none";

        document
            .querySelector(".email-field")
            .classList.remove("erreur");


        /*
         * Afficher l'adresse dans
         * la deuxième étape
         */

        confirmedEmail.textContent =
            valeur;


        /*
         * Masquer étape email
         */

        emailStep.style.display =
            "none";


        /*
         * Afficher étape paiement
         */

        paymentStep.classList.add("active");


        /*
         * Revenir en haut de la colonne
         */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   MODIFIER L'EMAIL
   ========================================================= */

editEmail.addEventListener(
    "click",
    function () {

        paymentStep.classList.remove("active");

        emailStep.style.display =
            "block";

        email.focus();

    }
);


/* =========================================================
   MOYENS DE PAIEMENT
   ========================================================= */

paymentMethods.forEach(
    function (method) {

        method.addEventListener(
            "click",
            function () {

                const nom =
                    method.dataset.method;

                const frais =
                    Number(method.dataset.fee);


                /*
                 * Prix de base
                 */

                const prixRecharge =
                    54;


                /*
                 * Frais de service
                 */

                const fraisService =
                    6.99;


                /*
                 * Nouveau total
                 */

                const nouveauTotal =
                    prixRecharge +
                    fraisService +
                    frais;


                totalPrice.textContent =
                    nouveauTotal
                        .toFixed(2)
                        .replace(".", ",") +
                    "EUR";


                /*
                 * Marquer le moyen choisi
                 */

                paymentMethods.forEach(
                    function (element) {

                        element.classList.remove(
                            "selectionne"
                        );

                    }
                );


                method.classList.add(
                    "selectionne"
                );


                console.log(
                    "Mode de paiement :",
                    nom
                );

                console.log(
                    "Frais :",
                    frais
                );

            }
        );

    }
);


/* =========================================================
   CODE PROMO
   ========================================================= */

promoButton.addEventListener(
    "click",
    function () {

        promoArea.classList.toggle(
            "ouvert"
        );


        const arrow =
            promoButton.querySelector(
                ".promo-arrow"
            );


        if (
            promoArea.classList.contains(
                "ouvert"
            )
        ) {

            arrow.textContent = "⌃";

        } else {

            arrow.textContent = "⌄";

        }

    }
);


/* =========================================================
   APPLIQUER CODE PROMO
   ========================================================= */

applyPromo.addEventListener(
    "click",
    function () {

        const code =
            promoInput.value.trim();


        if (!code) {

            promoInput.focus();

            return;

        }


        alert(
            "Code promo saisi : " +
            code
        );

    }
);


/* =========================================================
   INFORMATIONS FRAIS
   ========================================================= */

infoButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        serviceTooltip.classList.toggle(
            "ouvert"
        );

    }
);


serviceTooltip.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

    }
);


document.addEventListener(
    "click",
    function () {

        serviceTooltip.classList.remove(
            "ouvert"
        );

    }
);


/* =========================================================
   SUPPRIMER ERREUR EMAIL
   ========================================================= */

email.addEventListener(
    "input",
    function () {

        emailError.style.display =
            "none";

        document
            .querySelector(".email-field")
            .classList.remove("erreur");

    }
);