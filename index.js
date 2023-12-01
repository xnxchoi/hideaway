// noinspection ES6ConvertVarToLetConst

(function () {
    "use strict";

    function estt_global_tweek() {
        var ww = document.body.offsetWidth;
        document.documentElement.style.setProperty("--vw100", ww + "px");
    }

    /*
     * Detect User Device Input Type.
     */
    function esttDeviceAndInputType() {
        window._pointerType = null; // pointer type
        window._media = {};

        if (window.matchMedia("(hover: hover)").matches) {
            window._pointerType = "mouse";
            document.body.setAttribute("data-input", "mouse");
        }

        /* pointer event*/
        window.addEventListener(
            "pointerdown",
            function (e) {
                // pointerType: pen, touch, mouse
                if (e.pointerType === _pointerType) {
                    return;
                }
                document.body.setAttribute("data-input", e.pointerType);
                _pointerType = e.pointerType;
            },
            false
        );

        /* keyup event */
        window.addEventListener(
            "keyup",
            function (e) {
                document.body.setAttribute("data-input", "key");
                _pointerType = "key";
            },
            false
        );

        /* Hover */
        if (window.matchMedia("(hover: hover)").matches) {
            window._media.hover = true;
        } else {
            window._media.hover = false;
        }

        /* is Mobile Phone */
        window._media.isMobile = function () {
            let check = false;
            (function (a) {
                if (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                        a
                    ) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                        a.substr(0, 4)
                    )
                )
                    check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };

        if (window._media.isMobile()) {
            document.body.setAttribute("data-is-mobile", "");
            document.body.removeAttribute("data-is-tablet");
            document.documentElement.classList.add("ps-mobile");
        }

        const userAgent = navigator.userAgent.toLowerCase();
        const isTablet =
            /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
                userAgent
            );

        window._media.isTablet = isTablet;

        if (window._media.isTablet) {
            document.body.setAttribute("data-is-tablet", "");
            document.body.removeAttribute("data-is-mobile");
        }

    }

    /**
     * Page Title Tweek
     */
    function estt_page_title_tweek() {
        var el = document.getElementsByClassName("page-title")[0];

        if (!el) {
            return;
        }

        var nop = "";
        var prefix = "";

        // news index title
        var is_blog = document.body.classList.contains("blog");

        var dnop = estt_stat.display_nop_news || "true";

        if (is_blog && dnop == "true") {
            nop = estt_stat.nop;
            prefix = estt_stat.prefix_nop_news || " - P.00";
        }

        el.innerHTML = el.innerText + prefix + nop;
    }

    /**
     * Marquee Text
     * @param {boolean} resize
     * @returns
     */
    function estt_marquee_text(resize = false) {
        var elements = document.getElementsByClassName("marquee-text");

        if (elements) {
            for (let ie = 0; ie < elements.length; ie++) {
                const el = elements[ie];
                const ow = el.offsetWidth;

                if ((el.offsetWidth && !el.hasAttribute("data-init")) || resize) {
                    /**
                     * For the resize purposes, back up the original content.
                     */
                    if (!el.hasAttribute("data-init")) {
                        el.setAttribute("data-init", el.innerHTML);
                    }

                    /**
                     * Restore the original content.
                     */
                    const _ihtml = el.getAttribute("data-init");
                    if (_ihtml) {
                        el.innerHTML = _ihtml;
                    }

                    /* Separator */
                    /* var _sep = el.hasAttribute("data-sep")
                         ? el.getAttribute("data-sep")
                         : "";*/
                    var _sep = "✺";
                    /* Text is set using original text with a separator */
                    var text = el.innerText + '<span class="_sep">' + _sep + "</span>";
                    /* Wrap the text using span if there are no child elements */
                    if (!el.firstElementChild) {
                        el.innerHTML = "<span>" + text + "</span>";
                    }
                    /* Get the width of the first child */
                    var ew = el.firstElementChild.offsetWidth;
                    /* Keep going if the element has sufficient width */
                    if (ew > 10) {
                        var vw = el.offsetWidth;

                        var _times = vw / ew;

                        _times = _times < 4 ? 4 : _times;

                        _times = Math.ceil(_times / 4) * 4;

                        var content = "";

                        for (let i = 0; i < _times; i++) {
                            content += "<span>" + text + "</span>";
                        }

                        el.innerHTML =
                            '<div class="marquee">' +
                            '<div class="marquee__inner" aria-hidden="true">' +
                            content +
                            "</div>" +
                            "</div>";

                        const mel = el.querySelector(".marquee__inner");
                        mel.setAttribute(
                            "style",
                            "--width:" + mel.offsetWidth + "; --c-width:" + ow + ""
                        );
                    }
                }
            }
        }
    }

    /**
     * Off Canvas Contact popup
     */
    function estt_toogle_off_canvas_contact() {
        var elements = document.querySelectorAll('[href="#contact"]');

        var toogle_function = function (e) {
            e.preventDefault();

            var offCanvas = document.querySelector(".off-canvas-contact");
            var inView = offCanvas.hasAttribute("data-inview");
            if (offCanvas) {
                if (inView) {
                    offCanvas.removeAttribute("data-inview");
                } else {
                    offCanvas.setAttribute("data-inview", "");
                }
            }
        };

        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", toogle_function, false);
        }
    }

    /**
     * Off Canvas Menu toogle
     */
    function estt_toogle_off_canvas_menu() {
        var inView = document.body.getAttribute("data-view");

        var menu = document.getElementById("primary-menu");

        var menu_items =
            "#off-menu > li > a:not(.hide-min-1024 > a), [data-scroll-y-was-in] #off-menu > li > a";
        if (menu) {
            var display = window.getComputedStyle(menu).display;
            if (display == "none") {
                menu_items = "#off-menu > li > a";
            }
        }

        if (inView == "off-canvas-menu") {
            anime({
                targets: "#page > *:not(.site-header):not(#sidebar)",
                opacity: 0,
                easing: "linear",
                duration: 600,
            });

            anime({
                targets: menu_items,
                translateY: [0, 0],
                opacity: 0,
                easing: "linear",
                duration: 500,
            });

            anime({
                targets: estt_pp.noiseUniforms.transt,
                value: [0, 1],
                easing: "linear",
                duration: 600,
                complete: function () {
                    off_canvas_menu_reset();
                    estt_webgl.cleanCanvas(0);
                    document.body.removeAttribute("data-view", "off-canvas-menu");
                    if (document.body.hasAttribute("data-scroll-y")) {
                        window.scrollTo(0, document.body.getAttribute("data-scroll-y"));
                        document.body.removeAttribute("data-scroll-y-was-in");
                    }
                    estt_marquee_text(true);

                    anime({
                        targets: estt_pp.noiseUniforms.transt,
                        value: 0,
                        easing: "linear",
                        duration: 600,
                    });

                    anime({
                        targets: [
                            "#page > *:not(.site-header):not(#sidebar)",
                            "[data-is-mobile] [data-il-render]",
                            "[data-is-tablet] [data-il-render]",
                        ],
                        opacity: 1,
                        easing: "linear",
                        duration: 600,
                    });

                    anime({
                        targets: "#primary-menu > li",
                        translateY: "0",
                        easing: "linear",
                        duration: 300,
                        delay: 600,
                        complete: function () {
                            anime.set("#primary-menu", {
                                overflow: "",
                            });
                        },
                    });
                },
            });

            anime({
                targets: estt_pp.noiseUniforms.u_state,
                value: 0,
                easing: "linear",
                duration: 600,
            });
        } else {
            document.body.setAttribute("data-scroll-y", window.scrollY);
            if (window.scrollY > 100) {
                document.body.setAttribute("data-scroll-y-was-in", "");
            } else {
                document.body.removeAttribute("data-scroll-y-was-in");
            }

            anime({
                targets: [
                    "#page > *:not(.site-header):not(#sidebar)",
                    "[data-is-mobile] [data-il-render]",
                    "[data-is-tablet] [data-il-render]",
                ],
                opacity: 0,
                easing: "linear",
                duration: 600,
            });

            if (!document.body.hasAttribute("data-scroll-y-was-in")) {
                anime({
                    targets: "#primary-menu > li",
                    translateY: "100%",
                    easing: "linear",
                    duration: 300,
                    begin: function () {
                        anime.set("#primary-menu", {
                            overflow: "hidden",
                        });
                    },
                });
            }

            anime({
                targets: estt_pp.noiseUniforms.transt,
                value: [0, 1],
                easing: "linear",
                duration: 600,
                complete: function () {
                    estt_webgl.cleanCanvas(1);
                    document.body.setAttribute("data-view", "off-canvas-menu");
                    anime({
                        targets: estt_pp.noiseUniforms.transt,
                        value: 0,
                        easing: "linear",
                        duration: 600,
                    });

                    anime({
                        targets: "#page > *:not(.site-header):not(#sidebar)",
                        opacity: 1,
                        easing: "linear",
                        duration: 600,
                    });
                },
            });

            anime({
                targets: estt_pp.noiseUniforms.u_state,
                value: 1,
                easing: "linear",
                duration: 1000,
            });

            anime({
                targets: menu_items,
                translateY: [0, 0],
                opacity: [0, 1],
                easing: "linear",
                duration: 600,
                delay: 800,
                changeBegin: function () {
                    window.scrollTo(0, 0); // reset body scroll
                },
            });
        }
    }

    /**
     * Off Canvas Submenus
     * @returns
     */
    function off_canvas_submenu() {
        var nav = document.querySelector(".off-navigation");

        if (!nav) {
            return;
        }

        var back = function (event) {
            var e = event.target;
            var submenu = e.closest("ul");
            submenu.classList.remove("_expand");

            var allLi = submenu.parentElement.closest("ul").children;

            submenu.parentElement.classList.remove("menu-item-expand");

            for (let i = 0; i < allLi.length; i++) {
                const _li = allLi[i];
                _li.classList.remove("menu-item-hidden");
            }
        };

        var backIcon = `
      <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/>
      <path d="M42 22h-28.34l7.17-7.17-2.83-2.83-12 12 12 12 2.83-2.83-7.17-7.17h28.34z"/>
      </svg>`;

        var submenus = nav.querySelectorAll(".sub-menu");
        for (let i = 0; i < submenus.length; i++) {
            var _el = document.createElement("div");
            _el.classList.add("_icon");
            _el.setAttribute("data-mouse", "mini-btn");
            _el.setAttribute("data-mouse-lock", "");
            _el.innerHTML = backIcon;
            const _submenu = submenus[i];
            _submenu.prepend(_el);

            _el.addEventListener("click", back, false);
        }

        var expand = function (event) {
            event.preventDefault();
            event.stopPropagation();

            var e = event.target.parentElement;
            var submenu = e.querySelector(".sub-menu");

            var li = e.closest("li");

            var allLi = e.closest("ul").children;

            for (let i = 0; i < allLi.length; i++) {
                const _li = allLi[i];
                _li.classList.add("menu-item-hidden");
            }

            li.classList.remove("menu-item-hidden");
            li.classList.add("menu-item-expand");

            if (submenu) {
                submenu.classList.add("_expand");
            }
        };

        var parents = nav.querySelectorAll(".menu-item-has-children > a");

        for (var i = 0; i < parents.length; i++) {
            parents[i].addEventListener("click", expand, false);
        }
    }

    function off_canvas_menu_reset() {
        var nav = document.querySelector(".off-navigation");

        if (!nav) {
            return;
        }

        var h = nav.querySelectorAll(".menu-item-hidden");
        var e = nav.querySelectorAll(".menu-item-expand");
        var _e = nav.querySelectorAll("._expand");

        for (let i = 0; i < h.length; i++) {
            h[i].classList.remove("menu-item-hidden");
        }

        for (let i = 0; i < e.length; i++) {
            e[i].classList.remove("menu-item-expand");
        }

        for (let i = 0; i < e.length; i++) {
            _e[i].classList.remove("_expand");
        }
    }

    /**
     * Toogle Sidebar
     */
    function estt_toogle_sidebar() {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
            document.body.classList.toggle("sidebar-on");
        }
    }

    /**
     * Add Event listener to buttons
     */
    function buttonsEventsBinder() {
        /* menu button */
        const button = document.querySelector(".menu-toggle"); // select menu button
        if (button) {
            button.addEventListener("click", estt_toogle_off_canvas_menu, false);
        }
        /* back to top */
        var btt = document.querySelector(".to-top");
        btt.addEventListener(
            "click",
            function (e) {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            },
            false
        );

        /* scroll hint */
        var sh = document.querySelector(".scroll-hint");
        if (sh) {
            sh.addEventListener(
                "click",
                function (e) {
                    window.scrollTo({
                        top: window.innerHeight - 100,
                        left: 0,
                        behavior: "smooth",
                    });
                },
                false
            );
        }

        /* sidebar toggle */
        const sidebar_button = document.querySelector(".sidebar-toggle");
        if (sidebar_button) {
            sidebar_button.addEventListener("click", estt_toogle_sidebar, false);
        }

        const sidebar_off = document.querySelector(".sidebar-toggle-off");
        if (sidebar_off) {
            sidebar_off.addEventListener("click", estt_toogle_sidebar, false);
        }
    }

    /**
     * Project wall - column maker
     * @returns
     */
    function estt_poriject_wall() {
        if (document.querySelector(".project-wall-items") == null) {
            return;
        }
        const w = window.innerWidth;

        if (w < 768) {
            return;
        }

        var container = document.querySelector(".project-wall-items");
        var items = document.querySelectorAll(".project-wall-item");

        if (!items.length) {
            return;
        }

        var noc = 2;
        var col_list = [];
        var col_child_list = [];

        for (let i = 0; i < noc; i++) {
            var col = document.createElement("div");
            var index = i + 1;
            col.setAttribute("data-i", index);
            col.classList.add("project-wall-col");
            container.appendChild(col);
            col_list[i] = col;
            col_child_list[i] = [];
        }

        var current_step = 0;

        for (let i = 0; i < items.length; i++) {
            if (current_step >= noc) {
                current_step = 1;
            } else {
                current_step++;
            }

            var select_column = current_step;

            col_list[select_column - 1].appendChild(items[i]);
            col_child_list[select_column - 1].push(items[i]);
        }

        // odd even
        for (let i = 0; i < col_child_list.length; i++) {
            var start = 2;
            if (i % 2 == 0) {
                start = 1;
            }

            var items_ = col_child_list[i];

            for (let it = 0; it < items_.length; it++) {
                items_[it].setAttribute("data-y-scroll", "");
                items_[it].setAttribute("data-y-scroll-speed", start);
            }
        }

        window.scrollTo(window.scrollX, window.scrollY + 1);
    }

    /**
     * Author Wall - column maker
     * @returns
     */
    function estt_author_wall() {
        if (!((barba.url.getHref().includes("author") || window.location.href.includes("author")))) {
            return;
        }
        const w = window.innerWidth;
        var noc = 3;
        if (w < 400) {
            noc = 1;
        } else if (w < 768) {
            noc = 2;
        }

        var container = document.querySelector(".js-masonry.light-masonry-wrapper");
        var items = document.querySelectorAll(".js-item.light-masonry-item");

        if (!items.length) {
            return;
        }

        var col_list = [];
        var col_child_list = [];

        for (let i = 0; i < noc; i++) {
            var col = document.createElement("div");
            var index = i + 1;
            col.setAttribute("data-i", index);
            col.classList.add("light-masonry-column");
            container.appendChild(col);
            col_list[i] = col;
            col_child_list[i] = [];
        }

        var current_step = 0;

        for (let i = 0; i < items.length; i++) {
            if (current_step >= noc) {
                current_step = (current_step % noc);
                current_step++;
            } else {
                current_step++;
            }

            var select_column = current_step;

            col_list[select_column - 1].appendChild(items[i]);
            col_child_list[select_column - 1].push(items[i]);
        }

        // odd even
        for (let i = 0; i < col_child_list.length; i++) {
            var start = noc;
            start = (i % noc) + 1;
            var items_ = col_child_list[i];
        }

        window.scrollTo(window.scrollX, window.scrollY + 1);
    }

    function tabs_maker() {
        if (!((barba.url.getHref().includes("author") || window.location.href.includes("author")) && (barba.url.getHref().includes("profile") || window.location.href.includes("profile")))) {
            return;
        }
        const tabsContainer = document.querySelector(".tabs-container");
        const tabsList = tabsContainer.querySelector("ul");
        const tabButtons = tabsList.querySelectorAll("a");
        const tabPanels = tabsContainer.querySelectorAll(".tabs__panels > div");
        tabsList.setAttribute("role", "tablist");
        tabsList.querySelectorAll("li").forEach((listitem) => {
            listitem.setAttribute("role", "presentation");
        });

        tabButtons.forEach((tab, index) => {
            tab.setAttribute("role", "tab");
            if (index === 0) {
                tab.setAttribute("aria-selected", "true");
                tab.classList.add("active");
            } else {
                tab.setAttribute("tabindex", "-1");
                tab.classList.remove("active");
                tabPanels[index].setAttribute("hidden", "");
            }
        });

        tabPanels.forEach((panel) => {
            panel.setAttribute("role", "tabpanel");
            panel.setAttribute("tabindex", "0");
        });

        tabsContainer.addEventListener("click", (e) => {
            const clickedTab = e.target.closest("a");
            if (!clickedTab) return;
            e.preventDefault();

            switchTab(clickedTab);
        });

        function moveLeft() {
            const currentTab = document.activeElement;
            if (!currentTab.parentElement.previousElementSibling) {
                switchTab(tabButtons[tabButtons.length - 1]);
            } else {
                switchTab(
                    currentTab.parentElement.previousElementSibling.querySelector("a")
                );
            }
        }

        function moveRight() {
            const currentTab = document.activeElement;
            if (!currentTab.parentElement.nextElementSibling) {
                switchTab(tabButtons[0]);
            } else {
                switchTab(currentTab.parentElement.nextElementSibling.querySelector("a"));
            }
        }

        function switchTab(newTab) {
            const activePanelId = newTab.getAttribute("href");
            const activePanel = tabsContainer.querySelector(activePanelId);

            tabButtons.forEach((button) => {
                button.setAttribute("aria-selected", false);
                button.setAttribute("tabindex", "-1");
                button.classList.remove("active");
            });

            tabPanels.forEach((panel) => {
                panel.setAttribute("hidden", true);
            });

            activePanel.removeAttribute("hidden", false);

            newTab.setAttribute("aria-selected", true);
            newTab.setAttribute("tabindex", "0");
            newTab.classList.add("active");
            newTab.focus();
        }
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    function bCrumbUpdate() {
        if (document.querySelector('.menu-float__title-section .inner-cont') == null) {
            return;
        }
        const cBar = document.querySelector('.float-section');
        const cBtn1 = document.querySelector('#c-btn-1');
        const menuTitle = document.querySelector('.menu-float__title-section');
        const iC = document.querySelector('.menu-float__title-section .inner-cont');
        const bCrumbT = document.querySelector('.breadcrumb.menu-float__title');
        const bCSubT = document.querySelector('.menu-float__subtitle');
        const lRdo = document.querySelector('.menu-float__layout--radio');

        async function changeBC(a) {
            menuTitle.classList.add("isHidden");
            await delay(100);
            iC.innerHTML = a;
            await delay(100);
            menuTitle.classList.remove("isHidden");
        }

        if (isLoggedIn) {
            cBtn1.innerHTML = '<svg width="20" height="20" viewBox="0 0 0.72 0.72" fill="currentColor" stroke-width=".5" xmlns="http://www.w3.org/2000/svg"><path d="M.165.6A.045.045 0 0 0 .21.555V.51H.165A.045.045 0 0 0 .12.555V.6h.045ZM.189.48.155.446A.015.015 0 0 1 .176.425l.12.12a.015.015 0 0 1-.021.021L.24.531v.024A.075.075 0 0 1 .165.63h-.06A.015.015 0 0 1 .09.615v-.06A.075.075 0 0 1 .165.48h.024ZM.116.626A.015.015 0 0 1 .095.605l.06-.06a.015.015 0 0 1 .021.021l-.06.06ZM.208.473A.015.015 0 0 1 .183.457L.269.32A.496.496 0 0 1 .443.152L.522.107A.128.128 0 0 1 .585.09.045.045 0 0 1 .63.135a.127.127 0 0 1-.017.063L.568.277A.496.496 0 0 1 .4.451L.263.537A.015.015 0 0 1 .247.512L.384.426A.466.466 0 0 0 .541.262L.587.184A.105.105 0 0 0 .6.135.015.015 0 0 0 .585.12a.095.095 0 0 0-.049.013L.457.178a.466.466 0 0 0-.164.158L.207.473Z"/></svg>';
            cBtn1.ariaLabel = "새로운 기록.";
            const cBtn2 = document.querySelector('#c-btn-2');
            const cBtn3 = document.querySelector('#c-btn-3');
            cBtn2.innerHTML = '<svg width="22" height="22" viewBox="-0.013 0 0.625 0.625" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.3.327a.113.113 0 1 0 0-.226.113.113 0 0 0 0 .226ZM.225.298H.224" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width=".025"/><path d="M.424.321a.237.237 0 0 1 .113.19.013.013 0 0 1-.013.013H.075A.013.013 0 0 1 .062.511.238.238 0 0 1 .174.322" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width=".025"/></svg>';
            cBtn2.href = document.querySelector('#ha-user-link').href;
            cBtn2.ariaLabel = "쇼케이스.";
            cBtn3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.125" d="M15.75 7.031a4.781 4.781 0 0 1-4.781 4.782 4.781 4.781 0 0 1-4.781-4.782 4.781 4.781 0 0 1 9.562 0zM2.25 15.75l5.625-5.625"/></svg>';
            cBtn3.href = '/search/';
            cBtn3.ariaLabel = "검색하기.";
        }
        if (document.body.classList.contains("single")) {
            cBtn1.innerHTML = '<svg class="surf-comment-svg" width="27" height="27" fill="none" viewBox="0 0 12 12" stroke-width="0.5px" xmlns="http://www.w3.org/2000/svg"><title>Comments</title><path d="M2.4 9.1h-.207l-.147.146L.5 10.793V1.2c0-.384.316-.7.7-.7h9.6c.384 0 .7.316.7.7v7.2c0 .384-.316.7-.7.7H2.4Z" stroke=""></path></svg><span class="surf-comment-wrap"><span class="surf-comment-container"><span class="coral-count-number"></span></span></span>';
            cBtn1.href = "#comments";
            cBtn1.ariaLabel = "댓글 보기.";
            document.querySelector("#c-btn-1 > svg").style.mixBlendMode = "exclusion";
            var cNum;
            if ((document.querySelectorAll(".comment-num-hidden").length) > 0) {
                cNum = document.querySelector(".comment-num-hidden").textContent;
            } else {
                cNum = "-";
            }
            if (isMobile) {
                lRdo.classList.add("is-closed");
                lRdo.style.right = "55px";
                lRdo.style.bottom = "1px";
            }
            document.querySelector("#c-btn-1 .coral-count-number").innerHTML = cNum;
            if (document.body.classList.contains("single-post")) {
                bCrumbT.textContent = 'Magazine';
                bCSubT.textContent = 'Stories';
                changeBC(document.querySelector(".meta-author-link").textContent);
            } else if (document.body.classList.contains("single-estt-project")) {
                bCrumbT.textContent = 'Magazine';
                bCSubT.textContent = 'Featured';
                changeBC(document.querySelector(".entry-title-wrap > div.entry-title > h4 > span > a").textContent);
            } else if (document.body.classList.contains("single-curated-surfing")) {
                bCrumbT.textContent = '큐레이션';
                bCSubT.textContent = '서핑';
                changeBC(document.querySelector(".ha-info-author").textContent);
            }
            bCrumbT.classList.remove("bc-is-hidden");
            bCSubT.classList.remove("bc-is-hidden");
            //menuTitle.classList.add("bc-is-hidden");
        } else {
            if (isLoggedIn) {
                cBtn1.innerHTML = '<svg width="20" height="20" viewBox="0 0 0.72 0.72" fill="currentColor" stroke-width=".5" xmlns="http://www.w3.org/2000/svg"><path d="M.165.6A.045.045 0 0 0 .21.555V.51H.165A.045.045 0 0 0 .12.555V.6h.045ZM.189.48.155.446A.015.015 0 0 1 .176.425l.12.12a.015.015 0 0 1-.021.021L.24.531v.024A.075.075 0 0 1 .165.63h-.06A.015.015 0 0 1 .09.615v-.06A.075.075 0 0 1 .165.48h.024ZM.116.626A.015.015 0 0 1 .095.605l.06-.06a.015.015 0 0 1 .021.021l-.06.06ZM.208.473A.015.015 0 0 1 .183.457L.269.32A.496.496 0 0 1 .443.152L.522.107A.128.128 0 0 1 .585.09.045.045 0 0 1 .63.135a.127.127 0 0 1-.017.063L.568.277A.496.496 0 0 1 .4.451L.263.537A.015.015 0 0 1 .247.512L.384.426A.466.466 0 0 0 .541.262L.587.184A.105.105 0 0 0 .6.135.015.015 0 0 0 .585.12a.095.095 0 0 0-.049.013L.457.178a.466.466 0 0 0-.164.158L.207.473Z"/></svg>';
                cBtn1.href = "/new-story";
                cBtn1.ariaLabel = "새로운 기록.";
            } else {
                cBtn1.innerHTML = '<svg width="16" height="16" viewBox="0 0 0.54 0.54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.495.45V.274A.09.09 0 0 0 .467.209L.301.052a.045.045 0 0 0-.062 0L.073.208a.09.09 0 0 0-.028.066V.45A.045.045 0 0 0 .09.495h.36A.045.045 0 0 0 .495.45Z" stroke="currentColor" stroke-width=".04" stroke-linecap="round" stroke-linejoin="round"/></svg>';
                cBtn1.ariaLabel = "리셉션.";
                cBtn1.href = "/home/";
            }
            document.querySelector("#c-btn-1 > svg").style.mixBlendMode = "exclusion";
            if (isMobile) {
                lRdo.style.right = "";
                lRdo.style.bottom = "";
            }
            bCrumbT.textContent = "";
            bCSubT.textContent = "";
            bCrumbT.classList.add("bc-is-hidden");
            bCSubT.classList.add("bc-is-hidden");
            menuTitle.classList.remove("bc-is-hidden");
            if (document.body.classList.contains("home")) {
                changeBC('리셉션');
            } else if (barba.url.getHref().includes("/membership/")) {
                changeBC('설정');
            } else if (barba.url.getHref().includes("/author/")) {
                bCrumbT.classList.remove("bc-is-hidden");
                bCSubT.classList.remove("bc-is-hidden");
                bCrumbT.textContent = 'Ledger';
                bCSubT.textContent = 'Profile';
                let ucI = document.querySelector('.users-credits__item');
                iC.innerHTML = "";
                iC.appendChild(ucI);
            } else if (barba.url.getHref().includes("/membership/")) {
                bCrumbT.classList.remove("bc-is-hidden");
                bCrumbT.textContent = '설정';
                if (barba.url.getHref().includes("/profile/")) {
                    bCSubT.classList.remove("bc-is-hidden");
                    bCSubT.textContent("프로필");
                } else if (barba.url.getHref().includes("/billing/")) {
                    bCSubT.classList.remove("bc-is-hidden");
                    bCSubT.textContent("Billing");
                }
            } else if (barba.url.getHref().includes("/h-a/")) {
                changeBC('H/A');
            } else if (document.body.classList.contains("category")) {
                if (document.documentElement.classList.contains("ps-mobile")) {
                    lRdo.classList.add("is-closed");
                    lRdo.style.right = "55px";
                    lRdo.style.bottom = "1px";
                }
                menuTitle.innerHTML = '';
                let aAA = document.querySelector('#cat-name span').textContent;
                bCrumbT.classList.remove("bc-is-hidden");
                bCSubT.classList.remove("bc-is-hidden");
                bCrumbT.textContent = 'Topics';
                bCSubT.textContent = aAA;
            } else {
                changeBC('H.A');
            }
        }
    }

    function estt_collection_wall() {
        if (!(barba.url.getHref().includes("/vault/") || barba.url.getHref().includes("/membership/"))) {
            return;
        }
        const w = window.innerWidth;
        var noc = 3;
        if (w < 400) {
            noc = 1;
        } else if (w < 768) {
            noc = 2;
        }

        var allcontainer = document.querySelectorAll(".favorites-list.hi");
        var post_container = document.querySelector("#story .hi");
        var curate_container = document.querySelector("#curate .hi");
        if (allcontainer.length < 1) {
            return;
        }
        var post_items = document.querySelectorAll("#story .favorites-list.hi > li");
        if (post_items.length > 0) {
            for (let t = 0; t < post_items.length; t++) {
                const kImg = post_items[t].querySelector("p:nth-child(1)").innerHTML;
                const kTitle = post_items[t].querySelector("p:nth-child(2) > a").textContent;
                const kLink = post_items[t].querySelector("p:nth-child(2) > a").href;
                var k = document.createElement("div");
                post_items[t].classList.remove("favorites-list", "hi");
                post_items[t].classList.add("js-item", "light-masonry-item");
                post_items[t].innerHTML = "";
                k.classList.add("col-3", "js-collectable");
                post_items[t].setAttribute("data-index", t);
                post_items[t].appendChild(k);
                var teMp = document.createElement("div");
                teMp.classList.add("card-site", "js-container-figure");
                k.appendChild(teMp);
                teMp.innerHTML = '<figure class="figure-rollover"><a class="figure-rollover__link ha-thumbnail" href="">Thumbnail</a><div class="figure-rollover__hover"><div class="figure-rollover__left"><div class="figure-rollover__row"><small>Story</small></div><div class="figure-rollover__row ha-title">Title</div></div><div class="figure-rollover__center js-container-button-vote"><a href="" class="button button--white--rounded" ><svg class="ico--left" width="14"  viewBox="0 0 20 17"><path d="M17.8246 7.4299H0V9.29145H17.8246L12.2047 16L13.6589 16.8982L19.4269 10.0128C20.191 9.10064 20.191 7.61838 19.4269 6.70622L13.809 0L12.3548 0.89587L17.8246 7.4299Z"></path></svg>READ NOW</a></div><div class="figure-rollover__right"> <div class="figure-rollover__bts"><a class="figure-rollover__bt" href="" target="_blank" rel="noopener nofollow"><svg width="14" height="14" viewBox="0 0 14 14"><path d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z" fill="white" stroke="white" stroke-width="0.542084"></path></svg></a><div class="figure-rollover__bt"></div></div></div></div><div class="figure-rollover__fixed-left"></div></figure>';
                teMp.querySelector(".ha-thumbnail").innerHTML = kImg;
                let hTtle = teMp.querySelector(".ha-title");
                hTtle.textContent = kTitle;
                teMp.querySelectorAll("a").forEach((link) => {
                    link.href = kLink;
                });
            }
            var kTems = document.querySelectorAll("#story .light-masonry-item");
            var col_list = [];
            var col_child_list = [];

            for (let i = 0; i < noc; i++) {
                var col = document.createElement("div");
                var index = i + 1;
                col.setAttribute("data-i", index);
                col.classList.add("light-masonry-column");
                post_container.appendChild(col);
                col_list[i] = col;
                col_child_list[i] = [];
            }

            var current_step = 0;

            for (let i = 0; i < kTems.length; i++) {
                if (current_step >= noc) {
                    current_step = (current_step % noc);
                    current_step++;
                } else {
                    current_step++;
                }
                var select_column = current_step;

                col_list[select_column - 1].appendChild(kTems[i]);
                col_child_list[select_column - 1].push(kTems[i]);
            }

            // odd even
            for (let i = 0; i < col_child_list.length; i++) {
                var start = noc;
                start = (i % noc) + 1;
                var items_ = col_child_list[i];

                for (let it = 0; it < items_.length; it++) {
                    items_[it].setAttribute("data-y-scroll", "");
                    items_[it].setAttribute("data-y-scroll-speed", 1);
                }
            }
            post_container.classList.remove("favorites-list", "hi");
            post_container.classList.add("js-masonry", "light-masonry-wrapper");
            window.scrollTo(window.scrollX, window.scrollY + 1);
        }
    }

    function estt_level_block() {
        let plansProBlock = document.querySelector(".block--plans-pro"),
            planChoiceBtn = document.querySelector(".js-choose-plan");
        planChoiceBtn && planChoiceBtn.addEventListener("click", function () {
            plansProBlock.classList.add("is-show");
            document.body.parentNode.scrollTo({top: plansProBlock.offsetTop, behavior: "smooth"});
        });
    }

    /**
     * Add Mouse Pointer to post nave button
     */
    function estt_post_nav_btn() {
        var posts_navigation = document.querySelectorAll(
            ".posts-navigation a, .single-post .cat-links a"
        );
        for (let i = 0; i < posts_navigation.length; i++) {
            const _posts_navigation = posts_navigation[i];
            _posts_navigation.setAttribute("data-mouse", "clip");
            _posts_navigation.setAttribute("data-mouse-lock", "c-in");
            _posts_navigation.classList.add("button-mouse-fill");
        }

        var post_navigations = document.querySelectorAll(".post-navigation a");
        for (let i = 0; i < post_navigations.length; i++) {
            const post_navigation = post_navigations[i];
            post_navigation.setAttribute("data-mouse", "arrow-right-min");
        }
    }

    function estt_spinGlobe() {
        if (document.querySelector('.YIX') == null) {
            return;
        }
        var checkboxes = document.querySelectorAll('input[type=radio]'),
            checkboxArray = Array.from(checkboxes);
        const globeI = document.querySelector('.YIX');
        if (!(globeI == null)) {
            function confirmCheck() {
                if (this.checked) {
                    let inD = this.dataset.radioI;
                    console.log('click!!' + inD);
                    let temp = globeI.getAttribute('style');
                    const styleReg = /transform([^;\[a-z\]\[0-9\]\\\n]*):([^\\\n]*)\;/;
                    let toReplace = 'transform: perspective(1000px)  rotateX(var(--xRotation)) rotateY(var(--word' + inD + '));';
                    const finD = temp.replace(styleReg, toReplace);
                    globeI.setAttribute('style', finD);
                }
            }

            checkboxArray.forEach(function (checkbox) {
                checkbox.addEventListener('change', confirmCheck);
            });
        }
    }

    /**
     * Comments
     */
    function estt_comments() {
        var commentEl = document.getElementById("comments");
        if (!commentEl) {
            return;
        }

        // add view reply link
        var parents = commentEl.querySelectorAll(".parent");
        for (let i = 0; i < parents.length; i++) {
            const parent = parents[i];
            const reply = parent.querySelector(".reply");

            if (reply) {
                const view = document.createElement("span");
                view.classList.add("view-reply");

                const children = parent.querySelector(".children");

                if (children) {
                    const count = children.childElementCount;
                    const icon = `<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					                <path d="M12.0867962,18 L6,21.8042476 L6,18 L4,18 C2.8954305,18 2,17.1045695 2,16 L2,4 C2,2.8954305 2.8954305,2 4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,16 C22,17.1045695 21.1045695,18 20,18 L12.0867962,18 Z M8,18.1957524 L11.5132038,16 L20,16 L20,4 L4,4 L4,16 L8,16 L8,18.1957524 Z M7,13 L7,11 L14,11 L14,13 L7,13 Z M7,9 L7,7 L16,7 L16,9 L7,9 Z" fill-rule="evenodd"></path>
				                </svg>`;

                    let text = "";

                    if (count) {
                        text = icon + count;

                        if (count == 1) {
                            text += " reply";
                        } else {
                            text += " replies";
                        }
                    }

                    view.innerHTML = text;
                }

                reply.parentNode.insertBefore(view, reply);

                view.addEventListener("click", toggle);
            }
        }

        function toggle(e) {
            const el = e.currentTarget;
            el.parentElement.classList.toggle("view-reply-show");
        }

        const commentInput = document.getElementById("comment");
        if (commentInput) {
            var focusit = function () {
                var cn = document.querySelector(".comment-notes");
                if (cn && !cn.classList.contains("_show")) {
                    commentInput.removeEventListener("focus", focusit);
                    cn.classList.add("_show");
                }
            };

            commentInput.addEventListener("focus", focusit);
        }

        function sidebarToggle() {
            const s = document.querySelector(".comments-sidebar");
            if (s) {
                s.classList.toggle("comments-sidebar-view");
            }
        }

        const commentsInfo = document.querySelectorAll(".comments-sidebar-toggle");
        if (commentsInfo.length) {
            for (let i = 0; i < commentsInfo.length; i++) {
                commentsInfo[i].addEventListener("click", sidebarToggle);
            }
        }

        const sliderX = document.querySelector(".comments-sidebar-x");
        if (sliderX) {
            sliderX.addEventListener("click", sidebarToggle);
        }

        /**
         * Open sidebar and scroll to comment if url has comment
         */
        function scrollToComment() {
            const hash = window.location.hash;

            if (hash) {
                const c = hash.match("#comment-");
                if (c && c.length) {
                    const s = document.querySelector(".comments-sidebar");
                    if (s) {
                        s.classList.add("comments-sidebar-view");

                        // find the comment
                        const comment = document.querySelector(hash);
                        if (comment) {
                            const link =
                                comment.parentElement.previousElementSibling.querySelector(
                                    ".view-reply"
                                );
                            parentViewToggle(link);
                        }
                    }
                } else {
                    const fullC = hash.match("#comments");
                    if (fullC && fullC.length) {
                        sidebarToggle();
                        window.location.hash = ""; // remove hash
                    }
                }
            }

            function parentViewToggle(link) {
                if (link) {
                    link.click();

                    let up = link.closest(".children");
                    if (up) {
                        const upLink =
                            up.previousElementSibling.querySelector(".view-reply");
                        parentViewToggle(upLink);
                    } else {
                        rest();
                    }
                } else {
                    rest();
                }

                function rest() {
                    document.querySelector(window.location.hash).scrollIntoView();
                    window.location.hash = ""; // remove hash
                }
            }
        }

        scrollToComment();
    }

    /**
     * navigation
     */
    function estt_navigation() {
        var inner = document.querySelector(".main-navigation-inner");
        var menu = document.getElementById("off-menu");

        if (!inner || !menu) {
            return;
        }

        var items = menu.children;

        if (!items) {
            return;
        }

        var menu_type = inner.getAttribute("data-type");
        var number_of_items = inner.getAttribute("data-items");
        var keep = inner.hasAttribute("data-items-keep");

        var wrap = document.createElement("ul");
        wrap.setAttribute("id", "primary-menu");
        inner.appendChild(wrap);

        if (menu_type === "classic") {
            var all_items = menu.innerHTML;
            wrap.innerHTML = all_items;

            var btn = document.querySelector(".menu-toggle");
            if (btn) {
                btn.classList.add("hide-min-1024");
                inner.classList.add("_classic-only");
            }
        } else if (menu_type === "hybrid") {
            if (number_of_items >= 1) {
                for (let i = 0; i < number_of_items; i++) {
                    const item = items[i];
                    wrap.appendChild(item.cloneNode(true));

                    if (!keep) {
                        item.classList.add("hide-min-1024");
                    }
                }
            }
        }
    }

    /**
     * Widget Tweek
     */
    function estt_widget_tweek() {
        const sidebar = document.getElementById("sidebar");
        if (!sidebar) {
            return;
        }
        /* tag cloud */
        const tagclouds = document.querySelectorAll(
            ".tagcloud, .wp-block-tag-cloud"
        );

        function click(e) {
            const li = e.target;
            const tg = e.target.closest(".tagcloud, .wp-block-tag-cloud");

            if (!tg) {
                return;
            }

            tg.classList.toggle("_show-all");

            if (tg.classList.contains("_show-all")) {
                li.textContent = "-";
            } else {
                li.textContent = "+";
            }
        }

        if (tagclouds.length) {
            for (let i = 0; i < tagclouds.length; i++) {
                const tagcloud = tagclouds[i];

                const tags = tagcloud.querySelectorAll("a");
                if (tags.length > 10) {
                    let li = document.createElement("a");
                    li.textContent = "+";
                    li.classList.add("_all");
                    tagcloud.appendChild(li);

                    li.addEventListener("click", click);
                }
            }
        }

    }


    estt_global_tweek();
    esttDeviceAndInputType();
    estt_page_title_tweek();
    estt_marquee_text();
    estt_navigation();
    off_canvas_submenu();
    estt_poriject_wall();
    estt_author_wall();
    estt_collection_wall();
    estt_toogle_off_canvas_contact();
    estt_post_nav_btn();
    buttonsEventsBinder();
    estt_comments();
    estt_widget_tweek();
    estt_mouse_z_control();
    showOnScroll();
    bCrumbUpdate();
    estt_spinGlobe();
    tabs_maker();

    window.estt_m = () => {
        estt_marquee_text();
    };

    window.estt_render_triger = {};

    estt_render_triger.marquee = function () {
        estt_marquee_text();
    };

    window.addEventListener(
        "resize",
        () => {
            estt_global_tweek();
            estt_marquee_text(true);
        },
        false
    );
    /*
     * Barba
     */
    barba.init({
        timeout: 5000,
        prefetchIgnore: true,
        prevent: function ({el}) {
            var prevents = estt_stat.prevent_ajax;

            if (prevents) {
                prevents = prevents.split(",");
            } else {
                prevents = [];
            }

            prevents.push("wp-admin");

            prevents = prevents.join("|");

            var regEx = new RegExp(prevents, "gi");

            return el.href.match(regEx);
        },
        transitions: [
            {
                name: "default-transition",
                once(data) {
                    const done = this.async();
                    anime({
                        targets: "body",
                        duration: 1000,
                        opacity: [0, 1],
                        delay: 100,
                        easing: "easeInOutSine",
                        complete: function () {
                            done();
                        },
                    });
                },
                leave(data) {
                    // create your stunning leave animation here
                    const done = this.async();

                    anime({
                        targets: [
                            data.current.container,
                            "#colophon",
                            "[data-is-mobile] [data-il-render]",
                            "[data-is-tablet] [data-il-render]",
                        ],
                        duration: 1000,
                        opacity: 0,
                        easing: "easeInOutSine",
                        complete: function () {
                            done();
                            if (estt_webgl.groupData.current) {
                                estt_webgl.groupData.current.visible = false;
                            }
                        },
                        update: function () {
                            if (estt_webgl) {
                                estt_webgl.flowAnimation();
                            }
                        },
                    });

                    if (estt_pp) {
                        anime({
                            targets: estt_pp.noiseUniforms.transt,
                            value: 1,
                            easing: "linear",
                            duration: 1000,
                        });
                    }
                },
                enter(data) {
                    // create your amazing enter animation here
                    document.body.classList = data.next.container.getAttribute(
                        "data-ajax-body-class"
                    );

                    document.body.removeAttribute("data-caseopen");
                },
                after(data) {
                    const done = this.async();

                    document.body.setAttribute("data-barba-enter", "");

                    window.scrollTo(0, 0);

                    callback();

                    function callback() {
                        anime({
                            targets: [
                                data.next.container,
                                "#colophon",
                                "[data-is-mobile] [data-il-render]",
                                "[data-is-tablet] [data-il-render]",
                            ],
                            duration: 1000,
                            delay: 200,
                            easing: "easeInOutSine",
                            opacity: 1,
                            before: () => {
                                document.body.removeAttribute("data-barba-enter");
                            },
                            update: function () {
                                if (window.estt_webgl) {
                                    estt_webgl.flowAnimation();
                                }
                            },
                            complete: function () {
                                done();
                            },
                        });

                        anime({
                            targets: estt_pp.noiseUniforms.transt,
                            value: 0,
                            easing: "linear",
                            duration: 1000,
                            complete: function () {
                            },
                        });
                    }

                    if (document.body.classList.contains("page-template-no-bg-page") || document.body.classList.contains("page-template-indoctrination") || document.body.classList.contains("single")) {
                        mouseOverData.contentOver(true);
                    } else {
                        mouseOverData.contentOver(false);
                    }
                },
            },
        ],
    });
    var isLoggedIn = false;
    var isMobile = false;
    barba.hooks.afterOnce(function (data) {
        window.barbaAfterOnce = true;
        isLoggedIn = document.body.classList.contains("logged-in");
        isMobile = document.documentElement.classList.contains("ps-mobile");
        if (window.estt_webgl && window.estt_webgl.revel) {
            for (let i = 0; i < estt_webgl.revel.length; i++) {
                const func = estt_webgl.revel[i];
                func();
            }

            if (document.body.classList.contains("single-post")) {
                mouseOverData.contentOver(true);
            } else {
                mouseOverData.contentOver(false);
            }
        }

        estt_parallax_scroll({
            selector: "[data-y-scroll]",
            debug: false,
        });

        // custom body classes
        if (window.innerHeight < document.body.offsetHeight) {
            document.body.classList.add("estt-scrollable");
        }

        if (document.body.classList.contains("page-template-no-bg-page") || document.body.classList.contains("page-template-indoctrination")) {
            mouseOverData.contentOver(true);
        } else {
            mouseOverData.contentOver(false);
        }

    });

    barba.hooks.before(function (data) {
        var inView = document.body.getAttribute("data-view");

        if (inView == "off-canvas-menu") {
            const done = this.async();

            anime({
                targets: "#page > *:not(.site-header):not(#sidebar)",
                opacity: 0,
                easing: "linear",
                duration: 600,
            });

            anime({
                targets: "#off-menu > li > a",
                translateY: [0, "100%"],
                easing: "easeInSine",
                duration: 600,
            });

            anime({
                targets: estt_pp.noiseUniforms.transt,
                value: [0, 1],
                easing: "linear",
                duration: 600,
                complete: function () {
                    done();
                    estt_webgl.cleanCanvas(0);
                    document.body.removeAttribute("data-view", "off-canvas-menu");
                    anime({
                        targets: estt_pp.noiseUniforms.transt,
                        value: 0,
                        easing: "linear",
                        duration: 600,
                    });
                },
            });

            anime({
                targets: estt_pp.noiseUniforms.u_state,
                value: 0,
                easing: "linear",
                duration: 600,
            });

            anime({
                targets: "#primary-menu > li",
                translateY: "0",
                easing: "linear",
                duration: 300,
                delay: 600,
                complete: function () {
                    anime.set("#primary-menu", {
                        overflow: "",
                    });
                },
            });
        }
    });

    barba.hooks.after(function (data) {
        estt_page_title_tweek();
        estt_marquee_text();
        estt_poriject_wall();
        estt_author_wall();
        estt_collection_wall();
        estt_post_nav_btn();
        estt_webgl.draw();
        esttParalax.update();
        bCrumbUpdate();
        estt_ajax_search();
        estt_comments();
        off_canvas_menu_reset();
        sliderTouchSwap();
        showOnScroll();
        tabs_maker();
        estt_spinGlobe();
        WPInfiniteScroll.init();

        if (estt_webgl.groupData.current) {
            estt_webgl.groupData.current.visible = true;
        }

        // custom body classes
        if (window.innerHeight < document.body.offsetHeight) {
            document.body.classList.add("estt-scrollable");
        }
        //custom code


        // update twitter widgets
        var loadTwitterJS = function (url, implementationCode, location) {
            var scriptTag = document.createElement("script");
            scriptTag.src = url;

            scriptTag.onload = implementationCode;
            scriptTag.onreadystatechange = implementationCode;

            location.appendChild(scriptTag);
        };
        var codeToBeCalled = function () {
        };

        if (document.querySelectorAll(".wp-block-embed-twitter").length) {
            loadTwitterJS(
                "https://platform.twitter.com/widgets.js",
                codeToBeCalled,
                document.body
            );
        }
        if (barba.url.getHref().includes("/levels/")) {
            estt_level_block();
        }
        // update nav
        const url = barba.url.getHref().split("#")[0];
        const cmi = document.querySelectorAll(
            ".current-menu-item, .current_page_item"
        );
        const nmi = document.querySelectorAll('[href="' + url + '"]');

        for (let i = 0; i < cmi.length; i++) {
            const el = cmi[i];
            el.classList.remove("current-menu-item");
            el.classList.remove("current_page_item");
        }

        for (let i = 0; i < nmi.length; i++) {
            const el = nmi[i].parentElement;
            if (el.classList.contains("menu-item")) {
                el.classList.add("current-menu-item");
            }
        }

        const offItems = document.querySelectorAll(".blog-list .post h2 a");
        for (let i = 0; i < offItems.length; i++) {
            offItems[i].setAttribute("data-js", "off-menu");
        }

    }); // end barba.hooks.after

    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        if (window.estt_webgl) {
            estt_webgl.flowAnimation();
        }

        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            document.body.setAttribute("data-scroll-direction", "down");
        } else {
            document.body.setAttribute("data-scroll-direction", "up");
        }

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

        if (window.scrollY > 100) {
            document.body.setAttribute("data-scroll-in", "");
        } else {
            document.body.removeAttribute("data-scroll-in");
        }
    });

    /**
     *
     *  Show on Scroll
     *
     * */
    function showOnScroll() {
        let sWsT = document.querySelectorAll(".sWsT");
        if ("IntersectionObserver" in window) {
            let intObserver = new IntersectionObserver(function (e, o) {
                e.forEach(e => {
                    e.intersectionRatio > 0.1 && (addIsShow(e.target), o.unobserve(e.target));
                });
            }, {root: null, rootMargin: "0px", threshold: 1, delay: 100});
            sWsT.forEach(o => intObserver.observe(o));
        } else sWsT.forEach(e => addIsShow(e));

        function addIsShow(e) {
            e.classList.add("is-show");
        }
    }

    /**
     * Paralax Scroll
     * @param {*} data Options
     * @returns
     */
    function estt_parallax_scroll(data) {
        window.esttParalax = window.esttParalax || [];

        if (esttParalax.init) {
            return;
        }

        let elements = document.querySelectorAll(data.selector);
        let itemData = [];

        if (!elements) {
            return;
        }

        if (data.debug) {
            // debuging
            var centerDiv = document.createElement("div");
            centerDiv.classList.add("screen_c");
            document.body.appendChild(centerDiv);
        }

        function getReady() {
            for (let index = 0; index < elements.length; index++) {
                const element = elements[index];

                element.style.transform = "none";

                var vh =
                    element.offsetHeight > window.innerHeight
                        ? element.offsetHeight
                        : window.innerHeight;
                var range = window.innerHeight / 2;
                var oc = element.offsetTop + element.offsetHeight / 2; // element original center point
                var top_margin = oc - range;
                var bottom_margin = oc + range;
                var Y = 100;

                itemData.push({
                    vh,
                    range,
                    oc,
                    top_margin,
                    bottom_margin,
                    stick: element.hasAttribute("data-y-scroll-stick") || false,
                    speed: element.hasAttribute("data-y-scroll-speed")
                        ? element.getAttribute("data-y-scroll-speed")
                        : "1",
                    Y,
                });

                if (data.debug) {
                    // debuging
                    var box = document.createElement("div");
                    box.classList.add("box-wrap");
                    document.body.appendChild(box);

                    itemData[index].debug = box;
                }
            }
        }

        function update() {
            elements = document.querySelectorAll(data.selector);
            itemData = [];
            getReady();
            scrollit();
        }

        window.addEventListener("scroll", scrollit, false);

        function scrollit() {
            for (let index = 0; index < elements.length; index++) {
                const element = elements[index];

                const ced = itemData[index]; // Current Element Data
                const {range, oc, top_margin, bottom_margin, vh, stick, Y, speed} =
                    itemData[index];

                let distance;

                if (data.debug) {
                    ced.debug.style.height = range * 2 + "px";
                    ced.debug.style.top = oc - window.scrollY - range + "px";
                }

                // bottom animation zoon
                if (window.scrollY + vh > top_margin && window.scrollY < top_margin) {
                    const currentPos = top_margin - window.scrollY;
                    distance = (currentPos / vh) * 1;
                }

                // top animation zoon
                if (
                    !stick &&
                    window.scrollY > top_margin &&
                    window.scrollY < bottom_margin
                ) {
                    const currentPos = top_margin - window.scrollY;
                    distance = (currentPos / vh) * 1;
                }

                anime.set(element, {
                    translateY: Y * distance * speed,
                });
            }
        }

        getReady();
        scrollit();
        window.scrollTo(0, window.scrollY + 1); // to place webgl planes

        esttParalax.init = true;
        esttParalax.update = update;
    }

    /**
     * Smooth Scrolbar
     */
    function SmoothScroll(target, speed, smooth) {
        if (target === document) {
            target =
                document.scrollingElement ||
                document.documentElement ||
                document.body.parentNode ||
                document.body; // cross browser support for document scrolling
        }

        var doc = target;
        var moving = false;
        var lastPos = target.scrollTop;
        var pos = target.scrollTop;
        var frame =
            target === document.body && document.documentElement
                ? document.documentElement
                : target; // safari is the new IE

        if (
            document.querySelector("html").hasAttribute("data-estt-smooth-scroll")
        ) {
            target.addEventListener("mousewheel", scrolled, {passive: false});
            target.addEventListener("DOMMouseScroll", scrolled, {passive: false});
        }

        function scrolled(e) {
            e.preventDefault(); // disable default scrolling

            if (e.target.closest(".estt-scroll")) {
                target = e.target.closest(".estt-scroll");
            } else {
                target = doc;
            }

            var delta = normalizeWheelDelta(e);

            if (lastPos == 0) {
                lastPos = target.scrollTop;
            }

            if (pos == 0) {
                pos = target.scrollTop;
            }

            if (!moving && lastPos != pos) {
                pos = target.scrollTop;
            }

            pos += -delta * speed;
            pos = Math.max(
                0,
                Math.min(pos, target.scrollHeight - frame.clientHeight + 10)
            ); // limit scrolling

            if (!moving) update();
        }

        function normalizeWheelDelta(e) {
            if (e.detail) {
                if (e.wheelDelta) {
                    return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1); // Opera
                } else {
                    return -e.detail / 3; // Firefox
                }
            } else {
                return e.wheelDelta / 120; // IE,Safari,Chrome
            }
        }

        function update() {
            moving = true;

            var delta = (pos - target.scrollTop) / smooth;

            target.scrollTop += delta;

            if (target.scrollTop != lastPos) {
                requestAnimationFrame(update);
            } else {
                moving = false;
            }
            lastPos = target.scrollTop;
        }
    }

    if (window._media.hover) {
        // Running when the mouse is present
        new SmoothScroll(document, 120, 16);
    }

    var mouse = {x: -100, y: -100};
    var pos = {x: 0, y: 0};
    var ratio = 0.15;

    /*
     * Mouse position tracking loop
     */
    function loop(t) {
        const mouseEl = document.querySelector(".estt-mouse");

        let mx = mouse.x;
        let my = mouse.y;

        if (mouseEl.hasAttribute("data-lock")) {
            mx = mouseEl.getAttribute("data-lock-x");
            my = mouseEl.getAttribute("data-lock-y");
        }

        pos.x += (mx - pos.x) * ratio;
        pos.y += (my - pos.y) * ratio;

        mouseEl.style.top = pos.y + "px";
        mouseEl.style.left = pos.x + "px";

        // follow mouse
        const followEl = document.querySelectorAll(".follow-mouse");
        if (followEl.length) {
            for (let i = 0; i < followEl.length; i++) {
                const element = followEl[i];

                element.style.left = mouse.x + "px";
                element.style.top = mouse.y + "px";
            }

            if (window.estt_webgl) {
                estt_webgl.manualAnimation(1);
            }
        }

        var customRAF = requestAnimationFrame(loop);
    }

    if (window._media.hover) {
        // Running when the mouse is present
        requestAnimationFrame(loop);
    }

    const mouseOverData = {
        contentOver: function (s) {
            if (window.estt_pp) {
                if (s) {
                    anime({
                        targets: window.estt_pp.noiseUniforms.u_clear,
                        value: 1,
                        duration: 5000,
                    });
                } else {
                    anime({
                        targets: window.estt_pp.noiseUniforms.u_clear,
                        value: 0,
                        duration: 5000,
                    });
                }
            }
        },
        contentOverPast: false,
    };

    // noinspection ES6ConvertVarToLetConst
    /**
     * JS Mouse
     */
    document.addEventListener("mousemove", function (e) {
        var inputType = document.body.getAttribute("data-input");
        if (inputType === "touch") {
            return;
        }

        if (!document.body.classList.contains("page-template-no-bg-page")) {
            /* .entry-content in/out */
            if (
                e.target.closest(".post") ||
                e.target.classList.contains("post") ||
                e.target.closest(".entry-content")
            ) {
                if (!mouseOverData.contentOverPast) {
                    mouseOverData.contentOver(true);
                }
                mouseOverData.contentOverPast = true;
            } else {
                if (mouseOverData.contentOverPast) {
                    mouseOverData.contentOver(false);
                }
                mouseOverData.contentOverPast = false;
            }
        }

        var m = document.querySelector(".estt-mouse ");
        var el = e.target;
        var x = e.clientX;
        var y = e.clientY;

        var currentMode = m.getAttribute("data-mode");
        var nextMode;
        var lock = false;

        mouse.x = x;
        mouse.y = y;

        if (el.hasAttribute("data-mouse")) {
            lock = el.hasAttribute("data-mouse-lock");
            nextMode = el.getAttribute("data-mouse");
        }

        m.setAttribute("data-mode", nextMode);

        if (lock) {
            lock = el.getAttribute("data-mouse-lock");

            m.setAttribute("data-lock", "");

            const rect = el.getBoundingClientRect();

            var t;
            var l;

            if (lock == "tl") {
                t = rect.top;
                l = rect.left;
            } else if (lock == "lc") {
                t = rect.top + rect.height / 2;
                l = rect.left;
            } else if (lock == "rc") {
                t = rect.top + rect.height / 2;
                l = rect.left + rect.width;
            } else if (lock == "c-in") {
                t = rect.top + rect.height / 2;
                l = rect.left + rect.width / 2;
                m.style.width = rect.width + "px";
                m.style.height = rect.height + "px";
            } else {
                t = rect.top + rect.height / 2;
                l = rect.left + rect.width / 2;
            }

            m.setAttribute("data-lock-x", l);
            m.setAttribute("data-lock-y", t);
        } else {
            m.removeAttribute("data-lock");
        }
    });

    /**
     * JS mouse - z-control
     */
    function estt_mouse_z_control() {
        const header = document.querySelector(".site-header");
        const mouse = document.querySelector(".estt-mouse");

        function _enter() {
            var inputType = document.body.getAttribute("data-input");
            if (inputType === "touch") {
                return;
            }
            header.prepend(mouse);
        }

        function _leave() {
            var inputType = document.body.getAttribute("data-input");
            if (inputType === "touch") {
                return;
            }
            insertAfter(mouse, header);
        }

        header.addEventListener("mouseenter", _enter, false);
        header.addEventListener("mouseleave", _leave, false);
    }

    // Set data-mouse to primary nav items manually
    var elements = document.querySelectorAll(
        "#primary-menu > li > a, #footer-menu a "
    );

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.setAttribute("data-mouse", "nav-dot");
        element.setAttribute("data-mouse-lock", "tl");
    }

    // Set data-mouse to off nav items manually
    var off_elements = document.querySelectorAll(".off-navigation a");

    for (let i = 0; i < off_elements.length; i++) {
        const off_element = off_elements[i];

        if (
            off_element.parentElement.classList.contains("menu-item-has-children")
        ) {
            off_element.setAttribute("data-mouse", "nav-invert+");
        } else {
            off_element.setAttribute("data-mouse", "nav-invert");
        }
    }

    // Set data-mouse to primary sub nav items manually
    var sub_elements = document.querySelectorAll("#primary-menu .sub-menu a");

    for (let i = 0; i < sub_elements.length; i++) {
        const sub_element = sub_elements[i];
        sub_element.setAttribute("data-mouse", "nav-dot");
        sub_element.setAttribute("data-mouse-lock", "lc");
    }

    // reset margin on wp-admin bar
    if (document.body.classList.contains("admin-bar")) {
        document.querySelector("html").classList.add("is-admin-bar");
    }

    /**
     * Keybord Navigation
     */
    function keybord_nav() {
        /* main navigation */
        const links = document.querySelectorAll("#primary-menu .sub-menu a");

        for (let i = 0; i < links.length; i++) {
            const el = links[i];

            el.addEventListener("focus", focus);

            el.addEventListener("blur", (e) => {
                e.target.closest("ul").classList.remove("_focus");
            });
        }

        function focus(e) {
            if (window._pointerType == "key") {
                _loop(e.target);
            }
        }

        function _loop(l) {
            const c = l.closest(".sub-menu:not(._focus)");

            if (c) {
                c.classList.add("_focus");
                _loop(c);
            }
        }
    }

    keybord_nav();

    /**
     * Ajax Search
     */
    function estt_ajax_search() {
        const search = document.querySelector(".estt-ajax-search-input");
        const container = document.querySelector(".estt-ajax-search-result");
        const currentUrl = window.location.href;

        function gen(data) {
            const posts = JSON.parse(data);

            let list = "<span class=estt-ajax-search-numb>0 results </span>";

            if (posts.length) {
                list =
                    "<span class=estt-ajax-search-numb>" +
                    posts.length +
                    " results </span>";

                for (let i = 0; i < posts.length; i++) {
                    const el = posts[i];
                    const {title, url, subtype} = el;
                    const type = subtype == "estt-project" ? "project" : subtype;

                    if (url != currentUrl) {
                        // exclude current page from search result
                        list += ` <li class="search-post">
                <div class="search-post-type">
                  <span>${type}</span>
                </div>
                <div class="search-post-title">${title}</div>
                <a href="${url}"></a></li>`;
                    }
                }
            }

            container.innerHTML = list;
        }

        if (search) {
            search.addEventListener("keyup", (e) => {
                if (e.target.value == "") {
                    container.innerHTML = "";
                    return;
                }

                var endpoint = document.querySelector(
                    'link[rel="https://api.w.org/"]'
                ).href;
                const url =
                    endpoint + "wp/v2/search/?search=" + e.target.value + "&per_page=20";

                const xmlhttp = new XMLHttpRequest();

                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4) {
                        gen(xmlhttp.responseText);
                    }
                };

                xmlhttp.open("GET", url, true);
                xmlhttp.send();
            });
        }
    }

    estt_ajax_search();

    /**
     * REST API LOAD MORE
     */
    const WPInfiniteScroll = (() => {

        // Basic Configuration
        const config = {
            api: 'http://devmodtheaquila.local/wp-json/wp/v2/posts',
            startPage: 0, // 0 for the first page, 1 for the second and so on...
            postsPerPage: 2 // Number of posts to load per page
        };

        // Private Properties
        let postsLoaded = false;
        let postsContent = document.querySelector('.posts');
        let btnLoadMore = document.querySelector('.btn-load-more');

        // Private Methods
        const loadContent = function () {

            // Starts with page = 1
            // Increase every time content is loaded
            ++config.startPage;

            // Basic query parameters to filter the API
            // Visit https://developer.wordpress.org/rest-api/reference/posts/#arguments
            // For information about other parameters
            const params = {
                _embed: true, // Required to fetch images, author, etc
                page: config.startPage, // Current page of the collection
                per_page: config.postsPerPage, // Maximum number of posts to be returned by the API
            }

            // console.log('_embed', params._embed);
            // console.log('per_page', params.per_page);
            // console.log('page', params.page);

            // Builds the API URL with params _embed, per_page, and page
            const getApiUrl = (url) => {
                let apiUrl = new URL(url);
                apiUrl.search = new URLSearchParams(params).toString();
                return apiUrl;
            };

            // Make a request to the REST API
            const loadPosts = async () => {
                const url = getApiUrl(config.api);
                const request = await fetch(url);
                const posts = await request.json();

                // Builds the HTML to show the posts
                const postsHtml = renderPostHtml(posts);

                // Adds the HTML into the posts div
                postsContent.innerHTML += postsHtml;

                // Required for the infinite scroll
                postsLoaded = true;
            };

            // Builds the HTML to show all posts
            const renderPostHtml = (posts) => {
                let postHtml = '';
                for (let post of posts) {
                    postHtml += postTemplate(post);
                }
                ;
                return postHtml;
            };

            // HTML template for a post
            const postTemplate = (post) => {
                return `
<a href="${post.link}" class="iH0">
                                            <div class="fm5 gGe">
                                                <div class="pxF oIZ">
                                                    <picture><img src="${post._embedded['wp:featuredmedia'][0].source_url}"></picture>
                                                </div>
                                            </div>
                                            <div class="O4u wPh"><span class="Gyx">Found in Translation</span></div>
                                            <time datetime="2023-10-14T09:30:24.978Z"
                                                  class="O4u sYQ"><?php echo get_the_date(); ?></time>
                                            <p class="hvk XOF">${post.title.rendered}</p>
                                            <div class="fAuthor Rd6 atc"><span class="fBy">By</span><span
                                                        class="fAuthorName">${post.author.rendered}</span>
                                            </div>
                                            <p class="EJZ bGk">${post.excerpt.rendered}</p></a>`;
            };
            loadPosts();
        };

        // Where the magic happens
        // Checks if IntersectionObserver is supported
        if ('IntersectionObserver' in window) {

            const loadMoreCallback = (entries, observer) => {
                entries.forEach((btn) => {
                    if (btn.isIntersecting && postsLoaded === true) {
                        postsLoaded = false;
                        loadContent();
                    }
                });
            };

            // Intersection Observer options
            const options = {
                threshold: 1.0 // Execute when button is 100% visible
            };

            let loadMoreObserver = new IntersectionObserver(loadMoreCallback, options);
            loadMoreObserver.observe(btnLoadMore);
        }

        // Public Properties and Methods
        return {
            init: loadContent
        };

    })();

