$(document).ready(function(){

    const optItems = $('#header .inner .opt-wrap .opt li a');
    const semiMenu = $('#header .opt-semi-wrap');
    const tabContents = $('#header .opt-semi-wrap .opt-items');
    const header = $('#header');

    let timer;

    optItems.on('mouseenter', function() {
        const tabId = $(this).attr('data-tab'); // "tab-con2", "tab-con3" 등

        if (tabId) {
            // 모든 콘텐츠 숨기고, 해당 콘텐츠만 보여주기
            tabContents.hide();
            $('#' + tabId).show();

            // 서브 메뉴 열기
            clearTimeout(timer);
            semiMenu.stop().slideDown(300);
        } else {
            semiMenu.stop().slideUp(300);
        }
    });

    semiMenu.on('mouseleave', function() {
        timer = setTimeout(() => {
            semiMenu.stop().slideUp(300);
        }, 100);
    });

});
