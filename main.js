x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

functionstart
{ 
document.getElementById("status").innerHTML = "El sistema está detectando. Por favor, habla";
recognition.start(); 
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].trascript;
     
    document.getElementById("status").innerHTML = "La voz se reconoce como: " + content; }

