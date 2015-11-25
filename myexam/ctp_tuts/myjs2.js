var audiocontext = new AudioContext();
var fileReader = null;
var myAudioBuffer = null;

var control = document.getElementById("fileChooseInput");
control.addEventListener("change", fileChanged, false);

function fileChanged(event){
  var file = event.target.files[0];
  fileReader = new FileReader();
  fileReader.onload = fileLoaded;
  fileReader.readAsArrayBuffer(file);
}

function fileLoaded(event){
  audiocontext.decodeAudioData(fileReader.result, )
}
