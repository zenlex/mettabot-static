import generateMessage from './messagegen.js'
const msgContainer = document.getElementById('message');
const msgBg = document.getElementById('messagebg');


const setContent = () => {
  const text = generateMessage()
  msgContainer.textContent = text;
  msgBg.textContent = text;
};


//add random animation
const animationClasses = ['gradientmask', 'waterwave', 'jumping-shadows'];
const animindex = Math.floor(Math.random() * animationClasses.length);
// const animindex = 0; //for debugging CSS
msgContainer.className = animationClasses[animindex];
msgBg.className = animationClasses[animindex];

setContent();
