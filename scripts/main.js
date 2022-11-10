//Seuraava muuttaa otsikon nappia painamalla:
function myFunction()
{
  var button = document.getElementById("id01");
  
  if (button.innerHTML === "Firefox is Cool!") {
    button.innerHTML = "Is Brave even Cooler?!";
  } else {
    button.innerHTML = "Firefox is Cool!";
  }
};

//Seuraava muuttaa Firefox-logon Brave-logoksi ja toisinpäin, kuvaaklikkaamalla:
const myImage = document.querySelector("img");
myImage.onclick = () =>
{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
      myImage.setAttribute("src", "images/brave-logo.jpeg");
      document.body.style.backgroundColor = "#F7F7F7";
    } else {
      myImage.setAttribute("src", "images/firefox-icon.png");
      document.body.style.backgroundColor = "#FF9500";
    }
};

//Seuraava muuttaa taustavärin oranssista valkoiseksi:
