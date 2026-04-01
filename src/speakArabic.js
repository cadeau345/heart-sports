let synth = window.speechSynthesis;

export function speakArabic(text) {

  synth.cancel();

  let chunks = text.match(/.{1,120}(\s|$)/g);

  let index = 0;

  function speakChunk() {

    if (index >= chunks.length) return;

    let utter = new SpeechSynthesisUtterance(chunks[index]);

    utter.lang = "ar-EG";

    utter.rate = 0.9;

    utter.pitch = 1;

    utter.onend = () => {

      index++;

      speakChunk();

    };

    synth.speak(utter);

  }

  speakChunk();

}

export function stopSpeech() {

  synth.cancel();

}