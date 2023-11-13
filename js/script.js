const clicListener = document.querySelector('.clic');

clicListener.addEventListener('click', () => {
    const toggleSwitch = document.querySelector('.switch');
    if (toggleSwitch.classList.contains('active')) {
        toggleSwitch.classList.remove('active');
    } else {
        toggleSwitch.classList.add('active');
    }
});
