!function () {
    "use strict";

    function e() {
        var e = document.body.offsetWidth;
        document.documentElement.style.setProperty("--vw100", e + "px")
    }

    function t() {
        var e = document.getElementsByClassName("page-title")[0];
        if (e) {
            var t = "", n = "", o = document.body.classList.contains("blog"), i = estt_stat.display_nop_news || "true";
            o && "true" == i && (t = estt_stat.nop, n = estt_stat.prefix_nop_news || " - P.00"), e.innerHTML = e.innerText + n + t
        }
    }

    function n(e = !1) {
        var t = document.getElementsByClassName("marquee-text");
        if (t) for (let r = 0; r < t.length; r++) {
            const s = t[r], l = s.offsetWidth;
            if (s.offsetWidth && !s.hasAttribute("data-init") || e) {
                s.hasAttribute("data-init") || s.setAttribute("data-init", s.innerHTML);
                const e = s.getAttribute("data-init");
                e && (s.innerHTML = e);
                var n = s.innerText + '<span class="_sep">✺</span>';
                s.firstElementChild || (s.innerHTML = "<span>" + n + "</span>");
                var o = s.firstElementChild.offsetWidth;
                if (o > 10) {
                    var i = s.offsetWidth / o;
                    i = i < 4 ? 4 : i, i = 4 * Math.ceil(i / 4);
                    var a = "";
                    for (let e = 0; e < i; e++) a += "<span>" + n + "</span>";
                    s.innerHTML = '<div class="marquee"><div class="marquee__inner" aria-hidden="true">' + a + "</div></div>";
                    const e = s.querySelector(".marquee__inner");
                    e.setAttribute("style", "--width:" + e.offsetWidth + "; --c-width:" + l)
                }
            }
        }
    }

    function o() {
        var e = document.body.getAttribute("data-view"), t = document.getElementById("primary-menu"),
            o = "#off-menu > li > a:not(.hide-min-1024 > a), [data-scroll-y-was-in] #off-menu > li > a";
        t && ("none" == window.getComputedStyle(t).display && (o = "#off-menu > li > a"));
        "off-canvas-menu" == e ? (anime({
            targets: "#page > *:not(.site-header):not(#sidebar)",
            opacity: 0,
            easing: "linear",
            duration: 600
        }), anime({
            targets: o,
            translateY: [0, 0],
            opacity: 0,
            easing: "linear",
            duration: 500
        }), anime({
            targets: estt_pp.noiseUniforms.transt,
            value: [0, 1],
            easing: "linear",
            duration: 600,
            complete: function () {
                i(), estt_webgl.cleanCanvas(0), document.body.removeAttribute("data-view", "off-canvas-menu"), document.body.hasAttribute("data-scroll-y") && (window.scrollTo(0, document.body.getAttribute("data-scroll-y")), document.body.removeAttribute("data-scroll-y-was-in")), n(!0), anime({
                    targets: estt_pp.noiseUniforms.transt,
                    value: 0,
                    easing: "linear",
                    duration: 600
                }), anime({
                    targets: ["#page > *:not(.site-header):not(#sidebar)", "[data-is-mobile] [data-il-render]", "[data-is-tablet] [data-il-render]"],
                    opacity: 1,
                    easing: "linear",
                    duration: 600
                }), anime({
                    targets: "#primary-menu > li",
                    translateY: "0",
                    easing: "linear",
                    duration: 300,
                    delay: 600,
                    complete: function () {
                        anime.set("#primary-menu", {overflow: ""})
                    }
                })
            }
        }), anime({
            targets: estt_pp.noiseUniforms.u_state,
            value: 0,
            easing: "linear",
            duration: 600
        })) : (document.body.setAttribute("data-scroll-y", window.scrollY), window.scrollY > 100 ? document.body.setAttribute("data-scroll-y-was-in", "") : document.body.removeAttribute("data-scroll-y-was-in"), anime({
            targets: ["#page > *:not(.site-header):not(#sidebar)", "[data-is-mobile] [data-il-render]", "[data-is-tablet] [data-il-render]"],
            opacity: 0,
            easing: "linear",
            duration: 600
        }), document.body.hasAttribute("data-scroll-y-was-in") || anime({
            targets: "#primary-menu > li",
            translateY: "100%",
            easing: "linear",
            duration: 300,
            begin: function () {
                anime.set("#primary-menu", {overflow: "hidden"})
            }
        }), anime({
            targets: estt_pp.noiseUniforms.transt,
            value: [0, 1],
            easing: "linear",
            duration: 600,
            complete: function () {
                estt_webgl.cleanCanvas(1), document.body.setAttribute("data-view", "off-canvas-menu"), anime({
                    targets: estt_pp.noiseUniforms.transt,
                    value: 0,
                    easing: "linear",
                    duration: 600
                }), anime({
                    targets: "#page > *:not(.site-header):not(#sidebar)",
                    opacity: 1,
                    easing: "linear",
                    duration: 600
                })
            }
        }), anime({
            targets: estt_pp.noiseUniforms.u_state,
            value: 1,
            easing: "linear",
            duration: 1e3
        }), anime({
            targets: o,
            translateY: [0, 0],
            opacity: [0, 1],
            easing: "linear",
            duration: 600,
            delay: 800,
            changeBegin: function () {
                window.scrollTo(0, 0)
            }
        }))
    }

    function i() {
        var e = document.querySelector(".off-navigation");
        if (e) {
            var t = e.querySelectorAll(".menu-item-hidden"), n = e.querySelectorAll(".menu-item-expand"),
                o = e.querySelectorAll("._expand");
            for (let e = 0; e < t.length; e++) t[e].classList.remove("menu-item-hidden");
            for (let e = 0; e < n.length; e++) n[e].classList.remove("menu-item-expand");
            for (let e = 0; e < n.length; e++) o[e].classList.remove("_expand")
        }
    }

    function a() {
        document.getElementById("sidebar") && document.body.classList.toggle("sidebar-on")
    }

    function r() {
        if (null == document.querySelector(".project-wall-items")) return;
        if (!(window.innerWidth < 768)) {
            var e = document.querySelector(".project-wall-items"), t = document.querySelectorAll(".project-wall-item");
            if (t.length) {
                var n = [], o = [];
                for (let t = 0; t < 2; t++) {
                    var i = document.createElement("div"), a = t + 1;
                    i.setAttribute("data-i", a), i.classList.add("project-wall-col"), e.appendChild(i), n[t] = i, o[t] = []
                }
                var r = 0;
                for (let e = 0; e < t.length; e++) {
                    r >= 2 ? r = 1 : r++;
                    var s = r;
                    n[s - 1].appendChild(t[e]), o[s - 1].push(t[e])
                }
                for (let e = 0; e < o.length; e++) {
                    var l = 2;
                    e % 2 == 0 && (l = 1);
                    var c = o[e];
                    for (let e = 0; e < c.length; e++) c[e].setAttribute("data-y-scroll", ""), c[e].setAttribute("data-y-scroll-speed", l)
                }
                window.scrollTo(window.scrollX, window.scrollY + 1)
            }
        }
    }

    function s() {
        if (!barba.url.getHref().includes("author") && !window.location.href.includes("author")) return;
        const e = window.innerWidth;
        var t = 3;
        e < 400 ? t = 1 : e < 768 && (t = 2);
        var n = document.querySelector(".js-masonry.light-masonry-wrapper"),
            o = document.querySelectorAll(".js-item.light-masonry-item");
        if (o.length) {
            var i = [], a = [];
            for (let e = 0; e < t; e++) {
                var r = document.createElement("div"), s = e + 1;
                r.setAttribute("data-i", s), r.classList.add("light-masonry-column"), n.appendChild(r), i[e] = r, a[e] = []
            }
            var l = 0;
            for (let e = 0; e < o.length; e++) {
                l >= t ? (l %= t, l++) : l++;
                var c = l;
                i[c - 1].appendChild(o[e]), a[c - 1].push(o[e])
            }
            for (let e = 0; e < a.length; e++) {
                e % t + 1;
                a[e]
            }
            window.scrollTo(window.scrollX, window.scrollY + 1)
        }
    }

    function l() {
        if (!barba.url.getHref().includes("author") && !window.location.href.includes("author") || !barba.url.getHref().includes("profile") && !window.location.href.includes("profile")) return;
        const e = document.querySelector(".tabs-container"), t = e.querySelector("ul"), n = t.querySelectorAll("a"),
            o = e.querySelectorAll(".tabs__panels > div");

        function i(t) {
            const i = t.getAttribute("href"), a = e.querySelector(i);
            n.forEach((e => {
                e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), e.classList.remove("active")
            })), o.forEach((e => {
                e.setAttribute("hidden", !0)
            })), a.removeAttribute("hidden", !1), t.setAttribute("aria-selected", !0), t.setAttribute("tabindex", "0"), t.classList.add("active"), t.focus()
        }

        t.setAttribute("role", "tablist"), t.querySelectorAll("li").forEach((e => {
            e.setAttribute("role", "presentation")
        })), n.forEach(((e, t) => {
            e.setAttribute("role", "tab"), 0 === t ? (e.setAttribute("aria-selected", "true"), e.classList.add("active")) : (e.setAttribute("tabindex", "-1"), e.classList.remove("active"), o[t].setAttribute("hidden", ""))
        })), o.forEach((e => {
            e.setAttribute("role", "tabpanel"), e.setAttribute("tabindex", "0")
        })), e.addEventListener("click", (e => {
            const t = e.target.closest("a");
            t && (e.preventDefault(), i(t))
        }))
    }

    function c() {
        if (null == document.querySelector(".menu-float__title-section .inner-cont")) return;
        document.querySelector(".float-section");
        const e = document.querySelector("#c-btn-1"), t = document.querySelector(".menu-float__title-section"),
            n = document.querySelector(".menu-float__title-section .inner-cont"),
            o = document.querySelector(".breadcrumb.menu-float__title"),
            i = document.querySelector(".menu-float__subtitle"),
            a = document.querySelector(".menu-float__layout--radio");

        function r(e) {
            t.classList.add("isHidden"), n.innerHTML = e, t.classList.remove("isHidden")
        }

        if (h) {
            e.innerHTML = '<svg width="20" height="20" viewBox="0 0 0.72 0.72" fill="currentColor" stroke-width=".5" xmlns="http://www.w3.org/2000/svg"><path d="M.165.6A.045.045 0 0 0 .21.555V.51H.165A.045.045 0 0 0 .12.555V.6h.045ZM.189.48.155.446A.015.015 0 0 1 .176.425l.12.12a.015.015 0 0 1-.021.021L.24.531v.024A.075.075 0 0 1 .165.63h-.06A.015.015 0 0 1 .09.615v-.06A.075.075 0 0 1 .165.48h.024ZM.116.626A.015.015 0 0 1 .095.605l.06-.06a.015.015 0 0 1 .021.021l-.06.06ZM.208.473A.015.015 0 0 1 .183.457L.269.32A.496.496 0 0 1 .443.152L.522.107A.128.128 0 0 1 .585.09.045.045 0 0 1 .63.135a.127.127 0 0 1-.017.063L.568.277A.496.496 0 0 1 .4.451L.263.537A.015.015 0 0 1 .247.512L.384.426A.466.466 0 0 0 .541.262L.587.184A.105.105 0 0 0 .6.135.015.015 0 0 0 .585.12a.095.095 0 0 0-.049.013L.457.178a.466.466 0 0 0-.164.158L.207.473Z"/></svg>', e.ariaLabel = "새로운 기록.";
            const t = document.querySelector("#c-btn-2"), n = document.querySelector("#c-btn-3");
            t.innerHTML = '<svg width="22" height="22" viewBox="-0.013 0 0.625 0.625" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.3.327a.113.113 0 1 0 0-.226.113.113 0 0 0 0 .226ZM.225.298H.224" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width=".025"/><path d="M.424.321a.237.237 0 0 1 .113.19.013.013 0 0 1-.013.013H.075A.013.013 0 0 1 .062.511.238.238 0 0 1 .174.322" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width=".025"/></svg>', t.href = document.querySelector("#ha-user-link").href, t.ariaLabel = "쇼케이스.", n.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.125" d="M15.75 7.031a4.781 4.781 0 0 1-4.781 4.782 4.781 4.781 0 0 1-4.781-4.782 4.781 4.781 0 0 1 9.562 0zM2.25 15.75l5.625-5.625"/></svg>', n.href = "/search/", n.ariaLabel = "검색하기."
        }
        var s;
        if (document.body.classList.contains("single")) e.innerHTML = '<svg class="surf-comment-svg" width="27" height="27" fill="none" viewBox="0 0 12 12" stroke-width="0.5px" xmlns="http://www.w3.org/2000/svg"><title>Comments</title><path d="M2.4 9.1h-.207l-.147.146L.5 10.793V1.2c0-.384.316-.7.7-.7h9.6c.384 0 .7.316.7.7v7.2c0 .384-.316.7-.7.7H2.4Z" stroke=""></path></svg><span class="surf-comment-wrap"><span class="surf-comment-container"><span class="coral-count-number"></span></span></span>', e.href = "#comments", e.ariaLabel = "댓글 보기.", document.querySelector("#c-btn-1 > svg").style.mixBlendMode = "exclusion", s = document.querySelectorAll(".comment-num-hidden").length > 0 ? document.querySelector(".comment-num-hidden").textContent : "-", f && (a.classList.add("is-closed"), a.style.right = "55px", a.style.bottom = "1px"), document.querySelector("#c-btn-1 .coral-count-number").innerHTML = s, document.body.classList.contains("single-post") ? (o.textContent = "Magazine", i.textContent = "Stories", r(document.querySelector(".meta-author-link").textContent)) : document.body.classList.contains("single-estt-project") ? (o.textContent = "Magazine", i.textContent = "Featured", r(document.querySelector(".entry-title-wrap > div.entry-title > h4 > span > a").textContent)) : document.body.classList.contains("single-curated-surfing") && (o.textContent = "큐레이션", i.textContent = "서핑", r(document.querySelector(".ha-info-author").textContent)), o.classList.remove("bc-is-hidden"), i.classList.remove("bc-is-hidden"); else if (h ? (e.innerHTML = '<svg width="20" height="20" viewBox="0 0 0.72 0.72" fill="currentColor" stroke-width=".5" xmlns="http://www.w3.org/2000/svg"><path d="M.165.6A.045.045 0 0 0 .21.555V.51H.165A.045.045 0 0 0 .12.555V.6h.045ZM.189.48.155.446A.015.015 0 0 1 .176.425l.12.12a.015.015 0 0 1-.021.021L.24.531v.024A.075.075 0 0 1 .165.63h-.06A.015.015 0 0 1 .09.615v-.06A.075.075 0 0 1 .165.48h.024ZM.116.626A.015.015 0 0 1 .095.605l.06-.06a.015.015 0 0 1 .021.021l-.06.06ZM.208.473A.015.015 0 0 1 .183.457L.269.32A.496.496 0 0 1 .443.152L.522.107A.128.128 0 0 1 .585.09.045.045 0 0 1 .63.135a.127.127 0 0 1-.017.063L.568.277A.496.496 0 0 1 .4.451L.263.537A.015.015 0 0 1 .247.512L.384.426A.466.466 0 0 0 .541.262L.587.184A.105.105 0 0 0 .6.135.015.015 0 0 0 .585.12a.095.095 0 0 0-.049.013L.457.178a.466.466 0 0 0-.164.158L.207.473Z"/></svg>', e.href = "/new-story", e.ariaLabel = "새로운 기록.") : (e.innerHTML = '<svg width="16" height="16" viewBox="0 0 0.54 0.54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.495.45V.274A.09.09 0 0 0 .467.209L.301.052a.045.045 0 0 0-.062 0L.073.208a.09.09 0 0 0-.028.066V.45A.045.045 0 0 0 .09.495h.36A.045.045 0 0 0 .495.45Z" stroke="currentColor" stroke-width=".04" stroke-linecap="round" stroke-linejoin="round"/></svg>', e.ariaLabel = "리셉션.", e.href = "/home/"), document.querySelector("#c-btn-1 > svg").style.mixBlendMode = "exclusion", f && (a.style.right = "", a.style.bottom = ""), o.textContent = "", i.textContent = "", o.classList.add("bc-is-hidden"), i.classList.add("bc-is-hidden"), t.classList.remove("bc-is-hidden"), document.body.classList.contains("home")) r("리셉션"); else if (barba.url.getHref().includes("/membership/")) r("설정"); else if (barba.url.getHref().includes("/author/")) {
            o.classList.remove("bc-is-hidden"), i.classList.remove("bc-is-hidden"), o.textContent = "Ledger", i.textContent = "Profile";
            let e = document.querySelector(".users-credits__item");
            n.innerHTML = "", n.appendChild(e)
        } else if (barba.url.getHref().includes("/membership/")) o.classList.remove("bc-is-hidden"), o.textContent = "설정", barba.url.getHref().includes("/profile/") ? (i.classList.remove("bc-is-hidden"), i.textContent("프로필")) : barba.url.getHref().includes("/billing/") && (i.classList.remove("bc-is-hidden"), i.textContent("Billing")); else if (barba.url.getHref().includes("/h-a/")) r("H/A"); else if (document.body.classList.contains("category")) {
            document.documentElement.classList.contains("ps-mobile") && (a.classList.add("is-closed"), a.style.right = "55px", a.style.bottom = "1px"), t.innerHTML = "";
            let e = document.querySelector("#cat-name span").textContent;
            o.classList.remove("bc-is-hidden"), i.classList.remove("bc-is-hidden"), o.textContent = "Topics", i.textContent = e
        } else r("H.A")
    }

    function d() {
        if (!barba.url.getHref().includes("/vault/") && !barba.url.getHref().includes("/membership/")) return;
        const e = window.innerWidth;
        var t = 3;
        e < 400 ? t = 1 : e < 768 && (t = 2);
        var n = document.querySelectorAll(".favorites-list.hi"), o = document.querySelector("#story .hi");
        document.querySelector("#curate .hi");
        if (!(n.length < 1)) {
            var i = document.querySelectorAll("#story .favorites-list.hi > li");
            if (i.length > 0) {
                for (let e = 0; e < i.length; e++) {
                    const t = i[e].querySelector("p:nth-child(1)").innerHTML,
                        n = i[e].querySelector("p:nth-child(2) > a").textContent,
                        o = i[e].querySelector("p:nth-child(2) > a").href;
                    var a = document.createElement("div");
                    i[e].classList.remove("favorites-list", "hi"), i[e].classList.add("js-item", "light-masonry-item"), i[e].innerHTML = "", a.classList.add("col-3", "js-collectable"), i[e].setAttribute("data-index", e), i[e].appendChild(a);
                    var r = document.createElement("div");
                    r.classList.add("card-site", "js-container-figure"), a.appendChild(r), r.innerHTML = '<figure class="figure-rollover"><a class="figure-rollover__link ha-thumbnail" href="">Thumbnail</a><div class="figure-rollover__hover"><div class="figure-rollover__left"><div class="figure-rollover__row"><small>Story</small></div><div class="figure-rollover__row ha-title">Title</div></div><div class="figure-rollover__center js-container-button-vote"><a href="" class="button button--white--rounded" ><svg class="ico--left" width="14"  viewBox="0 0 20 17"><path d="M17.8246 7.4299H0V9.29145H17.8246L12.2047 16L13.6589 16.8982L19.4269 10.0128C20.191 9.10064 20.191 7.61838 19.4269 6.70622L13.809 0L12.3548 0.89587L17.8246 7.4299Z"></path></svg>READ NOW</a></div><div class="figure-rollover__right"> <div class="figure-rollover__bts"><a class="figure-rollover__bt" href="" target="_blank" rel="noopener nofollow"><svg width="14" height="14" viewBox="0 0 14 14"><path d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z" fill="white" stroke="white" stroke-width="0.542084"></path></svg></a><div class="figure-rollover__bt"></div></div></div></div><div class="figure-rollover__fixed-left"></div></figure>', r.querySelector(".ha-thumbnail").innerHTML = t, r.querySelector(".ha-title").textContent = n, r.querySelectorAll("a").forEach((e => {
                        e.href = o
                    }))
                }
                var s = document.querySelectorAll("#story .light-masonry-item"), l = [], c = [];
                for (let e = 0; e < t; e++) {
                    var d = document.createElement("div"), u = e + 1;
                    d.setAttribute("data-i", u), d.classList.add("light-masonry-column"), o.appendChild(d), l[e] = d, c[e] = []
                }
                var m = 0;
                for (let e = 0; e < s.length; e++) {
                    m >= t ? (m %= t, m++) : m++;
                    var p = m;
                    l[p - 1].appendChild(s[e]), c[p - 1].push(s[e])
                }
                for (let e = 0; e < c.length; e++) {
                    e % t + 1;
                    var h = c[e];
                    for (let e = 0; e < h.length; e++) h[e].setAttribute("data-y-scroll", ""), h[e].setAttribute("data-y-scroll-speed", 1)
                }
                o.classList.remove("favorites-list", "hi"), o.classList.add("js-masonry", "light-masonry-wrapper"), window.scrollTo(window.scrollX, window.scrollY + 1)
            }
        }
    }

    function u() {
        var e = document.querySelectorAll(".posts-navigation a, .single-post .cat-links a");
        for (let t = 0; t < e.length; t++) {
            const n = e[t];
            n.setAttribute("data-mouse", "clip"), n.setAttribute("data-mouse-lock", "c-in"), n.classList.add("button-mouse-fill")
        }
        var t = document.querySelectorAll(".post-navigation a");
        for (let e = 0; e < t.length; e++) {
            t[e].setAttribute("data-mouse", "arrow-right-min")
        }
    }

    function m() {
        if (null == document.querySelector(".YIX")) return;
        var e = document.querySelectorAll("input[type=radio]"), t = Array.from(e);
        const n = document.querySelector(".YIX");
        if (null != n) {
            function o() {
                if (this.checked) {
                    let e = this.dataset.radioI;
                    console.log("click!!" + e);
                    const t = /transform([^;\[a-z\]\[0-9\]\\\n]*):([^\\\n]*)\;/;
                    let o = "transform: perspective(1000px)  rotateX(var(--xRotation)) rotateY(var(--word" + e + "));";
                    const i = n.getAttribute("style").replace(t, o);
                    n.setAttribute("style", i)
                }
            }

            t.forEach((function (e) {
                e.addEventListener("change", o)
            }))
        }
    }

    function p() {
        var e = document.getElementById("comments");
        if (!e) return;
        var t = e.querySelectorAll(".parent");
        for (let e = 0; e < t.length; e++) {
            const o = t[e], i = o.querySelector(".reply");
            if (i) {
                const e = document.createElement("span");
                e.classList.add("view-reply");
                const t = o.querySelector(".children");
                if (t) {
                    const n = t.childElementCount;
                    let o = "";
                    n && (o = '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t                <path d="M12.0867962,18 L6,21.8042476 L6,18 L4,18 C2.8954305,18 2,17.1045695 2,16 L2,4 C2,2.8954305 2.8954305,2 4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,16 C22,17.1045695 21.1045695,18 20,18 L12.0867962,18 Z M8,18.1957524 L11.5132038,16 L20,16 L20,4 L4,4 L4,16 L8,16 L8,18.1957524 Z M7,13 L7,11 L14,11 L14,13 L7,13 Z M7,9 L7,7 L16,7 L16,9 L7,9 Z" fill-rule="evenodd"></path>\n\t\t\t\t                </svg>' + n, o += 1 == n ? " reply" : " replies"), e.innerHTML = o
                }
                i.parentNode.insertBefore(e, i), e.addEventListener("click", n)
            }
        }

        function n(e) {
            e.currentTarget.parentElement.classList.toggle("view-reply-show")
        }

        const o = document.getElementById("comment");
        if (o) {
            var i = function () {
                var e = document.querySelector(".comment-notes");
                e && !e.classList.contains("_show") && (o.removeEventListener("focus", i), e.classList.add("_show"))
            };
            o.addEventListener("focus", i)
        }

        function a() {
            const e = document.querySelector(".comments-sidebar");
            e && e.classList.toggle("comments-sidebar-view")
        }

        const r = document.querySelectorAll(".comments-sidebar-toggle");
        if (r.length) for (let e = 0; e < r.length; e++) r[e].addEventListener("click", a);
        const s = document.querySelector(".comments-sidebar-x");
        s && s.addEventListener("click", a), function () {
            const e = window.location.hash;
            if (e) {
                const t = e.match("#comment-");
                if (t && t.length) {
                    const t = document.querySelector(".comments-sidebar");
                    if (t) {
                        t.classList.add("comments-sidebar-view");
                        const n = document.querySelector(e);
                        if (n) {
                            !function e(t) {
                                if (t) {
                                    t.click();
                                    let o = t.closest(".children");
                                    if (o) {
                                        e(o.previousElementSibling.querySelector(".view-reply"))
                                    } else n()
                                } else n();

                                function n() {
                                    document.querySelector(window.location.hash).scrollIntoView(), window.location.hash = ""
                                }
                            }(n.parentElement.previousElementSibling.querySelector(".view-reply"))
                        }
                    }
                } else {
                    const t = e.match("#comments");
                    t && t.length && (a(), window.location.hash = "")
                }
            }
        }()
    }

    e(), function () {
        window._pointerType = null, window._media = {}, window.matchMedia("(hover: hover)").matches && (window._pointerType = "mouse", document.body.setAttribute("data-input", "mouse")), window.addEventListener("pointerdown", (function (e) {
            e.pointerType !== _pointerType && (document.body.setAttribute("data-input", e.pointerType), _pointerType = e.pointerType)
        }), !1), window.addEventListener("keyup", (function (e) {
            document.body.setAttribute("data-input", "key"), _pointerType = "key"
        }), !1), window.matchMedia("(hover: hover)").matches ? window._media.hover = !0 : window._media.hover = !1, window._media.isMobile = function () {
            let e = !1;
            var t;
            return t = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), e
        }, window._media.isMobile() && (document.body.setAttribute("data-is-mobile", ""), document.body.removeAttribute("data-is-tablet"), document.documentElement.classList.add("ps-mobile"));
        const e = navigator.userAgent.toLowerCase(),
            t = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(e);
        window._media.isTablet = t, window._media.isTablet && (document.body.setAttribute("data-is-tablet", ""), document.body.removeAttribute("data-is-mobile"))
    }(), t(), n(), function () {
        var e = document.querySelector(".main-navigation-inner"), t = document.getElementById("off-menu");
        if (e && t) {
            var n = t.children;
            if (n) {
                var o = e.getAttribute("data-type"), i = e.getAttribute("data-items"),
                    a = e.hasAttribute("data-items-keep"), r = document.createElement("ul");
                if (r.setAttribute("id", "primary-menu"), e.appendChild(r), "classic" === o) {
                    var s = t.innerHTML;
                    r.innerHTML = s;
                    var l = document.querySelector(".menu-toggle");
                    l && (l.classList.add("hide-min-1024"), e.classList.add("_classic-only"))
                } else if ("hybrid" === o && i >= 1) for (let e = 0; e < i; e++) {
                    const t = n[e];
                    r.appendChild(t.cloneNode(!0)), a || t.classList.add("hide-min-1024")
                }
            }
        }
    }(), function () {
        var e = document.querySelector(".off-navigation");
        if (e) {
            var t = function (e) {
                var t = e.target.closest("ul");
                t.classList.remove("_expand");
                var n = t.parentElement.closest("ul").children;
                t.parentElement.classList.remove("menu-item-expand");
                for (let e = 0; e < n.length; e++) {
                    n[e].classList.remove("menu-item-hidden")
                }
            }, n = e.querySelectorAll(".sub-menu");
            for (let e = 0; e < n.length; e++) {
                var o = document.createElement("div");
                o.classList.add("_icon"), o.setAttribute("data-mouse", "mini-btn"), o.setAttribute("data-mouse-lock", ""), o.innerHTML = '\n      <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/>\n      <path d="M42 22h-28.34l7.17-7.17-2.83-2.83-12 12 12 12 2.83-2.83-7.17-7.17h28.34z"/>\n      </svg>';
                n[e].prepend(o), o.addEventListener("click", t, !1)
            }
            for (var i = function (e) {
                e.preventDefault(), e.stopPropagation();
                var t = e.target.parentElement, n = t.querySelector(".sub-menu"), o = t.closest("li"),
                    i = t.closest("ul").children;
                for (let e = 0; e < i.length; e++) {
                    i[e].classList.add("menu-item-hidden")
                }
                o.classList.remove("menu-item-hidden"), o.classList.add("menu-item-expand"), n && n.classList.add("_expand")
            }, a = e.querySelectorAll(".menu-item-has-children > a"), r = 0; r < a.length; r++) a[r].addEventListener("click", i, !1)
        }
    }(), r(), s(), d(), function () {
        for (var e = document.querySelectorAll('[href="#contact"]'), t = function (e) {
            e.preventDefault();
            var t = document.querySelector(".off-canvas-contact"), n = t.hasAttribute("data-inview");
            t && (n ? t.removeAttribute("data-inview") : t.setAttribute("data-inview", ""))
        }, n = 0; n < e.length; n++) e[n].addEventListener("click", t, !1)
    }(), u(), function () {
        const e = document.querySelector(".menu-toggle");
        e && e.addEventListener("click", o, !1), document.querySelector(".to-top").addEventListener("click", (function (e) {
            window.scrollTo({top: 0, left: 0, behavior: "smooth"})
        }), !1);
        var t = document.querySelector(".scroll-hint");
        t && t.addEventListener("click", (function (e) {
            window.scrollTo({top: window.innerHeight - 100, left: 0, behavior: "smooth"})
        }), !1);
        const n = document.querySelector(".sidebar-toggle");
        n && n.addEventListener("click", a, !1);
        const i = document.querySelector(".sidebar-toggle-off");
        i && i.addEventListener("click", a, !1)
    }(), p(), function () {
        if (!document.getElementById("sidebar")) return;
        const e = document.querySelectorAll(".tagcloud, .wp-block-tag-cloud");

        function t(e) {
            const t = e.target, n = e.target.closest(".tagcloud, .wp-block-tag-cloud");
            n && (n.classList.toggle("_show-all"), n.classList.contains("_show-all") ? t.textContent = "-" : t.textContent = "+")
        }

        if (e.length) for (let n = 0; n < e.length; n++) {
            const o = e[n];
            if (o.querySelectorAll("a").length > 10) {
                let e = document.createElement("a");
                e.textContent = "+", e.classList.add("_all"), o.appendChild(e), e.addEventListener("click", t)
            }
        }
    }(), function () {
        const e = document.querySelector(".site-header"), t = document.querySelector(".estt-mouse");
        e.addEventListener("mouseenter", (function () {
            "touch" !== document.body.getAttribute("data-input") && e.prepend(t)
        }), !1), e.addEventListener("mouseleave", (function () {
            var n, o;
            "touch" !== document.body.getAttribute("data-input") && (n = t, (o = e).parentNode.insertBefore(n, o.nextSibling))
        }), !1)
    }(), v(), c(), m(), l(), window.estt_m = () => {
        n()
    }, window.estt_render_triger = {}, estt_render_triger.marquee = function () {
        n()
    }, window.addEventListener("resize", (() => {
        e(), n(!0)
    }), !1), barba.init({
        timeout: 5e3, prefetchIgnore: !0, prevent: function ({el: e}) {
            var t = estt_stat.prevent_ajax;
            (t = t ? t.split(",") : []).push("wp-admin"), t = t.join("|");
            var n = new RegExp(t, "gi");
            return e.href.match(n)
        }, transitions: [{
            name: "default-transition", once(e) {
                const t = this.async();
                anime({
                    targets: "body",
                    duration: 1e3,
                    opacity: [0, 1],
                    delay: 100,
                    easing: "easeInOutSine",
                    complete: function () {
                        t()
                    }
                })
            }, leave(e) {
                const t = this.async();
                anime({
                    targets: [e.current.container, "#colophon", "[data-is-mobile] [data-il-render]", "[data-is-tablet] [data-il-render]"],
                    duration: 1e3,
                    opacity: 0,
                    easing: "easeInOutSine",
                    complete: function () {
                        t(), estt_webgl.groupData.current && (estt_webgl.groupData.current.visible = !1)
                    },
                    update: function () {
                        estt_webgl && estt_webgl.flowAnimation()
                    }
                }), estt_pp && anime({targets: estt_pp.noiseUniforms.transt, value: 1, easing: "linear", duration: 1e3})
            }, enter(e) {
                document.body.classList = e.next.container.getAttribute("data-ajax-body-class"), document.body.removeAttribute("data-caseopen")
            }, after(e) {
                const t = this.async();
                document.body.setAttribute("data-barba-enter", ""), window.scrollTo(0, 0), anime({
                    targets: [e.next.container, "#colophon", "[data-is-mobile] [data-il-render]", "[data-is-tablet] [data-il-render]"],
                    duration: 1e3,
                    delay: 200,
                    easing: "easeInOutSine",
                    opacity: 1,
                    before: () => {
                        document.body.removeAttribute("data-barba-enter")
                    },
                    update: function () {
                        window.estt_webgl && estt_webgl.flowAnimation()
                    },
                    complete: function () {
                        t()
                    }
                }), anime({
                    targets: estt_pp.noiseUniforms.transt,
                    value: 0,
                    easing: "linear",
                    duration: 1e3,
                    complete: function () {
                    }
                }), document.body.classList.contains("page-template-no-bg-page") || document.body.classList.contains("page-template-indoctrination") || document.body.classList.contains("single") ? y.contentOver(!0) : y.contentOver(!1)
            }
        }]
    });
    var h = !1, f = !1;
    barba.hooks.afterOnce((function (e) {
        if (window.barbaAfterOnce = !0, h = document.body.classList.contains("logged-in"), f = document.documentElement.classList.contains("ps-mobile"), window.estt_webgl && window.estt_webgl.revel) {
            for (let e = 0; e < estt_webgl.revel.length; e++) {
                (0, estt_webgl.revel[e])()
            }
            document.body.classList.contains("single-post") ? y.contentOver(!0) : y.contentOver(!1)
        }
        !function (e) {
            if (window.esttParalax = window.esttParalax || [], esttParalax.init) return;
            let t = document.querySelectorAll(e.selector), n = [];
            if (!t) return;
            if (e.debug) {
                var o = document.createElement("div");
                o.classList.add("screen_c"), document.body.appendChild(o)
            }

            function i() {
                for (let d = 0; d < t.length; d++) {
                    const u = t[d];
                    u.style.transform = "none";
                    var o = u.offsetHeight > window.innerHeight ? u.offsetHeight : window.innerHeight,
                        i = window.innerHeight / 2, a = u.offsetTop + u.offsetHeight / 2, r = a - i, s = a + i, l = 100;
                    if (n.push({
                        vh: o,
                        range: i,
                        oc: a,
                        top_margin: r,
                        bottom_margin: s,
                        stick: u.hasAttribute("data-y-scroll-stick") || !1,
                        speed: u.hasAttribute("data-y-scroll-speed") ? u.getAttribute("data-y-scroll-speed") : "1",
                        Y: l
                    }), e.debug) {
                        var c = document.createElement("div");
                        c.classList.add("box-wrap"), document.body.appendChild(c), n[d].debug = c
                    }
                }
            }

            function a() {
                t = document.querySelectorAll(e.selector), n = [], i(), r()
            }

            function r() {
                for (let o = 0; o < t.length; o++) {
                    const i = t[o], a = n[o], {
                        range: r,
                        oc: s,
                        top_margin: l,
                        bottom_margin: c,
                        vh: d,
                        stick: u,
                        Y: m,
                        speed: p
                    } = n[o];
                    let h;
                    if (e.debug && (a.debug.style.height = 2 * r + "px", a.debug.style.top = s - window.scrollY - r + "px"), window.scrollY + d > l && window.scrollY < l) {
                        h = (l - window.scrollY) / d * 1
                    }
                    if (!u && window.scrollY > l && window.scrollY < c) {
                        h = (l - window.scrollY) / d * 1
                    }
                    anime.set(i, {translateY: m * h * p})
                }
            }

            window.addEventListener("scroll", r, !1), i(), r(), window.scrollTo(0, window.scrollY + 1), esttParalax.init = !0, esttParalax.update = a
        }({
            selector: "[data-y-scroll]",
            debug: !1
        }), window.innerHeight < document.body.offsetHeight && document.body.classList.add("estt-scrollable"), document.body.classList.contains("page-template-no-bg-page") || document.body.classList.contains("page-template-indoctrination") ? y.contentOver(!0) : y.contentOver(!1)
    })), barba.hooks.before((function (e) {
        if ("off-canvas-menu" == document.body.getAttribute("data-view")) {
            const e = this.async();
            anime({
                targets: "#page > *:not(.site-header):not(#sidebar)",
                opacity: 0,
                easing: "linear",
                duration: 600
            }), anime({
                targets: "#off-menu > li > a",
                translateY: [0, "100%"],
                easing: "easeInSine",
                duration: 600
            }), anime({
                targets: estt_pp.noiseUniforms.transt,
                value: [0, 1],
                easing: "linear",
                duration: 600,
                complete: function () {
                    e(), estt_webgl.cleanCanvas(0), document.body.removeAttribute("data-view", "off-canvas-menu"), anime({
                        targets: estt_pp.noiseUniforms.transt,
                        value: 0,
                        easing: "linear",
                        duration: 600
                    })
                }
            }), anime({
                targets: estt_pp.noiseUniforms.u_state,
                value: 0,
                easing: "linear",
                duration: 600
            }), anime({
                targets: "#primary-menu > li",
                translateY: "0",
                easing: "linear",
                duration: 300,
                delay: 600,
                complete: function () {
                    anime.set("#primary-menu", {overflow: ""})
                }
            })
        }
    })), barba.hooks.after((function (e) {
        t(), n(), r(), s(), d(), u(), estt_webgl.draw(), esttParalax.update(), c(), x(), p(), i(), S(), v(), l(), m(), q.init(), estt_webgl.groupData.current && (estt_webgl.groupData.current.visible = !0), window.innerHeight < document.body.offsetHeight && document.body.classList.add("estt-scrollable");
        document.querySelectorAll(".wp-block-embed-twitter").length && function (e, t, n) {
            var o = document.createElement("script");
            o.src = e, o.onload = t, o.onreadystatechange = t, n.appendChild(o)
        }("https://platform.twitter.com/widgets.js", (function () {
        }), document.body), barba.url.getHref().includes("/levels/") && function () {
            let e = document.querySelector(".block--plans-pro"), t = document.querySelector(".js-choose-plan");
            t && t.addEventListener("click", (function () {
                e.classList.add("is-show"), document.body.parentNode.scrollTo({top: e.offsetTop, behavior: "smooth"})
            }))
        }();
        const o = barba.url.getHref().split("#")[0],
            a = document.querySelectorAll(".current-menu-item, .current_page_item"),
            h = document.querySelectorAll('[href="' + o + '"]');
        for (let e = 0; e < a.length; e++) {
            const t = a[e];
            t.classList.remove("current-menu-item"), t.classList.remove("current_page_item")
        }
        for (let e = 0; e < h.length; e++) {
            const t = h[e].parentElement;
            t.classList.contains("menu-item") && t.classList.add("current-menu-item")
        }
        const f = document.querySelectorAll(".blog-list .post h2 a");
        for (let e = 0; e < f.length; e++) f[e].setAttribute("data-js", "off-menu")
    }));
    var g = 0;

    function v() {
        let e = document.querySelectorAll(".sWsT");
        if ("IntersectionObserver" in window) {
            let n = new IntersectionObserver((function (e, n) {
                e.forEach((e => {
                    e.intersectionRatio > .1 && (t(e.target), n.unobserve(e.target))
                }))
            }), {root: null, rootMargin: "0px", threshold: 1, delay: 100});
            e.forEach((e => n.observe(e)))
        } else e.forEach((e => t(e)));

        function t(e) {
            e.classList.add("is-show")
        }
    }

    window.addEventListener("scroll", (function () {
        window.estt_webgl && estt_webgl.flowAnimation();
        var e = window.pageYOffset || document.documentElement.scrollTop;
        e > g ? document.body.setAttribute("data-scroll-direction", "down") : document.body.setAttribute("data-scroll-direction", "up"), g = e <= 0 ? 0 : e, window.scrollY > 100 ? document.body.setAttribute("data-scroll-in", "") : document.body.removeAttribute("data-scroll-in")
    })), window._media.hover && new function (e, t, n) {
        e === document && (e = document.scrollingElement || document.documentElement || document.body.parentNode || document.body);
        var o = e, i = !1, a = e.scrollTop, r = e.scrollTop,
            s = e === document.body && document.documentElement ? document.documentElement : e;

        function l(n) {
            n.preventDefault(), e = n.target.closest(".estt-scroll") ? n.target.closest(".estt-scroll") : o;
            var l = function (e) {
                return e.detail ? e.wheelDelta ? e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) : -e.detail / 3 : e.wheelDelta / 120
            }(n);
            0 == a && (a = e.scrollTop), 0 == r && (r = e.scrollTop), i || a == r || (r = e.scrollTop), r += -l * t, r = Math.max(0, Math.min(r, e.scrollHeight - s.clientHeight + 10)), i || c()
        }

        function c() {
            i = !0;
            var t = (r - e.scrollTop) / n;
            e.scrollTop += t, e.scrollTop != a ? requestAnimationFrame(c) : i = !1, a = e.scrollTop
        }

        document.querySelector("html").hasAttribute("data-estt-smooth-scroll") && (e.addEventListener("mousewheel", l, {passive: !1}), e.addEventListener("DOMMouseScroll", l, {passive: !1}))
    }(document, 120, 16);
    var b = {x: -100, y: -100}, w = {x: 0, y: 0};
    window._media.hover && requestAnimationFrame((function e(t) {
        const n = document.querySelector(".estt-mouse");
        let o = b.x, i = b.y;
        n.hasAttribute("data-lock") && (o = n.getAttribute("data-lock-x"), i = n.getAttribute("data-lock-y")), w.x += .15 * (o - w.x), w.y += .15 * (i - w.y), n.style.top = w.y + "px", n.style.left = w.x + "px";
        const a = document.querySelectorAll(".follow-mouse");
        if (a.length) {
            for (let e = 0; e < a.length; e++) {
                const t = a[e];
                t.style.left = b.x + "px", t.style.top = b.y + "px"
            }
            window.estt_webgl && estt_webgl.manualAnimation(1)
        }
        requestAnimationFrame(e)
    }));
    const y = {
        contentOver: function (e) {
            window.estt_pp && (e ? anime({
                targets: window.estt_pp.noiseUniforms.u_clear,
                value: 1,
                duration: 5e3
            }) : anime({targets: window.estt_pp.noiseUniforms.u_clear, value: 0, duration: 5e3}))
        }, contentOverPast: !1
    };
    document.addEventListener("mousemove", (function (e) {
        if ("touch" !== document.body.getAttribute("data-input")) {
            document.body.classList.contains("page-template-no-bg-page") || (e.target.closest(".post") || e.target.classList.contains("post") || e.target.closest(".entry-content") ? (y.contentOverPast || y.contentOver(!0), y.contentOverPast = !0) : (y.contentOverPast && y.contentOver(!1), y.contentOverPast = !1));
            var t, n = document.querySelector(".estt-mouse "), o = e.target, i = e.clientX, a = e.clientY,
                r = (n.getAttribute("data-mode"), !1);
            if (b.x = i, b.y = a, o.hasAttribute("data-mouse") && (r = o.hasAttribute("data-mouse-lock"), t = o.getAttribute("data-mouse")), n.setAttribute("data-mode", t), r) {
                r = o.getAttribute("data-mouse-lock"), n.setAttribute("data-lock", "");
                const e = o.getBoundingClientRect();
                var s, l;
                "tl" == r ? (s = e.top, l = e.left) : "lc" == r ? (s = e.top + e.height / 2, l = e.left) : "rc" == r ? (s = e.top + e.height / 2, l = e.left + e.width) : "c-in" == r ? (s = e.top + e.height / 2, l = e.left + e.width / 2, n.style.width = e.width + "px", n.style.height = e.height + "px") : (s = e.top + e.height / 2, l = e.left + e.width / 2), n.setAttribute("data-lock-x", l), n.setAttribute("data-lock-y", s)
            } else n.removeAttribute("data-lock")
        }
    }));
    var L = document.querySelectorAll("#primary-menu > li > a, #footer-menu a ");
    for (let e = 0; e < L.length; e++) {
        const t = L[e];
        t.setAttribute("data-mouse", "nav-dot"), t.setAttribute("data-mouse-lock", "tl")
    }
    var A = document.querySelectorAll(".off-navigation a");
    for (let e = 0; e < A.length; e++) {
        const t = A[e];
        t.parentElement.classList.contains("menu-item-has-children") ? t.setAttribute("data-mouse", "nav-invert+") : t.setAttribute("data-mouse", "nav-invert")
    }
    var _ = document.querySelectorAll("#primary-menu .sub-menu a");
    for (let e = 0; e < _.length; e++) {
        const t = _[e];
        t.setAttribute("data-mouse", "nav-dot"), t.setAttribute("data-mouse-lock", "lc")
    }

    function x() {
        const e = document.querySelector(".estt-ajax-search-input"),
            t = document.querySelector(".estt-ajax-search-result"), n = window.location.href;
        e && e.addEventListener("keyup", (e => {
            if ("" == e.target.value) return void (t.innerHTML = "");
            const o = document.querySelector('link[rel="https://api.w.org/"]').href + "wp/v2/search/?search=" + e.target.value + "&per_page=20",
                i = new XMLHttpRequest;
            i.onreadystatechange = function () {
                4 == i.readyState && function (e) {
                    const o = JSON.parse(e);
                    let i = "<span class=estt-ajax-search-numb>0 results </span>";
                    if (o.length) {
                        i = "<span class=estt-ajax-search-numb>" + o.length + " results </span>";
                        for (let e = 0; e < o.length; e++) {
                            const t = o[e], {title: a, url: r, subtype: s} = t;
                            r != n && (i += ` <li class="search-post">\n                <div class="search-post-type">\n                  <span>${"estt-project" == s ? "project" : s}</span>\n                </div>\n                <div class="search-post-title">${a}</div>\n                <a href="${r}"></a></li>`)
                        }
                    }
                    t.innerHTML = i
                }(i.responseText)
            }, i.open("GET", o, !0), i.send()
        }))
    }

    document.body.classList.contains("admin-bar") && document.querySelector("html").classList.add("is-admin-bar"), function () {
        const e = document.querySelectorAll("#primary-menu .sub-menu a");
        for (let n = 0; n < e.length; n++) {
            const o = e[n];
            o.addEventListener("focus", t), o.addEventListener("blur", (e => {
                e.target.closest("ul").classList.remove("_focus")
            }))
        }

        function t(e) {
            "key" == window._pointerType && n(e.target)
        }

        function n(e) {
            const t = e.closest(".sub-menu:not(._focus)");
            t && (t.classList.add("_focus"), n(t))
        }
    }(), x();
    const q = (() => {
        const e = {api: "http://devmodtheaquila.local/wp-json/wp/v2/posts", startPage: 0, postsPerPage: 2};
        let t = !1, n = document.querySelector(".posts"), o = document.querySelector(".btn-load-more");
        const i = function () {
            ++e.startPage;
            const o = {_embed: !0, page: e.startPage, per_page: e.postsPerPage}, i = e => {
                    let t = "";
                    for (let n of e) t += a(n);
                    return t
                },
                a = e => `\n<a href="${e.link}" class="iH0">\n                                            <div class="fm5 gGe">\n                                                <div class="pxF oIZ">\n                                                    <picture><img src="${e._embedded["wp:featuredmedia"][0].source_url}"></picture>\n                                                </div>\n                                            </div>\n                                            <div class="O4u wPh"><span class="Gyx">Found in Translation</span></div>\n                                            <time datetime="2023-10-14T09:30:24.978Z"\n                                                  class="O4u sYQ"><?php echo get_the_date(); ?></time>\n                                            <p class="hvk XOF">${e.title.rendered}</p>\n                                            <div class="fAuthor Rd6 atc"><span class="fBy">By</span><span\n                                                        class="fAuthorName">${e.author.rendered}</span>\n                                            </div>\n                                            <p class="EJZ bGk">${e.excerpt.rendered}</p></a>`;
            (async () => {
                const a = (e => {
                    let t = new URL(e);
                    return t.search = new URLSearchParams(o).toString(), t
                })(e.api), r = await fetch(a), s = await r.json(), l = i(s);
                n.innerHTML += l, t = !0
            })()
        };
        if ("IntersectionObserver" in window) {
            new IntersectionObserver(((e, n) => {
                e.forEach((e => {
                    e.isIntersecting && !0 === t && (t = !1, i())
                }))
            }), {threshold: 1}).observe(o)
        }
        return {init: i}
    })();

    function S() {
        var e = document.querySelector(".slider-fly");
        if (e) {
            e.addEventListener("touchstart", (function (e) {
                o = e.touches[0].clientX, i = e.touches[0].clientY
            }), !1), e.addEventListener("touchmove", (function (e) {
                if (null === o) return;
                if (null === i) return;
                var a = e.touches[0].clientX, r = e.touches[0].clientY, s = o - a, l = i - r;
                Math.abs(s) > Math.abs(l) ? s > 0 ? n.click() : t.click() : l > 0 ? n.click() : t.click();
                o = null, i = null, e.preventDefault()
            }), !1);
            var t = document.querySelector(".slider-nav-title_next"),
                n = document.querySelector(".slider-nav-title_prev"), o = null, i = null
        }
    }

    function k() {
        var e = document.querySelector(".next-case:not(.the-cover) img"),
            t = document.querySelector(".next-case:not(.the-cover) a");
        e && t && (e.onclick = function () {
            t.click(), e.onclick = "", e.removeAttribute("data-mouse")
        })
    }

    S(), k(), window._hideaway_nplc = k
}();
