let logo = "Images/REDWAVE.logo.png";

let spotlink = "https://open.spotify.com/artist/3DUGOEQlHtDibMS73uULP8?si=WNgl6pSyS5-OaHhZOzosgg";
let applink = "https://music.apple.com/us/artist/redwave/1704251598";
let soundlink = "https://soundcloud.com/whoisredwave";

let instalink = "http://instagram.com/whoisredwave";
let threadslink = "https://www.threads.net/@whoisredwave";
let twtrlink = "https://twitter.com/whoisredwave";

let ttlink = "https://www.tiktok.com/@whoisredwave";
let ytlink = "https://www.youtube.com/channel/UCdt1Bwh674LaxiD5-D2F98g";

let immortal = new Release("Immortal", immortalsc, immortalspot, immortalappl, immortaldl)
let motor = new Release("Motor", motorsc, motorspot, motorappl, motordl)
let lightning = new Release("Lightning", lightningsc, lightningspot, lightningappl, lightningdl)

document.querySelector("header").innerHTML += `<img src="${logo}" width="20%" height="10%"></img>`;


document.getElementById("links").innerHTML += `<div class="link"><a href=${soundlink} target="_BLANK"><img src="Images/soundcloud-logo.png" width="30px"></img>Soundcloud</a></div>`;
document.getElementById("links").innerHTML += `<div class="link"><a href=${spotlink} target="_BLANK"><img src="Images/spotify-logo.png" width="30px"></img>Spotify</a></div>`;
document.getElementById("links").innerHTML += `<div class="link"><a href=${applink} target="_BLANK"><img src="Images/apple-music-logo.png" width="30px"></img>Apple Music</a>`;


document.getElementById("links").innerHTML += `<div class="link"><a href=${instalink} target="_BLANK"><img src="Images/Logo-Instagram-noir-1.png" width="30px"></img>Instagram</a></div>`;


document.getElementById("links").innerHTML += `<div class="link"><a href=${ttlink} target="_BLANK"><img src="Images/tiktok-logo.png" width="30px"></img>TikTok</a></div>`;
document.getElementById("links").innerHTML += `<div class="link"><a href=${ytlink} target="_BLANK"><img src="Images/yt-logo.png" width="30px"></img>YouTube</a></div>`;

document.getElementById("links").innerHTML += `<div class="link"><a href=${twtrlink} target="_BLANK"><img src="Images/x-logo.png" width="30px"></img>Twitter / X</a></div>`;
document.getElementById("links").innerHTML += `<div class="link"><a href=${threadslink} target="_BLANK"><img src="Images/threads-logo.png" width="30px"></img>Threads</a></div>`;

document.querySelector("footer").innerHTML += `REDWAVE. 2024`;

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
