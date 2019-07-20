var categories =["Sport","Wissenschaft","Geografie","Tiere","Geschichte"]
var categorieschoosen=[];
k = 1;
var score = 0;
var cache = {};
var l = ["1","1","1","1","1"]
var c = ["0","1","2","3","4"]
var v = ["1","1","1","1","1"]
let sec = 30;
var timervar = 1;
let timer;
var joker = 1;
var halfhalf = 1;
var copanswer=[];
var cophalf=[]
var changequest = 1;
var copall = {};
var ck = 0;
var jkil = 1;
var highscore = 0;
var clean=0;
firstplay();
function firstplay(){
    var high = localStorage.getItem("highscore")//auskommentieren bei erweiterungen
    var brules = document.createElement("button");
    brules.classList.add("PlayButton");
    brules.onclick = function (){
        document.getElementById("game").innerHTML="";
        explaintherules()

    }
    var brule = document.createTextNode("Rules");
    var game = document.getElementById("game");
    var div = document.createElement("div");
    var divimg = document.createElement("div");
    divimg.classList.add("divimg")
    var im = document.createElement("img");
    im.src="img/favicon.jpg";

    div.classList.add("divoflist")
    var divtwo = document.createElement("div");
    divtwo.classList.add("divoflist");
    var buttonplay = document.createElement("button");
    buttonplay.addEventListener("click", nextpage)
    buttonplay.classList.add("PlayButton");
    var buttontext = document.createTextNode("Play");
    var p =  document.createElement("p");
    p.classList.add("phigh");
    var pin = document.createTextNode("Highscore: "+high); //Ändern in high bei Upload bei bearbeitung in score umwandeln
    var changebutton = document.createElement("button");
    changebutton.classList.add("PlayButton");
    changebutton.onclick=function (){
        changecolor();
    }
    var inch = document.createTextNode("Theme")
    buttonplay.appendChild(buttontext);
    brules.appendChild(brule);
    p.appendChild(pin);
    div.appendChild(p);
    changebutton.appendChild(inch);
    divimg.appendChild(im);
    divtwo.appendChild(buttonplay);
    divtwo.appendChild(changebutton);
    divtwo.appendChild(brules);
    game.appendChild(div);
    game.appendChild(divimg);
    game.appendChild(divtwo);
}
function explaintherules(){
    var e = document.getElementById("game");
    var h1 = document.createElement("h1");
    var h1in = document.createTextNode("Die Spielregeln")
    var p = document.createElement("p");
    var d = document.createElement("div");
    var pin = document.createTextNode("Bei diesem Spiel kannst du dir 4 unterschiedliche Kategorien auswählen von denen du dann jeweils Fragen gestellt bekommst. Wenn du eine Frage richtig beantwortest bekommst du 100 Punkte und das Level der Fragen steigt und damit auch die Schwierigkeit. Das höchste Level ist das Level 5, nachdem du diese Frage richtig beantwortet hast bekommst du extra Punkte. Als kleine Hilfe erhälst du pro Spiel ein Joker, ein 50:50 und einmal die Möglichkeit die Frage zu wechslen. Dein Highscore wird sogar auf der Seite gespeichert damit er auch das nächste mal wenn du dein Wissen testen möchtest da ist.");
    var button = document.createElement("button");
    button.classList.add("catbut")
    var bin = document.createTextNode("Verstanden");
    button.onclick = function(){
        document.getElementById("game").innerHTML="";
        firstplay();
    }
    button.appendChild(bin);
    p.appendChild(pin);
    h1.appendChild(h1in);
    d.appendChild(h1)
    d.appendChild(p);
    d.appendChild(button);
    e.appendChild(d);


}
function changecolor(){
    document.body.classList.toggle('light-theme');
    document.getElementsByClassName('PlayButton').classList.toggle('light-btn');

}
function nextpage(){
    var categories1 = null;
    setcat = categories;
    document.getElementById("game").innerHTML="";
    chooseyourscat();
}
    function chooseyourscat(){
        var div = document.getElementById("game");
        var dd = document.createElement("div");
        dd.classList.add("divoflist")
        var p = document.createElement("p");
        p.classList.add("pof")
        var pin = document.createTextNode(categorieschoosen.length+' of 4');
        p.appendChild(pin);
        dd.appendChild(p);
        div.appendChild(dd);
        for(i=0; i<setcat.length; i++){
            cateogries1 = createcategories(setcat[i])
            function createcategories(c){
                var d = document.createElement("div");
                d.classList.add("divoflist");
                var u = document.createElement("div");
                u.classList.add("ulki")
                var b = document.createElement("button");
                b.classList.add("catbut")

                b.classList.add("buttonplay");
                b.onclick =function(){
                    lookforcategories(event,c);
                }
                var bin = document.createTextNode(c);
                b.appendChild(bin);
                u.appendChild(b);
                d.appendChild(u);


                div.appendChild(d);

            }

        }
    }