// Initialize Infinite Scroll


    /**
     * Insert After
     * @param {*} newNode element
     * @param {*} existingNode  target element
     */
    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    /**
     * Slider Touch Swap
     */
    function sliderTouchSwap() {
        var container = document.querySelector(".slider-fly");

        if (!container) {
            return;
        }

        container.addEventListener("touchstart", startTouch, false);
        container.addEventListener("touchmove", moveTouch, false);

        var next = document.querySelector(".slider-nav-title_next");
        var prev = document.querySelector(".slider-nav-title_prev");

        // Swipe Up / Down / Left / Right
        var initialX = null;
        var initialY = null;

        function startTouch(e) {
            initialX = e.touches[0].clientX;
            initialY = e.touches[0].clientY;
        }

        function moveTouch(e) {
            if (initialX === null) {
                return;
            }

            if (initialY === null) {
                return;
            }

            var currentX = e.touches[0].clientX;
            var currentY = e.touches[0].clientY;

            var diffX = initialX - currentX;
            var diffY = initialY - currentY;

            if (Math.abs(diffX) > Math.abs(diffY)) {
                // sliding horizontally
                if (diffX > 0) {
                    // swiped left
                    prev.click();
                } else {
                    // swiped right
                    next.click();
                }
            } else {
                // sliding vertically
                if (diffY > 0) {
                    // swiped up
                    prev.click();
                } else {
                    // swiped down
                    next.click();
                }
            }

            initialX = null;
            initialY = null;

            e.preventDefault();
        }
    }

    sliderTouchSwap();

    /**
     * next project link clickable
     */
    function nplc() {
        var img = document.querySelector(".next-case:not(.the-cover) img");
        var a = document.querySelector(".next-case:not(.the-cover) a");

        if (!img || !a) {
            return;
        }

        img.onclick = function () {
            a.click();
            img.onclick = "";
            img.removeAttribute("data-mouse");
        };
    }

    nplc();

    window._hideaway_nplc = nplc;
})();