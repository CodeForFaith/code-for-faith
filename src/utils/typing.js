//adapted from https://github.com/xxnatc/typing.js
// set typing speed and wait time
const timeChar = 100;       // time until next letter

const cursorChar = '&#9608;';
const originText = document.getElementById('terminal-line').innerHTML;
const cursorLine = document.getElementById('cursor-line');
let currentTimeout, showCursor;

const typeWriter = () => {
  let loc = document.getElementById('terminal-line');
  let fullText = originText;
  let letterCount = 0;

  // this function spits out one letter per call, then calls the subsequent typeLetter()
  const typeLetter = () => {
    currentTimeout = setTimeout(() => {
      loc.className = 'visible';
      letterCount += 1;
      const showText = fullText.substring(0, letterCount);

      // stops the function from self-calling when all letters are typed
      if (letterCount === fullText.length) {
        loc.innerHTML = showText + '<span class="typed-cursor typed-cursor-blink">' + cursorChar + '</span>';
      } else {
        loc.innerHTML = showText + '<span class="typed-cursor">' + cursorChar + '</span>';
        typeLetter();
      }
    }, timeChar);
  };

  typeLetter();

  // show cursor on next line
  const totalTime = fullText.length * timeChar + timeChar;
  showCursor = setTimeout(() => {
    document.getElementById('cursor-line').className = 'visible';
  }, totalTime);
};

typeWriter();
