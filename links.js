let lightningsc = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1605970608&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/whoisredwave" title="REDWAVE." target="_blank" style="color: #cccccc; text-decoration: none;">REDWAVE.</a> · <a href="https://soundcloud.com/whoisredwave/lightning-1" title="Lightning" target="_blank" style="color: #cccccc; text-decoration: none;">Lightning</a></div>`;
let lightningspot = `https://open.spotify.com/track/1dlUbthkDbNIoKMv1HrcIg?si=60982a9ea5be43cb`;
let lightningappl = `https://music.apple.com/us/album/lightning/1704251679?i=1704251680`;
let lightningdl = `https://hypeddit.com/redwave/lightning`;

let motorsc = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1628722260&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/whoisredwave" title="REDWAVE." target="_blank" style="color: #cccccc; text-decoration: none;">REDWAVE.</a> · <a href="https://soundcloud.com/whoisredwave/motor-1" title="Motor" target="_blank" style="color: #cccccc; text-decoration: none;">Motor</a></div>`;
let motorspot = `https://open.spotify.com/track/3UwiQYI7vwjSm1tEQWqJhU?si=40690319c2154088`;
let motorappl = `https://music.apple.com/us/album/motor/1705876295?i=1705876296`;
let motordl = `https://hypeddit.com/redwave/motor`;

let immortalsc = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1650838731&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/whoisredwave" title="REDWAVE." target="_blank" style="color: #cccccc; text-decoration: none;">REDWAVE.</a> · <a href="https://soundcloud.com/whoisredwave/immortal-1" title="Immortal" target="_blank" style="color: #cccccc; text-decoration: none;">Immortal</a></div>`;
let immortalspot = `https://open.spotify.com/track/6EsLeP93n2lbLXAgyTQTrJ?si=539318f252d246b6`;
let immortalappl = `https://music.apple.com/us/album/immortal/1706802515?i=1706802516`;
let immortaldl = `https://hypeddit.com/redwave/immortal`;

class Release {
    
    constructor(name, sc, spot, appl, dl){
        
        this.name = name;
        this.spot = spot;
        this.appl = appl;
        this.sc = sc;
        this.dl = dl;
        
        let rd = document.createElement("div");
        rd.innerHTML += `<h2>${name}</h2>`
        rd.innerHTML += sc;
        rd.innerHTML += `<a href=${dl} target="_BLANK">FREE DL</a>   <a href=${spot} target="_BLANK">SPOTIFY</a>   <a href=${appl} target="_BLANK">APPLE MUSIC</a>`;
        document.getElementById("releases").appendChild(rd);
        
    }
    
}
