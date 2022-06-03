$('h1').css('color', 'red');
console.log('Eureka');
let songIndex = 0;
let audioElement = new Audio('/songs/1.mp3');
let masterPlay = $('#masterPlay');
let myProgressBar = $('#myProgessBar');
let gif = $('#gif');
let masterSongName = $('#masterSongName');
let timeDur = $(".txt");
console.log(masterSongName.text());
let songItemPlay = $('.songItemPlay');
let songItems = Array.from(document.getElementsByClassName('songItem'));
timeDur.text("");
// Play pause Function ---
function plPa(x) {
    if (x.attr('src') == "/img/play.svg") {
        x.attr('src', '/img/pause.svg');
    }
    else {
        x.attr('src', '/img/play.svg');
    }
}
masterPlay.click(function () {
    plPa(masterPlay);
})
let songs = [
    { songName: "Ahimsa(Error 404 Remix)", filePath: "/songs/1.mp3", cover: "/covers/1.jpg" },
    { songName: "Salty Water", filePath: "/songs/2.mp3", cover: "/covers/2.jpg" },
    { songName: "Falling Stars", filePath: "/songs/3.mp3", cover: "/covers/3.jpg" },
    { songName: "Plucks", filePath: "/songs/4.mp3", cover: "/covers/4.jpg" },
    { songName: "Jeeja Kalrah Kyun Aaya", filePath: "/songs/5.mp3", cover: "/covers/5.jpg" },
    { songName: "Moombah City", filePath: "/songs/6.mp3", cover: "/covers/6.jpg" },
    { songName: "Ritviz&Nucleya - Baarat(Error 404 Remix)", filePath: "/songs/7.mp3", cover: "/covers/7.jpg" },
    { songName: "Duaa(Error 404 Remix)", filePath: "/songs/8.mp3", cover: "/covers/8.jpg" },
    { songName: "South Mania 2(Error 404)", filePath: "/songs/9.mp3", cover: "/covers/9.jpg" },
    { songName: "Make You Mine(PUBLIC)", filePath: "/songs/10.mp3", cover: "/covers/10.jpg" },
]
songItems.forEach((element, i) => {
    document.getElementsByClassName('imge')[i].src = songs[i].cover;
    document.getElementsByClassName('songName')[i].innerText = songs[i].songName;
});
let prg = "";
let auD = ""
audioElement.addEventListener('timeupdate', () => {
    auD = audioElement.duration;
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.val(progress);
    prg = myProgressBar.val();
    if(myProgressBar.val() == "100")
    {
        $("#next").click();
    }
})


