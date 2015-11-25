

var audiocontext = new AudioContext;
var myAudioBuffer = null;

var url = "/Samples/greg_baumont_-_Minimal_french_electro_loop.mp3";

var analyser = audiocontext.createAnalyser();
analyser.fftSize = 2048;
var analyser2 = audiocontext.createAnalyser();
analyser2.fftSize = 2048;

var bufferLength, bufferLength2, dataArray, dataArray2;
var canvas,canvas2, ctx, ctx2;
var source = null; var source2 = null;





window.onload=function(){
		var control = document.getElementById("fileChooseInput");
		control.addEventListener("change", fileChanged, false);
		context = new AudioContext();
}
function fileChanged(event){
		var file = event.target.files[0];
		var fileReader = new FileReader();
		fileReader.onload = fileLoaded;
		fileReader.readAsArrayBuffer(file);
}
function fileLoaded(event){
      context.decodeAudioData(event.target.result, function(buffer) {
        myAudioBuffer = buffer;
        alert("sound decoded"); //test
      });
      draw_init(); //in mydraw.js
			draw_init2(); //in mydraw.js
}

function loadSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    alert("sound loaded"); //test
    audiocontext.decodeAudioData(request.response, function(buffer) {
      myAudioBuffer = buffer;
      alert("sound decoded"); //test
    });
  }
  request.send();
  draw_init(); //in mydraw.js
  draw_init2(); //in mydraw.js
}

function playSound(anybuffer) {
  source = audiocontext.createBufferSource();
  source.buffer = anybuffer;
  source.connect(audiocontext.destination);
  source.connect(analyser);
  bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);

  source2 = audiocontext.createBufferSource();
  source2.buffer = anybuffer;
  source2.connect(analyser2);
  bufferLength2 = analyser2.frequencyBinCount;
  dataArray2 = new Uint8Array(bufferLength2);

  source.start();
  source2.start();

  drawing(); // in mydraw.js
  drawing2(); // in mydraw.js
}

function stopSound() {
  if (source) {
    source.stop();
  }
  if (source2){
    source2.stop();
  }
}
