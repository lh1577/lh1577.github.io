var categories =["Sport","Wissenschaft","Geografie","Tiere","Geschichte","Mythologie","Psychologie","Weltraum"]
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
var questions;
var hi= 0;
var alone= 1;
var baby = 2;
var efor = [];
var medium= 3;
var explorer= 4;


var reachedachiev = [];
var dod = [];
choseachiev();
function choseachiev(){
  var x = localStorage.getItem("highscore");
    if(score>x){
        highscore=score;
        localStorage.removeItem("highscore")
        localStorage.setItem("highscore",score);
        //local Storages auskommentieren
    }
  var a = localStorage.getItem("A");//Anfänger
  var a1 = localStorage.getItem("A1");//Fortgeschrittener
  var a2 = localStorage.getItem("A2");//Explorer
  var a3= localStorage.getItem("A3");//Höchstpunktzahl
  var a4= localStorage.getItem("A4");//Alleingänger
  var y = joker+changequest+halfhalf;
    if(a==null){
      if(score >= 1000||x >= 1000){
        localStorage.setItem("arc2","Anfänger");
        localStorage.setItem("A","1");
        var baby= 0;
        efor.push("Anfänger");
      }
    }
    if(a1==null){
      if(score >= 2000||x >= 2000){
        localStorage.setItem("arc3","Fortgeschrittener");
        localStorage.setItem("A1","1");
        efor.push("Fortgeschrittener");
      }
    }

    if(a2==null){
      if(score >= 3000|| x>= 3000){
        localStorage.setItem("arc4","Explorer");
        localStorage.setItem("A2","1");
        efor.push("Explorer");

      }
    }
    if(a3==null){
      if(score == 4000|| x == 4000){
        localStorage.setItem("arc0","Höchstpunktzahl");
        localStorage.setItem("A3","1");
        efor.push("Höchstpunktzahl");
      }
    }
    if(a4==null){
      if(score > 2500 || x > 2500){
        if(y==3){
          localStorage.setItem("arc1","Alleingänger");
          localStorage.setItem("A4","1");
          efor.push("Alleingänger");
        }
      }

    }
    score=0;
    joker=1;
    halfhalf=1;
    changequest=1;
    getachievment();
}
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
    im.classList.add("img");

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

    var inch = document.createTextNode("Theme");

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
    var ar = localStorage.getItem("arc");
    if(ar==1){
      var bar = document.createElement("button");
      bar.classList.add("PlayButton")
      var bain = document.createTextNode("Erfolge");
      bar.appendChild(bain);
      divtwo.appendChild(bar);
      bar.onclick = function(){
        document.getElementById("game").innerHTML="";
        placesucces()
      }
    }
}
function placesucces(){
  var arc0 = localStorage.getItem("arc0")
  var arc1 = localStorage.getItem("arc1")
  var arc2 = localStorage.getItem("arc2")
  var arc3 = localStorage.getItem("arc3")
  var arc4 = localStorage.getItem("arc4")
  var arc5 = localStorage.getItem("arc5")
  var hd = 0;
  var e1 = document.getElementById("game");
  var e = document.createElement("div");
  e.classList.add("diar");


  if(arc0 != null){//Höchstpunktzahl
    reachedachiev.push(arc0);
    var d = document.createElement("div");
    d.classList.add("dar")
    var i = document.createElement("i");
    i.classList.add("fas","fa-brain","fa-2x");
    i.classList.add("iar");
    var p = document.createElement("p");
    p.classList.add("par")
    var pin = document.createTextNode(arc0);
    p.appendChild(pin);
    d.appendChild(i);
    d.appendChild(p);
    e.appendChild(d);

  }
  if(arc1 != null){//Alone
    reachedachiev.push(arc1);
    var d = document.createElement("div");
    d.classList.add("dar")
    var i = document.createElement("i");
    i.classList.add("fas","fa-biohazard","fa-2x");
    i.classList.add("iar");
    var p = document.createElement("p");
    p.classList.add("par")
    var pin = document.createTextNode(arc1);
    p.appendChild(pin);
    d.appendChild(i);
    d.appendChild(p);
    e.appendChild(d);

  }
  if(arc2 != null){//Anfänger
    reachedachiev.push(arc2);
    var d = document.createElement("div");
    d.classList.add("dar")
    var i = document.createElement("i");
    i.classList.add("fas","fa-award","fa-2x");
    i.classList.add("iar");
    var p = document.createElement("p");
    p.classList.add("par")
    var pin = document.createTextNode(arc2);
    p.appendChild(pin);
    d.appendChild(i);
    d.appendChild(p);
    e.appendChild(d);

  }
  if(arc3 != null){//Fortgeschrittener
    reachedachiev.push(arc3);
    var d = document.createElement("div");
    d.classList.add("dar")
    var i = document.createElement("i");
    i.classList.add("fas","fa-atom","fa-2x");
    i.classList.add("iar");
    var p = document.createElement("p");
    p.classList.add("par")
    var pin = document.createTextNode(arc3);
    p.appendChild(pin);
    d.appendChild(i);
    d.appendChild(p);
    e.appendChild(d);

  }
  if(arc4 != null){//Explorer
    reachedachiev.push(arc4);
    var d = document.createElement("div");
    d.classList.add("dar")
    var i = document.createElement("i");
    i.classList.add("fas","fa-meteor","fa-2x");
    i.classList.add("iar");
    var p = document.createElement("p");
    p.classList.add("par")
    var pin = document.createTextNode(arc4);
    p.appendChild(pin);
    d.appendChild(i);
    d.appendChild(p);
    e.appendChild(d);

  }
  if(arc5 != null){//Champion
    reachedachiev.push(arc5);
    setarc5();
    function setarc5(){
      var d = document.createElement("div");
      d.classList.add("dar")
      var i = document.createElement("i");
      i.classList.add("fas","fa-crown","fa-2x");
      i.classList.add("iar");
      var p = document.createElement("p");
      p.id="p5";
      p.classList.add("par")
      var pin = document.createTextNode(arc5);
      p.appendChild(pin);
      d.appendChild(i);
      d.appendChild(p);
      e.appendChild(d);
    }
  }
  var dm = document.createElement("button");
  var dmin = document.createTextNode("Bedeutungen");
  dm.classList.add("biar");
  dm.onclick = function(){
    document.getElementById("game").innerHTML="";
    setmeaning();
  }
  var dback = document.createElement("div");
  var back = document.createElement("button");
  var backi = document.createTextNode("Zurück");
  back.classList.add("biar")
  back.onclick= function(){
    document.getElementById("game").innerHTML="";
    firstplay();
  }
  e1.appendChild(e);
  back.appendChild(backi);
  dback.appendChild(back);
  dm.appendChild(dmin);
  dback.appendChild(dm);

  e1.appendChild(dback);


}
function setmeaning(){
  var arc0 = localStorage.getItem("arc0")
  var arc1 = localStorage.getItem("arc1")
  var arc2 = localStorage.getItem("arc2")
  var arc3 = localStorage.getItem("arc3")
  var arc4 = localStorage.getItem("arc4")
  var arc5 = localStorage.getItem("arc5")
  var e = document.getElementById("game");
  var u = document.createElement("ul");
  u.classList.add("ula");
  var d = document.createElement("div");
  sendRequest("achievmean.json", function(data){
      mean = JSON.parse(data);
      nextsm(mean);
  })
  function nextsm(m){
    if(arc0 != null){
      var li = document.createElement("li");
      li.classList.add("liar");
      var lin = document.createTextNode("Höchstpunktzahl  : "+ m[0].Höchstpunktzahl);
      li.appendChild(lin);
      u.appendChild(li)
    }
    if(arc1 != null){
      var li = document.createElement("li");
      li.classList.add("liar");
      var lin = document.createTextNode("Alleingänger  : "+ m[1].Alleingänger);
      li.appendChild(lin);
      u.appendChild(li)
    }
    if(arc2 != null){
      var li = document.createElement("li");
      li.classList.add("liar");
      var lin = document.createTextNode("Anfänger  : "+ m[2].Anfänger);
      li.appendChild(lin);
      u.appendChild(li)
    }
    if(arc3 != null){
      var li = document.createElement("li");
      li.classList.add("liar");
      var lin = document.createTextNode("Fortgeschrittener  : "+ m[3].Fortgeschrittener);
      li.appendChild(lin);
      u.appendChild(li)
    }
    if(arc4 != null){
      var li = document.createElement("li");
      li.classList.add("liar");
      var lin = document.createTextNode("Explorer  : "+ m[4].Explorer);
      li.appendChild(lin);
      u.appendChild(li)
    }
    if(arc5 != null){
      var li = document.createElement("li");
      li.classList.add("liar");
      var lin = document.createTextNode("Champion  : "+ m[5].Champion);
      li.appendChild(lin);
      u.appendChild(li)
    }
    var b = document.createElement("button");
    var bin = document.createTextNode("Zurück");
    b.appendChild(bin);
    b.classList.add("biar");
    b.onclick= function (){
      document.getElementById("game").innerHTML="";
      placesucces();
    }
    d.appendChild(u);
    d.appendChild(b);
    e.appendChild(d);



  }


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
        var pin = document.createTextNode(categorieschoosen.length+' of 5');
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
    if(categorieschoosen.length >4){
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
        categories = ["Sport","Wissenschaft","Geografie","Geschichte","Tiere","Mythologie","Psychologie","Weltraum"]
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
        choseachiev();
    }
    b.appendChild(bin);
    p.appendChild(pin);
    ind.appendChild(p);
    ind.appendChild(b);
    d.appendChild(ind);
    e.appendChild(d);
}
function resetakanewgame(){


            jkil=1;
             l = ["1","1","1","1","1"]
             c = ["0","1","2","3","4"]
             sec = 30;
             timervar = 1;
             timer;
             copanswer=[];
             cophalf=[]
             copall = {}
            categories = ["Sport","Wissenschaft","Geografie","Geschichte","Tiere","Mythologie","Psychologie","Weltraum"]
             count = 0;
             categorieschoosen=[];
            k = 1;
            ck=0;

            efor=[];
            document.getElementById("game").innerHTML="";
            document.getElementById("backbutton").innerHTML="";
            document.getElementById("achiev").innerHTML="";
            firstplay();
          }

