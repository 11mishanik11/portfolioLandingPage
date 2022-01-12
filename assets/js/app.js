const burger = document.querySelector('#burger')
const menu = document.querySelector('#header-menu')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
});

const btnMenu= document.querySelectorAll('[data-scroll]');

btnMenu.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        let idBlock = e.target.dataset.scroll;
        let block = document.querySelector(idBlock);
        let blockH = block.offsetTop;
        menu.classList.remove('active')
        burger.classList.remove('active')
        document.body.classList.remove('no-scroll')
        scrollTo({
            top: blockH,
            behavior: "smooth"
        });
    });
});