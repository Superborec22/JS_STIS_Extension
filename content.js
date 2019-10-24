window.onload = function(){
  urlko = document.URL[24];
  if(urlko == "c"){
    var elementy;
    var spolecnost = document.getElementsByClassName("customer_holdingCompany form-group")[0].innerText;
    var subjekt = document.getElementsByClassName("customer_company form-group")[0].innerText;
    var adresa = document.getElementsByClassName('customer_connectionAddress form-group')[0].innerText;
    var telefon;
    var ip;
    var nat_a_vlan;
    var vip;
    var inputjakdlouho;
    var inputTelefon;
    var dodatekpripojeni = "";
    var dodatekproblem = "";
    var zobrazjmeno = "";
    var dodatekvcemkouka = "";

    try{
      elementy = document.getElementsByClassName("form-content");
      spolecnost = spolecnost.slice(19, spolecnost.length);
      subjekt = subjekt.slice(11, subjekt.length);
      adresa = adresa.slice(16, adresa.length);
    }
    catch(TypeError){
      elementy = document.getElementsByClassName("form-content");
      spolecnost = spolecnost.slice(19, spolecnost.length);
      subjekt = subjekt.slice(11, subjekt.length);
      adresa = adresa.slice(16, adresa.length);
    };

    function prirazeniPromennych(){
    for (i=1; i<=elementy.length-1; i++){
      switch(true) {
          case (elementy[i].innerText.startsWith(" VIP")):
            vip = "VIP - ";
            break;
          case (elementy[i].innerText.startsWith("+")):
            if (telefon === undefined){
              telefon = elementy[i].innerText;
            } else {
            telefon = telefon + ", " + elementy[i].innerText;
          }
            break;
          case (elementy[i].innerText.startsWith("10.")):
            if(elementy[i].innerText.substr(elementy[i].innerText.length - 4).includes(".")){
            ip = elementy[i].innerText;
            };
            break;
          case (elementy[i].innerText.startsWith("NAT")):
            nat_a_vlan = elementy[i].innerText + "\n" + "Vlan" + elementy[i+1].innerText;
            break;
          }}};

    prirazeniPromennych();
    var urlko = document.URL;
    var operator = document.getElementsByClassName("hidden-xs")[1].innerText;
    var inicialy = "";
    chrome.storage.local.get(["inic"], function neam(iniciala){
      inicialy = JSON.stringify(iniciala["inic"]);
      inicialy = inicialy.slice(1, inicialy.length-1);
    });
    var pripojeni = "wifi";
    var vypadky = "vypadky";
    var vcemkouka = "stb";
    var sajdbar = document.getElementsByClassName("main-sidebar")[0];
    var kezkopceni = "";
    sajdbar.style.zIndex = "98";

    function zkopirovano(){
      alert("zkopírováno");
      setTimeout(function upozorneni(){switch(true){
        case(spolecnost == "Internet 7D s.r.o."):
        alert("Pozor, přesunout do fronty Plzeň")
        case(spolecnost == "SITKOM spol. s r.o."):
        alert("Pozor, přesunout do fronty Uherské Hradiště");
        case(spolecnost == "inet4 s.r.o."):
        alert("Pozor, přesunout do fronty inet");
        case(spolecnost == "SIMELON, s.r.o."):
        alert("Pozor, přesunout do fronty Písek");
      };}, 3000);
    };

    function zkopirovat(){
      navigator.clipboard.writeText(kezkopceni).then(zkopirovano);

    };

    function nefunkcnostcopy(){
      button_nefunkcnost.style.top = "34%";
     button_vypadkovost.style.top = "70%";
     button_zasekanaTelka.style.top = "76%";
     button_zasranaTelka.style.top = "82%";
     button_Jiny.style.top = "88%";
     button_naTrase.style.top = "94%";
     popisek_pripojeni.style.display = "initial";
     popisek_pripojeni.style.top = "41%";
     button_pripojeni_wifi.style.display = "initial";
     button_pripojeni_wifi.style.top = "45%";
     button_pripojeni.style.display = "initial";
     button_pripojeni.style.top = "45%";
     button_pripojeni_oboji.style.display = "initial";
     button_pripojeni_oboji.style.top = "45%";
     popisek_jakdlouho.style.display = "initial";
     popisek_jakdlouho.style.top = "49%";
     inputjakdlouho.style.display = "initial";
     inputjakdlouho.style.top = "49%";
     button_jakdlouho_vecer.style.display = "initial";
     button_jakdlouho_vecer.style.top = "53%";
     button_jakdlouho.style.display = "initial";
     button_jakdlouho.style.top = "53%";
     popisek_telefon.style.display = "initial";
     popisek_telefon.style.top = "57%";
     inputTelefon.style.display = "initial";
     inputTelefon.style.top = "56.5%";
     popisek_adresa.style.display = "initial";
     popisek_adresa.style.top = "61%"
     inputadresa.style.display = "initial";
     inputadresa.style.top = "61%";
     button_vypadky.style.display = "none";
     button_rychlost.style.display = "none";
     button_platforma.style.display = "none";
     button_stb.style.display = "none";
     button_prohlizec.style.display = "none";
     button_tablet.style.display = "none";
     popisek_vcemkouka.style.display = "none";
     button_ping.style.display = "none";
     mac.style.display = "none";
      if(kontrola_zakliknuti_nefunkcnost === true){
        kezkopceni = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "NEFUNGUJE NA ŽÁDNÉM ZAŘÍZENÍ? ne" + "\n" + "JAK DLOUHO? " + inputjakdlouho.value + "\n" + "ROUTER, KABEL - WIFI? " + pripojeni + "\n" + "ZKOUŠEL VYPNOUT/ZAPNOUT? ano" + "\n" + "STAV PŘIPOJENÍ? bez internetu" + "\n" + "KONTROLA ZAPOJENÍ? ano" + "\n" + "TELEFON VOLAJÍCÍHO: " + inputTelefon.value + "\n" + "KONTAKTNÍ TELEFON: " + inputTelefon.value + "\n" + "ADRESA PŘÍPOJKY: " + inputadresa.value + "\n" + "POZNÁMKA:" + "\n" + "==================================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
        zkopirovat();
        kontrola_zakliknuti_tvnejdevubec = false;
        kontrola_zakliknuti_tvnejdespravne= false;
        kontrola_zakliknuti_nefunkcnost = false;
        kontrola_zakliknuti_vypadkovost = false;
        kontrola_zakliknuti_jiny = false;
        kontrola_zakliknuti_natrase = false;
        button_nefunkcnost.innerText = "Nefunkční Internet";
        button_nefunkcnost.style.backgroundColor = "#222D32";
      } else{
        button_nefunkcnost.style.backgroundColor = "#00d000";
        button_nefunkcnost.innerText = "Aktualizovat formulář";
        kontrola_zakliknuti_nefunkcnost = true;
        kontrola_zakliknuti_tvnejdevubec = false;
        kontrola_zakliknuti_tvnejdespravne= false;
        kontrola_zakliknuti_vypadkovost = false;
        kontrola_zakliknuti_jiny = false;
        kontrola_zakliknuti_natrase = false;
        button_zasekanaTelka.innerText = "TV Nejde Správně";
        button_vypadkovost.innerText = "Internet Nejde Správně";
        button_Jiny.innerText = "Jiný";
        button_naTrase.innerText = "Na Trase";
        button_zasranaTelka.innerText = "TV Nejde Vůbec";
        button_vypadkovost.style.backgroundColor = "#222D32";
        button_zasekanaTelka.style.backgroundColor = "#222D32";
        button_zasranaTelka.style.backgroundColor = "#222D32";
        button_Jiny.style.backgroundColor = "#222D32";
        button_naTrase.style.backgroundColor = "#222D32";
      }};

     function vypadkovostcopy(){
       button_nefunkcnost.style.top = "34%";
      button_vypadkovost.style.top = "40%";
      button_zasekanaTelka.style.top = "76%";
      button_zasranaTelka.style.top = "82%";
      button_Jiny.style.top = "88%";
      button_naTrase.style.top = "94%";
      popisek_pripojeni.style.display = "initial";
      popisek_pripojeni.style.top = "47%";
      button_pripojeni_wifi.style.display = "initial";
      button_pripojeni_wifi.style.top = "50.5%";
      button_pripojeni.style.display = "initial";
      button_pripojeni.style.top = "50.5%";
      button_pripojeni_oboji.style.display = "initial";
      button_pripojeni_oboji.style.top = "50.5%";
      popisek_jakdlouho.style.display = "initial";
      popisek_jakdlouho.style.top = "54.5%";
      inputjakdlouho.style.display = "initial";
      inputjakdlouho.style.top = "54.5%";
      button_jakdlouho_vecer.style.display = "initial";
      button_jakdlouho_vecer.style.top = "58.5%";
      button_jakdlouho.style.display = "initial";
      button_jakdlouho.style.top = "58.5%";
      popisek_telefon.style.display = "initial";
      popisek_telefon.style.top = "62.5%";
      inputTelefon.style.display = "initial";
      inputTelefon.style.top = "62%";
      popisek_adresa.style.display = "initial";
      popisek_adresa.style.top = "66.5%"
      inputadresa.style.display = "initial";
      inputadresa.style.top = "66.5%";
      popisek_problem.style.display = "initial";
      popisek_problem.style.top = "70%";
      button_vypadky.style.display = "initial";
      button_vypadky.style.top = "73%";
      button_rychlost.style.display = "initial";
      button_rychlost.style.top = "73%";
      button_ping.style.display = "initial";
      button_ping.style.top = "73%";
      popisek_vcemkouka.style.display = "none";
      button_stb.style.display = "none";
      button_prohlizec.style.display = "none";
      button_platforma.style.display = "none";
      button_tablet.style.display = "none";
      mac_popisek.style.display = "none";
      mac.style.display = "none";
       if(kontrola_zakliknuti_vypadkovost === true){
       kezkopceni = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "VÝPADKY/RYCHLOST/ODEZVA? " + vypadky + "\n" + "ROUTER, KABEL - WIFI? " + pripojeni + "\n" + "WRT - VYPNOUT ZAPNOUT /PŘELADIT KANÁL? ano, přeladit ne" + "\n" + "PROBLÉMOVÁ DOBA - KDY, JAK ČASTO, JAK DLOUHO?" + inputjakdlouho.value + "\n" + "TELEFON VOLAJÍCÍHO: " + inputTelefon.value + "\n" + "KONTAKTNÍ TELEFON: " + inputTelefon.value + "\n" + "ADRESA PŘÍPOJKY: " + inputadresa.value + "\n" + "POZNÁMKA:" + "\n" + "==================================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
       zkopirovat();
       button_vypadkovost.innerText = "Internet Nejde Správně";
       button_vypadkovost.style.backgroundColor = "#222D32";
       kontrola_zakliknuti_tvnejdevubec = false;
       kontrola_zakliknuti_tvnejdespravne= false;
       kontrola_zakliknuti_nefunkcnost = false;
       kontrola_zakliknuti_vypadkovost = false;
       kontrola_zakliknuti_jiny = false;
       kontrola_zakliknuti_natrase = false;
     } else{
       button_vypadkovost.style.backgroundColor = "#00d000";
       button_vypadkovost.innerText = "Aktualizovat formulář";
       kontrola_zakliknuti_tvnejdevubec = false;
       kontrola_zakliknuti_tvnejdespravne= false;
       kontrola_zakliknuti_nefunkcnost = false;
       kontrola_zakliknuti_vypadkovost = true;
       kontrola_zakliknuti_jiny = false;
       kontrola_zakliknuti_natrase = false;
       button_nefunkcnost.innerText = "Nefunkční Internet";
       button_zasekanaTelka.innerText = "TV Nejde Správně";
       button_Jiny.innerText = "Jiný";
       button_naTrase.innerText = "Na Trase";
       button_zasranaTelka.innerText = "TV Nejde Vůbec";
       button_nefunkcnost.style.backgroundColor = "#222D32";
       button_zasekanaTelka.style.backgroundColor = "#222D32";
       button_zasranaTelka.style.backgroundColor = "#222D32";
       button_Jiny.style.backgroundColor = "#222D32";
       button_naTrase.style.backgroundColor = "#222D32";
     }};

     function zasekanatelkacopy(){
       button_nefunkcnost.style.top = "34%";
      button_vypadkovost.style.top = "40%";
      button_zasekanaTelka.style.top = "46%";
      button_zasranaTelka.style.top = "82%";
      button_Jiny.style.top = "88%";
      button_naTrase.style.top = "94%";
      popisek_pripojeni.style.display = "none";
      button_pripojeni_wifi.style.display = "none";
      button_pripojeni.style.display = "none";
      button_pripojeni_oboji.style.display = "none";
      popisek_jakdlouho.style.display = "initial";
      popisek_jakdlouho.style.top = "52.5%";
      inputjakdlouho.style.display = "initial";
      inputjakdlouho.style.top = "52.5%";
      button_jakdlouho_vecer.style.display = "initial";
      button_jakdlouho_vecer.style.top = "56.5%";
      button_jakdlouho.style.display = "initial";
      button_jakdlouho.style.top = "56.5%";
      popisek_telefon.style.display = "initial";
      popisek_telefon.style.top = "61%";
      inputTelefon.style.display = "initial";
      inputTelefon.style.top = "60.5%";
      popisek_adresa.style.display = "initial";
      popisek_adresa.style.top = "65%"
      inputadresa.style.display = "initial";
      inputadresa.style.top = "64.8%";
      popisek_problem.style.display = "none";
      button_vypadky.style.display = "none";
      button_rychlost.style.display = "none";
      button_ping.style.display = "none";
      popisek_vcemkouka.style.display = "initial";
      popisek_vcemkouka.style.top = "68.5%";
      button_stb.style.display = "initial";
      button_stb.style.top = "71.5%"
      button_prohlizec.style.display = "initial";
      button_prohlizec.style.top = "71.5%"
      button_platforma.style.display = "initial";
      button_platforma.style.top = "71.5%"
      button_tablet.style.display = "initial";
      button_tablet.style.top = "75%"
      mac_popisek.style.display = "initial";
      mac_popisek.style.top = "78.5%";
      mac.style.display = "initial";
      mac.style.top = "78.5%";
       if(kontrola_zakliknuti_tvnejdespravne === true){
       kezkopceni = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "TELEFON VOLAJÍCÍHO: " + inputTelefon.value + "\n" + "KONTAKTNÍ TELEFON: " + inputTelefon.value + "\n" + "ADRESA PŘÍPOJKY: " + inputadresa.value + "\n" + "==================================================" + "\n" + "FUNGUJE INTERNET? ano" + "\n" + "STB , V PROHLÍŽEČI, SMARTTV,  TELEFON/TAB? " + vcemkouka + "\n" + "NEJDE PROGRAM/NOVA? jde" + "\n" + "SEKÁ SE ŽIVÉ VYSÍLÁNÍ/PROGRAM? ano" + "\n" + "SEKÁ SE ARCHIV/PROGRAM? ano" + "\n" + "KDY/DOBA KDY SE ZASEKL A PROGRAM " + inputjakdlouho.value + "\n" + "POSUNUT ZVUK VŮČI OBRAZU? ne" + "\n" + "MAC: " + mac.value + "\n" + "POZNÁMKA: " + "\n" + "==========================================================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
       zkopirovat();
       button_zasekanaTelka.innerText = "TV Nejde Správně";
       button_zasekanaTelka.style.backgroundColor = "#222D32";
       kontrola_zakliknuti_tvnejdevubec = false;
       kontrola_zakliknuti_tvnejdespravne= false;
       kontrola_zakliknuti_nefunkcnost = false;
       kontrola_zakliknuti_vypadkovost = false;
       kontrola_zakliknuti_jiny = false;
       kontrola_zakliknuti_natrase = false;
     } else{
       button_zasekanaTelka.style.backgroundColor = "#00d000";
       button_zasekanaTelka.innerText = "Aktualizovat formulář";
       kontrola_zakliknuti_tvnejdespravne= true;
       kontrola_zakliknuti_tvnejdevubec = false;
       kontrola_zakliknuti_nefunkcnost = false;
       kontrola_zakliknuti_vypadkovost = false;
       kontrola_zakliknuti_jiny = false;
       kontrola_zakliknuti_natrase = false;
       button_nefunkcnost.innerText = "Nefunkční Internet";
       button_vypadkovost.innerText = "Internet Nejde Správně";
       button_Jiny.innerText = "Jiný";
       button_naTrase.innerText = "Na Trase";
       button_zasranaTelka.innerText = "TV Nejde Vůbec";
       button_nefunkcnost.style.backgroundColor = "#222D32";
       button_vypadkovost.style.backgroundColor = "#222D32";
       button_zasranaTelka.style.backgroundColor = "#222D32";
       button_Jiny.style.backgroundColor = "#222D32";
       button_naTrase.style.backgroundColor = "#222D32";
         }};
     function zasranatelkacopy(){
       button_nefunkcnost.style.top = "34%";
       button_vypadkovost.style.top = "40%";
       button_zasekanaTelka.style.top = "46%";
       button_zasranaTelka.style.top = "52%";
       button_Jiny.style.top = "88%";
       button_naTrase.style.top = "94%";
       popisek_pripojeni.style.display = "none";
       popisek_jakdlouho.style.display = "none";
       button_pripojeni_wifi.style.display = "none";
       button_pripojeni_oboji.style.display = "none";
       button_pripojeni.style.display = "none";
       popisek_pripojeni.style.display = "none";
       button_jakdlouho.style.display = "none";
       inputjakdlouho.style.display = "none";
       button_jakdlouho_vecer.style.display = "none";
       button_jakdlouho.style.display = "none";
       popisek_telefon.style.display = "initial";
       popisek_telefon.style.top = "61.5%";
       inputTelefon.style.display = "initial";
       inputTelefon.style.top = "61%";
       popisek_adresa.style.display = "initial";
       popisek_adresa.style.top = "65.5%"
       inputadresa.style.display = "initial";
       inputadresa.style.top = "65.5%";
       popisek_problem.style.display = "none";
       button_vypadky.style.display = "none";
       button_rychlost.style.display = "none";
       popisek_vcemkouka.style.display = "none";
       button_stb.style.display = "none";
       button_prohlizec.style.display = "none";
       button_platforma.style.display = "none";
       button_ping.style.display = "none";
       mac_popisek.style.display = "initial";
       mac_popisek.style.top = "70%";
       mac.style.display = "initial";
       mac.style.top = "70%";
       button_tablet.style.display = "none";
       if(kontrola_zakliknuti_tvnejdevubec === true){
         button_zasranaTelka.innerText = "TV Nejde Vůbec";
         button_zasranaTelka.style.backgroundColor = "#222D32";
         kontrola_zakliknuti_tvnejdevubec = false;
         kontrola_zakliknuti_tvnejdespravne= false;
         kontrola_zakliknuti_nefunkcnost = false;
         kontrola_zakliknuti_vypadkovost = false;
         kontrola_zakliknuti_jiny = false;
         kontrola_zakliknuti_natrase = false;
       kezkopceni = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "TELEFON VOLAJÍCÍHO: " + inputTelefon.value + "\n" + "KONTAKTNÍ TELEFON: " + inputTelefon.value + "\n" + "ADRESA PŘÍPOJKY: " + inputadresa.value + "\n" + "POZNÁMKA:" + "\n" + "=======================================" + "\n" + "NEPODAŘILO SE PŘIPOJIT K PLATFORMĚ? nepodařilo" + "\n" + "KONTROLA ZAPOJENÍ(KABELY)? ano" + "\n" + "VYPNOUT/ZAPNOUT? ano" + "\n" + "MAC: " + mac.value + "\n" + "=====================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
       zkopirovat();
     }else{
       button_zasranaTelka.style.backgroundColor = "#00d000";
       button_zasranaTelka.innerText = "Aktualizovat formulář";
       button_nefunkcnost.innerText = "Nefunkční Internet";
       button_zasekanaTelka.innerText = "TV Nejde Správně";
       button_vypadkovost.innerText = "Internet Nejde Správně";
       button_Jiny.innerText = "Jiný";
       button_naTrase.innerText = "Na Trase";
       kontrola_zakliknuti_tvnejdevubec = true;
       kontrola_zakliknuti_tvnejdespravne= false;
       kontrola_zakliknuti_nefunkcnost = false;
       kontrola_zakliknuti_vypadkovost = false;
       kontrola_zakliknuti_jiny = false;
       kontrola_zakliknuti_natrase = false;
       button_nefunkcnost.style.backgroundColor = "#222D32";
       button_vypadkovost.style.backgroundColor = "#222D32";
       button_zasekanaTelka.style.backgroundColor = "#222D32";
       button_Jiny.style.backgroundColor = "#222D32";
       button_naTrase.style.backgroundColor = "#222D32";
     }};

     function jinycopy(){
       button_nefunkcnost.style.top = "34%";
      button_vypadkovost.style.top = "40%";
      button_zasekanaTelka.style.top = "46%";
      button_zasranaTelka.style.top = "52%";
      button_Jiny.style.top = "58%";
      button_naTrase.style.top = "94%";
      popisek_telefon.style.display = "initial";
      popisek_telefon.style.top = "64%";
      inputTelefon.style.display = "initial";
      inputTelefon.style.top = "64%";
      button_pripojeni_wifi.style.display = "none";
      button_pripojeni_oboji.style.display = "none";
      button_pripojeni.style.display = "none";
      popisek_pripojeni.style.display = "none";
      button_jakdlouho.style.display = "none";
      button_jakdlouho_vecer.style.display = "none";
      inputjakdlouho.style.display = "none";
      popisek_adresa.style.display = "initial";
      popisek_adresa.style.top = "68%"
      inputadresa.style.display = "initial";
      inputadresa.style.top = "68%";
      popisek_vcemkouka.style.display = "none";
      button_stb.style.display = "none";
      button_prohlizec.style.display = "none";
      button_platforma.style.display = "none";
      button_tablet.style.display = "none";
      mac_popisek.style.display = "none";
      mac.style.display = "none";
      popisek_problem.style.display = "none";
      button_vypadky.style.display = "none";
      button_rychlost.style.display = "none";
      button_ping.style.display = "none";
      popisek_jakdlouho.style.display = "none";
       if(kontrola_zakliknuti_jiny === true){
         button_Jiny.innerText = "Jiný";
         button_Jiny.style.backgroundColor = "#222D32";
         kontrola_zakliknuti_tvnejdevubec = false;
         kontrola_zakliknuti_tvnejdespravne= false;
         kontrola_zakliknuti_nefunkcnost = false;
         kontrola_zakliknuti_vypadkovost = false;
         kontrola_zakliknuti_jiny = false;
         kontrola_zakliknuti_natrase = false;
       kezkopceni = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "TELEFON VOLAJÍCÍHO: " + inputTelefon.value + "\n" + "KONTAKTNÍ TELEFON: " + inputTelefon.value + "\n" + "ADRESA PŘÍPOJKY: " + inputadresa.value + "\n" + "POZNÁMKA:" + "\n" + "==================================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
       zkopirovat();
     } else {
       button_Jiny.style.backgroundColor = "#00d000";
       button_Jiny.innerText = "Aktualizovat formulář";
       kontrola_zakliknuti_tvnejdevubec = false;
       kontrola_zakliknuti_tvnejdespravne= false;
       kontrola_zakliknuti_nefunkcnost = false;
       kontrola_zakliknuti_vypadkovost = false;
       kontrola_zakliknuti_jiny = true;
       kontrola_zakliknuti_natrase = false;
       button_nefunkcnost.innerText = "Nefunkční Internet";
       button_zasekanaTelka.innerText = "TV Nejde Správně";
       button_vypadkovost.innerText = "Internet Nejde Správně";
       button_naTrase.innerText = "Na Trase";
       button_zasranaTelka.innerText = "TV Nejde Vůbec";
       button_nefunkcnost.style.backgroundColor = "#222D32";
       button_vypadkovost.style.backgroundColor = "#222D32";
       button_zasekanaTelka.style.backgroundColor = "#222D32";
       button_zasranaTelka.style.backgroundColor = "#222D32";
       button_naTrase.style.backgroundColor = "#222D32";
     }};

     function natrasecopy(){
       button_nefunkcnost.style.top = "34%";
      button_vypadkovost.style.top = "40%";
      button_zasekanaTelka.style.top = "46%";
      button_zasranaTelka.style.top = "52%";
      button_Jiny.style.top = "58%";
      button_naTrase.style.top = "64%";
      popisek_vcemkouka.style.display = "none";
      button_stb.style.display = "none";
      button_prohlizec.style.display = "none";
      button_platforma.style.display = "none";
      button_pripojeni_wifi.style.display = "none";
      button_pripojeni_oboji.style.display = "none";
      button_pripojeni.style.display = "none";
      popisek_pripojeni.style.display = "none";
      button_jakdlouho.style.display = "none";
      inputjakdlouho.style.display = "none";
      button_tablet.style.display = "none";
      mac_popisek.style.display = "none";
      mac.style.display = "none";
      popisek_problem.style.display = "none";
      button_vypadky.style.display = "none";
      button_rychlost.style.display = "none";
      button_ping.style.display = "none";
      popisek_telefon.style.display = "initial";
      popisek_telefon.style.top = "70%";
      inputTelefon.style.display = "initial";
      inputTelefon.style.top = "70%";
      popisek_adresa.style.display = "initial";
      popisek_adresa.style.top = "75%"
      inputadresa.style.display = "initial";
      inputadresa.style.top = "75%";
      button_jakdlouho_vecer.style.display = "none";
       if(kontrola_zakliknuti_natrase === true){
         button_naTrase.innerText = "Na Trase";
         button_naTrase.style.backgroundColor = "#222D32";
         kontrola_zakliknuti_nefunkcnost = false;
         kontrola_zakliknuti_vypadkovost = false;
         kontrola_zakliknuti_tvnejdespravne = false;
         kontrola_zakliknuti_tvnejdevubec = false;
         kontrola_zakliknuti_jiny = false;
         kontrola_zakliknuti_natrase = false;
       kezkopceni = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "TELEFON VOLAJÍCÍHO: " + inputTelefon.value + "\n" + "KONTAKTNÍ TELEFON: " + inputTelefon.value + "\n" + "ADRESA PŘÍPOJKY: " + inputadresa.value + "\n" + "===================================" + "\n" + "Klient byl obeznámen o výpadku na trase konektivity." + "\n" + "==================================================" + "\n" + ip + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
       zkopirovat();
     }else {
       button_naTrase.style.backgroundColor = "#00d000";
       button_naTrase.innerText = "Aktualizovat formulář";
       kontrola_zakliknuti_tvnejdevubec = false;
       kontrola_zakliknuti_tvnejdespravne= false;
       kontrola_zakliknuti_nefunkcnost = false;
       kontrola_zakliknuti_vypadkovost = false;
       kontrola_zakliknuti_jiny = false;
       kontrola_zakliknuti_natrase = true;
       button_nefunkcnost.innerText = "Nefunkční Internet";
       button_zasekanaTelka.innerText = "TV Nejde Správně";
       button_vypadkovost.innerText = "Internet Nejde Správně";
       button_Jiny.innerText = "Jiný";
       button_zasranaTelka.innerText = "TV Nejde Vůbec";
       button_nefunkcnost.style.backgroundColor = "#222D32";
       button_vypadkovost.style.backgroundColor = "#222D32";
       button_zasekanaTelka.style.backgroundColor = "#222D32";
       button_zasranaTelka.style.backgroundColor = "#222D32";
       button_Jiny.style.backgroundColor = "#222D32";
     }};

         function pripojenikabel(){
           popisek_popisku_pripojeni.nodeValue = "PŘIPOJENÍ: ";
           pripojeni = "kabel";
           dodatekpripojeni = pripojeni;
           popisek_popisku_pripojeni.nodeValue = popisek_popisku_pripojeni.nodeValue + dodatekpripojeni;
                 };
         function pripojenioboji(){
           popisek_popisku_pripojeni.nodeValue = "PŘIPOJENÍ: ";
           pripojeni = "obojí";
           dodatekpripojeni = pripojeni;
           popisek_popisku_pripojeni.nodeValue = popisek_popisku_pripojeni.nodeValue + dodatekpripojeni;
                 };
         function pripojeniwifi(){
           popisek_popisku_pripojeni.nodeValue = "PŘIPOJENÍ: ";
           pripojeni = "wifi";
           dodatekpripojeni = pripojeni;
           popisek_popisku_pripojeni.nodeValue = popisek_popisku_pripojeni.nodeValue + dodatekpripojeni;
                 };
         function jakdlouhofce(){
           popisek_popiskuJakdlouho.nodeValue = "JAK DLOUHO: ";
           inputjakdlouho.value = "od rána";
                 };
         function jakdlouhovecer(){
           popisek_popiskuJakdlouho.nodeValue = "JAK DLOUHO: ";
           inputjakdlouho.value = "od včerejška večer";
                 };
         function jmeno(){
           popisek_popisek_jméno.nodeValue = "JMÉNO: ";
           subjekt = subjekt.slice(0, subjekt.lastIndexOf(" "));
           zobrazjmeno = subjekt;
           popisek_popisek_jméno.nodeValue = popisek_popisek_jméno.nodeValue + zobrazjmeno;
                 };
         function jmeno1(){
           popisek_popisek_jméno.nodeValue = "JMÉNO: ";
           subjekt = subjekt.slice(subjekt.indexOf(" "), subjekt.length);
           zobrazjmeno = subjekt;
           popisek_popisek_jméno.nodeValue = popisek_popisek_jméno.nodeValue + zobrazjmeno;
                 };
         function vypadkovost(){
           popisek_popisek_problem.nodeValue = "TYP PROBLÉMU: ";
           vypadky = "výpadky";
           dodatekproblem = vypadky;
           popisek_popisek_problem.nodeValue = popisek_popisek_problem.nodeValue + dodatekproblem;
                 };
         function rychlovost(){
           popisek_popisek_problem.nodeValue = "TYP PROBLÉMU: ";
           vypadky = "rychlost";
           dodatekproblem = vypadky;
           popisek_popisek_problem.nodeValue = popisek_popisek_problem.nodeValue + dodatekproblem;
                 };
         function ping(){
           popisek_popisek_problem.nodeValue = "TYP PROBLÉMU: ";
           vypadky = "odezva";
           dodatekproblem = vypadky;
           popisek_popisek_problem.nodeValue = popisek_popisek_problem.nodeValue + dodatekproblem;
                 };
         function stb(){
           popisek_popisek_vcemkouka.nodeValue = "V ČEM KOUKÁ: ";
           vcemkouka = "STB";
           dodatekvcemkouka = vcemkouka;
           popisek_popisek_vcemkouka.nodeValue = popisek_popisek_vcemkouka.nodeValue + dodatekvcemkouka;
                 };
         function smartTV(){
           popisek_popisek_vcemkouka.nodeValue = "V ČEM KOUKÁ: ";
           vcemkouka = "SmartTV";
           dodatekvcemkouka = vcemkouka;
           popisek_popisek_vcemkouka.nodeValue = popisek_popisek_vcemkouka.nodeValue + dodatekvcemkouka;
                 };
         function prohlizec(){
           popisek_popisek_vcemkouka.nodeValue = "V ČEM KOUKÁ: ";
           vcemkouka = "prohlížeč";
           dodatekvcemkouka = vcemkouka;
           popisek_popisek_vcemkouka.nodeValue = popisek_popisek_vcemkouka.nodeValue + dodatekvcemkouka;
         };

         function tablet(){
           popisek_popisek_vcemkouka.nodeValue = "V ČEM KOUKÁ: ";
           vcemkouka = "telefon/tablet";
           dodatekvcemkouka = vcemkouka;
           popisek_popisek_vcemkouka.nodeValue = popisek_popisek_vcemkouka.nodeValue + dodatekvcemkouka;
         }

         function mys_nad_nefunkcnost(){
           if(kontrola_zakliknuti_nefunkcnost === true){
             button_nefunkcnost.style.borderLeftWidth = "3px";
             button_nefunkcnost.style.backgroundColor = "#009f00";
             button_nefunkcnost.style.color = "#ffffff";
           } else {
           button_nefunkcnost.style.color = "#ffffff";
           button_nefunkcnost.style.backgroundColor = "#1e282c";
           button_nefunkcnost.style.borderLeftWidth = "3px";
         }};

         function mys_neni_nad_nefunkcnost(){
           if(kontrola_zakliknuti_nefunkcnost === true){
             button_nefunkcnost.style.borderLeftWidth = "0px";
           } else {
           button_nefunkcnost.style.color = "#b8c7ce";
           button_nefunkcnost.style.borderLeftWidth = "0px";
           button_nefunkcnost.style.backgroundColor = "#222D32";
         }};

         function mys_nad_vypadkovost(){
           if(kontrola_zakliknuti_vypadkovost === true){
           button_vypadkovost.style.borderLeftWidth = "3px";
           button_vypadkovost.style.backgroundColor = "#009f00";
           button_vypadkovost.style.color = "#ffffff";
         } else{
           button_vypadkovost.style.color = "#ffffff";
           button_vypadkovost.style.backgroundColor = "#1e282c";
           button_vypadkovost.style.borderLeftWidth = "3px";
         }};

         function mys_neni_nad_vypadkovost(){
           if(kontrola_zakliknuti_vypadkovost === true){
             button_vypadkovost.style.borderLeftWidth = "0px";
             } else{
           button_vypadkovost.style.backgroundColor = "#222D32";
           button_vypadkovost.style.color = "#b8c7ce";
           button_vypadkovost.style.borderLeftWidth = "0px";
         }};

         function mys_nad_zasekanaTelka(){
           if(kontrola_zakliknuti_tvnejdespravne === true){
           button_zasekanaTelka.style.color = "#ffffff";
           button_zasekanaTelka.style.backgroundColor = "#009f00";
           button_zasekanaTelka.style.borderLeftWidth = "3px";

         }else{
           button_zasekanaTelka.style.backgroundColor = "#1e282c";
           button_zasekanaTelka.style.color = "#ffffff";
           button_zasekanaTelka.style.borderLeftWidth = "3px";
         }};

         function mys_neni_nad_zasekanaTelka(){
           if(kontrola_zakliknuti_tvnejdespravne === true){
             button_zasekanaTelka.style.borderLeftWidth = "0px";
             }else{
           button_zasekanaTelka.style.backgroundColor = "#222D32";
           button_zasekanaTelka.style.color = "#b8c7ce";
           button_zasekanaTelka.style.borderLeftWidth = "0px";
         }};

         function mys_nad_naTrase(){
           if(kontrola_zakliknuti_natrase === true){
           button_naTrase.style.color = "#ffffff";
           button_naTrase.style.backgroundColor = "#009f00";
           button_naTrase.style.borderLeftWidth = "3px";

         }else{
           button_naTrase.style.backgroundColor = "#1e282c";
           button_naTrase.style.color = "#ffffff";
           button_naTrase.style.borderLeftWidth = "3px";
         }};

         function mys_neni_nad_naTrase(){
           if(kontrola_zakliknuti_natrase === true){
             button_naTrase.style.borderLeftWidth = "0px";
             }else{
           button_naTrase.style.backgroundColor = "#222D32";
           button_naTrase.style.color = "#b8c7ce";
           button_naTrase.style.borderLeftWidth = "0px";
         }};

         function mys_nad_zasranaTelka(){
           if(kontrola_zakliknuti_tvnejdevubec === true){
           button_zasranaTelka.style.color = "#ffffff";
           button_zasranaTelka.style.backgroundColor = "#009f00";
           button_zasranaTelka.style.borderLeftWidth = "3px";

         }else{
           button_zasranaTelka.style.backgroundColor = "#1e282c";
           button_zasranaTelka.style.color = "#ffffff";
           button_zasranaTelka.style.borderLeftWidth = "3px";
         }};

         function mys_neni_nad_zasranaTelka(){
           if(kontrola_zakliknuti_tvnejdevubec === true){
             button_zasranaTelka.style.borderLeftWidth = "0px";
             }else{
           button_zasranaTelka.style.backgroundColor = "#222D32";
           button_zasranaTelka.style.color = "#b8c7ce";
           button_zasranaTelka.style.borderLeftWidth = "0px";
         }};

         function mys_nad_Jiny(){
           if(kontrola_zakliknuti_jiny === true){
           button_Jiny.style.color = "#ffffff";
           button_Jiny.style.backgroundColor = "#009f00";
           button_Jiny.style.borderLeftWidth = "3px";

         }else{
           button_Jiny.style.backgroundColor = "#1e282c";
           button_Jiny.style.color = "#ffffff";
           button_Jiny.style.borderLeftWidth = "3px";
         }};

         function mys_neni_nad_Jiny(){
           if(kontrola_zakliknuti_jiny === true){
             button_Jiny.style.borderLeftWidth = "0px";
             }else{
           button_Jiny.style.backgroundColor = "#222D32";
           button_Jiny.style.color = "#b8c7ce";
           button_Jiny.style.borderLeftWidth = "0px";
         }};

var popisek_pripojeni = document.createElement("div");
var popisek_popisku_pripojeni = document.createTextNode("PŘIPOJENÍ: ");
popisek_pripojeni.appendChild(popisek_popisku_pripojeni);
document.body.appendChild(popisek_pripojeni);
popisek_pripojeni.style.position = "fixed";
popisek_pripojeni.style.left = "0.5%";
popisek_pripojeni.style.display = "none";
popisek_pripojeni.style.zIndex = "99";
popisek_pripojeni.style.color = "#ffffff";

var popisek_telefon = document.createElement("div");
var popisek_popisku_telefon = document.createTextNode("Telefon:");
popisek_telefon.appendChild(popisek_popisku_telefon);
document.body.appendChild(popisek_telefon);
popisek_telefon.style.position = "fixed";
popisek_telefon.style.left = "0.5%";
popisek_telefon.style.display = "none";
popisek_telefon.style.zIndex = "99";
popisek_telefon.style.color = "#ffffff";

var popisek_adresa = document.createElement("div");
var popisek_popisku_adresa = document.createTextNode("Adresa:");
popisek_adresa.appendChild(popisek_popisku_adresa);
document.body.appendChild(popisek_adresa);
popisek_adresa.style.position = "fixed";
popisek_adresa.style.left = "0.5%";
popisek_adresa.style.display = "none";
popisek_adresa.style.zIndex = "99";
popisek_adresa.style.color = "#ffffff";

var inputadresa = document.createElement("INPUT");
inputadresa.setAttribute("type", "text");
inputadresa.setAttribute("value", adresa);
document.body.appendChild(inputadresa);
inputadresa.style.position = "fixed";
inputadresa.style.outline = "none";
inputadresa.style.left = "6%";
inputadresa.style.display = "none";
inputadresa.style.width = "138px";
inputadresa.style.boxSizing = "border-box";
inputadresa.style.fontSize = "1em";
inputadresa.style.borderTopLeftRadius = "3px";
inputadresa.style.borderTopRightRadius = "3px";
inputadresa.style.borderBottomLeftRadius = "3px";
inputadresa.style.borderBottomRightRadius = "3px";
inputadresa.style.borderBotWidth = "1px";
inputadresa.style.borderTopWidth = "1px";
inputadresa.style.borderLeftWidth = "1px";
inputadresa.style.borderRightWidth = "1px";
inputadresa.style.zIndex = "99";

var upozorneni = document.createElement("div");
var popisek_upozorneni = document.createTextNode("");
upozorneni.appendChild(popisek_upozorneni);
document.body.appendChild(upozorneni);
upozorneni.style.position = "fixed";
upozorneni.style.left = "0.1%";
upozorneni.style.display = "none";
upozorneni.style.zIndex = "99";
upozorneni.style.color = "#ffffff";
upozorneni.style.fontSize = "1.5em";
upozorneni.style.width = eval(sajdbar.style.offsetWidth);
upozorneni.style.backgroundColor = "#ff0000";

var inputTelefon = document.createElement("INPUT");
inputTelefon.setAttribute("type", "text");
inputTelefon.setAttribute("value", telefon);
document.body.appendChild(inputTelefon);
inputTelefon.style.position = "fixed";
inputTelefon.style.outline = "none";
inputTelefon.style.left = "6%";
inputTelefon.style.display = "none";
inputTelefon.style.width = "100px";
inputTelefon.style.boxSizing = "border-box";
inputTelefon.style.fontSize = "1em";
inputTelefon.style.borderTopLeftRadius = "3px";
inputTelefon.style.borderTopRightRadius = "3px";
inputTelefon.style.borderBottomLeftRadius = "3px";
inputTelefon.style.borderBottomRightRadius = "3px";
inputTelefon.style.borderBotWidth = "1px";
inputTelefon.style.borderTopWidth = "1px";
inputTelefon.style.borderLeftWidth = "1px";
inputTelefon.style.borderRightWidth = "1px";
inputTelefon.style.zIndex = "99";

var mac_popisek = document.createElement("div");
var popisek_mac_popisek = document.createTextNode("MAC:");
mac_popisek.appendChild(popisek_mac_popisek);
document.body.appendChild(mac_popisek);
mac_popisek.style.position = "fixed";
mac_popisek.style.left = "0.5%";
mac_popisek.style.display = "none";
mac_popisek.style.zIndex = "99";
mac_popisek.style.color = "#ffffff";
mac_popisek.style.fontSize = "1em";

var mac = document.createElement("INPUT");
mac.setAttribute("type", "text");
mac.setAttribute("value", "");
document.body.appendChild(mac);
mac.style.position = "fixed";
mac.style.outline = "none";
mac.style.left = "6%";
mac.style.display = "none";
mac.style.width = "138px";
mac.style.boxSizing = "border-box";
mac.style.fontSize = "1em";
mac.style.borderTopLeftRadius = "3px";
mac.style.borderTopRightRadius = "3px";
mac.style.borderBottomLeftRadius = "3px";
mac.style.borderBottomRightRadius = "3px";
mac.style.borderBotWidth = "1px";
mac.style.borderTopWidth = "1px";
mac.style.borderLeftWidth = "1px";
mac.style.borderRightWidth = "1px";
mac.style.zIndex = "99";

var button_pripojeni = document.createElement("button");
var btn_pripojeni_popisek = document.createTextNode("kabel");
button_pripojeni.appendChild(btn_pripojeni_popisek);
document.body.appendChild(button_pripojeni);
button_pripojeni.style.position = "fixed";
button_pripojeni.style.left = "4%";
button_pripojeni.style.display = "none";
button_pripojeni.style.zIndex = "99";
button_pripojeni.style.backgroundColor = "#3c8dbc";
button_pripojeni.style.borderColor = "#367fa9";
button_pripojeni.style.color = "#ffffff";
button_pripojeni.style.boxSizing = "border-box";
button_pripojeni.style.fontSize = "1em";
button_pripojeni.style.borderTopLeftRadius = "3px";
button_pripojeni.style.borderTopRightRadius = "3px";
button_pripojeni.style.borderBottomLeftRadius = "3px";
button_pripojeni.style.borderBottomRightRadius = "3px";
button_pripojeni.style.borderBotWidth = "1px";
button_pripojeni.style.borderTopWidth = "1px";
button_pripojeni.style.borderLeftWidth = "1px";
button_pripojeni.style.borderRightWidth = "1px";
button_pripojeni.onclick = pripojenikabel;


var button_pripojeni_wifi = document.createElement("button");
var btn_pripojeni_wifi_popisek = document.createTextNode("wifi");
button_pripojeni_wifi.appendChild(btn_pripojeni_wifi_popisek);
document.body.appendChild(button_pripojeni_wifi);
button_pripojeni_wifi.style.position = "fixed";
button_pripojeni_wifi.style.outline = "none";
button_pripojeni_wifi.style.left = "0.5%";
button_pripojeni_wifi.style.display = "none";
button_pripojeni_wifi.style.zIndex = "99";
button_pripojeni_wifi.style.backgroundColor = "#3c8dbc";
button_pripojeni_wifi.style.borderColor = "#367fa9";
button_pripojeni_wifi.style.color = "#ffffff";
button_pripojeni_wifi.style.boxSizing = "border-box";
button_pripojeni_wifi.style.fontSize = "1em";
button_pripojeni_wifi.style.borderTopLeftRadius = "3px";
button_pripojeni_wifi.style.borderTopRightRadius = "3px";
button_pripojeni_wifi.style.borderBottomLeftRadius = "3px";
button_pripojeni_wifi.style.borderBottomRightRadius = "3px";
button_pripojeni_wifi.style.borderBotWidth = "1px";
button_pripojeni_wifi.style.borderTopWidth = "1px";
button_pripojeni_wifi.style.borderLeftWidth = "1px";
button_pripojeni_wifi.style.borderRightWidth = "1px";
button_pripojeni_wifi.onclick = pripojeniwifi;

var button_pripojeni_oboji = document.createElement("button");
var btn_pripojeni_oboji_popisek = document.createTextNode("oboji");
button_pripojeni_oboji.appendChild(btn_pripojeni_oboji_popisek);
document.body.appendChild(button_pripojeni_oboji);
button_pripojeni_oboji.style.position = "fixed";
button_pripojeni_oboji.style.outline = "none";
button_pripojeni_oboji.style.left = "8%";
button_pripojeni_oboji.style.display = "none";
button_pripojeni_oboji.style.zIndex = "99";
button_pripojeni_oboji.style.backgroundColor = "#3c8dbc";
button_pripojeni_oboji.style.borderColor = "#367fa9";
button_pripojeni_oboji.style.color = "#ffffff";
button_pripojeni_oboji.style.boxSizing = "border-box";
button_pripojeni_oboji.style.fontSize = "1em";
button_pripojeni_oboji.style.borderTopLeftRadius = "3px";
button_pripojeni_oboji.style.borderTopRightRadius = "3px";
button_pripojeni_oboji.style.borderBottomLeftRadius = "3px";
button_pripojeni_oboji.style.borderBottomRightRadius = "3px";
button_pripojeni_oboji.style.borderBotWidth = "1px";
button_pripojeni_oboji.style.borderTopWidth = "1px";
button_pripojeni_oboji.style.borderLeftWidth = "1px";
button_pripojeni_oboji.style.borderRightWidth = "1px";
button_pripojeni_oboji.onclick = pripojenioboji;

var popisek_jakdlouho = document.createElement("div");
var popisek_popiskuJakdlouho = document.createTextNode("JAK DLOUHO: ");
popisek_jakdlouho.appendChild(popisek_popiskuJakdlouho);
document.body.appendChild(popisek_jakdlouho);
popisek_jakdlouho.style.position = "fixed";
popisek_jakdlouho.style.left = "0.5%";
popisek_jakdlouho.style.display = "none";
popisek_jakdlouho.style.zIndex = "99";
popisek_jakdlouho.style.color = "#ffffff";

var button_jakdlouho = document.createElement("button");
var btn_jakdlouho_popisek = document.createTextNode("od rána");
button_jakdlouho.appendChild(btn_jakdlouho_popisek);
document.body.appendChild(button_jakdlouho);
button_jakdlouho.style.position = "fixed";
button_jakdlouho.style.left = "9%";
button_jakdlouho.style.display = "none";
button_jakdlouho.style.top = "53.5%";
button_jakdlouho.style.backgroundColor = "#3c8dbc";
button_jakdlouho.style.borderColor = "#367fa9";
button_jakdlouho.style.color = "#ffffff";
button_jakdlouho.style.boxSizing = "border-box";
button_jakdlouho.style.fontSize = "1em";
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

var button_jakdlouho_vecer = document.createElement("button");
var btn_jakdlouho_popisek = document.createTextNode("od včerejška večer");
button_jakdlouho_vecer.appendChild(btn_jakdlouho_popisek);
document.body.appendChild(button_jakdlouho_vecer);
button_jakdlouho_vecer.style.position = "fixed";
button_jakdlouho_vecer.style.left = "0.5%";
button_jakdlouho_vecer.style.display = "none";
button_jakdlouho_vecer.style.backgroundColor = "#3c8dbc";
button_jakdlouho_vecer.style.borderColor = "#367fa9";
button_jakdlouho_vecer.style.color = "#ffffff";
button_jakdlouho_vecer.style.boxSizing = "border-box";
button_jakdlouho_vecer.style.fontSize = "1em";
button_jakdlouho_vecer.style.borderTopLeftRadius = "3px";
button_jakdlouho_vecer.style.borderTopRightRadius = "3px";
button_jakdlouho_vecer.style.borderBottomLeftRadius = "3px";
button_jakdlouho_vecer.style.borderBottomRightRadius = "3px";
button_jakdlouho_vecer.style.borderBotWidth = "1px";
button_jakdlouho_vecer.style.borderTopWidth = "1px";
button_jakdlouho_vecer.style.borderLeftWidth = "1px";
button_jakdlouho_vecer.style.borderRightWidth = "1px";
button_jakdlouho_vecer.style.zIndex = "99";
button_jakdlouho_vecer.onclick = jakdlouhovecer;

var inputjakdlouho = document.createElement("INPUT");
inputjakdlouho.setAttribute("type", "text");
inputjakdlouho.setAttribute("value", "");
document.body.appendChild(inputjakdlouho);
inputjakdlouho.style.position = "fixed";
inputjakdlouho.style.outline = "none";
inputjakdlouho.style.left = "6%";
inputjakdlouho.style.display = "none";
inputjakdlouho.style.width = "138px";
inputjakdlouho.style.boxSizing = "border-box";
inputjakdlouho.style.fontSize = "1em";
inputjakdlouho.style.borderTopLeftRadius = "3px";
inputjakdlouho.style.borderTopRightRadius = "3px";
inputjakdlouho.style.borderBottomLeftRadius = "3px";
inputjakdlouho.style.borderBottomRightRadius = "3px";
inputjakdlouho.style.borderBotWidth = "1px";
inputjakdlouho.style.borderTopWidth = "1px";
inputjakdlouho.style.borderLeftWidth = "1px";
inputjakdlouho.style.borderRightWidth = "1px";
inputjakdlouho.style.zIndex = "99";

var popisek_problem = document.createElement("div");
var popisek_popisek_problem = document.createTextNode("TYP PROBLÉMU:");
popisek_problem.appendChild(popisek_popisek_problem);
document.body.appendChild(popisek_problem);
popisek_problem.style.position = "fixed";
popisek_problem.style.left = "0.5%";
popisek_problem.style.display = "none";
popisek_problem.style.zIndex = "99";
popisek_problem.style.color = "#ffffff";

var button_vypadky = document.createElement("button");
var btn_vypadky_popisek = document.createTextNode("výpadky");
button_vypadky.appendChild(btn_vypadky_popisek);
document.body.appendChild(button_vypadky);
button_vypadky.style.position = "fixed";
button_vypadky.style.left = "0.5%";
button_vypadky.style.display = "none";
button_vypadky.style.zIndex = "99";
button_vypadky.style.backgroundColor = "#3c8dbc";
button_vypadky.style.borderColor = "#367fa9";
button_vypadky.style.color = "#ffffff";
button_vypadky.style.boxSizing = "border-box";
button_vypadky.style.fontSize = "1em";
button_vypadky.style.borderTopLeftRadius = "3px";
button_vypadky.style.borderTopRightRadius = "3px";
button_vypadky.style.borderBottomLeftRadius = "3px";
button_vypadky.style.borderBottomRightRadius = "3px";
button_vypadky.style.borderBotWidth = "1px";
button_vypadky.style.borderTopWidth = "1px";
button_vypadky.style.borderLeftWidth = "1px";
button_vypadky.style.borderRightWidth = "1px";
button_vypadky.onclick = vypadkovost;

var button_rychlost = document.createElement("button");
var btn_rychlost_popisek = document.createTextNode("rychlost");
button_rychlost.appendChild(btn_rychlost_popisek);
document.body.appendChild(button_rychlost);
button_rychlost.style.position = "fixed";
button_rychlost.style.left = "5%";
button_rychlost.style.display = "none";
button_rychlost.style.zIndex = "99";
button_rychlost.style.backgroundColor = "#3c8dbc";
button_rychlost.style.borderColor = "#367fa9";
button_rychlost.style.color = "#ffffff";
button_rychlost.style.boxSizing = "border-box";
button_rychlost.style.fontSize = "1em";
button_rychlost.style.borderTopLeftRadius = "3px";
button_rychlost.style.borderTopRightRadius = "3px";
button_rychlost.style.borderBottomLeftRadius = "3px";
button_rychlost.style.borderBottomRightRadius = "3px";
button_rychlost.style.borderBotWidth = "1px";
button_rychlost.style.borderTopWidth = "1px";
button_rychlost.style.borderLeftWidth = "1px";
button_rychlost.style.borderRightWidth = "1px";
button_rychlost.onclick = rychlovost;

var button_ping = document.createElement("button");
var btn_ping_popisek = document.createTextNode("odezva");
button_ping.appendChild(btn_ping_popisek);
document.body.appendChild(button_ping);
button_ping.style.position = "fixed";
button_ping.style.left = "9%";
button_ping.style.display = "none";
button_ping.style.zIndex = "99";
button_ping.style.backgroundColor = "#3c8dbc";
button_ping.style.borderColor = "#367fa9";
button_ping.style.color = "#ffffff";
button_ping.style.boxSizing = "border-box";
button_ping.style.fontSize = "1em";
button_ping.style.borderTopLeftRadius = "3px";
button_ping.style.borderTopRightRadius = "3px";
button_ping.style.borderBottomLeftRadius = "3px";
button_ping.style.borderBottomRightRadius = "3px";
button_ping.style.borderBotWidth = "1px";
button_ping.style.borderTopWidth = "1px";
button_ping.style.borderLeftWidth = "1px";
button_ping.style.borderRightWidth = "1px";
button_ping.onclick = ping;

var popisek_vcemkouka = document.createElement("div");
var popisek_popisek_vcemkouka = document.createTextNode("V ČEM KOUKÁ: ");
popisek_vcemkouka.appendChild(popisek_popisek_vcemkouka);
document.body.appendChild(popisek_vcemkouka);
popisek_vcemkouka.style.position = "fixed";
popisek_vcemkouka.style.left = "0.5%";
popisek_vcemkouka.style.display = "none";
popisek_vcemkouka.style.zIndex = "99";
popisek_vcemkouka.style.color = "#ffffff";

var button_platforma = document.createElement("button");
var btn_platforma_popisek = document.createTextNode("SmartTV");
button_platforma.appendChild(btn_platforma_popisek);
document.body.appendChild(button_platforma);
button_platforma.style.position = "fixed";
button_platforma.style.left = "0.5%";
button_platforma.style.display = "none";
button_platforma.style.backgroundColor = "#3c8dbc";
button_platforma.style.borderColor = "#367fa9";
button_platforma.style.color = "#ffffff";
button_platforma.style.boxSizing = "border-box";
button_platforma.style.fontSize = "1em";
button_platforma.style.borderTopLeftRadius = "3px";
button_platforma.style.borderTopRightRadius = "3px";
button_platforma.style.borderBottomLeftRadius = "3px";
button_platforma.style.borderBottomRightRadius = "3px";
button_platforma.style.borderBotWidth = "1px";
button_platforma.style.borderTopWidth = "1px";
button_platforma.style.borderLeftWidth = "1px";
button_platforma.style.borderRightWidth = "1px";
button_platforma.style.zIndex = "99";
button_platforma.onclick = smartTV;

var button_stb = document.createElement("button");
var btn_stb_popisek = document.createTextNode("STB");
button_stb.appendChild(btn_stb_popisek);
document.body.appendChild(button_stb);
button_stb.style.position = "fixed";
button_stb.style.left = "5%";
button_stb.style.display = "none";
button_stb.style.backgroundColor = "#3c8dbc";
button_stb.style.borderColor = "#367fa9";
button_stb.style.color = "#ffffff";
button_stb.style.boxSizing = "border-box";
button_stb.style.fontSize = "1em";
button_stb.style.borderTopLeftRadius = "3px";
button_stb.style.borderTopRightRadius = "3px";
button_stb.style.borderBottomLeftRadius = "3px";
button_stb.style.borderBottomRightRadius = "3px";
button_stb.style.borderBotWidth = "1px";
button_stb.style.borderTopWidth = "1px";
button_stb.style.borderLeftWidth = "1px";
button_stb.style.borderRightWidth = "1px";
button_stb.style.zIndex = "99";
button_stb.onclick = stb;

var button_prohlizec = document.createElement("button");
var btn_prohlizec_popisek = document.createTextNode("Prohlížeč");
button_prohlizec.appendChild(btn_prohlizec_popisek);
document.body.appendChild(button_prohlizec);
button_prohlizec.style.position = "fixed";
button_prohlizec.style.left = "7.5%";
button_prohlizec.style.display = "none";
button_prohlizec.style.backgroundColor = "#3c8dbc";
button_prohlizec.style.borderColor = "#367fa9";
button_prohlizec.style.color = "#ffffff";
button_prohlizec.style.boxSizing = "border-box";
button_prohlizec.style.fontSize = "1em";
button_prohlizec.style.borderTopLeftRadius = "3px";
button_prohlizec.style.borderTopRightRadius = "3px";
button_prohlizec.style.borderBottomLeftRadius = "3px";
button_prohlizec.style.borderBottomRightRadius = "3px";
button_prohlizec.style.borderBotWidth = "1px";
button_prohlizec.style.borderTopWidth = "1px";
button_prohlizec.style.borderLeftWidth = "1px";
button_prohlizec.style.borderRightWidth = "1px";
button_prohlizec.style.zIndex = "99";
button_prohlizec.onclick = prohlizec;

var button_tablet = document.createElement("button");
var btn_tablet_popisek = document.createTextNode("Telefon / Tablet");
button_tablet.appendChild(btn_tablet_popisek);
document.body.appendChild(button_tablet);
button_tablet.style.position = "fixed";
button_tablet.style.left = "7.5%";
button_tablet.style.display = "none";
button_tablet.style.backgroundColor = "#3c8dbc";
button_tablet.style.borderColor = "#367fa9";
button_tablet.style.color = "#ffffff";
button_tablet.style.boxSizing = "border-box";
button_tablet.style.fontSize = "1em";
button_tablet.style.borderTopLeftRadius = "3px";
button_tablet.style.borderTopRightRadius = "3px";
button_tablet.style.borderBottomLeftRadius = "3px";
button_tablet.style.borderBottomRightRadius = "3px";
button_tablet.style.borderBotWidth = "1px";
button_tablet.style.borderTopWidth = "1px";
button_tablet.style.borderLeftWidth = "1px";
button_tablet.style.borderRightWidth = "1px";
button_tablet.style.zIndex = "99";
button_tablet.onclick = tablet;

var button_nefunkcnost = document.createElement("button");
var nefunkcnost_popisek = document.createTextNode("Nefunkční Internet");
button_nefunkcnost.appendChild(nefunkcnost_popisek);
document.body.appendChild(button_nefunkcnost);
button_nefunkcnost.style.position = "fixed";
button_nefunkcnost.style.outline = "none";
button_nefunkcnost.style.left = "0px";
button_nefunkcnost.style.top = "44%";
button_nefunkcnost.style.width = eval(sajdbar.offsetWidth)+"px";
button_nefunkcnost.style.height = eval(sajdbar.offsetWidth/5,22)+"px";
button_nefunkcnost.style.backgroundColor = "#222D32";
button_nefunkcnost.style.borderColor = "#367fa9";
button_nefunkcnost.style.color = "#b8c7ce";
button_nefunkcnost.style.fontSize = "1em";
button_nefunkcnost.style.borderLeftWidth = "0px";
button_nefunkcnost.style.borderRightWidth = "0px";
button_nefunkcnost.style.borderTopWidth = "0px";
button_nefunkcnost.style.borderBottomWidth = "0px";
button_nefunkcnost.style.zIndex = "100";
button_nefunkcnost.onclick = nefunkcnostcopy
button_nefunkcnost.onmouseover = mys_nad_nefunkcnost;
button_nefunkcnost.onmouseout = mys_neni_nad_nefunkcnost;


var button_vypadkovost = document.createElement("button");
var vypadkovost_popisek = document.createTextNode("Internet Nejde Správně");
button_vypadkovost.appendChild(vypadkovost_popisek);
document.body.appendChild(button_vypadkovost);
button_vypadkovost.style.position = "fixed";
button_vypadkovost.style.outline = "none";
button_vypadkovost.style.left = "0px";
button_vypadkovost.style.top = "50%";
button_vypadkovost.style.width = eval(sajdbar.offsetWidth)+"px";
button_vypadkovost.style.height = eval(sajdbar.offsetWidth/5,22)+"px";
button_vypadkovost.style.backgroundColor = "#222D32";
button_vypadkovost.style.borderColor = "#367fa9";
button_vypadkovost.style.color = "#b8c7ce";
button_vypadkovost.style.fontSize = "1em";
button_vypadkovost.style.borderLeftWidth = "0px";
button_vypadkovost.style.borderRightWidth = "0px";
button_vypadkovost.style.borderTopWidth = "0px";
button_vypadkovost.style.borderBottomWidth = "0px";
button_vypadkovost.style.zIndex = "100";
button_vypadkovost.onclick = vypadkovostcopy
button_vypadkovost.onmouseover = mys_nad_vypadkovost;
button_vypadkovost.onmouseout = mys_neni_nad_vypadkovost;

var button_zasekanaTelka = document.createElement("button");
var btn_zasekanaTelka_popisek = document.createTextNode("TV Nejde Správně");
button_zasekanaTelka.appendChild(btn_zasekanaTelka_popisek);
document.body.appendChild(button_zasekanaTelka);
button_zasekanaTelka.style.position = "fixed";
button_zasekanaTelka.style.outline = "none";
button_zasekanaTelka.style.left = "0px";
button_zasekanaTelka.style.top = "56%";
button_zasekanaTelka.style.width = eval(sajdbar.offsetWidth)+"px";
button_zasekanaTelka.style.height = eval(sajdbar.offsetWidth/5,22)+"px";
button_zasekanaTelka.style.backgroundColor = "#222D32";
button_zasekanaTelka.style.borderColor = "#367fa9";
button_zasekanaTelka.style.color = "#b8c7ce";
button_zasekanaTelka.style.fontSize = "1em";
button_zasekanaTelka.style.borderLeftWidth = "0px";
button_zasekanaTelka.style.borderRightWidth = "0px";
button_zasekanaTelka.style.borderTopWidth = "0px";
button_zasekanaTelka.style.borderBottomWidth = "0px";
button_zasekanaTelka.style.zIndex = "100";
button_zasekanaTelka.onclick = zasekanatelkacopy;
button_zasekanaTelka.onmouseover = mys_nad_zasekanaTelka;
button_zasekanaTelka.onmouseout = mys_neni_nad_zasekanaTelka;

var button_zasranaTelka = document.createElement("button");
var btn_zasranaTelka_popisek = document.createTextNode("TV Nejde Vůbec");
button_zasranaTelka.appendChild(btn_zasranaTelka_popisek);
document.body.appendChild(button_zasranaTelka);
button_zasranaTelka.style.position = "fixed";
button_zasranaTelka.style.outline = "none";
button_zasranaTelka.style.left = "0px";
button_zasranaTelka.style.top = "62%";
button_zasranaTelka.style.width = eval(sajdbar.offsetWidth)+"px";
button_zasranaTelka.style.height = eval(sajdbar.offsetWidth/5,22)+"px";
button_zasranaTelka.style.backgroundColor = "#222D32";
button_zasranaTelka.style.borderColor = "#367fa9";
button_zasranaTelka.style.color = "#b8c7ce";
button_zasranaTelka.style.fontSize = "1em";
button_zasranaTelka.style.borderBottomWidth = "0px";
button_zasranaTelka.style.borderTopWidth = "0px";
button_zasranaTelka.style.borderLeftWidth = "0px";
button_zasranaTelka.style.borderRightWidth = "0px";
button_zasranaTelka.style.zIndex = "100";
button_zasranaTelka.onclick = zasranatelkacopy;
button_zasranaTelka.onmouseover = mys_nad_zasranaTelka;
button_zasranaTelka.onmouseout = mys_neni_nad_zasranaTelka;

var button_naTrase = document.createElement("button");
var btn_naTrase_popisek = document.createTextNode("Na Trase");
button_naTrase.appendChild(btn_naTrase_popisek);
document.body.appendChild(button_naTrase);
button_naTrase.style.position = "fixed";
button_naTrase.style.outline = "none";
button_naTrase.style.left = "0px";
button_naTrase.style.top = "68%";
button_naTrase.style.width = eval(sajdbar.offsetWidth)+"px";
button_naTrase.style.height = eval(sajdbar.offsetWidth/5,22)+"px";
button_naTrase.style.backgroundColor = "#222D32";
button_naTrase.style.borderColor = "#367fa9";
button_naTrase.style.color = "#b8c7ce";
button_naTrase.style.fontSize = "1em";
button_naTrase.style.borderBottomWidth = "0px";
button_naTrase.style.borderTopWidth = "0px";
button_naTrase.style.borderLeftWidth = "0px";
button_naTrase.style.borderRightWidth = "0px";
button_naTrase.style.zIndex = "100";
button_naTrase.onclick = natrasecopy;
button_naTrase.onmouseover = mys_nad_naTrase;
button_naTrase.onmouseout = mys_neni_nad_naTrase;

var button_Jiny = document.createElement("button");
var btn_Jiny_popisek = document.createTextNode("Jiný");
button_Jiny.appendChild(btn_Jiny_popisek);
document.body.appendChild(button_Jiny);
button_Jiny.style.position = "fixed";
button_naTrase.style.outline = "none";
button_Jiny.style.left = "0px";
button_Jiny.style.top = "74%";
button_Jiny.style.width = eval(sajdbar.offsetWidth)+"px";
button_Jiny.style.height = eval(sajdbar.offsetWidth/5,22)+"px";
button_Jiny.style.backgroundColor = "#222D32";
button_Jiny.style.borderColor = "#367fa9";
button_Jiny.style.color = "#b8c7ce";
button_Jiny.style.fontSize = "1em";
button_Jiny.style.borderBottomWidth = "0px";
button_Jiny.style.borderTopWidth = "0px";
button_Jiny.style.borderLeftWidth = "0px";
button_Jiny.style.borderRightWidth = "0px";
button_Jiny.style.zIndex = "100";
button_Jiny.onclick = jinycopy;
button_Jiny.onmouseover = mys_nad_Jiny;
button_Jiny.onmouseout = mys_neni_nad_Jiny;

}
  else if(urlko == "b") {
    var elementy = document.getElementsByClassName('col-md-12');
    var elementy4 = document.getElementsByClassName('col-md-4')[1].innerText;
    var pozice = document.getElementsByClassName('box-header')[4];
    var kezkopceni = "";
    var ip = elementy4.slice(elementy4.indexOf('IP'), elementy4.indexOf("/"));
    var oblast = elementy4.slice(elementy4.indexOf('Oblast:'), elementy4.indexOf("NAT")-2);
    var nat_a_vlan = elementy4.slice (elementy4.indexOf('NAT'), elementy4.indexOf("Management")-1);
    var urlko = document.URL;
    var operator = document.getElementsByClassName("hidden-xs")[1].innerText;
    var inicialy = "";
    chrome.storage.local.get(["inic"], function neam(iniciala){
      inicialy = JSON.stringify(iniciala["inic"]);
      inicialy = inicialy.slice(1, inicialy.length-1);
    });
    var text = document.getElementById('ip_info_ticket_text');
    var predmet = document.getElementById('ip_info_ticket_subject');
    var pripojeni = "wifi";
    var vypadky = "down , up , ping";
    var vcemkouka = "stb";
    var sajdbar = document.getElementsByClassName("main-sidebar")[0];
    var telefon = "";
    var spolecnost = "";
    var subjekt = "";
    var adresa = "";
    var vip = "";
    var typ_ticketu = document.getElementById('ip_info_ticket_type');
    var dodatekpripojeni = "";
    var dodatekproblem = "";
    var zobrazjmeno = "";
    var dodatekvcemkouka = "";
    var kontrola_zakliknuti_nefunkcnost = false;
    var kontrola_zakliknuti_vypadkovost = false;
    var kontrola_zakliknuti_tvnejdespravne = false;
    var kontrola_zakliknuti_tvnejdevubec = false;
    var kontrola_zakliknuti_jiny = false;
    var kontrola_zakliknuti_natrase = false;
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
          case (elementy[i].innerText.startsWith("Společnost:") || elementy[i].innerText.startsWith("Jméno:")):
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

      function upozorneniNaPresun(){
          if(oblast == "Jindřichův Hradec"){
            alert("Pozor, přesunout do fronty Jindřichův Hradec");
          } else if(oblast == "Oblast: Plzeň" || spolecnost == "Internet 7D s.r.o.") {
            alert("Pozor, přesunout do fronty Plzeň");
          } else if(oblast == "Oblast: Uherské Hradiště" || spolecnost == "SITKOM spol. s r.o."){
            alert("Pozor, přesunout do fronty Uherské Hradiště");
          } else if(oblast == "Oblast: Litoměřice"){
            alert("Pozor, přesunout do fronty Litoměřice");
          } else if(oblast == "Oblast: Žihle"){
            alert("Pozor, přesunout do fronty Žihle");
          } else if (spolecnost == "SIMELON, s.r.o."){
            alert("Pozor, přesunout do fronty Písek");
          } else if (spolecnost == "inet4 s.r.o."){
            alert ("Pozor, přesunout do fronty Inet");
          }};

    function telefoncopy(){
      kezkopceni = telefon;
      zkopirovat();
    };

   function nefunkcnost(){
     button_nefunkcnost.style.top = "34%";
     button_vypadkovost.style.top = "70%";
     button_zasekanaTelka.style.top = "76%";
     button_zasranaTelka.style.top = "82%";
     button_Jiny.style.top = "88%";
     button_naTrase.style.top = "94%";
     popisek_pripojeni.style.display = "initial";
     popisek_pripojeni.style.top = "41%";
     button_pripojeni_wifi.style.display = "initial";
     button_pripojeni_wifi.style.top = "45%";
     button_pripojeni.style.display = "initial";
     button_pripojeni.style.top = "45%";
     button_pripojeni_oboji.style.display = "initial";
     button_pripojeni_oboji.style.top = "45%";
     popisek_jakdlouho.style.display = "initial";
     popisek_jakdlouho.style.top = "49%";
     inputjakdlouho.style.display = "initial";
     inputjakdlouho.style.top = "49%";
     button_jakdlouho_vecer.style.display = "initial";
     button_jakdlouho_vecer.style.top = "53%";
     button_jakdlouho.style.display = "initial";
     button_jakdlouho.style.top = "53%";
     popisek_telefon.style.display = "initial";
     popisek_telefon.style.top = "57%";
     inputTelefon.style.display = "initial";
     inputTelefon.style.top = "56.5%";
     popisek_adresa.style.display = "initial";
     popisek_adresa.style.top = "61%"
     inputadresa.style.display = "initial";
     inputadresa.style.top = "61%";
     button_vypadky.style.display = "none";
     button_rychlost.style.display = "none";
     button_platforma.style.display = "none";
     button_stb.style.display = "none";
     button_prohlizec.style.display = "none";
     button_tablet.style.display = "none";
     popisek_vcemkouka.style.display = "none";
     button_ping.style.display = "none";
     mac.style.display = "none";
     if(kontrola_zakliknuti_nefunkcnost === true){
       typ_ticketu.value = 1;
       text.value = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "NEFUNGUJE NA ŽÁDNÉM ZAŘÍZENÍ? ne" + "\n" + "JAK DLOUHO? " + inputjakdlouho.value + "\n" + "ROUTER, KABEL - WIFI? " + pripojeni + "\n" + "ZKOUŠEL VYPNOUT/ZAPNOUT? ano" + "\n" + "STAV PŘIPOJENÍ? bez internetu" + "\n" + "KONTROLA ZAPOJENÍ? ano" + "\n" + "TELEFON VOLAJÍCÍHO: " + inputTelefon.value + "\n" + "KONTAKTNÍ TELEFON: " + inputTelefon.value + "\n" + "ADRESA PŘÍPOJKY: " + inputadresa.value + "\n" + "POZNÁMKA:" + "\n" + "==================================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
       predmet.value = vip + subjekt + " - " + inputadresa.value + " - " + ip.slice(11, ip.length) + ": " + "Nefunkční Internet";
       kontrola_zakliknuti_tvnejdevubec = false;
       kontrola_zakliknuti_tvnejdespravne= false;
       kontrola_zakliknuti_nefunkcnost = false;
       kontrola_zakliknuti_vypadkovost = false;
       kontrola_zakliknuti_jiny = false;
       kontrola_zakliknuti_natrase = false;
       button_nefunkcnost.innerText = "Nefunkční Internet";
       button_nefunkcnost.style.backgroundColor = "#222D32";
       upozorneniNaPresun();
     } else{
       button_nefunkcnost.style.backgroundColor = "#00d000";
       button_nefunkcnost.innerText = "Aktualizovat formulář";
       kontrola_zakliknuti_nefunkcnost = true;
       kontrola_zakliknuti_tvnejdevubec = false;
       kontrola_zakliknuti_tvnejdespravne= false;
       kontrola_zakliknuti_vypadkovost = false;
       kontrola_zakliknuti_jiny = false;
       kontrola_zakliknuti_natrase = false;
       button_zasekanaTelka.innerText = "TV Nejde Správně";
       button_vypadkovost.innerText = "Internet Nejde Správně";
       button_Jiny.innerText = "Jiný";
       button_naTrase.innerText = "Na Trase";
       button_zasranaTelka.innerText = "TV Nejde Vůbec";
       button_vypadkovost.style.backgroundColor = "#222D32";
       button_zasekanaTelka.style.backgroundColor = "#222D32";
       button_zasranaTelka.style.backgroundColor = "#222D32";
       button_Jiny.style.backgroundColor = "#222D32";
       button_naTrase.style.backgroundColor = "#222D32";
     }};

    function nejdespravne(){
      button_nefunkcnost.style.top = "34%";
      button_vypadkovost.style.top = "40%";
      button_zasekanaTelka.style.top = "76%";
      button_zasranaTelka.style.top = "82%";
      button_Jiny.style.top = "88%";
      button_naTrase.style.top = "94%";
      popisek_pripojeni.style.display = "initial";
      popisek_pripojeni.style.top = "47%";
      button_pripojeni_wifi.style.display = "initial";
      button_pripojeni_wifi.style.top = "50.5%";
      button_pripojeni.style.display = "initial";
      button_pripojeni.style.top = "50.5%";
      button_pripojeni_oboji.style.display = "initial";
      button_pripojeni_oboji.style.top = "50.5%";
      popisek_jakdlouho.style.display = "initial";
      popisek_jakdlouho.style.top = "54.5%";
      inputjakdlouho.style.display = "initial";
      inputjakdlouho.style.top = "54.5%";
      button_jakdlouho_vecer.style.display = "initial";
      button_jakdlouho_vecer.style.top = "58.5%";
      button_jakdlouho.style.display = "initial";
      button_jakdlouho.style.top = "58.5%";
      popisek_telefon.style.display = "initial";
      popisek_telefon.style.top = "62.5%";
      inputTelefon.style.display = "initial";
      inputTelefon.style.top = "62%";
      popisek_adresa.style.display = "initial";
      popisek_adresa.style.top = "66.5%"
      inputadresa.style.display = "initial";
      inputadresa.style.top = "66.5%";
      popisek_problem.style.display = "initial";
      popisek_problem.style.top = "70%";
      button_vypadky.style.display = "initial";
      button_vypadky.style.top = "73%";
      button_rychlost.style.display = "initial";
      button_rychlost.style.top = "73%";
      button_ping.style.display = "initial";
      button_ping.style.top = "73%";
      popisek_vcemkouka.style.display = "none";
      button_stb.style.display = "none";
      button_prohlizec.style.display = "none";
      button_platforma.style.display = "none";
      button_tablet.style.display = "none";
      mac_popisek.style.display = "none";
      mac.style.display = "none";
      if(kontrola_zakliknuti_vypadkovost === true){
      typ_ticketu.value = 3;
      text.value = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "VÝPADKY/RYCHLOST/ODEZVA? " + vypadky + "\n" + "ROUTER, KABEL - WIFI? " + pripojeni + "\n" + "WRT - VYPNOUT ZAPNOUT /PŘELADIT KANÁL? ano, přeladit ne" + "\n" + "PROBLÉMOVÁ DOBA - KDY, JAK ČASTO, JAK DLOUHO?" + inputjakdlouho.value + "\n" + "TELEFON VOLAJÍCÍHO: " + inputTelefon.value + "\n" + "KONTAKTNÍ TELEFON: " + inputTelefon.value + "\n" + "ADRESA PŘÍPOJKY: " + inputadresa.value + "\n" + "POZNÁMKA:" + "\n" + "==================================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      predmet.value = vip + subjekt + " - " + inputadresa.value + " - " + ip.slice(11, ip.length) + ": " + "Internet Nefunguje Správně";
      button_vypadkovost.innerText = "Internet Nejde Správně";
      button_vypadkovost.style.backgroundColor = "#222D32";
      kontrola_zakliknuti_tvnejdevubec = false;
      kontrola_zakliknuti_tvnejdespravne= false;
      kontrola_zakliknuti_nefunkcnost = false;
      kontrola_zakliknuti_vypadkovost = false;
      kontrola_zakliknuti_jiny = false;
      kontrola_zakliknuti_natrase = false;
      upozorneniNaPresun();
    } else{
      button_vypadkovost.style.backgroundColor = "#00d000";
      button_vypadkovost.innerText = "Aktualizovat formulář";
      kontrola_zakliknuti_tvnejdevubec = false;
      kontrola_zakliknuti_tvnejdespravne= false;
      kontrola_zakliknuti_nefunkcnost = false;
      kontrola_zakliknuti_vypadkovost = true;
      kontrola_zakliknuti_jiny = false;
      kontrola_zakliknuti_natrase = false;
      button_nefunkcnost.innerText = "Nefunkční Internet";
      button_zasekanaTelka.innerText = "TV Nejde Správně";
      button_Jiny.innerText = "Jiný";
      button_naTrase.innerText = "Na Trase";
      button_zasranaTelka.innerText = "TV Nejde Vůbec";
      button_nefunkcnost.style.backgroundColor = "#222D32";
      button_zasekanaTelka.style.backgroundColor = "#222D32";
      button_zasranaTelka.style.backgroundColor = "#222D32";
      button_Jiny.style.backgroundColor = "#222D32";
      button_naTrase.style.backgroundColor = "#222D32";
    }};

    function tvnejdespravne(){
      button_nefunkcnost.style.top = "34%";
      button_vypadkovost.style.top = "40%";
      button_zasekanaTelka.style.top = "46%";
      button_zasranaTelka.style.top = "82%";
      button_Jiny.style.top = "88%";
      button_naTrase.style.top = "94%";
      popisek_pripojeni.style.display = "none";
      button_pripojeni_wifi.style.display = "none";
      button_pripojeni.style.display = "none";
      button_pripojeni_oboji.style.display = "none";
      popisek_jakdlouho.style.display = "initial";
      popisek_jakdlouho.style.top = "52.5%";
      inputjakdlouho.style.display = "initial";
      inputjakdlouho.style.top = "52.5%";
      button_jakdlouho_vecer.style.display = "initial";
      button_jakdlouho_vecer.style.top = "56.5%";
      button_jakdlouho.style.display = "initial";
      button_jakdlouho.style.top = "56.5%";
      popisek_telefon.style.display = "initial";
      popisek_telefon.style.top = "61%";
      inputTelefon.style.display = "initial";
      inputTelefon.style.top = "60.5%";
      popisek_adresa.style.display = "initial";
      popisek_adresa.style.top = "65%"
      inputadresa.style.display = "initial";
      inputadresa.style.top = "64.8%";
      popisek_problem.style.display = "none";
      button_vypadky.style.display = "none";
      button_rychlost.style.display = "none";
      button_ping.style.display = "none";
      popisek_vcemkouka.style.display = "initial";
      popisek_vcemkouka.style.top = "68.5%";
      button_stb.style.display = "initial";
      button_stb.style.top = "71.5%"
      button_prohlizec.style.display = "initial";
      button_prohlizec.style.top = "71.5%"
      button_platforma.style.display = "initial";
      button_platforma.style.top = "71.5%"
      button_tablet.style.display = "initial";
      button_tablet.style.top = "75%"
      mac_popisek.style.display = "initial";
      mac_popisek.style.top = "78.5%";
      mac.style.display = "initial";
      mac.style.top = "78.5%";
      if(kontrola_zakliknuti_tvnejdespravne === true){
      typ_ticketu.value = 4;
      text.value = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "TELEFON VOLAJÍCÍHO: " + inputTelefon.value + "\n" + "KONTAKTNÍ TELEFON: " + inputTelefon.value + "\n" + "ADRESA PŘÍPOJKY: " + inputadresa.value + "\n" + "==================================================" + "\n" + "FUNGUJE INTERNET? ano" + "\n" + "STB , V PROHLÍŽEČI, SMARTTV,  TELEFON/TAB? " + vcemkouka + "\n" + "NEJDE PROGRAM/NOVA? jde" + "\n" + "SEKÁ SE ŽIVÉ VYSÍLÁNÍ/PROGRAM? ano" + "\n" + "SEKÁ SE ARCHIV/PROGRAM? ano" + "\n" + "KDY/DOBA KDY SE ZASEKL A PROGRAM " + inputjakdlouho.value + "\n" + "POSUNUT ZVUK VŮČI OBRAZU? ne" + "\n" + "MAC: " + mac.value + "\n" + "POZNÁMKA: " + "\n" + "==========================================================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      predmet.value = vip + subjekt + " - " + inputadresa.value + " - " + ip.slice(11, ip.length) + ": " + "TV Nejde Správně";
      button_zasekanaTelka.innerText = "TV Nejde Správně";
      button_zasekanaTelka.style.backgroundColor = "#222D32";
      kontrola_zakliknuti_tvnejdevubec = false;
      kontrola_zakliknuti_tvnejdespravne= false;
      kontrola_zakliknuti_nefunkcnost = false;
      kontrola_zakliknuti_vypadkovost = false;
      kontrola_zakliknuti_jiny = false;
      kontrola_zakliknuti_natrase = false;
      upozorneniNaPresun();
    } else{
      button_zasekanaTelka.style.backgroundColor = "#00d000";
      button_zasekanaTelka.innerText = "Aktualizovat formulář";
      kontrola_zakliknuti_tvnejdespravne= true;
      kontrola_zakliknuti_tvnejdevubec = false;
      kontrola_zakliknuti_nefunkcnost = false;
      kontrola_zakliknuti_vypadkovost = false;
      kontrola_zakliknuti_jiny = false;
      kontrola_zakliknuti_natrase = false;
      button_nefunkcnost.innerText = "Nefunkční Internet";
      button_vypadkovost.innerText = "Internet Nejde Správně";
      button_Jiny.innerText = "Jiný";
      button_naTrase.innerText = "Na Trase";
      button_zasranaTelka.innerText = "TV Nejde Vůbec";
      button_nefunkcnost.style.backgroundColor = "#222D32";
      button_vypadkovost.style.backgroundColor = "#222D32";
      button_zasranaTelka.style.backgroundColor = "#222D32";
      button_Jiny.style.backgroundColor = "#222D32";
      button_naTrase.style.backgroundColor = "#222D32";
        }};
    function tvnejdevubec(){
      button_nefunkcnost.style.top = "34%";
      button_vypadkovost.style.top = "40%";
      button_zasekanaTelka.style.top = "46%";
      button_zasranaTelka.style.top = "52%";
      button_Jiny.style.top = "88%";
      button_naTrase.style.top = "94%";
      popisek_pripojeni.style.display = "none";
      popisek_jakdlouho.style.display = "none";
      button_pripojeni_wifi.style.display = "none";
      button_pripojeni_oboji.style.display = "none";
      button_pripojeni.style.display = "none";
      popisek_pripojeni.style.display = "none";
      button_jakdlouho.style.display = "none";
      inputjakdlouho.style.display = "none";
      button_jakdlouho_vecer.style.display = "none";
      button_jakdlouho.style.display = "none";
      popisek_telefon.style.display = "initial";
      popisek_telefon.style.top = "61.5%";
      inputTelefon.style.display = "initial";
      inputTelefon.style.top = "61%";
      popisek_adresa.style.display = "initial";
      popisek_adresa.style.top = "65.5%"
      inputadresa.style.display = "initial";
      inputadresa.style.top = "65.5%";
      popisek_problem.style.display = "none";
      button_vypadky.style.display = "none";
      button_rychlost.style.display = "none";
      popisek_vcemkouka.style.display = "none";
      button_stb.style.display = "none";
      button_prohlizec.style.display = "none";
      button_platforma.style.display = "none";
      button_ping.style.display = "none";
      mac_popisek.style.display = "initial";
      mac_popisek.style.top = "70%";
      mac.style.display = "initial";
      mac.style.top = "70%";
      button_tablet.style.display = "none";
      if(kontrola_zakliknuti_tvnejdevubec === true){
        button_zasranaTelka.innerText = "TV Nejde Vůbec";
        button_zasranaTelka.style.backgroundColor = "#222D32";
        kontrola_zakliknuti_tvnejdevubec = false;
        kontrola_zakliknuti_tvnejdespravne= false;
        kontrola_zakliknuti_nefunkcnost = false;
        kontrola_zakliknuti_vypadkovost = false;
        kontrola_zakliknuti_jiny = false;
        kontrola_zakliknuti_natrase = false;
      typ_ticketu.value = 6;
      text.value = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "TELEFON VOLAJÍCÍHO: " + inputTelefon.value + "\n" + "KONTAKTNÍ TELEFON: " + inputTelefon.value + "\n" + "ADRESA PŘÍPOJKY: " + inputadresa.value + "\n" + "POZNÁMKA:" + "\n" + "=======================================" + "\n" + "NEPODAŘILO SE PŘIPOJIT K PLATFORMĚ? nepodařilo" + "\n" + "KONTROLA ZAPOJENÍ(KABELY)? ano" + "\n" + "VYPNOUT/ZAPNOUT? ano" + "\n" + "MAC: " + mac.value + "\n" + "=====================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      predmet.value = vip + subjekt + " - " + inputadresa.value + " - " + ip.slice(11, ip.length) + ": " + "TV Nejde Vůbec";
      upozorneniNaPresun();
    }else{
      button_zasranaTelka.style.backgroundColor = "#00d000";
      button_zasranaTelka.innerText = "Aktualizovat formulář";
      button_nefunkcnost.innerText = "Nefunkční Internet";
      button_zasekanaTelka.innerText = "TV Nejde Správně";
      button_vypadkovost.innerText = "Internet Nejde Správně";
      button_Jiny.innerText = "Jiný";
      button_naTrase.innerText = "Na Trase";
      kontrola_zakliknuti_tvnejdevubec = true;
      kontrola_zakliknuti_tvnejdespravne= false;
      kontrola_zakliknuti_nefunkcnost = false;
      kontrola_zakliknuti_vypadkovost = false;
      kontrola_zakliknuti_jiny = false;
      kontrola_zakliknuti_natrase = false;
      button_nefunkcnost.style.backgroundColor = "#222D32";
      button_vypadkovost.style.backgroundColor = "#222D32";
      button_zasekanaTelka.style.backgroundColor = "#222D32";
      button_Jiny.style.backgroundColor = "#222D32";
      button_naTrase.style.backgroundColor = "#222D32";
    }};

    function jiny(){
      button_nefunkcnost.style.top = "34%";
      button_vypadkovost.style.top = "40%";
      button_zasekanaTelka.style.top = "46%";
      button_zasranaTelka.style.top = "52%";
      button_Jiny.style.top = "58%";
      button_naTrase.style.top = "94%";
      popisek_telefon.style.display = "initial";
      popisek_telefon.style.top = "64%";
      inputTelefon.style.display = "initial";
      inputTelefon.style.top = "64%";
      button_pripojeni_wifi.style.display = "none";
      button_pripojeni_oboji.style.display = "none";
      button_pripojeni.style.display = "none";
      popisek_pripojeni.style.display = "none";
      button_jakdlouho.style.display = "none";
      button_jakdlouho_vecer.style.display = "none";
      inputjakdlouho.style.display = "none";
      popisek_adresa.style.display = "initial";
      popisek_adresa.style.top = "68%"
      inputadresa.style.display = "initial";
      inputadresa.style.top = "68%";
      popisek_vcemkouka.style.display = "none";
      button_stb.style.display = "none";
      button_prohlizec.style.display = "none";
      button_platforma.style.display = "none";
      button_tablet.style.display = "none";
      mac_popisek.style.display = "none";
      mac.style.display = "none";
      popisek_problem.style.display = "none";
      button_vypadky.style.display = "none";
      button_rychlost.style.display = "none";
      button_ping.style.display = "none";
      popisek_jakdlouho.style.display = "none";
      if(kontrola_zakliknuti_jiny === true){
        button_Jiny.innerText = "Jiný";
        button_Jiny.style.backgroundColor = "#222D32";
        kontrola_zakliknuti_tvnejdevubec = false;
        kontrola_zakliknuti_tvnejdespravne= false;
        kontrola_zakliknuti_nefunkcnost = false;
        kontrola_zakliknuti_vypadkovost = false;
        kontrola_zakliknuti_jiny = false;
        kontrola_zakliknuti_natrase = false;
      typ_ticketu.value = 5;
      text.value = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "TELEFON VOLAJÍCÍHO: " + inputTelefon.value + "\n" + "KONTAKTNÍ TELEFON: " + inputTelefon.value + "\n" + "ADRESA PŘÍPOJKY: " + inputadresa.value + "\n" + "POZNÁMKA:" + "\n" + "==================================================" + "\n" + ip + "\n" + oblast + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      predmet.value = vip + subjekt + " - " + inputadresa.value + " - " + ip.slice(11, ip.length) + ": " + "Jiný";
      upozorneniNaPresun();
    } else {
      button_Jiny.style.backgroundColor = "#00d000";
      button_Jiny.innerText = "Aktualizovat formulář";
      kontrola_zakliknuti_tvnejdevubec = false;
      kontrola_zakliknuti_tvnejdespravne= false;
      kontrola_zakliknuti_nefunkcnost = false;
      kontrola_zakliknuti_vypadkovost = false;
      kontrola_zakliknuti_jiny = true;
      kontrola_zakliknuti_natrase = false;
      button_nefunkcnost.innerText = "Nefunkční Internet";
      button_zasekanaTelka.innerText = "TV Nejde Správně";
      button_vypadkovost.innerText = "Internet Nejde Správně";
      button_naTrase.innerText = "Na Trase";
      button_zasranaTelka.innerText = "TV Nejde Vůbec";
      button_nefunkcnost.style.backgroundColor = "#222D32";
      button_vypadkovost.style.backgroundColor = "#222D32";
      button_zasekanaTelka.style.backgroundColor = "#222D32";
      button_zasranaTelka.style.backgroundColor = "#222D32";
      button_naTrase.style.backgroundColor = "#222D32";
    }};

    function natrase(){
      button_nefunkcnost.style.top = "34%";
      button_vypadkovost.style.top = "40%";
      button_zasekanaTelka.style.top = "46%";
      button_zasranaTelka.style.top = "52%";
      button_Jiny.style.top = "58%";
      button_naTrase.style.top = "64%";
      popisek_vcemkouka.style.display = "none";
      button_stb.style.display = "none";
      button_prohlizec.style.display = "none";
      button_platforma.style.display = "none";
      button_pripojeni_wifi.style.display = "none";
      button_pripojeni_oboji.style.display = "none";
      button_pripojeni.style.display = "none";
      popisek_pripojeni.style.display = "none";
      button_jakdlouho.style.display = "none";
      inputjakdlouho.style.display = "none";
      button_tablet.style.display = "none";
      mac_popisek.style.display = "none";
      mac.style.display = "none";
      popisek_problem.style.display = "none";
      button_vypadky.style.display = "none";
      button_rychlost.style.display = "none";
      button_ping.style.display = "none";
      popisek_telefon.style.display = "initial";
      popisek_telefon.style.top = "70%";
      inputTelefon.style.display = "initial";
      inputTelefon.style.top = "70%";
      popisek_adresa.style.display = "initial";
      popisek_adresa.style.top = "75%"
      inputadresa.style.display = "initial";
      inputadresa.style.top = "75%";
      button_jakdlouho_vecer.style.display = "none";
      popisek_jakdlouho.style.display = "none";
      if(kontrola_zakliknuti_natrase === true){
        button_naTrase.innerText = "Na Trase";
        button_naTrase.style.backgroundColor = "#222D32";
        kontrola_zakliknuti_nefunkcnost = false;
        kontrola_zakliknuti_vypadkovost = false;
        kontrola_zakliknuti_tvnejdespravne = false;
        kontrola_zakliknuti_tvnejdevubec = false;
        kontrola_zakliknuti_jiny = false;
        kontrola_zakliknuti_natrase = false;
      typ_ticketu.value = 11;
      text.value = "==================" + "\n" + "SUBJEKT: " + subjekt + "\n" + "SPOLEČNOST: " + spolecnost + "\n" + "TELEFON VOLAJÍCÍHO: " + inputTelefon.value + "\n" + "KONTAKTNÍ TELEFON: " + inputTelefon.value + "\n" + "ADRESA PŘÍPOJKY: " + inputadresa.value + "\n" + "===================================" + "\n" + "Klient byl obeznámen o výpadku na trase konektivity." + "\n" + "==================================================" + "\n" + ip + "\n" + nat_a_vlan + "\n" + urlko + "\n" + "Zadáno uživatelem: " + operator + "\n" + inicialy;
      predmet.value = vip + subjekt + " - " + inputadresa.value + " - " + ip.slice(11, ip.length) + ": " + "Výpadek na trase";
      upozorneniNaPresun();
    }else {
      button_naTrase.style.backgroundColor = "#00d000";
      button_naTrase.innerText = "Aktualizovat formulář";
      kontrola_zakliknuti_tvnejdevubec = false;
      kontrola_zakliknuti_tvnejdespravne= false;
      kontrola_zakliknuti_nefunkcnost = false;
      kontrola_zakliknuti_vypadkovost = false;
      kontrola_zakliknuti_jiny = false;
      kontrola_zakliknuti_natrase = true;
      button_nefunkcnost.innerText = "Nefunkční Internet";
      button_zasekanaTelka.innerText = "TV Nejde Správně";
      button_vypadkovost.innerText = "Internet Nejde Správně";
      button_Jiny.innerText = "Jiný";
      button_zasranaTelka.innerText = "TV Nejde Vůbec";
      button_nefunkcnost.style.backgroundColor = "#222D32";
      button_vypadkovost.style.backgroundColor = "#222D32";
      button_zasekanaTelka.style.backgroundColor = "#222D32";
      button_zasranaTelka.style.backgroundColor = "#222D32";
      button_Jiny.style.backgroundColor = "#222D32";
    }};

        function pripojenikabel(){
          popisek_popisku_pripojeni.nodeValue = "PŘIPOJENÍ: ";
          pripojeni = "kabel";
          dodatekpripojeni = pripojeni;
          popisek_popisku_pripojeni.nodeValue = popisek_popisku_pripojeni.nodeValue + dodatekpripojeni;
                };
        function pripojenioboji(){
          popisek_popisku_pripojeni.nodeValue = "PŘIPOJENÍ: ";
          pripojeni = "obojí";
          dodatekpripojeni = pripojeni;
          popisek_popisku_pripojeni.nodeValue = popisek_popisku_pripojeni.nodeValue + dodatekpripojeni;
                };
        function pripojeniwifi(){
          popisek_popisku_pripojeni.nodeValue = "PŘIPOJENÍ: ";
          pripojeni = "wifi";
          dodatekpripojeni = pripojeni;
          popisek_popisku_pripojeni.nodeValue = popisek_popisku_pripojeni.nodeValue + dodatekpripojeni;
                };
        function jakdlouhofce(){
          popisek_popiskuJakdlouho.nodeValue = "JAK DLOUHO: ";
          inputjakdlouho.value = "od rána";
                };
        function jakdlouhovecer(){
          popisek_popiskuJakdlouho.nodeValue = "JAK DLOUHO: ";
          inputjakdlouho.value = "od včerejška večer";
                };
        function jmeno(){
          popisek_popisek_jméno.nodeValue = "JMÉNO: ";
          subjekt = subjekt.slice(0, subjekt.lastIndexOf(" "));
          zobrazjmeno = subjekt;
          popisek_popisek_jméno.nodeValue = popisek_popisek_jméno.nodeValue + zobrazjmeno;
                };
        function jmeno1(){
          popisek_popisek_jméno.nodeValue = "JMÉNO: ";
          subjekt = subjekt.slice(subjekt.indexOf(" "), subjekt.length);
          zobrazjmeno = subjekt;
          popisek_popisek_jméno.nodeValue = popisek_popisek_jméno.nodeValue + zobrazjmeno;
                };
        function vypadkovost(){
          popisek_popisek_problem.nodeValue = "TYP PROBLÉMU: ";
          vypadky = "výpadky";
          dodatekproblem = vypadky;
          popisek_popisek_problem.nodeValue = popisek_popisek_problem.nodeValue + dodatekproblem;
                };
        function rychlovost(){
          popisek_popisek_problem.nodeValue = "TYP PROBLÉMU: ";
          vypadky = "rychlost";
          dodatekproblem = vypadky;
          popisek_popisek_problem.nodeValue = popisek_popisek_problem.nodeValue + dodatekproblem;
                };
        function ping(){
          popisek_popisek_problem.nodeValue = "TYP PROBLÉMU: ";
          vypadky = "odezva";
          dodatekproblem = vypadky;
          popisek_popisek_problem.nodeValue = popisek_popisek_problem.nodeValue + dodatekproblem;
                };
        function stb(){
          popisek_popisek_vcemkouka.nodeValue = "V ČEM KOUKÁ: ";
          vcemkouka = "STB";
          dodatekvcemkouka = vcemkouka;
          popisek_popisek_vcemkouka.nodeValue = popisek_popisek_vcemkouka.nodeValue + dodatekvcemkouka;
                };
        function smartTV(){
          popisek_popisek_vcemkouka.nodeValue = "V ČEM KOUKÁ: ";
          vcemkouka = "SmartTV";
          dodatekvcemkouka = vcemkouka;
          popisek_popisek_vcemkouka.nodeValue = popisek_popisek_vcemkouka.nodeValue + dodatekvcemkouka;
                };
        function prohlizec(){
          popisek_popisek_vcemkouka.nodeValue = "V ČEM KOUKÁ: ";
          vcemkouka = "prohlížeč";
          dodatekvcemkouka = vcemkouka;
          popisek_popisek_vcemkouka.nodeValue = popisek_popisek_vcemkouka.nodeValue + dodatekvcemkouka;
        };

        function tablet(){
          popisek_popisek_vcemkouka.nodeValue = "V ČEM KOUKÁ: ";
          vcemkouka = "telefon/tablet";
          dodatekvcemkouka = vcemkouka;
          popisek_popisek_vcemkouka.nodeValue = popisek_popisek_vcemkouka.nodeValue + dodatekvcemkouka;
        }

        function mys_nad_nefunkcnost(){
          if(kontrola_zakliknuti_nefunkcnost === true){
            button_nefunkcnost.style.borderLeftWidth = "3px";
            button_nefunkcnost.style.backgroundColor = "#009f00";
            button_nefunkcnost.style.color = "#ffffff";
          } else {
          button_nefunkcnost.style.color = "#ffffff";
          button_nefunkcnost.style.backgroundColor = "#1e282c";
          button_nefunkcnost.style.borderLeftWidth = "3px";
        }};

        function mys_neni_nad_nefunkcnost(){
          if(kontrola_zakliknuti_nefunkcnost === true){
            button_nefunkcnost.style.borderLeftWidth = "0px";
          } else {
          button_nefunkcnost.style.color = "#b8c7ce";
          button_nefunkcnost.style.borderLeftWidth = "0px";
          button_nefunkcnost.style.backgroundColor = "#222D32";
        }};

        function mys_nad_vypadkovost(){
          if(kontrola_zakliknuti_vypadkovost === true){
          button_vypadkovost.style.borderLeftWidth = "3px";
          button_vypadkovost.style.backgroundColor = "#009f00";
          button_vypadkovost.style.color = "#ffffff";
        } else{
          button_vypadkovost.style.color = "#ffffff";
          button_vypadkovost.style.backgroundColor = "#1e282c";
          button_vypadkovost.style.borderLeftWidth = "3px";
        }};

        function mys_neni_nad_vypadkovost(){
          if(kontrola_zakliknuti_vypadkovost === true){
            button_vypadkovost.style.borderLeftWidth = "0px";
            } else{
          button_vypadkovost.style.backgroundColor = "#222D32";
          button_vypadkovost.style.color = "#b8c7ce";
          button_vypadkovost.style.borderLeftWidth = "0px";
        }};

        function mys_nad_zasekanaTelka(){
          if(kontrola_zakliknuti_tvnejdespravne === true){
          button_zasekanaTelka.style.color = "#ffffff";
          button_zasekanaTelka.style.backgroundColor = "#009f00";
          button_zasekanaTelka.style.borderLeftWidth = "3px";

        }else{
          button_zasekanaTelka.style.backgroundColor = "#1e282c";
          button_zasekanaTelka.style.color = "#ffffff";
          button_zasekanaTelka.style.borderLeftWidth = "3px";
        }};

        function mys_neni_nad_zasekanaTelka(){
          if(kontrola_zakliknuti_tvnejdespravne === true){
            button_zasekanaTelka.style.borderLeftWidth = "0px";
            }else{
          button_zasekanaTelka.style.backgroundColor = "#222D32";
          button_zasekanaTelka.style.color = "#b8c7ce";
          button_zasekanaTelka.style.borderLeftWidth = "0px";
        }};

        function mys_nad_naTrase(){
          if(kontrola_zakliknuti_natrase === true){
          button_naTrase.style.color = "#ffffff";
          button_naTrase.style.backgroundColor = "#009f00";
          button_naTrase.style.borderLeftWidth = "3px";

        }else{
          button_naTrase.style.backgroundColor = "#1e282c";
          button_naTrase.style.color = "#ffffff";
          button_naTrase.style.borderLeftWidth = "3px";
        }};

        function mys_neni_nad_naTrase(){
          if(kontrola_zakliknuti_natrase === true){
            button_naTrase.style.borderLeftWidth = "0px";
            }else{
          button_naTrase.style.backgroundColor = "#222D32";
          button_naTrase.style.color = "#b8c7ce";
          button_naTrase.style.borderLeftWidth = "0px";
        }};

        function mys_nad_zasranaTelka(){
          if(kontrola_zakliknuti_tvnejdevubec === true){
          button_zasranaTelka.style.color = "#ffffff";
          button_zasranaTelka.style.backgroundColor = "#009f00";
          button_zasranaTelka.style.borderLeftWidth = "3px";

        }else{
          button_zasranaTelka.style.backgroundColor = "#1e282c";
          button_zasranaTelka.style.color = "#ffffff";
          button_zasranaTelka.style.borderLeftWidth = "3px";
        }};

        function mys_neni_nad_zasranaTelka(){
          if(kontrola_zakliknuti_tvnejdevubec === true){
            button_zasranaTelka.style.borderLeftWidth = "0px";
            }else{
          button_zasranaTelka.style.backgroundColor = "#222D32";
          button_zasranaTelka.style.color = "#b8c7ce";
          button_zasranaTelka.style.borderLeftWidth = "0px";
        }};

        function mys_nad_Jiny(){
          if(kontrola_zakliknuti_jiny === true){
          button_Jiny.style.color = "#ffffff";
          button_Jiny.style.backgroundColor = "#009f00";
          button_Jiny.style.borderLeftWidth = "3px";

        }else{
          button_Jiny.style.backgroundColor = "#1e282c";
          button_Jiny.style.color = "#ffffff";
          button_Jiny.style.borderLeftWidth = "3px";
        }};

        function mys_neni_nad_Jiny(){
          if(kontrola_zakliknuti_jiny === true){
            button_Jiny.style.borderLeftWidth = "0px";
            }else{
          button_Jiny.style.backgroundColor = "#222D32";
          button_Jiny.style.color = "#b8c7ce";
          button_Jiny.style.borderLeftWidth = "0px";
        }};

    var popisek_pripojeni = document.createElement("div");
    var popisek_popisku_pripojeni = document.createTextNode("PŘIPOJENÍ: ");
    popisek_pripojeni.appendChild(popisek_popisku_pripojeni);
    document.body.appendChild(popisek_pripojeni);
    popisek_pripojeni.style.position = "fixed";
    popisek_pripojeni.style.left = "0.5%";
    popisek_pripojeni.style.display = "none";
    popisek_pripojeni.style.zIndex = "99";
    popisek_pripojeni.style.color = "#ffffff";

    var popisek_telefon = document.createElement("div");
    var popisek_popisku_telefon = document.createTextNode("Telefon:");
    popisek_telefon.appendChild(popisek_popisku_telefon);
    document.body.appendChild(popisek_telefon);
    popisek_telefon.style.position = "fixed";
    popisek_telefon.style.left = "0.5%";
    popisek_telefon.style.display = "none";
    popisek_telefon.style.zIndex = "99";
    popisek_telefon.style.color = "#ffffff";

    var popisek_adresa = document.createElement("div");
    var popisek_popisku_adresa = document.createTextNode("Adresa:");
    popisek_adresa.appendChild(popisek_popisku_adresa);
    document.body.appendChild(popisek_adresa);
    popisek_adresa.style.position = "fixed";
    popisek_adresa.style.left = "0.5%";
    popisek_adresa.style.display = "none";
    popisek_adresa.style.zIndex = "99";
    popisek_adresa.style.color = "#ffffff";

    var inputadresa = document.createElement("INPUT");
    inputadresa.setAttribute("type", "text");
    inputadresa.setAttribute("value", adresa);
    document.body.appendChild(inputadresa);
    inputadresa.style.position = "fixed";
    inputadresa.style.outline = "none";
    inputadresa.style.left = "6%";
    inputadresa.style.display = "none";
    inputadresa.style.width = "138px";
    inputadresa.style.boxSizing = "border-box";
    inputadresa.style.fontSize = "1em";
    inputadresa.style.borderTopLeftRadius = "3px";
    inputadresa.style.borderTopRightRadius = "3px";
    inputadresa.style.borderBottomLeftRadius = "3px";
    inputadresa.style.borderBottomRightRadius = "3px";
    inputadresa.style.borderBotWidth = "1px";
    inputadresa.style.borderTopWidth = "1px";
    inputadresa.style.borderLeftWidth = "1px";
    inputadresa.style.borderRightWidth = "1px";
    inputadresa.style.zIndex = "99";

    var upozorneni = document.createElement("div");
    var popisek_upozorneni = document.createTextNode("");
    upozorneni.appendChild(popisek_upozorneni);
    document.body.appendChild(upozorneni);
    upozorneni.style.position = "fixed";
    upozorneni.style.left = "0.1%";
    upozorneni.style.display = "none";
    upozorneni.style.zIndex = "99";
    upozorneni.style.color = "#ffffff";
    upozorneni.style.fontSize = "1.5em";
    upozorneni.style.width = eval(sajdbar.style.offsetWidth);
    upozorneni.style.backgroundColor = "#ff0000";

    var inputTelefon = document.createElement("INPUT");
    inputTelefon.setAttribute("type", "text");
    inputTelefon.setAttribute("value", telefon);
    document.body.appendChild(inputTelefon);
    inputTelefon.style.position = "fixed";
    inputTelefon.style.outline = "none";
    inputTelefon.style.left = "6%";
    inputTelefon.style.display = "none";
    inputTelefon.style.width = "100px";
    inputTelefon.style.boxSizing = "border-box";
    inputTelefon.style.fontSize = "1em";
    inputTelefon.style.borderTopLeftRadius = "3px";
    inputTelefon.style.borderTopRightRadius = "3px";
    inputTelefon.style.borderBottomLeftRadius = "3px";
    inputTelefon.style.borderBottomRightRadius = "3px";
    inputTelefon.style.borderBotWidth = "1px";
    inputTelefon.style.borderTopWidth = "1px";
    inputTelefon.style.borderLeftWidth = "1px";
    inputTelefon.style.borderRightWidth = "1px";
    inputTelefon.style.zIndex = "99";

    var mac_popisek = document.createElement("div");
    var popisek_mac_popisek = document.createTextNode("MAC:");
    mac_popisek.appendChild(popisek_mac_popisek);
    document.body.appendChild(mac_popisek);
    mac_popisek.style.position = "fixed";
    mac_popisek.style.left = "0.5%";
    mac_popisek.style.display = "none";
    mac_popisek.style.zIndex = "99";
    mac_popisek.style.color = "#ffffff";
    mac_popisek.style.fontSize = "1em";

    var mac = document.createElement("INPUT");
    mac.setAttribute("type", "text");
    mac.setAttribute("value", "");
    document.body.appendChild(mac);
    mac.style.position = "fixed";
    mac.style.outline = "none";
    mac.style.left = "6%";
    mac.style.display = "none";
    mac.style.width = "138px";
    mac.style.boxSizing = "border-box";
    mac.style.fontSize = "1em";
    mac.style.borderTopLeftRadius = "3px";
    mac.style.borderTopRightRadius = "3px";
    mac.style.borderBottomLeftRadius = "3px";
    mac.style.borderBottomRightRadius = "3px";
    mac.style.borderBotWidth = "1px";
    mac.style.borderTopWidth = "1px";
    mac.style.borderLeftWidth = "1px";
    mac.style.borderRightWidth = "1px";
    mac.style.zIndex = "99";

    var button_pripojeni = document.createElement("button");
    var btn_pripojeni_popisek = document.createTextNode("kabel");
    button_pripojeni.appendChild(btn_pripojeni_popisek);
    document.body.appendChild(button_pripojeni);
    button_pripojeni.style.position = "fixed";
    button_pripojeni.style.left = "4%";
    button_pripojeni.style.display = "none";
    button_pripojeni.style.zIndex = "99";
    button_pripojeni.style.backgroundColor = "#3c8dbc";
    button_pripojeni.style.borderColor = "#367fa9";
    button_pripojeni.style.color = "#ffffff";
    button_pripojeni.style.boxSizing = "border-box";
    button_pripojeni.style.fontSize = "1em";
    button_pripojeni.style.borderTopLeftRadius = "3px";
    button_pripojeni.style.borderTopRightRadius = "3px";
    button_pripojeni.style.borderBottomLeftRadius = "3px";
    button_pripojeni.style.borderBottomRightRadius = "3px";
    button_pripojeni.style.borderBotWidth = "1px";
    button_pripojeni.style.borderTopWidth = "1px";
    button_pripojeni.style.borderLeftWidth = "1px";
    button_pripojeni.style.borderRightWidth = "1px";
    button_pripojeni.onclick = pripojenikabel;


    var button_pripojeni_wifi = document.createElement("button");
    var btn_pripojeni_wifi_popisek = document.createTextNode("wifi");
    button_pripojeni_wifi.appendChild(btn_pripojeni_wifi_popisek);
    document.body.appendChild(button_pripojeni_wifi);
    button_pripojeni_wifi.style.position = "fixed";
    button_pripojeni_wifi.style.outline = "none";
    button_pripojeni_wifi.style.left = "0.5%";
    button_pripojeni_wifi.style.display = "none";
    button_pripojeni_wifi.style.zIndex = "99";
    button_pripojeni_wifi.style.backgroundColor = "#3c8dbc";
    button_pripojeni_wifi.style.borderColor = "#367fa9";
    button_pripojeni_wifi.style.color = "#ffffff";
    button_pripojeni_wifi.style.boxSizing = "border-box";
    button_pripojeni_wifi.style.fontSize = "1em";
    button_pripojeni_wifi.style.borderTopLeftRadius = "3px";
    button_pripojeni_wifi.style.borderTopRightRadius = "3px";
    button_pripojeni_wifi.style.borderBottomLeftRadius = "3px";
    button_pripojeni_wifi.style.borderBottomRightRadius = "3px";
    button_pripojeni_wifi.style.borderBotWidth = "1px";
    button_pripojeni_wifi.style.borderTopWidth = "1px";
    button_pripojeni_wifi.style.borderLeftWidth = "1px";
    button_pripojeni_wifi.style.borderRightWidth = "1px";
    button_pripojeni_wifi.onclick = pripojeniwifi;

    var button_pripojeni_oboji = document.createElement("button");
    var btn_pripojeni_oboji_popisek = document.createTextNode("oboji");
    button_pripojeni_oboji.appendChild(btn_pripojeni_oboji_popisek);
    document.body.appendChild(button_pripojeni_oboji);
    button_pripojeni_oboji.style.position = "fixed";
    button_pripojeni_oboji.style.outline = "none";
    button_pripojeni_oboji.style.left = "8%";
    button_pripojeni_oboji.style.display = "none";
    button_pripojeni_oboji.style.zIndex = "99";
    button_pripojeni_oboji.style.backgroundColor = "#3c8dbc";
    button_pripojeni_oboji.style.borderColor = "#367fa9";
    button_pripojeni_oboji.style.color = "#ffffff";
    button_pripojeni_oboji.style.boxSizing = "border-box";
    button_pripojeni_oboji.style.fontSize = "1em";
    button_pripojeni_oboji.style.borderTopLeftRadius = "3px";
    button_pripojeni_oboji.style.borderTopRightRadius = "3px";
    button_pripojeni_oboji.style.borderBottomLeftRadius = "3px";
    button_pripojeni_oboji.style.borderBottomRightRadius = "3px";
    button_pripojeni_oboji.style.borderBotWidth = "1px";
    button_pripojeni_oboji.style.borderTopWidth = "1px";
    button_pripojeni_oboji.style.borderLeftWidth = "1px";
    button_pripojeni_oboji.style.borderRightWidth = "1px";
    button_pripojeni_oboji.onclick = pripojenioboji;

    var popisek_jakdlouho = document.createElement("div");
    var popisek_popiskuJakdlouho = document.createTextNode("JAK DLOUHO: ");
    popisek_jakdlouho.appendChild(popisek_popiskuJakdlouho);
    document.body.appendChild(popisek_jakdlouho);
    popisek_jakdlouho.style.position = "fixed";
    popisek_jakdlouho.style.left = "0.5%";
    popisek_jakdlouho.style.display = "none";
    popisek_jakdlouho.style.zIndex = "99";
    popisek_jakdlouho.style.color = "#ffffff";

    var button_jakdlouho = document.createElement("button");
    var btn_jakdlouho_popisek = document.createTextNode("od rána");
    button_jakdlouho.appendChild(btn_jakdlouho_popisek);
    document.body.appendChild(button_jakdlouho);
    button_jakdlouho.style.position = "fixed";
    button_jakdlouho.style.display = "none";
    button_jakdlouho.style.left = "9%";
    button_jakdlouho.style.top = "53.5%";
    button_jakdlouho.style.backgroundColor = "#3c8dbc";
    button_jakdlouho.style.borderColor = "#367fa9";
    button_jakdlouho.style.color = "#ffffff";
    button_jakdlouho.style.boxSizing = "border-box";
    button_jakdlouho.style.fontSize = "1em";
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

    var button_jakdlouho_vecer = document.createElement("button");
    var btn_jakdlouho_popisek = document.createTextNode("od včerejška večer");
    button_jakdlouho_vecer.appendChild(btn_jakdlouho_popisek);
    document.body.appendChild(button_jakdlouho_vecer);
    button_jakdlouho_vecer.style.position = "fixed";
    button_jakdlouho_vecer.style.left = "0.5%";
    button_jakdlouho_vecer.style.display = "none";
    button_jakdlouho_vecer.style.backgroundColor = "#3c8dbc";
    button_jakdlouho_vecer.style.borderColor = "#367fa9";
    button_jakdlouho_vecer.style.color = "#ffffff";
    button_jakdlouho_vecer.style.boxSizing = "border-box";
    button_jakdlouho_vecer.style.fontSize = "1em";
    button_jakdlouho_vecer.style.borderTopLeftRadius = "3px";
    button_jakdlouho_vecer.style.borderTopRightRadius = "3px";
    button_jakdlouho_vecer.style.borderBottomLeftRadius = "3px";
    button_jakdlouho_vecer.style.borderBottomRightRadius = "3px";
    button_jakdlouho_vecer.style.borderBotWidth = "1px";
    button_jakdlouho_vecer.style.borderTopWidth = "1px";
    button_jakdlouho_vecer.style.borderLeftWidth = "1px";
    button_jakdlouho_vecer.style.borderRightWidth = "1px";
    button_jakdlouho_vecer.style.zIndex = "99";
    button_jakdlouho_vecer.onclick = jakdlouhovecer;

    var inputjakdlouho = document.createElement("INPUT");
    inputjakdlouho.setAttribute("type", "text");
    inputjakdlouho.setAttribute("value", "");
    document.body.appendChild(inputjakdlouho);
    inputjakdlouho.style.position = "fixed";
    inputjakdlouho.style.outline = "none";
    inputjakdlouho.style.left = "6%";
    inputjakdlouho.style.display = "none";
    inputjakdlouho.style.width = "138px";
    inputjakdlouho.style.boxSizing = "border-box";
    inputjakdlouho.style.fontSize = "1em";
    inputjakdlouho.style.borderTopLeftRadius = "3px";
    inputjakdlouho.style.borderTopRightRadius = "3px";
    inputjakdlouho.style.borderBottomLeftRadius = "3px";
    inputjakdlouho.style.borderBottomRightRadius = "3px";
    inputjakdlouho.style.borderBotWidth = "1px";
    inputjakdlouho.style.borderTopWidth = "1px";
    inputjakdlouho.style.borderLeftWidth = "1px";
    inputjakdlouho.style.borderRightWidth = "1px";
    inputjakdlouho.style.zIndex = "99";

    var popisek_problem = document.createElement("div");
    var popisek_popisek_problem = document.createTextNode("TYP PROBLÉMU:");
    popisek_problem.appendChild(popisek_popisek_problem);
    document.body.appendChild(popisek_problem);
    popisek_problem.style.position = "fixed";
    popisek_problem.style.left = "0.5%";
    popisek_problem.style.display = "none";
    popisek_problem.style.zIndex = "99";
    popisek_problem.style.color = "#ffffff";

    var button_vypadky = document.createElement("button");
    var btn_vypadky_popisek = document.createTextNode("výpadky");
    button_vypadky.appendChild(btn_vypadky_popisek);
    document.body.appendChild(button_vypadky);
    button_vypadky.style.position = "fixed";
    button_vypadky.style.left = "0.5%";
    button_vypadky.style.display = "none";
    button_vypadky.style.zIndex = "99";
    button_vypadky.style.backgroundColor = "#3c8dbc";
    button_vypadky.style.borderColor = "#367fa9";
    button_vypadky.style.color = "#ffffff";
    button_vypadky.style.boxSizing = "border-box";
    button_vypadky.style.fontSize = "1em";
    button_vypadky.style.borderTopLeftRadius = "3px";
    button_vypadky.style.borderTopRightRadius = "3px";
    button_vypadky.style.borderBottomLeftRadius = "3px";
    button_vypadky.style.borderBottomRightRadius = "3px";
    button_vypadky.style.borderBotWidth = "1px";
    button_vypadky.style.borderTopWidth = "1px";
    button_vypadky.style.borderLeftWidth = "1px";
    button_vypadky.style.borderRightWidth = "1px";
    button_vypadky.onclick = vypadkovost;

    var button_rychlost = document.createElement("button");
    var btn_rychlost_popisek = document.createTextNode("rychlost");
    button_rychlost.appendChild(btn_rychlost_popisek);
    document.body.appendChild(button_rychlost);
    button_rychlost.style.position = "fixed";
    button_rychlost.style.left = "5%";
    button_rychlost.style.display = "none";
    button_rychlost.style.zIndex = "99";
    button_rychlost.style.backgroundColor = "#3c8dbc";
    button_rychlost.style.borderColor = "#367fa9";
    button_rychlost.style.color = "#ffffff";
    button_rychlost.style.boxSizing = "border-box";
    button_rychlost.style.fontSize = "1em";
    button_rychlost.style.borderTopLeftRadius = "3px";
    button_rychlost.style.borderTopRightRadius = "3px";
    button_rychlost.style.borderBottomLeftRadius = "3px";
    button_rychlost.style.borderBottomRightRadius = "3px";
    button_rychlost.style.borderBotWidth = "1px";
    button_rychlost.style.borderTopWidth = "1px";
    button_rychlost.style.borderLeftWidth = "1px";
    button_rychlost.style.borderRightWidth = "1px";
    button_rychlost.onclick = rychlovost;

    var button_ping = document.createElement("button");
    var btn_ping_popisek = document.createTextNode("odezva");
    button_ping.appendChild(btn_ping_popisek);
    document.body.appendChild(button_ping);
    button_ping.style.position = "fixed";
    button_ping.style.left = "9%";
    button_ping.style.display = "none";
    button_ping.style.zIndex = "99";
    button_ping.style.backgroundColor = "#3c8dbc";
    button_ping.style.borderColor = "#367fa9";
    button_ping.style.color = "#ffffff";
    button_ping.style.boxSizing = "border-box";
    button_ping.style.fontSize = "1em";
    button_ping.style.borderTopLeftRadius = "3px";
    button_ping.style.borderTopRightRadius = "3px";
    button_ping.style.borderBottomLeftRadius = "3px";
    button_ping.style.borderBottomRightRadius = "3px";
    button_ping.style.borderBotWidth = "1px";
    button_ping.style.borderTopWidth = "1px";
    button_ping.style.borderLeftWidth = "1px";
    button_ping.style.borderRightWidth = "1px";
    button_ping.onclick = ping;

    var popisek_vcemkouka = document.createElement("div");
    var popisek_popisek_vcemkouka = document.createTextNode("V ČEM KOUKÁ: ");
    popisek_vcemkouka.appendChild(popisek_popisek_vcemkouka);
    document.body.appendChild(popisek_vcemkouka);
    popisek_vcemkouka.style.position = "fixed";
    popisek_vcemkouka.style.left = "0.5%";
    popisek_vcemkouka.style.display = "none";
    popisek_vcemkouka.style.zIndex = "99";
    popisek_vcemkouka.style.color = "#ffffff";

    var button_platforma = document.createElement("button");
    var btn_platforma_popisek = document.createTextNode("SmartTV");
    button_platforma.appendChild(btn_platforma_popisek);
    document.body.appendChild(button_platforma);
    button_platforma.style.position = "fixed";
    button_platforma.style.left = "0.5%";
    button_platforma.style.display = "none";
    button_platforma.style.backgroundColor = "#3c8dbc";
    button_platforma.style.borderColor = "#367fa9";
    button_platforma.style.color = "#ffffff";
    button_platforma.style.boxSizing = "border-box";
    button_platforma.style.fontSize = "1em";
    button_platforma.style.borderTopLeftRadius = "3px";
    button_platforma.style.borderTopRightRadius = "3px";
    button_platforma.style.borderBottomLeftRadius = "3px";
    button_platforma.style.borderBottomRightRadius = "3px";
    button_platforma.style.borderBotWidth = "1px";
    button_platforma.style.borderTopWidth = "1px";
    button_platforma.style.borderLeftWidth = "1px";
    button_platforma.style.borderRightWidth = "1px";
    button_platforma.style.zIndex = "99";
    button_platforma.onclick = smartTV;

    var button_stb = document.createElement("button");
    var btn_stb_popisek = document.createTextNode("STB");
    button_stb.appendChild(btn_stb_popisek);
    document.body.appendChild(button_stb);
    button_stb.style.position = "fixed";
    button_stb.style.left = "5%";
    button_stb.style.display = "none";
    button_stb.style.backgroundColor = "#3c8dbc";
    button_stb.style.borderColor = "#367fa9";
    button_stb.style.color = "#ffffff";
    button_stb.style.boxSizing = "border-box";
    button_stb.style.fontSize = "1em";
    button_stb.style.borderTopLeftRadius = "3px";
    button_stb.style.borderTopRightRadius = "3px";
    button_stb.style.borderBottomLeftRadius = "3px";
    button_stb.style.borderBottomRightRadius = "3px";
    button_stb.style.borderBotWidth = "1px";
    button_stb.style.borderTopWidth = "1px";
    button_stb.style.borderLeftWidth = "1px";
    button_stb.style.borderRightWidth = "1px";
    button_stb.style.zIndex = "99";
    button_stb.onclick = stb;

    var button_prohlizec = document.createElement("button");
    var btn_prohlizec_popisek = document.createTextNode("Prohlížeč");
    button_prohlizec.appendChild(btn_prohlizec_popisek);
    document.body.appendChild(button_prohlizec);
    button_prohlizec.style.position = "fixed";
    button_prohlizec.style.left = "7.5%";
    button_prohlizec.style.display = "none";
    button_prohlizec.style.backgroundColor = "#3c8dbc";
    button_prohlizec.style.borderColor = "#367fa9";
    button_prohlizec.style.color = "#ffffff";
    button_prohlizec.style.boxSizing = "border-box";
    button_prohlizec.style.fontSize = "1em";
    button_prohlizec.style.borderTopLeftRadius = "3px";
    button_prohlizec.style.borderTopRightRadius = "3px";
    button_prohlizec.style.borderBottomLeftRadius = "3px";
    button_prohlizec.style.borderBottomRightRadius = "3px";
    button_prohlizec.style.borderBotWidth = "1px";
    button_prohlizec.style.borderTopWidth = "1px";
    button_prohlizec.style.borderLeftWidth = "1px";
    button_prohlizec.style.borderRightWidth = "1px";
    button_prohlizec.style.zIndex = "99";
    button_prohlizec.onclick = prohlizec;

    var button_tablet = document.createElement("button");
    var btn_tablet_popisek = document.createTextNode("Telefon / Tablet");
    button_tablet.appendChild(btn_tablet_popisek);
    document.body.appendChild(button_tablet);
    button_tablet.style.position = "fixed";
    button_tablet.style.left = "7.5%";
    button_tablet.style.display = "none";
    button_tablet.style.backgroundColor = "#3c8dbc";
    button_tablet.style.borderColor = "#367fa9";
    button_tablet.style.color = "#ffffff";
    button_tablet.style.boxSizing = "border-box";
    button_tablet.style.fontSize = "1em";
    button_tablet.style.borderTopLeftRadius = "3px";
    button_tablet.style.borderTopRightRadius = "3px";
    button_tablet.style.borderBottomLeftRadius = "3px";
    button_tablet.style.borderBottomRightRadius = "3px";
    button_tablet.style.borderBotWidth = "1px";
    button_tablet.style.borderTopWidth = "1px";
    button_tablet.style.borderLeftWidth = "1px";
    button_tablet.style.borderRightWidth = "1px";
    button_tablet.style.zIndex = "99";
    button_tablet.onclick = tablet;

    var button_nefunkcnost = document.createElement("button");
    var nefunkcnost_popisek = document.createTextNode("Nefunkční Internet");
    button_nefunkcnost.appendChild(nefunkcnost_popisek);
    document.body.appendChild(button_nefunkcnost);
    button_nefunkcnost.style.position = "fixed";
    button_nefunkcnost.style.outline = "none";
    button_nefunkcnost.style.left = "0px";
    button_nefunkcnost.style.top = "44%";
    button_nefunkcnost.style.width = eval(sajdbar.offsetWidth)+"px";
    button_nefunkcnost.style.height = eval(sajdbar.offsetWidth/5,22)+"px";
    button_nefunkcnost.style.backgroundColor = "#222D32";
    button_nefunkcnost.style.borderColor = "#367fa9";
    button_nefunkcnost.style.color = "#b8c7ce";
    button_nefunkcnost.style.fontSize = "1em";
    button_nefunkcnost.style.borderLeftWidth = "0px";
    button_nefunkcnost.style.borderRightWidth = "0px";
    button_nefunkcnost.style.borderTopWidth = "0px";
    button_nefunkcnost.style.borderBottomWidth = "0px";
    button_nefunkcnost.style.zIndex = "100";
    button_nefunkcnost.onclick = nefunkcnost;
    button_nefunkcnost.onmouseover = mys_nad_nefunkcnost;
    button_nefunkcnost.onmouseout = mys_neni_nad_nefunkcnost;


    var button_vypadkovost = document.createElement("button");
    var vypadkovost_popisek = document.createTextNode("Internet Nejde Správně");
    button_vypadkovost.appendChild(vypadkovost_popisek);
    document.body.appendChild(button_vypadkovost);
    button_vypadkovost.style.position = "fixed";
    button_vypadkovost.style.outline = "none";
    button_vypadkovost.style.left = "0px";
    button_vypadkovost.style.top = "50%";
    button_vypadkovost.style.width = eval(sajdbar.offsetWidth)+"px";
    button_vypadkovost.style.height = eval(sajdbar.offsetWidth/5,22)+"px";
    button_vypadkovost.style.backgroundColor = "#222D32";
    button_vypadkovost.style.borderColor = "#367fa9";
    button_vypadkovost.style.color = "#b8c7ce";
    button_vypadkovost.style.fontSize = "1em";
    button_vypadkovost.style.borderLeftWidth = "0px";
    button_vypadkovost.style.borderRightWidth = "0px";
    button_vypadkovost.style.borderTopWidth = "0px";
    button_vypadkovost.style.borderBottomWidth = "0px";
    button_vypadkovost.style.zIndex = "100";
    button_vypadkovost.onclick = nejdespravne;
    button_vypadkovost.onmouseover = mys_nad_vypadkovost;
    button_vypadkovost.onmouseout = mys_neni_nad_vypadkovost;

    var button_zasekanaTelka = document.createElement("button");
    var btn_zasekanaTelka_popisek = document.createTextNode("TV Nejde Správně");
    button_zasekanaTelka.appendChild(btn_zasekanaTelka_popisek);
    document.body.appendChild(button_zasekanaTelka);
    button_zasekanaTelka.style.position = "fixed";
    button_zasekanaTelka.style.outline = "none";
    button_zasekanaTelka.style.left = "0px";
    button_zasekanaTelka.style.top = "56%";
    button_zasekanaTelka.style.width = eval(sajdbar.offsetWidth)+"px";
    button_zasekanaTelka.style.height = eval(sajdbar.offsetWidth/5,22)+"px";
    button_zasekanaTelka.style.backgroundColor = "#222D32";
    button_zasekanaTelka.style.borderColor = "#367fa9";
    button_zasekanaTelka.style.color = "#b8c7ce";
    button_zasekanaTelka.style.fontSize = "1em";
    button_zasekanaTelka.style.borderLeftWidth = "0px";
    button_zasekanaTelka.style.borderRightWidth = "0px";
    button_zasekanaTelka.style.borderTopWidth = "0px";
    button_zasekanaTelka.style.borderBottomWidth = "0px";
    button_zasekanaTelka.style.zIndex = "100";
    button_zasekanaTelka.onclick = tvnejdespravne;
    button_zasekanaTelka.onmouseover = mys_nad_zasekanaTelka;
    button_zasekanaTelka.onmouseout = mys_neni_nad_zasekanaTelka;

    var button_zasranaTelka = document.createElement("button");
    var btn_zasranaTelka_popisek = document.createTextNode("TV Nejde Vůbec");
    button_zasranaTelka.appendChild(btn_zasranaTelka_popisek);
    document.body.appendChild(button_zasranaTelka);
    button_zasranaTelka.style.position = "fixed";
    button_zasranaTelka.style.outline = "none";
    button_zasranaTelka.style.left = "0px";
    button_zasranaTelka.style.top = "62%";
    button_zasranaTelka.style.width = eval(sajdbar.offsetWidth)+"px";
    button_zasranaTelka.style.height = eval(sajdbar.offsetWidth/5,22)+"px";
    button_zasranaTelka.style.backgroundColor = "#222D32";
    button_zasranaTelka.style.borderColor = "#367fa9";
    button_zasranaTelka.style.color = "#b8c7ce";
    button_zasranaTelka.style.fontSize = "1em";
    button_zasranaTelka.style.borderBottomWidth = "0px";
    button_zasranaTelka.style.borderTopWidth = "0px";
    button_zasranaTelka.style.borderLeftWidth = "0px";
    button_zasranaTelka.style.borderRightWidth = "0px";
    button_zasranaTelka.style.zIndex = "100";
    button_zasranaTelka.onclick = tvnejdevubec;
    button_zasranaTelka.onmouseover = mys_nad_zasranaTelka;
    button_zasranaTelka.onmouseout = mys_neni_nad_zasranaTelka;

    var button_naTrase = document.createElement("button");
    var btn_naTrase_popisek = document.createTextNode("Na Trase");
    button_naTrase.appendChild(btn_naTrase_popisek);
    document.body.appendChild(button_naTrase);
    button_naTrase.style.position = "fixed";
    button_naTrase.style.outline = "none";
    button_naTrase.style.left = "0px";
    button_naTrase.style.top = "68%";
    button_naTrase.style.width = eval(sajdbar.offsetWidth)+"px";
    button_naTrase.style.height = eval(sajdbar.offsetWidth/5,22)+"px";
    button_naTrase.style.backgroundColor = "#222D32";
    button_naTrase.style.borderColor = "#367fa9";
    button_naTrase.style.color = "#b8c7ce";
    button_naTrase.style.fontSize = "1em";
    button_naTrase.style.borderBottomWidth = "0px";
    button_naTrase.style.borderTopWidth = "0px";
    button_naTrase.style.borderLeftWidth = "0px";
    button_naTrase.style.borderRightWidth = "0px";
    button_naTrase.style.zIndex = "100";
    button_naTrase.onclick = natrase;
    button_naTrase.onmouseover = mys_nad_naTrase;
    button_naTrase.onmouseout = mys_neni_nad_naTrase;

    var button_Jiny = document.createElement("button");
    var btn_Jiny_popisek = document.createTextNode("Jiný");
    button_Jiny.appendChild(btn_Jiny_popisek);
    document.body.appendChild(button_Jiny);
    button_Jiny.style.position = "fixed";
    button_naTrase.style.outline = "none";
    button_Jiny.style.left = "0px";
    button_Jiny.style.top = "74%";
    button_Jiny.style.width = eval(sajdbar.offsetWidth)+"px";
    button_Jiny.style.height = eval(sajdbar.offsetWidth/5,22)+"px";
    button_Jiny.style.backgroundColor = "#222D32";
    button_Jiny.style.borderColor = "#367fa9";
    button_Jiny.style.color = "#b8c7ce";
    button_Jiny.style.fontSize = "1em";
    button_Jiny.style.borderBottomWidth = "0px";
    button_Jiny.style.borderTopWidth = "0px";
    button_Jiny.style.borderLeftWidth = "0px";
    button_Jiny.style.borderRightWidth = "0px";
    button_Jiny.style.zIndex = "100";
    button_Jiny.onclick = jiny;
    button_Jiny.onmouseover = mys_nad_Jiny;
    button_Jiny.onmouseout = mys_neni_nad_Jiny;
  }else if(urlko = "/"){
    var stav = document.getElementsByClassName("Value")[3];
    var stavLabel = document.getElementsByClassName("Value")[3]["previousElementSibling"];
    if(stav.innerText == "uzavřeno - vyřešeno"){
      stavLabel.innerText = "POZOR:";
      stav.style.border = "2px solid";
      stav.style.backgroundColor = "red";
      stav.style.fontStyle = "italic";
    };
  };
};
