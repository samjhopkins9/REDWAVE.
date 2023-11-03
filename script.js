let logo = "Images/Logo 1.png";

let spotlink = "https://open.spotify.com/artist/3DUGOEQlHtDibMS73uULP8?si=WNgl6pSyS5-OaHhZOzosgg";
let applink = "https://music.apple.com/us/artist/redwave/1704251598";
let soundlink = "https://soundcloud.com/whoisredwave";

let instalink = "http://instagram.com/whoisredwave";
let twtrlink = "https://twitter.com/whoisredwave";

let immortal = new Release("Immortal", immortalsc, immortalspot, immortalappl, immortaldl)
let motor = new Release("Motor", motorsc, motorspot, motorappl, motordl)
let lightning = new Release("Lightning", lightningsc, lightningspot, lightningappl, lightningdl)

document.getElementById("links").innerHTML += `<div class="link"><img src="Images/soundcloud-logo.png" width="5%"></img><a href=${soundlink} target="_BLANK">Soundcloud</a></div>`;
document.querySelector("header").innerHTML += `<img src="${logo}" width="20%" height="10%"></img>`;
document.getElementById("links").innerHTML += `<div class="link"><img src="Images/spotify-logo.png" width="7%"></img><a href=${spotlink} target="_BLANK">Spotify</a></div>`;
document.getElementById("links").innerHTML += `<div class="link"><img src="Images/apple-music-logo.png" width="5%"></img><a href=${applink} target="_BLANK">Apple Music</a>`;


document.getElementById("links").innerHTML += `<div class="link"><img src="Images/Logo-Instagram-noir-1.png" width="5%"></img><a href=${instalink} target="_BLANK">Instagram</a></div>`;
document.getElementById("links").innerHTML += `<div class="link"><img src="Images/X-loho.png" width="5%"></img><a href=${twtrlink} target="_BLANK">Twitter / X</a></div>`;

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
