function moveRandomEl(elem){
    elem.style.position = "absolute";
    elem.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elem.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random")

// moveRandom.addEventListener("mouseenter", function(e){
//     console.log('click')
//     moveRandomEl(e.target)
// })

if (moveRandom) {
    moveRandom.addEventListener("pointerover", function(e){
        moveRandomEl(e.target);
    });

    moveRandom.addEventListener("touchstart", function(e){
        e.preventDefault();
        moveRandomEl(e.target);
    });
}


// document.addEventListener("DOMContentLoaded", function () {
//     const loader = document.getElementById("gif-loader");
//     const gif = document.querySelector(".tenor-gif-embed");

//     // If page doesn’t have a GIF, do nothing
//     if (!loader || !gif) return;

//     // Hide GIF initially
//     gif.style.display = "none";

//     // Show it after a short delay
//     setTimeout(() => {
//         loader.style.display = "none";
//         gif.style.display = "block";
//     }, 1000);
// });

document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("gif-loader");
    const gif = document.querySelector(".tenor-gif-embed");

    if (!loader || !gif) return;

    // keep GIF hidden at first
    gif.style.display = "none";

    setTimeout(() => {
        // fade OUT loader
        loader.style.opacity = "0";
        loader.style.transform = "scale(0.9)";

        // after loader fades, show GIF smoothly
        setTimeout(() => {
            loader.style.display = "none";

            gif.style.display = "block";
            requestAnimationFrame(() => {
                gif.classList.add("show");
            });
        }, 800);

    }, 1200);
});


