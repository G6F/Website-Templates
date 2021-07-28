

var rainbow = new Rainbow(); 
var average;
function newGradient(start, end) {	
    rainbow.setSpectrum(start, end);
    rainbow.setNumberRange(1, linkList.length);
    average = rainbow.colourAt(Math.floor(linkList.length/2));
    for (var i = 1; i <= linkList.length; i++) {
        $(`#blocks div:nth-child(${i})`).css("background", `#${rainbow.colourAt(i)}`);
    }
}

$("#blocks").css("width", "70%");
setTimeout(() => {
    linkList.forEach((d) => {
        $("#blocks").append(`<div onclick="window.open('${d[2]}', '_blank')"><span style="color: ${d[4] ? "white" : "black"}">${d[3]}</span></div>`);
    });
    newGradient("white", "black");
    var i = 1;
    var int = setInterval(() => {	
        if (i >= linkList.length+1) {
            clearInterval(int);
            $("#title").css({"margin-top": "-22.5vh", "opacity": "1"});
            setTimeout(() => {
                $("#vidContainer").css("opacity", "0.1");
            }, 1000);
        } else {
            $(`#blocks div:nth-child(${i})`).css("height", "50%");
            i++;
        }
    }, 150);

    $('#blocks div').hover(function() {
        $(`#blocks div:nth-child(${$(this).index()+1}) span`).css({"opacity": "1", "font-size": "3.5vh"});
        newGradient(linkList[$(this).index()][0], linkList[$(this).index()][1]);
        $("#bgTint").css("background", "#"+average);
        $("#blocks div").css("transition-timing-function", "ease");
        $("#titlePW").css("color", "#"+average);
    });

    $("#blocks div").mouseout(function() {
        $(`#blocks div:nth-child(${$(this).index()+1}) span`).css({"opacity": "0", "font-size": "0.5vh"});
        newGradient("white", "black");
        $("#bgTint").css("background", "black");
        $("#titlePW").css("color", "white");
    });

    //WIP Phone Support
    /*
    $('#blocks div').on('touchstart', function() {
        $(`#blocks div:nth-child(${$(this).index()+1}) span`).css({"opacity": "1", "font-size": "3.5vh"});
        newGradient(linkList[$(this).index()][0], linkList[$(this).index()][1]);
        $("#bgTint").css("background", "#"+average);
        $("#blocks div").css("transition-timing-function", "ease");
        $("#titlePW").css("color", "#"+average);
    });
    $("#blocks div").on('touchend', function() {
        $(`#blocks div:nth-child(${$(this).index()+1}) span`).css({"opacity": "0", "font-size": "0.5vh"});
        newGradient("white", "black");
        $("#bgTint").css("background", "black");
        $("#titlePW").css("color", "white");
    });
    */
}, 1000);