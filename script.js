let ugh = new Release("UGH", ughsc, ughspot, ughappl, ughdl);
let wanderer = new Release("THE WANDERER", wanderersc, wandererspot, wandererappl, wandererdl);
let guns = new Release("GUNS", gunssc, gunsspot, gunsappl, gunsdl);
let hoh = new Release("HOH!", hohsc, hohspot, hohappl, hohdl);
let mix02 = new Release("Cyberpunk Dystopia 02", mix02sc, "", "", mix02dl);
let mix01 = new Release("Cybperpunk Dystopia 01", mix01sc, "", "", mix01dl);
let faxmachine = new Release("Fax Machine", faxsc, faxspot, faxappl, faxdl);
let myeyes = new Release("Travis Scott - My Eyes (REDWAVE. Remix)", myeyessc, "", "", myeyesdl);
let ascension = new Release("Ascension EP", ascensionsc, ascensionspot, ascensionappl, ascensiondl);
let disrespect = new Release("DISRESPECT (w/ M?STIC)", disrespectsc, disrespectspot, disrespectappl, disrespectdl);
let revovery = new Release("Recovery EP", recoverysc, recoveryspot, recoveryappl, recoverydl);
let SPCmix = new Release("STUNNA POSSE CULT MIX", spcmix, spcmixspot, spcmixappl, spcmixdl);
let chaos = new Release("Chaos EP", chaossc, chaosspot, chaosappl, chaosdl);
let descent = new Release("Descent EP", descentsc, descentspot, descentappl, descentdl, descentwriteup);
let immortal = new Release("Immortal", immortalsc, immortalspot, immortalappl, immortaldl);
let motor = new Release("Motor", motorsc, motorspot, motorappl, motordl);
let lightning = new Release("Lightning", lightningsc, lightningspot, lightningappl, lightningdl);

let logo = "Images/Logo-Transparent_FINAL.png"; // main header (logo)
// let logo = "Images/ChaosHeader.png"; // chaos EP header

let spotlink = "https://open.spotify.com/artist/3DUGOEQlHtDibMS73uULP8?si=WNgl6pSyS5-OaHhZOzosgg";
let applink = "https://music.apple.com/us/artist/redwave/1704251598";
let soundlink = "https://soundcloud.com/whoisredwave";

let instalink = "http://instagram.com/whoisredwave";
let threadslink = "https://www.threads.net/@whoisredwave";
let twtrlink = "https://twitter.com/whoisredwave";

let ttlink = "https://www.tiktok.com/@whoisredwave";
let ytlink = "https://www.youtube.com/channel/UCdt1Bwh674LaxiD5-D2F98g";
let audiuslink = "https://audius.co/whoisredwave";

document.querySelector("header").innerHTML += `<img src="${logo}" width="20%" height="10%" style="opacity: 100%;"></img>`; // logo
// document.querySelector("header").innerHTML += `<img src="${logo}" width="100%" height="100%" style="opacity: 100%; background-repeat: repeat;"></img>`; // chaos

document.getElementById("links").innerHTML += `<a href=${soundlink} target="_BLANK"><div class="link"><img src="Images/soundcloud-logo.png" width="30px"></img>SOUNDCLOUD</div></a>`;
document.getElementById("links").innerHTML += `<a href=${spotlink} target="_BLANK"><div class="link"><img src="Images/spotify-logo.png" width="30px" style=" filter: hue-rotate(-140deg) saturate(80%) brightness(90%);"></img>SPOTIFY</div></a>`;
document.getElementById("links").innerHTML += `<a href=${applink} target="_BLANK"><div class="link"><img src="Images/apple-music-logo.png" width="30px"></img>APPLE MUSIC</div></a>`;

document.getElementById("links").innerHTML += `<a href=${instalink} target="_BLANK"><div class="link"><img src="Images/Logo-Instagram-noir-1.png" width="30px"></img>INSTAGRAM</div></a>`;
document.getElementById("links").innerHTML += `<a href=${threadslink} target="_BLANK"><div class="link"><img src="Images/threads-logo.png" width="30px"></img>THREADS</div></a>`;

document.getElementById("links").innerHTML += `<a href=${ttlink} target="_BLANK"><div class="link"><img src="Images/tiktok-logo.png" width="30px"></img>TIKTOK</div></a>`;
document.getElementById("links").innerHTML += `<a href=${twtrlink} target="_BLANK"><div class="link"><img src="Images/x-logo.png" width="30px"></img>TWITTER / X</div></a>`;


document.getElementById("links").innerHTML += `<a href=${ytlink} target="_BLANK"><div class="link"><img src="Images/yt-logo.png" width="30px"></img>YOUTUBE</div></a>`;

document.getElementById("links").innerHTML += `<a href=${audiuslink} target="_BLANK"><div class="link"><img src="Images/audiuslogo.webp" width="30px ">AUDIUS</div></a>`

document.querySelector("footer").innerHTML += `REDWAVE. 2025`;

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
