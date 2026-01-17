const buttonEl = document.querySelectorAll('.question');
buttonEl.forEach((b) => {
    const iconEl = b.lastElementChild;
    const answerEl = b.nextElementSibling;
    iconEl.textContent = 'keyboard_arrow_down';

    b.addEventListener('click', () => {
        const activeAnswer = document.querySelector('.active');
        
        // collapse opened answer
        if (activeAnswer && activeAnswer !== answerEl) {
            activeAnswer.classList.remove('active');
            activeAnswer.previousElementSibling.lastElementChild.textContent = 'keyboard_arrow_down';
        }

        //toggle clicked item
        answerEl.classList.toggle('active');
        iconEl.textContent === 'keyboard_arrow_down' ?
            iconEl.textContent = 'keyboard_arrow_up'
            : iconEl.textContent = 'keyboard_arrow_down';
    });
});