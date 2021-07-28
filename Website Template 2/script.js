//Audio volume
document.getElementById("audio").volume = 1;


//Main Function
mainActive = false;
setTimeout(() => {
    if (document.getElementById("audio").paused) {} else {
        main()
    }
}, 1000);

function main() {
    if (mainActive) return;
    mainActive = true;
    setTimeout(() => {}, 1050);
    document.getElementById("audio").play();
}

//Start Main Function
$("#clickToPlay").click(() => {
    main();
});