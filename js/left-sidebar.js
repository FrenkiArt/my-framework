export function leftSidebar(btnToggle, sideBar) {
    btnToggle.addEventListener('click', clickBtnToggle);

    let toggle = true;
    function clickBtnToggle(e) {
        btnToggle.classList.toggle('show');
        sideBar.classList.toggle('show');
        if (toggle) {
            btnToggle.querySelector('svg path').setAttribute('d', 'M 10,10 L 30,30 M 30,10 L 10,30');
            toggle = false;
        } else {
            btnToggle.querySelector('svg path').setAttribute('d', 'M 10,10 L 30,10 M 10,20 L 30,20 M 10,30 L 30,30');
            toggle = true;
        }
    }

    sideBar.querySelectorAll('a').forEach(function (item) {
        item.addEventListener('click', hideSideBar);
    });

    function hideSideBar(e) {
        btnToggle.classList.toggle('show');
        sideBar.classList.toggle('show');
        btnToggle.querySelector('svg path').setAttribute('d', 'M 10,10 L 30,10 M 10,20 L 30,20 M 10,30 L 30,30');
        toggle = true;
    }
}