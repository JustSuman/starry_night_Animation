function starry(){
    let no_of_stars = 720;
    let i = 0;
    while(i<no_of_stars){
        let sky = document.querySelector(".sky");
        let stars = document.createElement("i");
        let xAxis = Math.floor(Math.random()*window.innerWidth);
        let yAxis = Math.floor(Math.random()*window.innerHeight);
        let size_of_stars = Math.random() * 2;
        let duration = Math.random()*10;

        stars.style.left = xAxis+"px";
        stars.style.top = yAxis+"px";

        stars.style.width = size_of_stars + "px";
        stars.style.height = size_of_stars +"px";
        stars.style.animationDuration = duration+"s";
        stars.style.animationDelay = duration + "s";

        sky.appendChild(stars);
        i++;
    }
}
starry()