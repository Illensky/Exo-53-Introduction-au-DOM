let p = document.getElementsByTagName('p');
let span = document.getElementsByTagName('span');
let a = document.getElementsByTagName('a');
let animeP = document.querySelectorAll('.anime')
let lastPar = document.querySelector('#lastPar')

for (let i = 0; i < p.length; i++) {
    p[i].style.color = "green";
    p[i].style.width = "60vw";
}

for (let i = 0; i < span.length; i++) {
    span[i].style.backgroundColor = "red";
    span[i].dir = "rtl";
}

for (let i = 0; i < a.length; i++) {
    a[i].innerHTML = "du texte pour les liens";
    a[i].href = "le lien de chaque balise";
}

for (let i = 0; i < animeP.length; i++) {
    animeP[i].style.animationName = "animation";
    animeP[i].style.animationDuration = "3s";
}

lastPar.innerHTML = "modifier le texte du dernier paragraphe"
/*modifier text dernier paragraphe
assigner animation a qlq paragraphe*/