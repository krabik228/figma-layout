document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.main-header').classList.toggle('active');
    document.querySelector('.logo a').classList.toggle('active');
    document.querySelector('.logo').classList.toggle('active');
    const modalBtns = document.querySelectorAll('.nav__link');
    modalBtns.forEach(b => b.classList.toggle('active'));
})