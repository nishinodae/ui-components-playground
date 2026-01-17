const textAreaEl = document.querySelector('textarea');
const counter = document.querySelector('.counter');
const maxChar = 250;

textAreaEl.addEventListener('input', () => {
    const textLength = textAreaEl.value.length;
    if (textLength === maxChar) {
        textAreaEl.style.color = 'red';
        textAreaEl.style.outlineColor = 'red';
        textAreaEl.style.borderColor = 'red';
        counter.style.color = 'red';
    }
    counter.textContent = `${textLength} / ${maxChar}`;
})