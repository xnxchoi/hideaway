jQuery(document).ready((function () {
    const isMobile = document.documentElement.classList.contains('ps-mobile');
    const isLoggedIn = document.body.classList.contains("logged-in");
    const delay = ms => new Promise(res => setTimeout(res, ms));
    if (isLoggedIn) {
        const logoutLink = document.querySelector("#wp-admin-bar-logout > a").href;
        document.querySelector("#logout-link").href = logoutLink;
    }
    const cBtn1 = document.querySelector('#c-btn-1');
    var cBtn2 = null, cBtn3 = null;
    if (isLoggedIn) {
        cBtn2 = document.querySelector('#c-btn-2');
        cBtn3 = document.querySelector('#c-btn-3');
    }
    const menuTitle = document.querySelector('.menu-float__title-section');
    let bCrumbT = document.querySelector('.breadcrumb.menu-float__title');
    let bCSubT = document.querySelector('.menu-float__subtitle');

    const iC = document.querySelector('.menu-float__title-section .inner-cont');
    const btnInfo = document.querySelector('.menu-float__title-section .btn-info');
    let scrollPos = 0;
    const nav = document.querySelector('.float-section');

    function checkPosition() {
        let windowY = window.scrollY;
        if (windowY < scrollPos) {
            // Scrolling UP
            nav.classList.add('is-visible');
            nav.classList.remove('is-hidden');
        } else {
            // Scrolling DOWN
            nav.classList.add('is-hidden');
            nav.classList.remove('is-visible');
        }
        scrollPos = windowY;
    }


    const lRadio = document.querySelector('.menu-float__layout--radio');
    document.querySelector(".menu-float__layout--radio > div > div.menu-float__item").addEventListener('click', function () {
        toggleRd();
    });


    window.addEventListener('scroll', checkPosition);
    const xB = document.querySelector('.menu-float__hamburger');
    const xBI = document.querySelectorAll('.menu-float__hamburger div');
    const fMC = document.querySelector('.menu-float__menu-content');
    const fMe = document.querySelector('.menu-float__menu.menu-main');
    const fWr = document.querySelector('.menu-float__wrapper');
    const mBtN = document.querySelector(
        '.menu-float__layout--radio > div > div.control > div'
    );
    const snC = document.querySelector("#sonaar-player > div.player");
    const snCt = document.querySelector("#sonaar-player > div.player > div.player-row > div.control > div");

    document
        .querySelector('.menu-float__hamburger')
        .addEventListener('click', function () {
            fWr.classList.toggle('is-open');
            let flaG = fWr.classList.contains('is-open');
            if (flaG) {
                fMC.classList.add('is-show');
                fMe.classList.add('is-active');
                fWr.classList.add('is-open-main');
                toggleRd();
            } else {
                fMC.classList.remove('is-show');
                fMe.classList.remove('is-active');
                fWr.classList.remove('is-open-main');
                if (isMobile) {
                    lRadio.classList.add('is-closed');
                }
            }
        });
    document
        .querySelector('.menu-float__wrapper')
        .addEventListener('mouseleave', function () {
            if (fWr.classList.contains('is-open')) {
                fWr.classList.remove('is-open');
                fMC.classList.remove('is-show');
                fMe.classList.remove('is-active');
                fWr.classList.remove('is-open-main');
                if (isMobile) {
                    lRadio.classList.add('is-closed');
                }
            }
        });

    function toggleRd() {
        if (!isMobile) {
            lRadio.classList.toggle('is-closed');
        } else {
            if ((document.body.classList.contains('single')) || (document.body.classList.contains('category'))) {
                return;
            }
            lRadio.classList.toggle('is-closed');
        }
    }


    var showCase;
    showCase = false;

    function oncePerSession() {
        if (showCase) {
            return;
        }
        sonaarClick().then(r => {
            if ((!document.body.classList.contains('logged-in')) && (!isMobile)) {
                showPlay();
            }
            showCase = true;
        });

    }

    oncePerSession();

    mBtN.addEventListener('click', () => sonaarClick(!(snCt.classList.contains('audio-playing'))).then(function () {
        let evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
        });
        snCt.dispatchEvent(evt);
    }), false);

    async function showPlay() {
        await delay(1000);
        lRadio.classList.remove('is-closed');
        await delay(3500);
        lRadio.classList.add('is-closed');
    }

    async function sonaarClick(isPlaying) {
        let sName = document
            .querySelectorAll('.songName');
        let aName = document.querySelector('.menu-float__layout--radio .artistName');
        if (isPlaying === true) {
            document.querySelector(".tune-in").classList.add('isHidden');
            sName.forEach((element) => (element.classList.add('isHidden')));
            aName.classList.add('isHidden');
            await delay(100);
            mBtN.classList.add('audio-playing');
            //    mBtN.innerHTML='<svg fill="#fff" width="16" height="16" viewBox="0 0 0.32 0.32" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M.139.074A.014.014 0 0 0 .126.06H.099a.014.014 0 0 0-.014.014v.173c0 .007.006.014.014.014h.027A.014.014 0 0 0 .14.247V.074zm.096 0A.014.014 0 0 0 .221.06H.194A.014.014 0 0 0 .18.074v.173c0 .008.006.014.014.014h.027A.014.014 0 0 0 .235.247V.074z"/></svg>';
            sName.forEach((element) => (element.innerHTML = document.querySelector('#sonaar-player').dataset.tracktitle));
            aName.innerHTML = document.querySelector('#sonaar-player').dataset.trackartist;
            document.querySelector(".hidden-container").append(document.querySelector(".tune-in"));
            document.querySelector(".artist-container").append(document.querySelector(".artistName"));
            await delay(100);
            sName.forEach((element) => (element.classList.remove('isHidden')));
            aName.href = "/author/ym.fm";
            aName.classList.remove('isHidden');
            document.querySelector(".tune-in").classList.remove('isHidden');
        } else {
            document.querySelector(".tune-in").classList.add('isHidden');
            sName.forEach((element) => (element.classList.add('isHidden')));
            aName.classList.add('isHidden');
            await delay(100);
            mBtN.classList.remove('audio-playing');
            //  mBtN.innerHTML='<svg fill="#fff" width="18" height="18" viewBox="0 0 0.81 0.81" xmlns="http://www.w3.org/2000/svg"><path class="clr-i-solid clr-i-solid-path-1" d="M.724.362.201.101a.047.047 0 0 0-.066.041v.522a.046.046 0 0 0 .068.042L.724.445a.047.047 0 0 0 0-.083Z"/><path fill="none" d="M0 0h.81v.81H0z"/></svg>';
            sName.forEach((element) => element.innerHTML = 'HIDEAWAY RADIO');
            document.querySelector(".hidden-container").append(document.querySelector(".artistName"));
            document.querySelector(".artist-container").append(document.querySelector(".tune-in"));
            await delay(100);
            aName.classList.remove('isHidden');
            sName.forEach((element) => (element.classList.remove('isHidden')));
            document.querySelector(".tune-in").classList.remove('isHidden');
        }

    }


    const isElementLoaded = async (selector) => {
        while (document.querySelector(selector) === null) {
            await new Promise((resolve) => requestAnimationFrame(resolve));
        }
        return document.querySelector(selector);
    };
    cBtn1.addEventListener("mouseenter", () => btnHvrIn("#c-btn-1"), false);
    cBtn1.addEventListener("mouseleave", () => btnHvrOut(), false);
    if (isLoggedIn) {
        document.querySelector("#c-btn-2").addEventListener("mouseenter", () => btnHvrIn("#c-btn-2"), false);
        document.querySelector("#c-btn-2").addEventListener("mouseleave", () => btnHvrOut(), false);
        document.querySelector("#c-btn-3").addEventListener("mouseenter", () => btnHvrIn("#c-btn-3"), false);
        document.querySelector("#c-btn-3").addEventListener("mouseleave", () => btnHvrOut(), false);
    }

    function btnHvrIn(a) {
        let btn = document.querySelector(a);
        btnInfo.textContent = btn.getAttribute("aria-label");
        iC.classList.add("isHidden");
        btnInfo.classList.remove("isHidden");
    }

    function btnHvrOut() {
        btnInfo.classList.add("isHidden");
        iC.classList.remove("isHidden");
    }


    function callback(mutationList) {
        mutationList.forEach((mutation) => {
            switch (mutation.type) {
                case 'attributes': {
                    if ((document.querySelector(
                        '#sonaar-player > div.player.sr-show_controls_hover'
                    ).classList.contains('audio-playing'))) {
                        if (
                            !(
                                document.querySelector('.songName').innerHTML ==
                                mutation.target.dataset.tracktitle
                            )
                        ) {
                            document
                                .querySelectorAll('.songName').forEach((element) => (element.classList.add('isHidden')));
                            document
                                .querySelectorAll('.songName')
                                .forEach(
                                    (element) =>
                                        (element.innerHTML = mutation.target.dataset.tracktitle)
                                );
                            document
                                .querySelectorAll('.songName').forEach((element) => (element.classList.remove('isHidden')));
                        }
                        if (
                            !(
                                document.querySelector('.artistName').innerHTML ==
                                mutation.target.dataset.trackartist
                            )
                        ) {
                            document
                                .querySelectorAll('.artistName').classList.add('isHidden');
                            document.querySelector('.artistName').innerHTML =
                                mutation.target.dataset.trackartist;
                            document
                                .querySelectorAll('.artistName').classList.remove('isHidden');
                        }
                    }
                    break;
                }
            }
        });
    }

    function callback2(mutationList) {
        mutationList.forEach((mutation) => {
            if (mutation.type == 'attributes') {
                if ((mutation.attributeName = 'class')) {
                    if (mutation.target.classList.contains('audio-playing')) {
                        document
                            .querySelector(
                                '.menu-float__layout--radio > div > div.control > div'
                            )
                            .classList.add('audio-playing');
                    } else {
                        document
                            .querySelector(
                                '.menu-float__layout--radio > div > div.control > div'
                            )
                            .classList.remove('audio-playing');
                    }
                }
            }
        });
    }

    const observer = new MutationObserver(callback);
    const observer2 = new MutationObserver(callback2);
    const plaYrer = document.querySelector('#sonaar-player');
    const aPlayer = document.querySelector(
        '#sonaar-player > div.player.sr-show_controls_hover'
    );

    observer.observe(plaYrer, {attributes: true});
    observer2.observe(aPlayer, {attributes: true});
    isElementLoaded('.songName').then((selector) => {
        if (
            mBtN.classList.contains('audio-playing') !==
            aPlayer.classList.contains('audio-playing')
        ) {
            if (aPlayer.classList.contains('audio-playing'))
                sonaarClick(true);
            else
                sonaarClick(false);
        }
    });
}));