myProgressBar.change(function () {
    audioElement.currentTime = myProgressBar.val() * audioElement.duration / 100;
})
masterPlay.click(function () {
    audioElement.currentTime = prg * audioElement.duration / 100;
})
songItemPlay.click(function () {
    $('.songItemPlay').attr('src', '/img/play.svg');
    let b = $(this).attr('id');
    let a = '#' + $(this).attr('id');
    let z = $(a)
    plPa(z);
    if (z.attr('src') == '/img/play.svg') {
        masterPlay.attr('src', '/img/play.svg');
    }
    if (z.attr('src') == '/img/pause.svg') {
        masterPlay.attr('src', '/img/pause.svg');
        gif.css("opacity","1");
    }
    if (masterPlay.attr('src') == '/img/play.svg') {
        z.attr('src', '/img/play.svg');
    }
    if (masterPlay.attr('src') == '/img/pause.svg') {
        z.attr('src', '/img/pause.svg');
    }
    masterSongName.text(songs[b - 1].songName);
    $(".songItem").removeClass("csStyle")
    for (i = 0; i < songs.length; i++) {
        if (songs[i].songName == masterSongName.text()) {
            let p = i + 1;
            let h = "#" + (i + 1);
            let cls = $(h).attr("class");
            let lol = $("." + cls).parents(".songItem");
            let sI = "#" + $(lol).attr("class") + p;
            $(sI).addClass("csStyle");
            let play = '/songs/' + p + '.mp3'
            if (z.attr('src') == '/img/play.svg') {
                audioElement.src = play;
                audioElement.pause();                
            }
            if (z.attr('src') == '/img/pause.svg') {
                audioElement.src = play;
                audioElement.play();
            }

        }
    }

})
masterPlay.click(function () {
    for (i = 0; i < songs.length; i++) {
        if (songs[i].songName == masterSongName.text()) {
            let h = "#" + (i + 1);
            let p = i + 1;
            songIndex = p;
            let play = '/songs/' + p + '.mp3'
            if (masterPlay.attr('src') == '/img/play.svg') {

                // console.log(play);
                audioElement.src = play;
                audioElement.currentTime = prg * auD / 100;
                audioElement.pause();
                $(h).attr('src', "/img/play.svg");
                gif.css('opacity', '0');
                // console.log(prg);
                myProgressBar.val(prg);
                // console.log(prg*auD/100);
            }
            if (masterPlay.attr('src') == '/img/pause.svg') {
                // console.log(prg*auD/100);
                // console.log(play);
                audioElement.src = play;
                myProgressBar.val(prg);
                audioElement.currentTime = prg * auD / 100;
                audioElement.play();
                $(h).attr('src', "/img/pause.svg");
                gif.css('opacity', '1');
            }

        }
    }
})
$("#next").click(function () {
    songItemPlay.attr("src","/img/play.svg"); 
    $(".songItem").removeClass("csStyle");
    for(i=0;i<songs.length;i++)
    {
        if(masterSongName.text() == songs[i].songName)
        {
            
            if(i>=9){
                i = 0
            }
            else{
                i += 1;
            }
            $("#"+(i+1)).attr('src','/img/pause.svg');
            if($("#"+(i+1)).attr("src") == '/img/pause.svg')
            {
                masterPlay.attr("src",'/img/pause.svg');
            }
            else
            {
                masterPlay.attr("src",'/img/play.svg');
            }
            masterSongName.text(songs[i].songName)
            let p = i + 1;
            let h = "#" + (i + 1);
            let cls = $(h).attr("class");
            let lol = $("." + cls).parents(".songItem");
            let sI = "#" + $(lol).attr("class") + p;
            // console.log(sI);
            $(sI).addClass("csStyle");
            let play = '/songs/' + p + '.mp3'
            if($(h).attr("src") == '/img/pause.svg')
            {
                audioElement.src = play;
                audioElement.play();
            }
            
            
        }
    }
})
$("#previous").click(function () {
    songItemPlay.attr("src","/img/play.svg");
    $(".songItem").removeClass("csStyle");
    for(i=0;i<songs.length;i++)
    {
        if(masterSongName.text() == songs[i].songName)
        {
            
            if(i<=0){
                i = 0;
            }
            else{
                i -= 1;
            }
            $("#"+(i+1)).attr('src','/img/pause.svg');
            if($("#"+(i+1)).attr("src") == '/img/pause.svg')
            {
                masterPlay.attr("src",'/img/pause.svg');
            }
            else
            {
                masterPlay.attr("src",'/img/play.svg');
            }
            masterSongName.text(songs[i].songName)
            let p = i + 1;
            let h = "#" + (i + 1);
            let cls = $(h).attr("class");
            let lol = $("." + cls).parents(".songItem");
            let sI = "#" + $(lol).attr("class") + p;
            // console.log(sI);
            $(sI).addClass("csStyle");
            let play = '/songs/' + p + '.mp3'
            if($(h).attr("src") == '/img/pause.svg')
            {
                audioElement.src = play;
                audioElement.play();
            }
            
            
        }
    }
})
for(i=0;i<songs.length;i++)
{
    if(masterSongName.text()==songs[i].songName)
    {
        $("#songItem"+(i+1)).addClass("csStyle");
    }
}
$(".songItem").click(function(){
    im = $(this).find(".songItemPlay")[0]
    yup = "#"+$(im).attr("id")
    // console.log(yup);
    $(yup).click();
})