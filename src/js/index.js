const rating = document.querySelectorAll('.card-rating-button');
const submit = document.querySelector('.card-submit');

rating.forEach((button) => {
    button.addEventListener('click', () => {
        // Remover a classe 'active' de todos os botões
        rating.forEach((btn) => {
            btn.classList.remove('active');
            // Restaurar o estilo do botão
            btn.style.backgroundColor = ''; // Reverte a cor de fundo para o estilo padrão
            btn.style.color = ''; // Reverte a cor do texto para o estilo padrão
        });
        
        // Adicionar a classe 'active' ao botão clicado
        button.classList.add('active');
        
        // Atualizar o estilo do botão ativo
        button.style.backgroundColor = 'var(--white)';
        button.style.color = 'var(--very-dark-blue)';
    });
});

submit.addEventListener('click', () => {
    document.querySelector('.card').classList.add('hidden');
    document.querySelector('.card-thank-you').classList.remove('hidden');
    document.querySelector('.card-thank-you-rating-value').innerHTML = document.querySelector('.card-rating-button.active').innerHTML;
});
