// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const hornAudio = document.querySelector("audio");
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener("change", () => {
    const selectedHorn = hornSelect.value;
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornImage.alt = `${selectedHorn} horn image`;
    hornAudio.src = `assets/audio/${selectedHorn}.mp3`;
  }
  );

  volumeSlider.addEventListener("input", () => {
    const volumeValue = parseInt(volumeSlider.value);
    hornAudio.volume = volumeValue / 100;

    if (volumeValue === "0") {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume level 0";
    } else if (volumeValue < "33") {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume level 1";
    } else if (volumeValue < "67") {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume level 3";
    }
  });
  playButton.addEventListener("click", () => {
    hornAudio.play();
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}