function getachievment(){
  var a = localStorage.getItem("A");//Anfänger
  var a1 = localStorage.getItem("A1");//Fortgeschrittener
  var a2 = localStorage.getItem("A2");//Explorer
  var a3= localStorage.getItem("A3");//Höchstpunktzahl
  var a4= localStorage.getItem("A4");//Alleingänger
  var a5= localStorage.getItem("A5");//Champion
  if(a5==null){
    if(a4!=null && a3!=null && a2!=null && a1!=null && a!=null){
      localStorage.setItem("arc5","Champion");
      localStorage.setItem("A5","1");
      efor.push("Champion");
    }
  }
  var kol = 1;
  document.getElementById("game").innerHTML="";

if(efor.length!=0){
  var eds = localStorage.getItem("arc");
  if(eds==null){
    localStorage.setItem("arc","1");
  }
  var e = document.getElementById("achiev");
  var d = document.createElement("div");
  var p = document.createElement("p");
  p.classList.add("pe");
  var b = document.createElement("button");
  b.classList.add("PlayButton");
  b.onclick = function(){
    document.getElementById("achiev").innerHTML="";
    resetakanewgame();
  }
  var bin = document.createTextNode("Cool!");
  var p1 = document.createElement("p");
  var p1 = document.createElement("p");
    if(efor.length==1){
      var pin = document.createTextNode("Wow Sie haben ein Meilenstein freigeschaltet!!");
      var p1in = document.createTextNode(efor[0]);
      p.appendChild(pin);
      p1.appendChild(p1in);
    }
    else{
      var pin = document.createTextNode("Wow Sie haben diese Meilensteine freigeschaltet!!");
      p.appendChild(pin);
      for(i=0;efor.length>i;i++){

        var p1in = document.createTextNode("     "+kol+". "+efor[i]+"  ");
        p1.appendChild(p1in);
        kol++;
      }
    }

      b.appendChild(bin);
      d.appendChild(p);
      d.appendChild(p1);
      d.appendChild(b);
      e.appendChild(d);


  }
  else{
    resetakanewgame();
  }
}
function startquiz(){
  document.getElementById("time").innerHTML="";
  sec=31;
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
    for(i=0;i<categorieschoosen.length;i++){
        catd(categorieschoosen[i],l[i],c[i]);

        function catd(cat,l,i){
            var b = document.createElement("button")
            b.classList.add("catbut"+clean)
            var bin = document.createTextNode(cat);
            var bin1 = document.createTextNode(" Lv."+l);
            b.classList.add("buttonplay");
            b.onclick = function getquestions(){
                document.getElementById("game").innerHTML="";
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

    }

}

function getthequestions(url,lvl,checklvl){
    sendRequest("question/"+url+"/"+"lvl"+lvl+".json", function(data){
        questions = JSON.parse(data);
        copall = questions;
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


        j2.classList.add("catbut2")
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


        j3.classList.add("catbut4")
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
    for(i=0;i<copanswer.length;i++){
        foranswer(copanswer[i]);
        function foranswer(copa){
            var b = document.createElement("button");
            b.classList.add("catbut3")
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
        score = score + 100;
        var pin = document.createTextNode("Richtig!!");
        b.onclick = function(){
            document.getElementById("game").innerHTML="";
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
