if (annyang) {

    let voices;

    let utter = new SpeechSynthesisUtterance();

    utter.rate = 1.5;
    utter.pitch = 1.2;
    utter.lang = 'es-MX';
    
    window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    };


    var commands = {
        'hola': function() {
          voice('hola , buenastardes')
        }
      };
    
    function voice(Text) {
      utter.text = Text;
      utter.voice = voices[4];
      window.speechSynthesis.speak(utter);
    }


      
    annyang.addCommands(commands);
    annyang.setLanguage('es-PE');
    annyang.start({autorestar: false, continuos: true});

};