var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
  function start()
   { 
       document.getElementById("text_box").innerHTML= "";
   recognition.start();
  }

recognition.onresult=function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML=content;
    console.log(content);
if (content=="take my selfie")
    {
        console.log("taking selfie");
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "taking you selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_snapshot();
        save();
    },5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML="<img id='selfie' src='"+data_uri+"'>";
    });
}