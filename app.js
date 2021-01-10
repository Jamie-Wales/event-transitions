const box = document.getElementById('box');
const box2 = document.getElementById('box2');
const delay = 10000;

const attributes = box2.attributes;


setTimeout(() => { setTimeout(delay, box.classList.add('rotate')); }, 1000);

document.addEventListener('click', e => {
    if (attributes.class = 'no-show') {
        box2.classList.add('fade-in');
        box2.classList.remove('no-show');
    }
  
})



