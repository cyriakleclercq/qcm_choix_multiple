
var quizz=[{question:"Pourquoi les rois dormaient ils assis ?" ,value:"Par peur de la mort",rep1:"Par peur de la mort",rep2:"Car les lits étaient trop petit"},
    {question:"Quel est la couleur du cheval Blanc d'Henry IV ?",value:"Noir",rep1:"Blanc",rep2:"Noir"},
    {question:"Combien de film compte Harrry Potter ?",value:"huit",rep1:"sept",rep2:"huit"},
    {question:"Pourquoi le kiwi porte il son nom ?",value:"Sa peau rappelle celle de l'oiseau portant le même nom",rep1:"Il porte le nom de celui qui l'a découvert Gertz Kiwi",rep2:"Sa peau rappelle celle de l'oiseau portant le même nom"},
    {question:"Pourquoi dit-on ''Santé'' lorsque l'on trinque ?",value:"Au moyen âge, on pensait l'ivresse bénéfique",rep1:"Au moyen âge, on pensait l'ivresse bénéfique ",rep2:"Dans l'antiquité on pensait l'alcool signe de richesse et donc de santé"},
    {question:"Pourquoi voit on la lune en plein jour ?",value:"La lumière du soleil se reflète sur sa surface",rep1:"La lumière du soleil se reflète sur sa surface",rep2:"La lune a son propre rayonnement"},
    {question:"Pourquoi votre chat miaule t-il la nuit ?",value:"Pour attirer votre attention",rep1:"Pour attirer le sexe opposé",rep2:"Pour attirer votre attention"},
    {question:"Pourquoi les oiseaux chantent ils ?",value:"pour séduire les femelles",rep1:"Pour communiquer",rep2:"pour séduire les femelles"},
    {question:"pourquoi le hot dog porte il son nom ?",value:"Par ressemblance au Teckel",rep1:"Par ressemblance au Teckel",rep2:"Car durant la grande dépression on mangeait du chien par manque de moyen"},
    {question:"pourquoi le raton laveur est laveur ?",value:"Il lave ses aliments avant de les manger",rep1:"Il lave ses aliments avant de les manger",rep2:"Car il passe son temps à se lécher"}];

$("#page1").show();

$("#page2").hide();

var scoreU=[];
var bon = [];
var mauvais = [];

var score=0;

var i= 0;

var c=0;

$('#question').text(quizz[0].question);

$('#reponse_1').text(quizz[0].rep1);

$('#reponse_2').text(quizz[0].rep2);

for (let s=1;s<=2;s++){

    $('#reponse_'+s).click(function () {

            i++;



            scoreU.push($('#reponse_'+s).text()+"<br>");

        if (quizz[i].value===$('#reponse_'+s).text()){

            bon.push($('#reponse_'+s).text()+"<br>");
            score++;

        } else {
            mauvais.push($('#reponse_'+s).text()+"<br>");

        }


            if (c > 9){

                $("#page1").hide();

                $("#page2").show();

                $("#answer").text(score);

                $('#breponse').html("<br>"+bon);



                $('#mreponse').html("<br>"+mauvais);


            }


            c++;

            console.log(i);

            console.log(c);

        if (i <= 9) {



            $('#page1').hide();
            $('#page1').slideDown();

            $('#question').html(quizz[i].question);



            $('#reponse_1').html(quizz[i].rep1);

            $('#reponse_2').html(quizz[i].rep2);






        }




    }

    )}

    $("#replay").click(function () {

        location.reload();
    });
