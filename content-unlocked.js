window.onload = function(){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var invalid = "";
  if (date == "2019-7-31"){
    chrome.storage.local.set({"invalid": date}, function(){z = 0});
  };
  urlko = document.URL[33];
  if (urlko == "r"){
    var elementy;
    var spolecnost;
    var subjekt;
    var adresa;
    var telefon;
    var ip;
    var nat_a_vlan;
    try{
      elementy = document.getElementsByClassName('form-content');
      spolecnost = elementy[1].innerText;
      subjekt = elementy[4].innerText;
      adresa = elementy[30].innerText;
      telefon = elementy[21].innerText;
      ip = elementy[24].innerText;
      nat_a_vlan = elementy[28].innerText + "\n" + "Vlan" + elementy[29].innerText;
    }
    catch(TypeError){
      elementy = document.getElementsByClassName('form-content');
      spolecnost = elementy[1].innerText;
      subjekt = elementy[4].innerText;
      adresa = elementy[30].innerText;
      telefon = elementy[21].innerText;
      ip = elementy[24].innerText;
      nat_a_vlan = elementy[28].innerText + "\n" + "Vlan" + elementy[29].innerText;
    };
    var urlko = document.URL;
    var operator = document.getElementsByClassName("hidden-xs")[0].innerText;
    var inicialy = "";
    chrome.storage.local.get(["inic"], function neam(iniciala){
      inicialy = JSON.stringify(iniciala["inic"]);
      inicialy = inicialy.slice(1, inicialy.length-1);
    });
    var pripojeni = "wifi";
    var jakdlouho = "od včerejška večer";
    var vypadky = "vypadky";
    var vcemkouka = "stb";
    var sajdbar = document.getElementsByClassName("main-sidebar")[0];
    var kezkopceni = "";
    sajdbar.style.zIndex = "98";

    function zkopirovano(){
      alert("zkopírováno");
    };

    function zkopirovat(){
      navigator.clipboard.writeText(kezkopceni).then(zkopirovano);
    };

    function nefunkcnostcopy(){
      kezkopceni = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "NEFUNGUJE NA ŽÁDNÉM ZAŘÍZENÍ? na žádném" + "\n" + "JAK DLOUHO? " + jakdlouho + "\n" + "ROUTER, KABEL - WIFI? " + pripojeni + "\n" + "ZKOUŠEL VYPNOUT/ZAPNOUT? ano" + "\n" + "STAV PŘIPOJENÍ? bez internetu" + "\n" + "KONTROLA ZAPOJENÍ? ano" + "\n" + "AKTUÁLNÍ TELEFON: " + telefon + "\n" + "ADRESA PŘÍPOJKY: " + adresa + "\n" + "POZNÁMKA:" + "\n" + "==================================================" + "\n" + ip + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      zkopirovat();
    };

    function vypadkovostcopy(){
      kezkopceni = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "VÝPADKY/RYCHLOST/ODEZVA? " + vypadky + "\n" + "ROUTER, KABEL - WIFI? " + pripojeni + "\n" + "WRT - VYPNOUT ZAPNOUT /PŘELADIT KANÁL? ano, přeladit ne" + "\n" + "PROBLÉMOVÁ DOBA - KDY, JAK ČASTO, JAK DLOUHO? náhodně" + "\n" + "AKTUÁLNÍ TELEFON: " + telefon + "\n" + "ADRESA PŘÍPOJKY: " + adresa + "\n" + "POZNÁMKA:" + "\n" + "==================================================" + "\n" + ip + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      zkopirovat();
    };

    function zasekanatelkacopy(){
      kezkopceni = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "AKTUÁLNÍ TELEFON: " + telefon + "\n" + "ADRESA PŘÍPOJKY: " + adresa + "\n" + "==================================================" + "\n" + "FUNGUJE INTERNET? ano" + "\n" + "STB , V PROHLÍŽEČI, SMARTTV,  TELEFON/TABvar? " + vcemkouka + "\n" + "NEJDE PROGRAM/NOVA? jde" + "\n" + "SEKÁ SE ŽIVÉ VYSÍLÁNÍ/PROGRAM? ano" + "\n" + "SEKÁ SE ARCHIV/PROGRAM? ano" + "\n" + "KDY/DOBA KDY SE ZASEKL A PROGRAM " + jakdlouho + "\n" + "POSUNUT ZVUK VŮČI OBRAZU? ne" + "\n" + "MAC: " + "\n" + "POZNÁMKA: " + "\n" + "==========================================================================" + "\n" + ip + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      zkopirovat();
    };

    function zasranatelkacopy(){
      kezkopceni = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "AKTUÁLNÍ TELEFON: " + telefon + "\n" + "ADRESA PŘÍPOJKY: " + adresa + "\n" + "POZNÁMKA:" + "\n" + "=======================================" + "\n" + "NEPODAŘILO SE PŘIPOJIT K PLATFORMĚ? nepodařilo" + "\n" + "KONTROLA ZAPOJENÍ(KABELY)? ano" + "\n" + "VYPNOUT/ZAPNOUT? ano" + "\n" + "MAC" + "\n" + "=====================================" + "\n" + ip + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      zkopirovat();
    };

    function jinycopy(){
      kezkopceni = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "AKTUÁLNÍ TELEFON: " + telefon + "\n" + "ADRESA PŘÍPOJKY: " + adresa + "\n" + "POZNÁMKA:" + "\n" + "==================================================" + "\n" + ip + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      zkopirovat();
    };

    function natrasecopy(){
      kezkopceni = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "TELEFON VOLAJÍCÍHO: " + telefon + "\n" + "KONTAKTNÍ TELEFON: " + telefon + "\n" + "ADRESA PŘÍPOJKY: " + adresa + "\n" + "===================================" + "\n" + "Klient byl obeznámen o výpadku na trase konektivity." + "\n" + "==================================================" + "\n" + ip + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      zkopirovat();
    };



    function pripojenikabel(){
      pripojeni = "kabel";
      };
    function pripojenioboji(){
      pripojeni = "obojí";
      };
    function jakdlouhofce(){
      jakdlouho = "od rána";
      };
    function jmeno(){
      subjekt = subjekt.slice(0, subjekt.lastIndexOf(" "));
      };
    function jmeno1(){
      subjekt = subjekt.slice(subjekt.indexOf(" "), subjekt.length);
      };
    function vypadkovost(){
      vypadky = "výpadky";
      };
    function stb(){
      vcemkouka = "smartTV";
    };

    function resetfce(){
      elementy = document.getElementsByClassName('form-content');
      spolecnost = elementy[1].innerText;
      subjekt = elementy[4].innerText;
      adresa = elementy[30].innerText;
      telefon = elementy[21].innerText;
      ip = elementy[24].innerText;
      nat_a_vlan = elementy[28].innerText + "\n" + "Vlan" + elementy[29].innerText;
      urlko = document.URL;
      operator = document.getElementsByClassName("hidden-xs")[0].innerText;;
      inicialy = "";
      chrome.storage.local.get(["inic"], function neam(iniciala){
        inicialy = JSON.stringify(iniciala["inic"]);
        inicialy = inicialy.slice(1, inicialy.length-1);
      });
      pripojeni = "wifi";
      jakdlouho = "od rána";
      vypadky = "vypadky";
      vcemkouka = "stb";
    };

    var button_Reset = document.createElement("button");
    var btn_Reset_popisek = document.createTextNode("Reset");
    button_Reset.appendChild(btn_Reset_popisek);
    document.body.appendChild(button_Reset);
    button_Reset.style.position = "fixed";
    button_Reset.style.left = "0.5%";
    button_Reset.style.top = "96%";
    button_Reset.style.backgroundColor = "#3c8dbc";
    button_Reset.style.borderColor = "#367fa9";
    button_Reset.style.color = "#ffffff";
    button_Reset.style.boxSizing = "border-box";
    button_Reset.style.fontSize = "14px";
    button_Reset.style.borderTopLeftRadius = "3px";
    button_Reset.style.borderTopRightRadius = "3px";
    button_Reset.style.borderBottomLeftRadius = "3px";
    button_Reset.style.borderBottomRightRadius = "3px";
    button_Reset.style.borderBotWidth = "1px";
    button_Reset.style.borderTopWidth = "1px";
    button_Reset.style.borderLeftWidth = "1px";
    button_Reset.style.borderRightWidth = "1px";
    button_Reset.style.zIndex = "99";
    button_Reset.onclick = resetfce;

    var button_pripojeni = document.createElement("button");
    var btn_pripojeni_popisek = document.createTextNode("kabel");
    button_pripojeni.appendChild(btn_pripojeni_popisek);
    document.body.appendChild(button_pripojeni);
    button_pripojeni.style.position = "fixed"
    button_pripojeni.style.left = "0.5%";
    button_pripojeni.style.top = "48%"
    button_pripojeni.style.zIndex = "99";
    button_pripojeni.style.backgroundColor = "#3c8dbc";
    button_pripojeni.style.borderColor = "#367fa9";
    button_pripojeni.style.color = "#ffffff";
    button_pripojeni.style.boxSizing = "border-box";
    button_pripojeni.style.fontSize = "14px";
    button_pripojeni.style.borderTopLeftRadius = "3px";
    button_pripojeni.style.borderTopRightRadius = "3px";
    button_pripojeni.style.borderBottomLeftRadius = "3px";
    button_pripojeni.style.borderBottomRightRadius = "3px";
    button_pripojeni.style.borderBotWidth = "1px";
    button_pripojeni.style.borderTopWidth = "1px";
    button_pripojeni.style.borderLeftWidth = "1px";
    button_pripojeni.style.borderRightWidth = "1px";
    button_pripojeni.onclick = pripojenikabel;

    var button_pripojeni_oboji = document.createElement("button");
    var btn_pripojeni_oboji_popisek = document.createTextNode("oboji");
    button_pripojeni_oboji.appendChild(btn_pripojeni_oboji_popisek);
    document.body.appendChild(button_pripojeni_oboji);
    button_pripojeni_oboji.style.position = "fixed";
    button_pripojeni_oboji.style.left = "0.5%";
    button_pripojeni_oboji.style.top = "52%";
    button_pripojeni_oboji.style.zIndex = "99";
    button_pripojeni_oboji.style.backgroundColor = "#3c8dbc";
    button_pripojeni_oboji.style.borderColor = "#367fa9";
    button_pripojeni_oboji.style.color = "#ffffff";
    button_pripojeni_oboji.style.boxSizing = "border-box";
    button_pripojeni_oboji.style.fontSize = "14px";
    button_pripojeni_oboji.style.borderTopLeftRadius = "3px";
    button_pripojeni_oboji.style.borderTopRightRadius = "3px";
    button_pripojeni_oboji.style.borderBottomLeftRadius = "3px";
    button_pripojeni_oboji.style.borderBottomRightRadius = "3px";
    button_pripojeni_oboji.style.borderBotWidth = "1px";
    button_pripojeni_oboji.style.borderTopWidth = "1px";
    button_pripojeni_oboji.style.borderLeftWidth = "1px";
    button_pripojeni_oboji.style.borderRightWidth = "1px";
    button_pripojeni_oboji.onclick = pripojenioboji;

    var button_jakdlouho = document.createElement("button");
    var btn_jakdlouho_popisek = document.createTextNode("od rána");
    button_jakdlouho.appendChild(btn_jakdlouho_popisek);
    document.body.appendChild(button_jakdlouho);
    button_jakdlouho.style.position = "fixed";
    button_jakdlouho.style.left = "0.5%";
    button_jakdlouho.style.top = "56%";
    button_jakdlouho.style.backgroundColor = "#3c8dbc";
    button_jakdlouho.style.borderColor = "#367fa9";
    button_jakdlouho.style.color = "#ffffff";
    button_jakdlouho.style.boxSizing = "border-box";
    button_jakdlouho.style.fontSize = "14px";
    button_jakdlouho.style.borderTopLeftRadius = "3px";
    button_jakdlouho.style.borderTopRightRadius = "3px";
    button_jakdlouho.style.borderBottomLeftRadius = "3px";
    button_jakdlouho.style.borderBottomRightRadius = "3px";
    button_jakdlouho.style.borderBotWidth = "1px";
    button_jakdlouho.style.borderTopWidth = "1px";
    button_jakdlouho.style.borderLeftWidth = "1px";
    button_jakdlouho.style.borderRightWidth = "1px";
    button_jakdlouho.style.zIndex = "99";
    button_jakdlouho.onclick = jakdlouhofce;

    var button_jmeno = document.createElement("button");
    var btn_jmeno_popisek = document.createTextNode("smazat poslední");
    button_jmeno.appendChild(btn_jmeno_popisek);
    document.body.appendChild(button_jmeno);
    button_jmeno.style.position = "fixed";
    button_jmeno.style.left = "0.5%";
    button_jmeno.style.top = "60%";
    button_jmeno.style.backgroundColor = "#3c8dbc";
    button_jmeno.style.borderColor = "#367fa9";
    button_jmeno.style.color = "#ffffff";
    button_jmeno.style.boxSizing = "border-box";
    button_jmeno.style.fontSize = "14px";
    button_jmeno.style.borderTopLeftRadius = "3px";
    button_jmeno.style.borderTopRightRadius = "3px";
    button_jmeno.style.borderBottomLeftRadius = "3px";
    button_jmeno.style.borderBottomRightRadius = "3px";
    button_jmeno.style.borderBotWidth = "1px";
    button_jmeno.style.borderTopWidth = "1px";
    button_jmeno.style.borderLeftWidth = "1px";
    button_jmeno.style.borderRightWidth = "1px";
    button_jmeno.style.zIndex = "99";
    button_jmeno.onclick = jmeno;

    var button_jmeno1 = document.createElement("button");
    var btn_jmeno1_popisek = document.createTextNode("smazat první");
    button_jmeno1.appendChild(btn_jmeno1_popisek);
    document.body.appendChild(button_jmeno1);
    button_jmeno1.style.position = "fixed";
    button_jmeno1.style.left = "0.5%";
    button_jmeno1.style.top = "64%";
    button_jmeno1.style.backgroundColor = "#3c8dbc";
    button_jmeno1.style.borderColor = "#367fa9";
    button_jmeno1.style.color = "#ffffff";
    button_jmeno1.style.boxSizing = "border-box";
    button_jmeno1.style.fontSize = "14px";
    button_jmeno1.style.borderTopLeftRadius = "3px";
    button_jmeno1.style.borderTopRightRadius = "3px";
    button_jmeno1.style.borderBottomLeftRadius = "3px";
    button_jmeno1.style.borderBottomRightRadius = "3px";
    button_jmeno1.style.borderBotWidth = "1px";
    button_jmeno1.style.borderTopWidth = "1px";
    button_jmeno1.style.borderLeftWidth = "1px";
    button_jmeno1.style.borderRightWidth = "1px";
    button_jmeno1.style.zIndex = "99";
    button_jmeno1.onclick = jmeno1;

    var button_vypadky = document.createElement("button");
    var btn_vypadky_popisek = document.createTextNode("výpadky");
    button_vypadky.appendChild(btn_vypadky_popisek);
    document.body.appendChild(button_vypadky);
    button_vypadky.style.position = "fixed";
    button_vypadky.style.left = "0.5%";
    button_vypadky.style.top = "68%";
    button_vypadky.style.zIndex = "99";
    button_vypadky.style.backgroundColor = "#3c8dbc";
    button_vypadky.style.borderColor = "#367fa9";
    button_vypadky.style.color = "#ffffff";
    button_vypadky.style.boxSizing = "border-box";
    button_vypadky.style.fontSize = "14px";
    button_vypadky.style.borderTopLeftRadius = "3px";
    button_vypadky.style.borderTopRightRadius = "3px";
    button_vypadky.style.borderBottomLeftRadius = "3px";
    button_vypadky.style.borderBottomRightRadius = "3px";
    button_vypadky.style.borderBotWidth = "1px";
    button_vypadky.style.borderTopWidth = "1px";
    button_vypadky.style.borderLeftWidth = "1px";
    button_vypadky.style.borderRightWidth = "1px";
    button_vypadky.onclick = vypadkovost;

    var button_platforma = document.createElement("button");
    var btn_platforma_popisek = document.createTextNode("SmartTV");
    button_platforma.appendChild(btn_platforma_popisek);
    document.body.appendChild(button_platforma);
    button_platforma.style.position = "fixed";
    button_platforma.style.left = "0.5%";
    button_platforma.style.top = "72%";
    button_platforma.style.backgroundColor = "#3c8dbc";
    button_platforma.style.borderColor = "#367fa9";
    button_platforma.style.color = "#ffffff";
    button_platforma.style.boxSizing = "border-box";
    button_platforma.style.fontSize = "14px";
    button_platforma.style.borderTopLeftRadius = "3px";
    button_platforma.style.borderTopRightRadius = "3px";
    button_platforma.style.borderBottomLeftRadius = "3px";
    button_platforma.style.borderBottomRightRadius = "3px";
    button_platforma.style.borderBotWidth = "1px";
    button_platforma.style.borderTopWidth = "1px";
    button_platforma.style.borderLeftWidth = "1px";
    button_platforma.style.borderRightWidth = "1px";
    button_platforma.style.zIndex = "99";
    button_platforma.onclick = stb;

    var button_nefunkcnost = document.createElement("button")
    var nefunkcnost_popisek = document.createTextNode("Nefunkčnost");
    button_nefunkcnost.appendChild(nefunkcnost_popisek);
    document.body.appendChild(button_nefunkcnost);
    button_nefunkcnost.style.position = "fixed";
    button_nefunkcnost.style.left = "5%";
    button_nefunkcnost.style.top = "76%";
    button_nefunkcnost.style.backgroundColor = "#3c8dbc";
    button_nefunkcnost.style.borderColor = "#367fa9";
    button_nefunkcnost.style.color = "#ffffff";
    button_nefunkcnost.style.boxSizing = "border-box";
    button_nefunkcnost.style.fontSize = "14px";
    button_nefunkcnost.style.borderTopLeftRadius = "3px";
    button_nefunkcnost.style.borderTopRightRadius = "3px";
    button_nefunkcnost.style.borderBottomLeftRadius = "3px";
    button_nefunkcnost.style.borderBottomRightRadius = "3px";
    button_nefunkcnost.style.borderBotWidth = "1px";
    button_nefunkcnost.style.borderTopWidth = "1px";
    button_nefunkcnost.style.borderLeftWidth = "1px";
    button_nefunkcnost.style.borderRightWidth = "1px";
    button_nefunkcnost.style.zIndex = "99";
    button_nefunkcnost.onclick = nefunkcnost;

    var button_vypadkovost = document.createElement("button")
    var vypadkovost_popisek = document.createTextNode("Nejde Správně");
    button_vypadkovost.appendChild(vypadkovost_popisek);
    document.body.appendChild(button_vypadkovost);
    button_vypadkovost.style.position = "fixed";
    button_vypadkovost.style.left = "5%";
    button_vypadkovost.style.top = "80%";
    button_vypadkovost.style.backgroundColor = "#3c8dbc";
    button_vypadkovost.style.borderColor = "#367fa9";
    button_vypadkovost.style.color = "#ffffff";
    button_vypadkovost.style.boxSizing = "border-box";
    button_vypadkovost.style.fontSize = "14px";
    button_vypadkovost.style.borderTopLeftRadius = "3px";
    button_vypadkovost.style.borderTopRightRadius = "3px";
    button_vypadkovost.style.borderBottomLeftRadius = "3px";
    button_vypadkovost.style.borderBottomRightRadius = "3px";
    button_vypadkovost.style.borderBotWidth = "1px";
    button_vypadkovost.style.borderTopWidth = "1px";
    button_vypadkovost.style.borderLeftWidth = "1px";
    button_vypadkovost.style.borderRightWidth = "1px";
    button_vypadkovost.style.zIndex = "99";
    button_vypadkovost.onclick = nejdespravne;

    var button_zasekanaTelka = document.createElement("button");
    var btn_zasekanaTelka_popisek = document.createTextNode("Zasekaná Telka");
    button_zasekanaTelka.appendChild(btn_zasekanaTelka_popisek);
    document.body.appendChild(button_zasekanaTelka);
    button_zasekanaTelka.style.position = "fixed";
    button_zasekanaTelka.style.left = "5%";
    button_zasekanaTelka.style.top = "84%";
    button_zasekanaTelka.style.backgroundColor = "#3c8dbc";
    button_zasekanaTelka.style.borderColor = "#367fa9";
    button_zasekanaTelka.style.color = "#ffffff";
    button_zasekanaTelka.style.boxSizing = "border-box";
    button_zasekanaTelka.style.fontSize = "14px";
    button_zasekanaTelka.style.borderTopLeftRadius = "3px";
    button_zasekanaTelka.style.borderTopRightRadius = "3px";
    button_zasekanaTelka.style.borderBottomLeftRadius = "3px";
    button_zasekanaTelka.style.borderBottomRightRadius = "3px";
    button_zasekanaTelka.style.borderBotWidth = "1px";
    button_zasekanaTelka.style.borderTopWidth = "1px";
    button_zasekanaTelka.style.borderLeftWidth = "1px";
    button_zasekanaTelka.style.borderRightWidth = "1px";
    button_zasekanaTelka.style.zIndex = "99";
    button_zasekanaTelka.onclick = tvnejdespravne;

    var button_zasranaTelka = document.createElement("button");
    var btn_zasranaTelka_popisek = document.createTextNode("TV Nejde Vůbec");
    button_zasranaTelka.appendChild(btn_zasranaTelka_popisek);
    document.body.appendChild(button_zasranaTelka);
    button_zasranaTelka.style.position = "fixed";
    button_zasranaTelka.style.left = "5%";
    button_zasranaTelka.style.top = "88%";
    button_zasranaTelka.style.backgroundColor = "#3c8dbc";
    button_zasranaTelka.style.borderColor = "#367fa9";
    button_zasranaTelka.style.color = "#ffffff";
    button_zasranaTelka.style.boxSizing = "border-box";
    button_zasranaTelka.style.fontSize = "14px";
    button_zasranaTelka.style.borderTopLeftRadius = "3px";
    button_zasranaTelka.style.borderTopRightRadius = "3px";
    button_zasranaTelka.style.borderBottomLeftRadius = "3px";
    button_zasranaTelka.style.borderBottomRightRadius = "3px";
    button_zasranaTelka.style.borderBotWidth = "1px";
    button_zasranaTelka.style.borderTopWidth = "1px";
    button_zasranaTelka.style.borderLeftWidth = "1px";
    button_zasranaTelka.style.borderRightWidth = "1px";
    button_zasranaTelka.style.zIndex = "99";
    button_zasranaTelka.onclick = tvnejdevubec;

    var button_Jiny = document.createElement("button");
    var btn_Jiny_popisek = document.createTextNode("Jiný");
    button_Jiny.appendChild(btn_Jiny_popisek);
    document.body.appendChild(button_Jiny);
    button_Jiny.style.position = "fixed";
    button_Jiny.style.left = "5%";
    button_Jiny.style.top = "92%";
    button_Jiny.style.backgroundColor = "#3c8dbc";
    button_Jiny.style.borderColor = "#367fa9";
    button_Jiny.style.color = "#ffffff";
    button_Jiny.style.boxSizing = "border-box";
    button_Jiny.style.fontSize = "14px";
    button_Jiny.style.borderTopLeftRadius = "3px";
    button_Jiny.style.borderTopRightRadius = "3px";
    button_Jiny.style.borderBottomLeftRadius = "3px";
    button_Jiny.style.borderBottomRightRadius = "3px";
    button_Jiny.style.borderBotWidth = "1px";
    button_Jiny.style.borderTopWidth = "1px";
    button_Jiny.style.borderLeftWidth = "1px";
    button_Jiny.style.borderRightWidth = "1px";
    button_Jiny.style.zIndex = "99";
    button_Jiny.onclick = jiny;
  }
  else if (urlko == "e") {
    var elementy = document.getElementsByClassName('col-md-12');
    var elementy4 = document.getElementsByClassName('col-md-4')[1].innerText;
    var pozice = document.getElementsByClassName('box-header')[4];
    var kezkopceni = "";
    var ip = elementy4.slice(elementy4.indexOf('IP'), elementy4.indexOf("/"));
    var oblast = elementy4.slice(elementy4.indexOf('Oblast:'), elementy4.indexOf("NAT")-2);
    var nat_a_vlan = elementy4.slice (elementy4.indexOf('NAT'), elementy4.indexOf("Management")-1);
    var urlko = document.URL;
    var operator = document.getElementsByClassName("hidden-xs")[0].innerText;
    var inicialy = "";
    chrome.storage.local.get(["inic"], function neam(iniciala){
      inicialy = JSON.stringify(iniciala["inic"]);
      inicialy = inicialy.slice(1, inicialy.length-1);
    });
    var text = document.getElementById('ip_info_ticket_text');
    var predmet = document.getElementById('ip_info_ticket_subject');
    var pripojeni = "wifi";
    var jakdlouho = "od včerejška večer";
    var vypadky = "down , up , ping";
    var vcemkouka = "stb";
    var sajdbar = document.getElementsByClassName("main-sidebar")[0];
    var telefon = "";
    var spolecnost = "";
    var subjekt = "";
    var adresa = "";
    var vip = "";
    function zkopirovano(){
      alert("zkopírováno");
    };

    function zkopirovat(){
      navigator.clipboard.writeText(kezkopceni).then(zkopirovano);
    };

    sajdbar.style.zIndex = "98";

    function prirazeniPromennych(){
    for (i=1; i<=elementy.length-1; i++){
      switch(true) {
          case (elementy[i].innerText.startsWith(" VIP")):
            vip = "VIP - ";
            break;
          case (elementy[i].innerText.startsWith("Společnost skupiny")):
            spolecnost = elementy[i].innerText;
            spolecnost = spolecnost.slice(spolecnost.indexOf(":")+2, spolecnost.length);
            break;
          case (elementy[i].innerText.startsWith("Společnost:")):
            subjekt = elementy[i].innerText;
            subjekt = subjekt.slice(subjekt.indexOf(":")+2, subjekt.indexOf("IČ")-1);
            break;
          case (elementy[i].innerText.startsWith("Adresa")):
            adresa = elementy[i].innerText;
            adresa = adresa.slice(adresa.indexOf(":")+2, adresa.length);
            break;
          case (elementy[i].innerText[0] == "+"):
            telefon = telefon + elementy[i].innerText + ", ";
            break;
      }}};
      prirazeniPromennych();

    function telefoncopy(){
      kezkopceni = telefon;
      zkopirovat();
    };

    function nefunkcnost(){
      text.value = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "NEFUNGUJE NA ŽÁDNÉM ZAŘÍZENÍ? ne" + "\n" + "JAK DLOUHO? " + jakdlouho + "\n" + "ROUTER, KABEL - WIFI? " + pripojeni + "\n" + "ZKOUŠEL VYPNOUT/ZAPNOUT? ano" + "\n" + "STAV PŘIPOJENÍ? bez internetu" + "\n" + "KONTROLA ZAPOJENÍ? ano" + "\n" + "AKTUÁLNÍ TELEFON: " + telefon + "\n" + "ADRESA PŘÍPOJKY: " + adresa + "\n" + "POZNÁMKA:" + "\n" + "==================================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      predmet.value = vip + subjekt + " - " + adresa + ": " + "Nefunkční Internet";
      };
    function nejdespravne(){
      text.value = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "VÝPADKY/RYCHLOST/ODEZVA? " + vypadky + "\n" + "ROUTER, KABEL - WIFI? " + pripojeni + "\n" + "WRT - VYPNOUT ZAPNOUT /PŘELADIT KANÁL? ano, přeladit ne" + "\n" + "PROBLÉMOVÁ DOBA - KDY, JAK ČASTO, JAK DLOUHO? náhodně" + "\n" + "AKTUÁLNÍ TELEFON: " + telefon + "\n" + "ADRESA PŘÍPOJKY: " + adresa + "\n" + "POZNÁMKA:" + "\n" + "==================================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      predmet.value = vip + subjekt + " - " + adresa + ": " + "Internet Nefunguje Správně";
      };
    function tvnejdespravne(){
      text.value = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "AKTUÁLNÍ TELEFON: " + telefon + "\n" + "ADRESA PŘÍPOJKY: " + adresa + "\n" + "==================================================" + "\n" + "FUNGUJE INTERNET? ano" + "\n" + "STB , V PROHLÍŽEČI, SMARTTV,  TELEFON/TAB? " + vcemkouka + "\n" + "NEJDE PROGRAM/NOVA? jde" + "\n" + "SEKÁ SE ŽIVÉ VYSÍLÁNÍ/PROGRAM? ano" + "\n" + "SEKÁ SE ARCHIV/PROGRAM? ano" + "\n" + "KDY/DOBA KDY SE ZASEKL A PROGRAM " + jakdlouho + "\n" + "POSUNUT ZVUK VŮČI OBRAZU? ne" + "\n" + "MAC: " + "\n" + "POZNÁMKA: " + "\n" + "==========================================================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      predmet.value = vip + subjekt + " - " + adresa + ": " + "TV Nejde Správně";
      };
    function tvnejdevubec(){
      text.value = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "AKTUÁLNÍ TELEFON: " + telefon + "\n" + "ADRESA PŘÍPOJKY: " + adresa + "\n" + "POZNÁMKA:" + "\n" + "=======================================" + "\n" + "NEPODAŘILO SE PŘIPOJIT K PLATFORMĚ? nepodařilo" + "\n" + "KONTROLA ZAPOJENÍ(KABELY)? ano" + "\n" + "VYPNOUT/ZAPNOUT? ano" + "\n" + "MAC" + "\n" + "=====================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      predmet.value = vip + subjekt + " - " + adresa + ": " + "TV Nejde Vůbec";
    };
    function jiny(){
      text.value = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "AKTUÁLNÍ TELEFON: " + telefon + "\n" + "ADRESA PŘÍPOJKY: " + adresa + "\n" + "POZNÁMKA:" + "\n" + "==================================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      predmet.value = vip + subjekt + " - " + adresa + ": " + "Jiný";
    };

    function pripojenikabel(){
      pripojeni = "kabel";
      };
    function pripojenioboji(){
      pripojeni = "obojí";
      };
    function jakdlouhofce(){
      jakdlouho = "od rána";
      };
    function jmeno(){
      subjekt = subjekt.slice(0, subjekt.lastIndexOf(" "));
      };
    function jmeno1(){
      subjekt = subjekt.slice(subjekt.indexOf(" "), subjekt.length);
      };
    function vypadkovost(){
      vypadky = "výpadky";
      };
    function stb(){
      vcemkouka = "smartTV";
    };

    function resetfce(){
      ip = elementy4.slice(elementy4.indexOf('IP'), elementy4.indexOf("/30"));
      oblast = elementy4.slice(elementy4.indexOf('Oblast:'), elementy4.indexOf("NAT")-2);
      nat_a_vlan = elementy4.slice (elementy4.indexOf('NAT'), elementy4.indexOf("Management")-1);
      urlko = document.URL;
      operator = document.getElementsByClassName("hidden-xs")[0].innerText;;
      inicialy = "";
      chrome.storage.local.get(["inic"], function neam(iniciala){
        inicialy = JSON.stringify(iniciala["inic"]);
        inicialy = inicialy.slice(1, inicialy.length-1);
      });
      text = document.getElementById('ip_info_ticket_text');
      predmet = document.getElementById('ip_info_ticket_subject');
      pripojeni = "wifi";
      jakdlouho = "od včerejška večer";
      vypadky = "down , up , ping";
      vcemkouka = "stb";
      telefon = "";
      prirazeniPromennych();
    };

    var button_pripojeni = document.createElement("button");
    var btn_pripojeni_popisek = document.createTextNode("kabel");
    button_pripojeni.appendChild(btn_pripojeni_popisek);
    document.body.appendChild(button_pripojeni);
    button_pripojeni.style.position = "fixed"
    button_pripojeni.style.left = "0.5%";
    button_pripojeni.style.top = "48%"
    button_pripojeni.style.zIndex = "99";
    button_pripojeni.style.backgroundColor = "#3c8dbc";
    button_pripojeni.style.borderColor = "#367fa9";
    button_pripojeni.style.color = "#ffffff";
    button_pripojeni.style.boxSizing = "border-box";
    button_pripojeni.style.fontSize = "14px";
    button_pripojeni.style.borderTopLeftRadius = "3px";
    button_pripojeni.style.borderTopRightRadius = "3px";
    button_pripojeni.style.borderBottomLeftRadius = "3px";
    button_pripojeni.style.borderBottomRightRadius = "3px";
    button_pripojeni.style.borderBotWidth = "1px";
    button_pripojeni.style.borderTopWidth = "1px";
    button_pripojeni.style.borderLeftWidth = "1px";
    button_pripojeni.style.borderRightWidth = "1px";
    button_pripojeni.onclick = pripojenikabel;

    var button_pripojeni_oboji = document.createElement("button");
    var btn_pripojeni_oboji_popisek = document.createTextNode("oboji");
    button_pripojeni_oboji.appendChild(btn_pripojeni_oboji_popisek);
    document.body.appendChild(button_pripojeni_oboji);
    button_pripojeni_oboji.style.position = "fixed";
    button_pripojeni_oboji.style.left = "0.5%";
    button_pripojeni_oboji.style.top = "52%";
    button_pripojeni_oboji.style.zIndex = "99";
    button_pripojeni_oboji.style.backgroundColor = "#3c8dbc";
    button_pripojeni_oboji.style.borderColor = "#367fa9";
    button_pripojeni_oboji.style.color = "#ffffff";
    button_pripojeni_oboji.style.boxSizing = "border-box";
    button_pripojeni_oboji.style.fontSize = "14px";
    button_pripojeni_oboji.style.borderTopLeftRadius = "3px";
    button_pripojeni_oboji.style.borderTopRightRadius = "3px";
    button_pripojeni_oboji.style.borderBottomLeftRadius = "3px";
    button_pripojeni_oboji.style.borderBottomRightRadius = "3px";
    button_pripojeni_oboji.style.borderBotWidth = "1px";
    button_pripojeni_oboji.style.borderTopWidth = "1px";
    button_pripojeni_oboji.style.borderLeftWidth = "1px";
    button_pripojeni_oboji.style.borderRightWidth = "1px";
    button_pripojeni_oboji.onclick = pripojenioboji;

    var button_jakdlouho = document.createElement("button");
    var btn_jakdlouho_popisek = document.createTextNode("od rána");
    button_jakdlouho.appendChild(btn_jakdlouho_popisek);
    document.body.appendChild(button_jakdlouho);
    button_jakdlouho.style.position = "fixed";
    button_jakdlouho.style.left = "0.5%";
    button_jakdlouho.style.top = "56%";
    button_jakdlouho.style.backgroundColor = "#3c8dbc";
    button_jakdlouho.style.borderColor = "#367fa9";
    button_jakdlouho.style.color = "#ffffff";
    button_jakdlouho.style.boxSizing = "border-box";
    button_jakdlouho.style.fontSize = "14px";
    button_jakdlouho.style.borderTopLeftRadius = "3px";
    button_jakdlouho.style.borderTopRightRadius = "3px";
    button_jakdlouho.style.borderBottomLeftRadius = "3px";
    button_jakdlouho.style.borderBottomRightRadius = "3px";
    button_jakdlouho.style.borderBotWidth = "1px";
    button_jakdlouho.style.borderTopWidth = "1px";
    button_jakdlouho.style.borderLeftWidth = "1px";
    button_jakdlouho.style.borderRightWidth = "1px";
    button_jakdlouho.style.zIndex = "99";
    button_jakdlouho.onclick = jakdlouhofce;

    var button_jmeno = document.createElement("button");
    var btn_jmeno_popisek = document.createTextNode("smazat poslední");
    button_jmeno.appendChild(btn_jmeno_popisek);
    document.body.appendChild(button_jmeno);
    button_jmeno.style.position = "fixed";
    button_jmeno.style.left = "0.5%";
    button_jmeno.style.top = "60%";
    button_jmeno.style.backgroundColor = "#3c8dbc";
    button_jmeno.style.borderColor = "#367fa9";
    button_jmeno.style.color = "#ffffff";
    button_jmeno.style.boxSizing = "border-box";
    button_jmeno.style.fontSize = "14px";
    button_jmeno.style.borderTopLeftRadius = "3px";
    button_jmeno.style.borderTopRightRadius = "3px";
    button_jmeno.style.borderBottomLeftRadius = "3px";
    button_jmeno.style.borderBottomRightRadius = "3px";
    button_jmeno.style.borderBotWidth = "1px";
    button_jmeno.style.borderTopWidth = "1px";
    button_jmeno.style.borderLeftWidth = "1px";
    button_jmeno.style.borderRightWidth = "1px";
    button_jmeno.style.zIndex = "99";
    button_jmeno.onclick = jmeno;

    var button_jmeno1 = document.createElement("button");
    var btn_jmeno1_popisek = document.createTextNode("smazat první");
    button_jmeno1.appendChild(btn_jmeno1_popisek);
    document.body.appendChild(button_jmeno1);
    button_jmeno1.style.position = "fixed";
    button_jmeno1.style.left = "0.5%";
    button_jmeno1.style.top = "64%";
    button_jmeno1.style.backgroundColor = "#3c8dbc";
    button_jmeno1.style.borderColor = "#367fa9";
    button_jmeno1.style.color = "#ffffff";
    button_jmeno1.style.boxSizing = "border-box";
    button_jmeno1.style.fontSize = "14px";
    button_jmeno1.style.borderTopLeftRadius = "3px";
    button_jmeno1.style.borderTopRightRadius = "3px";
    button_jmeno1.style.borderBottomLeftRadius = "3px";
    button_jmeno1.style.borderBottomRightRadius = "3px";
    button_jmeno1.style.borderBotWidth = "1px";
    button_jmeno1.style.borderTopWidth = "1px";
    button_jmeno1.style.borderLeftWidth = "1px";
    button_jmeno1.style.borderRightWidth = "1px";
    button_jmeno1.style.zIndex = "99";
    button_jmeno1.onclick = jmeno1;

    var button_vypadky = document.createElement("button");
    var btn_vypadky_popisek = document.createTextNode("výpadky");
    button_vypadky.appendChild(btn_vypadky_popisek);
    document.body.appendChild(button_vypadky);
    button_vypadky.style.position = "fixed";
    button_vypadky.style.left = "0.5%";
    button_vypadky.style.top = "68%";
    button_vypadky.style.zIndex = "99";
    button_vypadky.style.backgroundColor = "#3c8dbc";
    button_vypadky.style.borderColor = "#367fa9";
    button_vypadky.style.color = "#ffffff";
    button_vypadky.style.boxSizing = "border-box";
    button_vypadky.style.fontSize = "14px";
    button_vypadky.style.borderTopLeftRadius = "3px";
    button_vypadky.style.borderTopRightRadius = "3px";
    button_vypadky.style.borderBottomLeftRadius = "3px";
    button_vypadky.style.borderBottomRightRadius = "3px";
    button_vypadky.style.borderBotWidth = "1px";
    button_vypadky.style.borderTopWidth = "1px";
    button_vypadky.style.borderLeftWidth = "1px";
    button_vypadky.style.borderRightWidth = "1px";
    button_vypadky.onclick = vypadkovost;

    var button_platforma = document.createElement("button");
    var btn_platforma_popisek = document.createTextNode("SmartTV");
    button_platforma.appendChild(btn_platforma_popisek);
    document.body.appendChild(button_platforma);
    button_platforma.style.position = "fixed";
    button_platforma.style.left = "0.5%";
    button_platforma.style.top = "72%";
    button_platforma.style.backgroundColor = "#3c8dbc";
    button_platforma.style.borderColor = "#367fa9";
    button_platforma.style.color = "#ffffff";
    button_platforma.style.boxSizing = "border-box";
    button_platforma.style.fontSize = "14px";
    button_platforma.style.borderTopLeftRadius = "3px";
    button_platforma.style.borderTopRightRadius = "3px";
    button_platforma.style.borderBottomLeftRadius = "3px";
    button_platforma.style.borderBottomRightRadius = "3px";
    button_platforma.style.borderBotWidth = "1px";
    button_platforma.style.borderTopWidth = "1px";
    button_platforma.style.borderLeftWidth = "1px";
    button_platforma.style.borderRightWidth = "1px";
    button_platforma.style.zIndex = "99";
    button_platforma.onclick = stb;

    var button_nefunkcnost = document.createElement("button")
    var nefunkcnost_popisek = document.createTextNode("Nefunkčnost");
    button_nefunkcnost.appendChild(nefunkcnost_popisek);
    document.body.appendChild(button_nefunkcnost);
    button_nefunkcnost.style.position = "fixed";
    button_nefunkcnost.style.left = "5%";
    button_nefunkcnost.style.top = "76%";
    button_nefunkcnost.style.backgroundColor = "#3c8dbc";
    button_nefunkcnost.style.borderColor = "#367fa9";
    button_nefunkcnost.style.color = "#ffffff";
    button_nefunkcnost.style.boxSizing = "border-box";
    button_nefunkcnost.style.fontSize = "14px";
    button_nefunkcnost.style.borderTopLeftRadius = "3px";
    button_nefunkcnost.style.borderTopRightRadius = "3px";
    button_nefunkcnost.style.borderBottomLeftRadius = "3px";
    button_nefunkcnost.style.borderBottomRightRadius = "3px";
    button_nefunkcnost.style.borderBotWidth = "1px";
    button_nefunkcnost.style.borderTopWidth = "1px";
    button_nefunkcnost.style.borderLeftWidth = "1px";
    button_nefunkcnost.style.borderRightWidth = "1px";
    button_nefunkcnost.style.zIndex = "99";
    button_nefunkcnost.onclick = nefunkcnost;

    var button_vypadkovost = document.createElement("button")
    var vypadkovost_popisek = document.createTextNode("Nejde Správně");
    button_vypadkovost.appendChild(vypadkovost_popisek);
    document.body.appendChild(button_vypadkovost);
    button_vypadkovost.style.position = "fixed";
    button_vypadkovost.style.left = "5%";
    button_vypadkovost.style.top = "80%";
    button_vypadkovost.style.backgroundColor = "#3c8dbc";
    button_vypadkovost.style.borderColor = "#367fa9";
    button_vypadkovost.style.color = "#ffffff";
    button_vypadkovost.style.boxSizing = "border-box";
    button_vypadkovost.style.fontSize = "14px";
    button_vypadkovost.style.borderTopLeftRadius = "3px";
    button_vypadkovost.style.borderTopRightRadius = "3px";
    button_vypadkovost.style.borderBottomLeftRadius = "3px";
    button_vypadkovost.style.borderBottomRightRadius = "3px";
    button_vypadkovost.style.borderBotWidth = "1px";
    button_vypadkovost.style.borderTopWidth = "1px";
    button_vypadkovost.style.borderLeftWidth = "1px";
    button_vypadkovost.style.borderRightWidth = "1px";
    button_vypadkovost.style.zIndex = "99";
    button_vypadkovost.onclick = nejdespravne;

    var button_zasekanaTelka = document.createElement("button");
    var btn_zasekanaTelka_popisek = document.createTextNode("Zasekaná Telka");
    button_zasekanaTelka.appendChild(btn_zasekanaTelka_popisek);
    document.body.appendChild(button_zasekanaTelka);
    button_zasekanaTelka.style.position = "fixed";
    button_zasekanaTelka.style.left = "5%";
    button_zasekanaTelka.style.top = "84%";
    button_zasekanaTelka.style.backgroundColor = "#3c8dbc";
    button_zasekanaTelka.style.borderColor = "#367fa9";
    button_zasekanaTelka.style.color = "#ffffff";
    button_zasekanaTelka.style.boxSizing = "border-box";
    button_zasekanaTelka.style.fontSize = "14px";
    button_zasekanaTelka.style.borderTopLeftRadius = "3px";
    button_zasekanaTelka.style.borderTopRightRadius = "3px";
    button_zasekanaTelka.style.borderBottomLeftRadius = "3px";
    button_zasekanaTelka.style.borderBottomRightRadius = "3px";
    button_zasekanaTelka.style.borderBotWidth = "1px";
    button_zasekanaTelka.style.borderTopWidth = "1px";
    button_zasekanaTelka.style.borderLeftWidth = "1px";
    button_zasekanaTelka.style.borderRightWidth = "1px";
    button_zasekanaTelka.style.zIndex = "99";
    button_zasekanaTelka.onclick = tvnejdespravne;

    var button_zasranaTelka = document.createElement("button");
    var btn_zasranaTelka_popisek = document.createTextNode("TV Nejde Vůbec");
    button_zasranaTelka.appendChild(btn_zasranaTelka_popisek);
    document.body.appendChild(button_zasranaTelka);
    button_zasranaTelka.style.position = "fixed";
    button_zasranaTelka.style.left = "5%";
    button_zasranaTelka.style.top = "88%";
    button_zasranaTelka.style.backgroundColor = "#3c8dbc";
    button_zasranaTelka.style.borderColor = "#367fa9";
    button_zasranaTelka.style.color = "#ffffff";
    button_zasranaTelka.style.boxSizing = "border-box";
    button_zasranaTelka.style.fontSize = "14px";
    button_zasranaTelka.style.borderTopLeftRadius = "3px";
    button_zasranaTelka.style.borderTopRightRadius = "3px";
    button_zasranaTelka.style.borderBottomLeftRadius = "3px";
    button_zasranaTelka.style.borderBottomRightRadius = "3px";
    button_zasranaTelka.style.borderBotWidth = "1px";
    button_zasranaTelka.style.borderTopWidth = "1px";
    button_zasranaTelka.style.borderLeftWidth = "1px";
    button_zasranaTelka.style.borderRightWidth = "1px";
    button_zasranaTelka.style.zIndex = "99";
    button_zasranaTelka.onclick = tvnejdevubec;

    var button_Jiny = document.createElement("button");
    var btn_Jiny_popisek = document.createTextNode("Jiný");
    button_Jiny.appendChild(btn_Jiny_popisek);
    document.body.appendChild(button_Jiny);
    button_Jiny.style.position = "fixed";
    button_Jiny.style.left = "5%";
    button_Jiny.style.top = "92%";
    button_Jiny.style.backgroundColor = "#3c8dbc";
    button_Jiny.style.borderColor = "#367fa9";
    button_Jiny.style.color = "#ffffff";
    button_Jiny.style.boxSizing = "border-box";
    button_Jiny.style.fontSize = "14px";
    button_Jiny.style.borderTopLeftRadius = "3px";
    button_Jiny.style.borderTopRightRadius = "3px";
    button_Jiny.style.borderBottomLeftRadius = "3px";
    button_Jiny.style.borderBottomRightRadius = "3px";
    button_Jiny.style.borderBotWidth = "1px";
    button_Jiny.style.borderTopWidth = "1px";
    button_Jiny.style.borderLeftWidth = "1px";
    button_Jiny.style.borderRightWidth = "1px";
    button_Jiny.style.zIndex = "99";
    button_Jiny.onclick = jiny;

    var button_Reset = document.createElement("button");
    var btn_Reset_popisek = document.createTextNode("Reset");
    button_Reset.appendChild(btn_Reset_popisek);
    document.body.appendChild(button_Reset);
    button_Reset.style.position = "fixed";
    button_Reset.style.left = "0.5%";
    button_Reset.style.top = "96%";
    button_Reset.style.backgroundColor = "#3c8dbc";
    button_Reset.style.borderColor = "#367fa9";
    button_Reset.style.color = "#ffffff";
    button_Reset.style.boxSizing = "border-box";
    button_Reset.style.fontSize = "14px";
    button_Reset.style.borderTopLeftRadius = "3px";
    button_Reset.style.borderTopRightRadius = "3px";
    button_Reset.style.borderBottomLeftRadius = "3px";
    button_Reset.style.borderBottomRightRadius = "3px";
    button_Reset.style.zIndex = "99";
    button_Reset.onclick = resetfce;

    var button_kopirovattelefon = document.createElement("button")
    var kopirovattelefon_popisek = document.createTextNode("kopirovat_telefon");
    button_kopirovattelefon.appendChild(kopirovattelefon_popisek);
    document.body.appendChild(button_kopirovattelefon);
    button_kopirovattelefon.style.position = "fixed";
    button_kopirovattelefon.style.left = "5%";
    button_kopirovattelefon.style.top = "96%";
    button_kopirovattelefon.style.backgroundColor = "#3c8dbc";
    button_kopirovattelefon.style.borderColor = "#367fa9";
    button_kopirovattelefon.style.color = "#ffffff";
    button_kopirovattelefon.style.boxSizing = "border-box";
    button_kopirovattelefon.style.fontSize = "14px";
    button_kopirovattelefon.style.borderTopLeftRadius = "3px";
    button_kopirovattelefon.style.borderTopRightRadius = "3px";
    button_kopirovattelefon.style.borderBottomLeftRadius = "3px";
    button_kopirovattelefon.style.borderBottomRightRadius = "3px";
    button_kopirovattelefon.style.zIndex = "99";
    button_kopirovattelefon.onclick = telefoncopy;
  }};
