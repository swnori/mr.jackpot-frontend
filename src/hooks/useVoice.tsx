const synth = window.speechSynthesis;

let voices: any[] = [];

const useVoice = () => {
  const populateVoiceList = () => {
    voices = synth.getVoices().sort((a, b) => {
      const aname = a.name.toUpperCase();
      const bname = b.name.toUpperCase();

      if (aname < bname) {
        return -1;
      }
      if (aname === bname) {
        return 0;
      }
      return +1;
    });

    for (let i = 0; i < voices.length; i += 1) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
    }
  };

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const startSpeak = (inputTxt: string) => {
    if (synth.speaking) {
      return;
    }

    if (inputTxt !== '') {
      return new Promise((resolve, reject) => {
        const utterThis = new SpeechSynthesisUtterance(inputTxt);
        const selectedOption = 'Google 한국의';

        for (let i = 0; i < voices.length; i += 1) {
          if (voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
            break;
          }
        }
        utterThis.pitch = 1;
        utterThis.rate = 1;

        console.log(inputTxt);

        utterThis.onend = (e) => {
          resolve(e);
        };

        utterThis.onerror = (e) => {
          reject(e);
        };

        synth.speak(utterThis);
      });
    }
  };

  const stopSpeak = () => {
    synth.cancel();
  };

  return {
    startSpeak,
    stopSpeak,
  };
};

export default useVoice;