function lookforcategories(event, c){
    var idx = setcat.indexOf(c);
    if (idx !== -1){
       setcat.splice(idx, 1);

    }
    else {
        console.log("not found");
    }
    document.getElementById("game").innerHTML ="";

    categorieschoosen.push(c);
    if(categorieschoosen.length >3){
        document.getElementById("game").innerHTML = "";
       startgame();
    }
    else{
        chooseyourscat();
  }

}

function startgame(){
    clean=0;
    var d = document.getElementById("game");
    var di = document.createElement("div");
    var dii = document.createElement("div");
    dii.classList.add("divoflist");
    var b = document.createElement("button");
    b.classList.add("catbut");
    b.onclick = function (){
        clean=0;
        document.getElementById("game").innerHTML="";
        checkcategories(categorieschoosen);
    }
    b.classList.add("buttonplay")
    var bin = document.createTextNode("Start");
    var b1 = document.createElement("button");
    b1.classList.add("catbut")
    b1.onclick = function(){
        categorieschoosen=[];
        clean=0;
        categories = ["Sport","Wissenschaft","Geografie","Geschichte","Tiere"]
        nextpage();
    }
    var b1in = document.createTextNode("Neu");
    var divp = document.createElement("div");
    divp.classList.add("divoflist")
    var  p = document.createElement("p");
    p.classList.add("pof");
    var pin = document.createTextNode("Möchten Sie mit den folgenden Kategorien spielen?")
    var u = document.createElement("div");
    u.classList.add("divoflist")
    for(i=0;categorieschoosen.length>i;i++){
        caatchos(categorieschoosen[i]);
        function caatchos(ca){


            var l = document.createElement("button");
            l.classList.add("catbut"+clean);

            l.onclick = function removeone(){
                categories.push(ca);
                deleteonin(event,ca);

            }
            clean++;
            var lin = document.createTextNode(ca);
            l.appendChild(lin);
            u.appendChild(l);
        }
    }
    b1.appendChild(b1in);
    b.appendChild(bin);
    p.appendChild(pin);
    divp.appendChild(p)
    di.appendChild(divp);
    di.appendChild(u);
    dii.appendChild(b);
    dii.appendChild(b1);
    di.appendChild(dii);
    d.appendChild(di);

}
function deleteonin(event,obj){
    var idx1 = categorieschoosen.indexOf(obj);
    if (idx1 !== -1){
       categorieschoosen.splice(idx1, 1);

    }
    else {
        console.log("not found");
    }
    document.getElementById("game").innerHTML ="";
    nextpage();
}
function checkcategories(){
    if(categorieschoosen.length == 0){
        createEnd();
    }
    else{
        document.getElementById("backbutton").innerHTML="";
        clean=0;
        startquiz();
    }
}
function createEnd(){
    document.getElementById("game").innerHTML="";
    var e = document.getElementById("game");
    var d = document.createElement("div");
    d.classList.add("lastdiv")
    var ind = document.createElement("div");
    ind.classList.add("divoflist");
    var p = document.createElement("p");
    p.classList.add("pof");
    var pin = document.createTextNode("Ihr Score:"+score);
    var b = document.createElement("button");
    var bin = document.createTextNode("Neues Spiel");
    b.classList.add("catbut");
    b.onclick = function(){
        resetakanewgame();
    }
    b.appendChild(bin);
    p.appendChild(pin);
    ind.appendChild(p);
    ind.appendChild(b);
    d.appendChild(ind);
    e.appendChild(d);
}
function resetakanewgame(){
  var x = loalStorage.getItem("highscore")
    if(score>x){
        highscore=score;
        localStorage.clear();
        localStorage.setItem("highscore",score);
        //local Storages auskommentieren
    }
    else{
        console.log(score,highscore)
    }
        document.getElementById("game").innerHTML="";
        document.getElementById("backbutton").innerHTML="";
            jkil=1;
             l = ["1","1","1","1","1"]
             c = ["0","1","2","3","4"]
             sec = 30;
             timervar = 1;
             timer;
             joker = 1;
             halfhalf = 1;
             copanswer=[];
             cophalf=[]
             changequest = 1;
             copall = {}
            categories = ["Sport","Wissenschaft","Geografie","Geschichte","Tiere"]
             count = 0;
             categorieschoosen=[];
            k = 1;
            score = 0;
            ck=0;
            firstplay();
}
function startquiz(){
            if(ck == 0){
        document.getElementById("backbutton").innerHTML="";

        document.getElementById("backbutton").style.display ="block";
        var ee = document.getElementById("backbutton");
        var bb = document.createElement("button");
        bb.classList.add("catbut")
        bb.onclick = function(){
            resetakanewgame();
        }

        var bbin = document.createTextNode("Neu Starten")
        var dilk = document.createElement("div");
        dilk.classList.add("divoflist");

        bb.appendChild(bbin);
        dilk.appendChild(bb);
        ee.appendChild(dilk);
    }
    var e = document.getElementById("game");
    var p = document.createElement("p");
    p.classList.add("pof")
    var pin = document.createTextNode("Score: "+score);
    var d = document.createElement("div");
    var dik = document.createElement("div");
    dik.classList.add("divoflist")
    d.classList.add("divoflist")
    p.appendChild(pin);
    dik.appendChild(p);
    console.log(l)
    for(i=0;i<categorieschoosen.length;i++){
        catd(categorieschoosen[i],l[i],c[i]);

        function catd(cat,l,i){
            console.log(l)
            var b = document.createElement("button")
            b.classList.add("catbut"+clean)
            var bin = document.createTextNode(cat);
            var bin1 = document.createTextNode(" Lv."+l);
            b.classList.add("buttonplay");
            b.onclick = function getquestions(){
                document.getElementById("game").innerHTML="";
                console.log(cat,l,i)
                getthequestions(cat,l,i);
            }
            clean++;
            b.appendChild(bin);
            b.appendChild(bin1);
            d.appendChild(b);
            e.appendChild(dik)
            e.appendChild(d);

                }

    }



}

