//create
var context = new AudioContext();

var osc = context.createOscillator();
var filter = context.createBiquadFilter();
var amp = context.createGain();

//connect
osc.connect(filter);
filter.connect(amp);
amp.connect(context.destination);

//control
osc.frequency.value = 330;
osc.type = 'square';

filter.frequency.value = 500;
filter.Q.value = 100;

amp.gain.value = 0.1;
osc.start();

function playsrc(){
    //osc.start(currentTime);
    amp.connect(context.destination);
}
function stopsrc(){
    //osc.stop(1.0);
    amp.disconnect();
}
// schedule
