function loadJSON() {
var xmlhttp = new XMLHttpRequest();
var url = "https://raw.githubusercontent.com/Vester-David/vester-david.github.io/master/raoc.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var talks = JSON.parse(this.responseText);
        var talk_keys = Object.keys(talks);
        var random_talk = talk_keys[Math.floor(Math.random() *talk_keys.length)];
        var talk = talks[random_talk];
                  
        document.getElementById("session").innerHTML = talk.month + " " + talk.year + " - " + talk.session;
        document.getElementById("pic").src = talk.picture;
        document.getElementById("title").innerHTML = talk.title;
        document.getElementById("author").innerHTML = "By " + talk.name;
        document.getElementById("player").innerHTML = "<audio src=" + talk.mp3 + " controls autoplay>";
        document.getElementById("media-border").style.transition = "height 0.4s linear 0s";
        document.getElementById("media-border").style.height = "325px";

    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

