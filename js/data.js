$(function () {

    const menuItems = document.querySelectorAll('.menu-wrap .menu > li');

menuItems.forEach(item => {
    const quickMenu = item.querySelector('.quick-menu');

    if (quickMenu) {
        // 마우스가 올라갔을 때
        item.addEventListener('mouseenter', () => {
            quickMenu.classList.add('on');
        });

        // 마우스가 벗어났을 때
        item.addEventListener('mouseleave', () => {
            quickMenu.classList.remove('on');
        });
    }
});

})