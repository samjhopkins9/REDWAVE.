let logo = "Images/REDWAVE.logo.png";

let spotlink = "https://open.spotify.com/artist/3DUGOEQlHtDibMS73uULP8?si=WNgl6pSyS5-OaHhZOzosgg";
let applink = "https://music.apple.com/us/artist/redwave/1704251598";
let soundlink = "https://soundcloud.com/whoisredwave";

let instalink = "http://instagram.com/whoisredwave";
let threadslink = "https://www.threads.net/@whoisredwave";
let twtrlink = "https://twitter.com/whoisredwave";

let ttlink = "https://www.tiktok.com/@whoisredwave";
let ytlink = "https://www.youtube.com/channel/UCdt1Bwh674LaxiD5-D2F98g";

let descwritelink = "https://www.badmouthrecs.com/post/redwave-a-sonic-fusion-of-gritty-rhythmic-and-complex-bass-music-in-descent-ep";

document.querySelector("header").innerHTML += `<img src="${logo}" width="20%" height="10%"></img>`;

document.getElementById("links").innerHTML += `<a href=${soundlink} target="_BLANK"><div class="link"><img src="Images/soundcloud-logo.png" width="30px"></img>Soundcloud</div></a>`;
document.getElementById("links").innerHTML += `<a href=${spotlink} target="_BLANK"><div class="link"><img src="Images/spotify-logo.png" width="30px"></img>Spotify</div></a>`;
document.getElementById("links").innerHTML += `<a href=${applink} target="_BLANK"><div class="link"><img src="Images/apple-music-logo.png" width="30px"></img>Apple Music</div></a>`;

let chaos = new Release("Chaos EP", chaossc, chaosspot, chaosappl, chaosdl)
let descent = new Release("Descent EP", descentsc, descentspot, descentappl, descentdl)
let immortal = new Release("Immortal", immortalsc, immortalspot, immortalappl, immortaldl)
let motor = new Release("Motor", motorsc, motorspot, motorappl, motordl)
let lightning = new Release("Lightning", lightningsc, lightningspot, lightningappl, lightningdl)

document.getElementById("links").innerHTML += `<a href=${descwritelink} target="_BLANK"><div class="link">DESCENT EP WRITEUP</div></a>`

document.getElementById("links").innerHTML += `<a href=${instalink} target="_BLANK"><div class="link"><img src="Images/Logo-Instagram-noir-1.png" width="30px"></img>Instagram</div></a>`;
document.getElementById("links").innerHTML += `<a href=${ttlink} target="_BLANK"><div class="link"><img src="Images/tiktok-logo.png" width="30px"></img>TikTok</div></a>`;

document.getElementById("links").innerHTML += `<a href=${twtrlink} target="_BLANK"><div class="link"><img src="Images/x-logo.png" width="30px"></img>Twitter / X</div></a>`;
document.getElementById("links").innerHTML += `<a href=${threadslink} target="_BLANK"><div class="link"><img src="Images/threads-logo.png" width="30px"></img>Threads</div></a>`;

document.getElementById("links").innerHTML += `<a href=${ytlink} target="_BLANK"><div class="link"><img src="Images/yt-logo.png" width="30px"></img>YouTube</div></a>`;


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
