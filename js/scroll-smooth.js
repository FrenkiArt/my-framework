export function smoothScroll() {
    let body_height = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    let ancor_href_target;
    let ancor;
    let way;
    let start_location;
    let step;
    let steps;

    if (document.querySelectorAll('a[href*="#"]') != null) {
        document.querySelectorAll('a[href*="#"]').forEach(function (a_href) {
            a_href.addEventListener('click', from_ancor_to_target);
        });
    }

    function from_ancor_to_target(e) {
        e.preventDefault();
        ancor = e.target;
        ancor_href_target = ancor.getAttribute('href');
        ancor_href_target = document.querySelector(ancor_href_target);
        start_location = window.pageYOffset;
        way = ancor_href_target.offsetTop - start_location;
        step = 150;
        steps = way / step;
        let timer = setInterval(() => {
            window.scrollTo(0, (start_location + steps));
            start_location = start_location + steps;
            step -= 1;
            if (step <= 0) {
                clearInterval(timer);
            }
        }, 1);
    }

    let scrollTop;
    let footer;
    if (document.querySelector('.scroll_top') != null) {
        document.body.setAttribute('id', 'body');
        document.addEventListener('scroll', behaviorScrollTop);
        scrollTop = document.querySelector('.scroll_top');
        scrollTop.setAttribute('href', 'body');
        scrollTop.addEventListener('click', from_ancor_to_target);
    }

    function behaviorScrollTop(e) {
        if (document.querySelector('.footer') != null) {
            footer = document.querySelector('.footer');
            if (footer.getBoundingClientRect().y + footer.getBoundingClientRect().height / 2 < window.innerHeight) {
                scrollTop.classList.add('fixed_on_footer');
                scrollTop.style.bottom = footer.offsetHeight - scrollTop.offsetHeight / 2 + 'px';
            } else {
                scrollTop.classList.remove('fixed_on_footer');
                scrollTop.style.bottom = '10px';
            }
        }
        if (window.pageYOffset > window.innerHeight * 0.5) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    }
}