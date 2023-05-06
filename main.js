const SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function start() {
  recognition.start();
  Webcam.attach("#cameras");
  Webcam.set({
    width: 400,
    height: 400,
    image_format: "jpeg",
    jpeg_quality: 100,
  });
}

recognition.onresult = (e) => {
  const result = e.results[0][0].transcript;
  if (result == "selfie") {
    speak();
    take_snapshot();
  }
  console.log(e);
};
const camera = document.querySelector("#cameras");

function speak() {
  setTimeout(() => {
    image_id = "selfie1";
    take_snapshot();
    var synth = window.speechSynthesis;

    speak_data = "Taking your next Selfie in 4 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  }, 4000);
  setTimeout(() => {
    image_id = "selfie2";
    take_snapshot();
    var synth = window.speechSynthesis;

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  }, 5000);
  setTimeout(() => {
    image_id = "selfie3";
    take_snapshot();
    var synth = window.speechSynthesis;

    speak_data = "Taking your next Selfie in 6 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  }, 6000);
}

function take_snapshot() {
  Webcam.snap((data_url) => {
    if ((imgId = "selfie1")) {
      document.querySelector(
        "#result"
      ).innerHTML += `<div class="img"><img id="selfie1" src="${data_url}" /></div>`;
    } else if ((imgId = "selfie2")) {
      document.querySelector(
        "#result"
      ).innerHTML += `<div class="img"><img id="selfie1" src="${data_url}" /></div>`;
    } else if ((imgId = "selfie3")) {
      document.querySelector(
        "#result"
      ).innerHTML += `<div class="img"><img id="selfie1" src="${data_url}" /></div>`;
    }
  });
}
