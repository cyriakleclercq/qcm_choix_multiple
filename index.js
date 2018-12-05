
var tableau_question = ["Pourquoi les rois dormaient ils assis ?",
                        "Quel est la couleur du cheval Blanc d'Henry IV ?",
                        "Combien de film compte Harrry Potter ?",
                        "Pourquoi le kiwi porte il son nom ?",
                        "Pourquoi dit-on ''Santé'' lorsque l'on trinque ?",
                        "Pourquoi voit on la lune en plein jour ?",
                        "Pourquoi votre chat miaule t-il la nuit ?",
                        "Pourquoi les oiseaux chantent ils ?",
                        "pourquoi le hot dog porte il son nom ?",
                        "pourquoi le raton laveur est laveur ?"];


var tableau_bonneRep = ["Par peur de la mort",
                        "Noir",
                        "huit",
                        "Sa peau rappelle celle de l'oiseau portant le même nom",
                        "Au moyen âge, on pensait l'ivresse bénéfique",
                        "La lumière du soleil se reflète sur sa surface",
                        "Pour attirer votre attention",

                        "pour séduire les femelles",
                        "Par ressemblance au Teckel",
                        "Il lave ses aliments avant de les manger"];


var tableau_mauvaiseRep = ["Car les lits étaient trop petit",
                            " Blanc",
                            "sept",
                            "Il porte le nom de celui qui l'a découvert Gertz Kiwi",
                            "Dans l'antiquité on pensait l'alcool signe de richesse et donc de santé",
                            "La lune a son propre rayonnement",
                            "Pour attirer le sexe opposé",
                            "Pour communiquer",
                            "Car durant la grande dépression on mangeait du chien par manque de moyen",
                            "Car il passe son temps à se lécher"];

$("#page1").show();
$("#page2").hide();


var calc_ordi = 0;
var calcul_ordi = 0;
var ordi_question = 0;
var ordi_bonneRep = 0;
var ordi_mauvaiseRep = 0;

var tableau_reponse = [];
var tableau_reponseRandom = [];


// mélange des questions, réponses, mauvaises réponses

    function alea() {

        calc_ordi = Math.floor(Math.random() * tableau_question.length);


        ordi_question = tableau_question[calc_ordi];

        ordi_bonneRep = tableau_bonneRep[calc_ordi];

        ordi_mauvaiseRep = tableau_mauvaiseRep[calc_ordi];

        tableau_reponse.push(ordi_bonneRep);

        tableau_reponse.push(ordi_mauvaiseRep);
    };

    alea();






    function alea2() {


        while (tableau_reponse.length) {
            let i = 0;
            i++;

            calc_ordi = Math.floor(Math.random() * tableau_reponse.length);

            calcul_ordi = tableau_reponse[calc_ordi];

            tableau_reponseRandom.push(calcul_ordi);
            tableau_reponse.splice(calc_ordi, 1);


        }
    }
    alea2();


    $("#question").text(ordi_question);
    $("#reponse_a").text(tableau_reponseRandom[0]);
    $("#reponse_b").text(tableau_reponseRandom[1]);



var correct = 0;
var add = 0;

$("#reponse_a").click( function () {

    if (add < 10)
    {
        add++;
        for (let i = 0; i < tableau_bonneRep.length; i++) {

            if (tableau_bonneRep[i] == tableau_reponseRandom[0]) {

                correct++;


                $("#question").text(ordi_question);
                $("#reponse_a").text(tableau_reponseRandom[0]);
                $("#reponse_b").text(tableau_reponseRandom[1]);

                tableau_reponseRandom = [];
                alea();
                alea2();

            } else {



                $("#question").text(ordi_question);
                $("#reponse_a").text(tableau_reponseRandom[0]);
                $("#reponse_b").text(tableau_reponseRandom[1]);

                tableau_reponseRandom = [];
                alea();
                alea2();

            }
        }

    }

    if (add == 10) {

        $("#page1").hide();
        $("#page2").show();
        $("#answer").text(correct);
    }

});

$("#reponse_b").click(function () {



        add++;

        for (let i = 0; i < tableau_bonneRep.length; i++) {

            if (tableau_bonneRep[i] == tableau_reponseRandom[1]) {

                correct++;


                $("#question").text(ordi_question);
                $("#reponse_a").text(tableau_reponseRandom[0]);
                $("#reponse_b").text(tableau_reponseRandom[1]);

                tableau_reponseRandom = [];
                alea();
                alea2();

            } else {


                $("#question").text(ordi_question);
                $("#reponse_a").text(tableau_reponseRandom[0]);
                $("#reponse_b").text(tableau_reponseRandom[1]);

                tableau_reponseRandom = [];
                alea();
                alea2();
            }
        }

    if (add == 10) {

        $("#page1").hide();
        $("#page2").show();
        $("#answer").text(correct);
    }
});