function sendRequest(url, callback) {

    if (cache[url] == null) {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (xhttp.readyState == 4 && xhttp.status == 200) {

                cache[url] = xhttp.responseText;

                callback(xhttp.responseText);
                console.log("succesful")

            }

        };

        xhttp.open("GET", url, "True");

        xhttp.send();

    }

    else {

        callback(cache[url]);
        console.log("not found")

    }

}

function getthequestions(url,lvl,checklvl){
    sendRequest("question/"+url+"/"+"lvl"+lvl+".json", function(data){
        var questions = JSON.parse(data);
        copall = questions;
        console.log(copall);
        makethenumber(copall,url,checklvl,lvl);


    })
}
function makethenumber(q,url,checklvl,lvl){

    randomIntFromInterval(0,q.length,q,url,checklvl,lvl);

}
function randomIntFromInterval(min,max,q,url,checklvl,lvl)
{

    var rq = Math.floor((Math.random()*max)+min);
    var copquest = q[rq];
    var copanswer = [copquest.A1,copquest.A2,copquest.A3,copquest.A4]
    do{
        var rhq = Math.floor((Math.random()*copanswer.length)+0);
        var rhq1 = Math.floor((Math.random()*copanswer.length)+0);
        var clk = copanswer[rhq];
        var clk1 = copanswer[rhq1];

    }
    while(clk == copquest.correctAnswer || clk1 == copquest.correctAnswer || clk == clk1)
    var cophalf = [clk,clk1];
    makethequestion(copquest,url,checklvl,copanswer,cophalf,q,lvl)


}

