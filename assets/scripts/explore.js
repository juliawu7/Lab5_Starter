// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const textInput = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");
  const faceImage = document.querySelector("#explore img");

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }
  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoiceName = voiceSelect.value;
    const selectedVoice = voices.find(v => v.name === selectedVoiceName);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.addEventListener("start", () => {
      faceImage.src = "assets/images/smiling-open.png";
      faceImage.alt = "Open smiling face";
    }
    );
    utterance.addEventListener("end", () => {
      faceImage.src = "assets/images/smiling.png";
      faceImage.alt = "Closed smiling face";
    }
    );
    synth.speak(utterance);
  });

}