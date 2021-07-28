var state={musicPlaying:false,firstClick:false,videos:[{url:"v/Houdini.mp3",title:"Travis Scott - Houdini"},{url:"v/Dolly.mp3",title:"Lil Uzi Vert - Dolly"},{url:"v/notcoming.m4a",title:"Playboi Carti - Not Comin'"},{url:"v/BigWatch.mp3",title:"Lil Uzi Vert - Big Watch"},{url:"v/223.mp3",title:"Gunna - 223"},]};function animationLoop(){loop();function loop(){setTimeout(()=>{requestAnimationFrame(loop);},30);console.log((state.video.currentTime/state.video.duration*100))
var progress=(state.video.currentTime/state.video.duration*100);document.querySelector('.progressCircle').style.strokeDashoffset=(47.61*2*3.14)*(1-progress/100);console.log('worked')};}
var index;index=Math.floor(Math.random()*state.videos.length);var randomVideo=state.videos[index].url;function musicSwitcher(){document.querySelector('.stateSwitch').addEventListener('click',stateSwitch)
function stateSwitch(){if(state.musicPlaying){state.musicPlaying=false;document.querySelector('.pause').style.display='none';document.querySelector('.play').style.display='inline-block';state.video.pause();}else{state.musicPlaying=true;document.querySelector('.play').style.display='none';document.querySelector('.pause').style.display='inline-block';state.video.play();}}}
function changeSong(to){if(to==='next'){if(index+1==state.videos.length){index=0;}else{index+=1;}}else if(to==='last'){if(index-1==-1){index=state.videos.length;}else{index-=1;}}
document.getElementById("source").src=state.videos[index].url;document.querySelector(".currentlyPlaying--nowPlaying--selector").innerHTML=state.videos[index].title;document.querySelector('.play').style.display='none';document.querySelector('.pause').style.display='inline-block';}
function musicPlayer(){state.video=document.createElement('video');document.querySelector(".currentlyPlaying--nowPlaying--selector").innerHTML=state.videos[index].title;state.video.src=randomVideo;state.video.autoplay=true;state.video.id="source";state.video.volume=0.1;document.querySelector(".musicPlayerSection").appendChild(state.video);}
function shuffle(a){var j,x,i;for(i=a.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));x=a[i];a[i]=a[j];a[j]=x;}}
function firstClick(){if(!state.firstClick){state.firstClick=true;init();};};function init(){musicPlayer();document.getElementById("source").addEventListener('ended',(e)=>{changeSong('next');},false);document.getElementById("next").addEventListener('mouseup',(e)=>{changeSong('next')});document.getElementById("back").addEventListener('mouseup',(e)=>{changeSong('last')});document.querySelector('.play').style.display='none';document.querySelector('.pause').style.display='inline-block';state.musicPlaying=true;musicSwitcher();animationLoop();}
document.addEventListener('click',firstClick);document.querySelector('.progressCircle').style.strokeDasharray=(47.61*2*3.14);document.querySelector('.progressCircle').style.strokeDashoffset=(47.61*2*3.14)*(1-0);