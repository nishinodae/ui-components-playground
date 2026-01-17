const textAreaEl = document.querySelector('textarea');
const counter = document.querySelector('.counter');
const maxChar = 250;

textAreaEl.addEventListener('input', () => {
    const textLength = textAreaEl.value.length;
    if (textLength === maxChar) {
        textAreaEl.classList.add('exceed-limit');
        counter.style.color = 'red';
    } else {
        textAreaEl.classList.remove('exceed-limit');
        counter.style.color = 'black';
    }
    counter.textContent = `${textLength} / ${maxChar}`;
})