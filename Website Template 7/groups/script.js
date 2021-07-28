groupList.forEach((d) => {
	$("tbody").append(`
		<tr onclick="window.open('${d[3]}', '_blank');">
			<td><img src="${d[4]}" class="groupPic"></td>
			<td>${d[0]}</td>
			<td>${d[1]}</td>
			<td>${d[2]}</td>
		</tr>
	`);
});

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

$("#container").css("width", "1000px");
setTimeout(() => {
	$("#container").css("height", 120 + groupList.length*Number($("tr").css("height").split("px")[0])*2 + "px");
	setTimeout(() => {
		$("#container").css("transition", "0s");

		var j = 1;
		var int = setInterval(() => {
			$(`tr:nth-child(${j})`).css("opacity", "1");
			j++;
			if (j==groupList.length+2) {
				clearInterval(int);
				$(".returnbtn").css("opacity", "1");
			}
		}, 150);
	}, 1000);
}, 1000);

setTimeout(() => {
	linkList.forEach((d) => {
        $("#blocks").append(`<div></div>`);
    });
    var i = 1;
	listLength = linkList.length;
	var curAnim = listLength % 2 != 0 ? [Math.ceil(listLength/2)] : [listLength/2, listLength/2+1];
	var offset = curAnim.length == 2 ? 100 : 0;
    var int = setInterval(() => {
    	if (curAnim.length == 1) {
    		$(`#blocks div:nth-child(${curAnim[0]})`).css({"width": 1000/listLength + "px", "opacity": "1", "z-index": Math.ceil(listLength/2)});
    		curAnim = [curAnim[0]-1, curAnim[0]+1];
    	} else {
    		$(`#blocks div:nth-child(${curAnim[0]})`).css({"width": 1000/listLength + "px", "opacity": "1", "margin-right": (i-1)*((1000/listLength)*2)+offset + "px", "z-index": Math.ceil(listLength/2)+1-i});
    		$(`#blocks div:nth-child(${curAnim[1]})`).css({"width": 1000/listLength + "px", "opacity": "1", "margin-left": (i-1)*((1000/listLength)*2)+offset + "px", "z-index": Math.ceil(listLength/2)+1-i});
    		curAnim = [curAnim[0]-1, curAnim[1]+1];
    	}		    	
    	if (i >= Math.ceil(listLength/2)) {
    		clearInterval(int);
    		$("#container").append(`<a href="../"><span class="returnbtn">Return</span></a>`);
    	}
    	i++;
    }, 250);

    newGradient("white", "black");
}, 750);