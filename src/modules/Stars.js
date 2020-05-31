export function initStars() {
    var stars = 800;
    var starElem = document.getElementById("stars");
    var r = 500;

    for (var i = 0; i < stars; i++) {
        var star = document.createElement("div"); 
        star.className = "star";
        starElem.appendChild(star);
    }

    var allStars = document.getElementsByClassName("star");
    for (let cur of allStars) {
        var s = 0.2 + Math.random();
        var curR = r + (Math.random() * 1800);

        cur.style.transformOrigin = "0 0 " + curR + "px",
        cur.style.transform = "translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")"
    }
}