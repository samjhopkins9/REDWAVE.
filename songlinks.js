let recoverysc = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1853159418&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/whoisredwave" title="REDWAVE." target="_blank" style="color: #cccccc; text-decoration: none;">REDWAVE.</a> · <a href="https://soundcloud.com/whoisredwave/sets/recovery-ep" title="RECOVERY EP" target="_blank" style="color: #cccccc; text-decoration: none;">RECOVERY EP</a></div>`
let recoveryspot = `https://open.spotify.com/album/54ZHml5FgjEcVQ9VrUjAEg?si=PEVBWfSpTjqYK_jqA0DW3w`
let recoveryappl = `https://music.apple.com/us/album/recovery-ep/1752595557`
let recoverydl = ``


let spcmix = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1811312343&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
let spcmixspot = ""
let spcmixappl = ""
let spcmixdl = ""

let chaossc = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1805557528&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`
let chaosspot = `https://open.spotify.com/album/0pMh6T8yvCpnyV7OZEUX3n`
let chaosappl = `https://music.apple.com/us/album/chaos-ep/1738753652`
let chaosdl = ``

let lightningsc = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1605970608&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
let lightningspot = `https://open.spotify.com/track/1dlUbthkDbNIoKMv1HrcIg?si=60982a9ea5be43cb`;
let lightningappl = `https://music.apple.com/us/album/lightning/1704251679?i=1704251680`;
let lightningdl = `https://hypeddit.com/redwave/lightning`;

let motorsc = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1628722260&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
let motorspot = `https://open.spotify.com/track/3UwiQYI7vwjSm1tEQWqJhU?si=40690319c2154088`;
let motorappl = `https://music.apple.com/us/album/motor/1705876295?i=1705876296`;
let motordl = `https://hypeddit.com/redwave/motor`;

let immortalsc = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1650838731&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
let immortalspot = `https://open.spotify.com/track/6EsLeP93n2lbLXAgyTQTrJ?si=539318f252d246b6`;
let immortalappl = `https://music.apple.com/us/album/immortal/1706802515?i=1706802516`;
let immortaldl = `https://hypeddit.com/redwave/immortal`;

let descentsc = `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1758975567&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`
let descentspot = `https://open.spotify.com/album/3V1EzIVtYlcnb86qIMmmtz`
let descentappl = `https://music.apple.com/us/album/descent-ep/1725616492`
let descentdl = `https://hypeddit.com/redwave/planetary`
let descentwriteup = `https://www.badmouthrecs.com/post/redwave-a-sonic-fusion-of-gritty-rhythmic-and-complex-bass-music-in-descent-ep`

class Release {
    
    constructor(name, sc, spot, appl, dl, writeup = null){
        
        this.name = name;
        this.spot = spot;
        this.appl = appl;
        this.sc = sc;
        this.dl = dl;
        if (writeup){
            this.writeup = writeup;
        }
        
        
        let rd = document.createElement("div");
        rd.innerHTML += `<h2>${name}</h2>`;
        if (writeup){
            rd.innerHTML += `<a href=${writeup} target="_BLANK" class="songlink">WRITEUP</a><br><br>`;
        }
        
        rd.innerHTML += sc;
        
        if (this.spot.length > 100){
            
            rd.innerHTML += spot;
            rd.innerHTML += appl;
            
        } else if (this.spot != ""){
            rd.innerHTML += `<br><a href=${spot} target="_BLANK" class="songlink">SPOTIFY</a>  <a href=${appl} target="_BLANK" class="songlink">APPLE MUSIC</a>`;
        }
        if (dl != ''){
            rd.innerHTML += `<a href=${dl} target="_BLANK" class="songlink">FREE DL</a>`;
        }
        
        document.getElementById("releases").appendChild(rd);
        
    }
    
}
