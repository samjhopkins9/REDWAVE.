let logo = "REDWAVE.";

let spotlink = "https://open.spotify.com/artist/3DUGOEQlHtDibMS73uULP8?si=WNgl6pSyS5-OaHhZOzosgg";
let applink = "https://music.apple.com/us/artist/redwave/1704251598";
let soundlink = "https://soundcloud.com/whoisredwave";

let instalink = "http://instagram.com/redwave._music";
let twtrlink = "https://twitter.com/redwave_music";

let immortal = new Release("Immortal", immortalsc, immortalspot, immortalappl, immortaldl)
let motor = new Release("Motor", motorsc, motorspot, motorappl, motordl)
let lightning = new Release("Lightning", lightningsc, lightningspot, lightningappl, lightningdl)


document.querySelector("header").innerHTML += `<h1>${logo}</h1>`;
document.getElementById("links").innerHTML += `<a href=${spotlink} target="_BLANK">Spotify</a>`;
document.getElementById("links").innerHTML += `<a href=${applink} target="_BLANK">Apple Music</a>`;
document.getElementById("links").innerHTML += `<a href=${soundlink} target="_BLANK">Soundcloud</a>`;

document.getElementById("links").innerHTML += `<a href=${instalink} target="_BLANK">Instagram</a>`;
document.getElementById("links").innerHTML += `<a href=${twtrlink} target="_BLANK">Twitter / X</a>`;

document.querySelector("footer").innerHTML += `REDWAVE. 2023`;

function openReleases(){
    
    document.getElementById("links").style.display = "none";
    document.getElementById("releases").style.display = "flex";
    document.getElementById("songbutton").removeEventListener("click", openReleases);
    document.getElementById("homebutton").addEventListener("click", openHome);
    
}

function openHome(){
    
    document.getElementById("links").style.display = "flex";
    document.getElementById("releases").style.display = "none";
    document.getElementById("homebutton").removeEventListener("click", openHome);
    document.getElementById("songbutton").addEventListener("click", openReleases);
    
}

document.getElementById("songbutton").addEventListener("click", openReleases);
