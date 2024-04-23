let chaossc = `<iframe width="33%" height="352" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1805557528&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`
let chaosspot = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0pMh6T8yvCpnyV7OZEUX3n?utm_source=generator" width="33%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
let chaosappl = `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="352" width="33%" style="max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/chaos-ep/1738753652"></iframe>`
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

let descentsc = `<iframe width="33%" height="352" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1758975567&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`
let descentspot = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3V1EzIVtYlcnb86qIMmmtz?utm_source=generator" width="33%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
let descentappl = `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="352" width="33%" style="max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/descent-ep/1725616492"></iframe>`
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
            
        } else {
            rd.innerHTML += `<br><a href=${spot} target="_BLANK" class="songlink">SPOTIFY</a>  <a href=${appl} target="_BLANK" class="songlink">APPLE MUSIC</a>`;
        }
        if (dl != ''){
            rd.innerHTML += `<a href=${dl} target="_BLANK" class="songlink">FREE DL</a>`;
        }
        
        
        
        document.getElementById("releases").appendChild(rd);
        
    }
    
}