function makethequestion(copquest,url,checklvl,copanswer,cophalf,q,lvl){
    document.getElementById("backbutton").style.display ="none";

    settimer();
    function settimer(){
        if(jkil==1){
            if(timervar == 1){
                document.getElementById("time").style.display = "block";
                 timer = setInterval(TimeHandler,1000);
            }
            else{

                timer = clearInterval(timer);
                timerunsout(url,checklvl);

            }
        }


    }

    function TimeHandler(){
    if(sec>0){
        sec--;

        displaythetime()
    }
    else{
        document.getElementById("time").style.display = "none";
        timervar=0;
        document.getElementById("game").innerHTML="";
        settimer();



    }
    }
    function displaythetime(){
        let t = document.getElementById("time");
        t.innerHTML = sec;
    }
    var d3= document.createElement("div");
    d3.classList.add("divoflist")
    if(joker==1){
        var e1 = document.getElementById("game");
        var j1 = document.createElement("button");
        j1.classList.add("catbut0")


        j1.onclick = function(){
            document.getElementById("game").innerHTML="";
            jkil=0;
            joker = 0;
            var dddd = document.createElement("div")
            dddd.classList.add("divoflist");
            var p1 = document.createElement("p");
            p1.classList.add("pof")
            var p1in = document.createTextNode("Die richtige Antwort ist: "+copquest.correctAnswer);
            p1.appendChild(p1in);
            dddd.appendChild(p1);
            e1.appendChild(dddd);

            makethequestion(copquest,url,checklvl,copanswer,cophalf,q,lvl);

        }

        var j1in = document.createTextNode("Joker  ");
        j1.classList.add("buttonicon");


        j1.appendChild(j1in);
        d3.appendChild(j1);
        e1.appendChild(d3);

    }
    if(halfhalf==1){
        var e1 = document.getElementById("game");
        var j2 = document.createElement("button");


        j2.classList.add("catbut1")
        j2.onclick = function(){
             jkil=0;
             halfhalf= 0;
             halffunc();


        }
        var j2in = document.createTextNode("50:50");
        j2.classList.add("buttonicon");



        j2.appendChild(j2in);
        d3.appendChild(j2);
        e1.appendChild(d3);

    }
    function halffunc(){
        document.getElementById("game").innerHTML="";
        console.log(cophalf);
        console.log(copanswer);
        for(i=0;cophalf.length>i;i++){
            var ij = copanswer.indexOf(cophalf[i])
            copanswer.splice(ij,1);
        }
        makethequestion(copquest,url,checklvl,copanswer,cophalf,q,lvl)
    }
    if(changequest==1){
        var e1 = document.getElementById("game");
        var j3 = document.createElement("button");


        j3.classList.add("catbut3")
        j3.onclick = function(){
            jkil=0;
            changequest = 0;
            document.getElementById("game").innerHTML="";
            var inds = q.indexOf(copquest);
            q.splice(inds,1);
            makethenumber(q,url,checklvl,lvl)
        }
        var j3in = document.createTextNode("Wechseln");
        j3.classList.add("buttonicon");



        j3.appendChild(j3in);
        d3.appendChild(j3);
        e1.appendChild(d3);

    }

    var e = document.getElementById("game");
    var qe = document.createElement("p");
    var dpka = document.createElement("div");
    dpka.classList.add("divoflist")
    qe.classList.add("pof");
    var qin = document.createTextNode(copquest.F);
    qe.appendChild(qin);
    dpka.appendChild(qe)
    e.appendChild(dpka);
    var dg = document.createElement("div");
    dg.classList.add("divoflist")
    console.log(copanswer)
    for(i=0;i<copanswer.length;i++){
        foranswer(copanswer[i]);
        function foranswer(copa){
            var b = document.createElement("button");
            b.classList.add("catbut2")
            b.onclick = function(){
                jkil=1;
                correctorwrong(copa,copquest.correctAnswer,url,checklvl,lvl);
            }
            b.classList.add("buttonplay");
            var bin = document.createTextNode(copa)
            b.appendChild(bin);
            dg.appendChild(b)
            e.appendChild(dg);
        }
    }





}
function correctorwrong(answer,correct,url,cl,lvl){
    document.getElementById("game").innerHTML="";
    timer = clearInterval(timer);
    sec = 31;

    document.getElementById("time").style.display = "none";
    var e = document.getElementById("game");
    var dic = document.createElement("div");
    dic.classList.add("divoflist");
    var p = document.createElement("p");
    p.classList.add("pof");
    var b = document.createElement("button");
    b.classList.add("buttonplay");
    b.classList.add("catbut")
    var bin = document.createTextNode("Nächste Frage");
    var dd = document.createElement("div");
    dd.classList.add("divoflist")
    if(answer==correct){
        console.log(cl);
        console.log(url);
        console.log(lvl)
        score = score + 100;
        var pin = document.createTextNode("Richtig!!");
        b.onclick = function(){
            document.getElementById("game").innerHTML="";
            console.log(cl[0]);
            console.log(lvl);


            for(i=0;i<6;i++){
                if(cl==c[i]){
                    if(lvl==5){
                        compfive(cl);
                    }
                    else{
                        lvl++;
                        l.splice(i,1);
                        l.splice(i,0,lvl);
                        checkcategories();
                    }

                }
                else{
                    console.log("error")
                }
            }



        }
    }
    else{
        var pin = document.createTextNode("Deine Antwort ist falsch. "+correct+" wäre die richtige Antwort gewesen");
        b.onclick = function(){

            console.log(url,cl)
            wronganswer(event,url,cl,lvl);


        }
    }
    p.appendChild(pin);
    b.appendChild(bin);
    dd.appendChild(b)
    dic.appendChild(p)
    e.appendChild(dic);
    e.appendChild(dd);
}
function timerunsout(obj,cl,lvl){
    var e = document.getElementById("game");
    var p = document.createElement("p");
    p.classList.add("pof")
    var d = document.createElement("div");
    d.classList.add("divoflist")
    var pin = document.createTextNode("Die Zeit ist abgelaufen!!")
    var b = document.createElement("button");
    var bin = document.createTextNode("Schließen");
    b.classList.add("catbut");
    b.onclick = function(){
        document.getElementById("game").innerHTML="";
        timervar=1;
        sec = 30;
        wronganswer(event,obj,cl,lvl);

    }
    p.appendChild(pin);
    b.appendChild(bin);
    d.appendChild(p);
    d.appendChild(b);
    e.appendChild(d);



}
function wronganswer(event,obj,cl,lvl){
    var idx3 = categorieschoosen.indexOf(obj);
    if (idx3 !== -1){
       categorieschoosen.splice(idx3, 1);
    }
    else {
        console.log("not found");
    }
    document.getElementById("game").innerHTML ="";
    splicecat(event,cl)
}
function splicecat(event,cl,lvl){
    l.splice(cl,1);
    console.log(l)
    checkcategories();

}
function compfive(cl){
    score = score + 300;
    var e = document.getElementById("game");
    var d = document.createElement("div");
    d.classList.add("divoflist")
    var p = document.createElement("p");
    p.classList.add("pof")
    var pin = document.createTextNode("Du hast in der Kategorie "+categorieschoosen[cl]+" das höchste lvl erreicht!!");
    var p2 = document.createElement("p");
    var p2in = document.createTextNode("+300 Punkte")
    var b = document.createElement("button");
    b.classList.add("catbut")
    b.classList.add("buttonplay");
    b.onclick= function (){
        document.getElementById("game").innerHTML="";
        wronganswer(event,categorieschoosen[cl],cl);

    }
    var bin = document.createTextNode("Schließen");
    b.appendChild(bin);
    p2.appendChild(p2in);
    p.appendChild(pin);
    d.appendChild(p);
    d.appendChild(p2);
    d.appendChild(b);
    e.appendChild(d);
}
