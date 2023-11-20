let btn = document.querySelector('button');


let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.getElementById('sel');

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice,i) =>{
        voiceSelect.options[i] = new Option(voice.name,i)
    })

}

voiceSelect.addEventListener('change',() =>{
    speech.voice = voices[voiceSelect.value]
})

btn.addEventListener('click',() =>{
    
    let text = document.querySelector('#text');
    if(!text.value){
        speech.text = "Hey  Write Somthing first";
    }
    else{
        speech.text = text.value;
    }
   
    window.speechSynthesis.speak(speech);
});



