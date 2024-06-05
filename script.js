document.getElementById('loveButton').addEventListener('click', function() {
    const loveContainer = document.getElementById('loveContainer');
    loveContainer.innerHTML = ''; // Limpa o container
    for (let i = 1; i <= 1000; i++) {
        const loveMessage = document.createElement('p');
        loveMessage.textContent = `${i}. Eu te amo`;
        loveContainer.appendChild(loveMessage);
    }
});
