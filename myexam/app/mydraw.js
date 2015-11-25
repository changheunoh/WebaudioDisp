function draw_init() {
    canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect (10, 10, 55, 50);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect (30, 30, 55, 50);
    }
  }


function draw_init2(){
  canvas2 = document.getElementById("canvas2");
  if (canvas2.getContext) {
    ctx2 = canvas2.getContext("2d");
    /* ctx2.beginPath();
    ctx2.arc(50,50,30,0,2*Math.PI);
    ctx2.fillStyle = "rgb(100,100,100)";
    ctx2.stroke();*/
    var my_gradient=ctx2.createLinearGradient(0,0,0,170);
      my_gradient.addColorStop(0,"#adff2f");
      my_gradient.addColorStop(1,"white");
    ctx2.beginPath();
    ctx2.arc(55,55,200,0,2*Math.PI);
    ctx2.fillStyle=my_gradient;
    //ctx2.fillStyle = "#adff2f";
    ctx2.fill();

    // http://www.w3schools.com/tags/img_the_scream.jpg
  }
}


  function drawing() {
      requestAnimationFrame(drawing);
      analyser.getByteTimeDomainData(dataArray);
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgb(211, 211, 211)';
      ctx.beginPath();
      var sliceWidth = canvas.width * 1.0 / bufferLength;

      var x = 0;
      for(var i = 0; i < bufferLength; i++) {
        var v = dataArray[i] / 128.0;
        var y = v * canvas.height/2;

        if(i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        x += sliceWidth;
      }
      ctx.lineTo(canvas.width, canvas.height/2);
      ctx.stroke();
    };

    function drawing2(){
      requestAnimationFrame(drawing2);
      analyser2.getByteFrequencyData(dataArray2);
      ctx2.fillstyle = '#00cbff'; //skyblue
      ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
      ctx2.lineWidth = 4;
      ctx2.strokeStyle = '#ffcaf4'; //pink
      ctx2.beginPath();
      var sliceWidth2 = canvas2.width * 1.0 / bufferLength;

      var xx=0;
        for(var i = 0; i < bufferLength; i++) {
          var vv = dataArray2[i] / 128.0;
          //var yy = vv * canvas2.height/2;
          var yy = canvas2.height - vv * canvas2.height/2;

          if(i === 0) {
            ctx2.moveTo(xx, yy);
          } else {
            ctx2.lineTo(xx, yy);
          }
          xx += sliceWidth2;
        }
        ctx2.lineTo(canvas2.width, canvas2.height);
        ctx2.stroke();
    }
