window.onload = function(){
  var iniciala = document.getElementById("inic");
  var button2 = document.getElementById("butt2");
  
  function ulozInic(){
    chrome.storage.local.set({"inic": iniciala.value}, function(){console.log(iniciala.value)});
  };

  button2.onclick = ulozInic;
};
