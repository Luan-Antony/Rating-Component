const rating = document.querySelectorAll('.card-rating-button');
const submit = document.querySelector('.card-submit');

rating.forEach((button) => {
    button.addEventListener('click', () => {
        rating.forEach((btn) => {
            btn.classList.remove('active');
            btn.style.backgroundColor = '';
        });
        
        button.classList.add('active');
        button.style.backgroundColor = 'var(--white)';
    });
});

submit.addEventListener('click', () => {
    document.querySelector('.card').classList.add('hidden');
    document.querySelector('.card-thank-you').classList.remove('hidden');

    let ratingValue = document.querySelector('.card-rating-button.active').textContent;

    document.querySelector('.card-thank-you-rating-value').textContent = ratingValue + " out of 5";
});
