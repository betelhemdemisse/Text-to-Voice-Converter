// An instance of SpeechSynthesisUtterance is created.
let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice= voices[0];
    voices.forEach((voice,i) =>(voiceSelect.options[i]= new Option(voice.name,i)));
};


voiceSelect.addEventListener("change",()=>{
    speech.voice =voices[voiceSelect.value];
});

// An event listener is added to the button. When the button is clicked
document.querySelector("button").addEventListener("click",() =>
{
    // The text from the textarea is assigned to the text property of the SpeechSynthesisUtterance instance.
speech.text = document.querySelector("textarea").value;
// The speak method of window.speechSynthesis is called with the SpeechSynthesisUtterance instance to read aloud the text.
window.speechSynthesis.speak(speech);
});
