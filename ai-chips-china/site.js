(function () {
  var root = document.documentElement;
  function pick() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "zh" || q === "en") return q;
    try { var s = localStorage.getItem("lang"); if (s === "zh" || s === "en") return s; } catch (e) {}
    return (navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }
  function set(lang) {
    root.dataset.lang = lang;
    root.lang = lang === "zh" ? "zh-Hans" : "en";
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.set === lang));
    });
    document.querySelectorAll("a[data-keep-lang]").forEach(function (a) {
      var u = new URL(a.getAttribute("href"), location.href);
      u.searchParams.set("lang", lang);
      a.href = u.pathname.split("/").pop() + u.search + u.hash;
    });
    var t = document.querySelector("meta[name='title-" + lang + "']");
    if (t) document.title = t.content;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    if (window.localizeDates) window.localizeDates();
  }
  var M = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
  var orig = new WeakMap();
  function zhDate(t) {
    return t
      .replace(/\bchecked (\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})/g, function (_, d, m, y) { return y + " 年 " + M[m] + " 月 " + d + " 日查阅"; })
      .replace(/\b(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})/g, function (_, d, m, y) { return y + " 年 " + M[m] + " 月 " + d + " 日"; })
      .replace(/\b(?:(early|mid|late)-? ?)?(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})/g, function (_, p, m, y) { return y + " 年 " + ({ early: "初", mid: "中旬", late: "下旬" }[p] ? M[m] + " 月" + { early: "初", mid: "中旬", late: "下旬" }[p] : M[m] + " 月"); });
  }
  window.localizeDates = function () {
    var zh = root.dataset.lang === "zh";
    document.querySelectorAll(".src, time, .asof-en").forEach(function (el) {
      var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      for (var n = w.nextNode(); n; n = w.nextNode()) {
        if (n.parentElement.closest('[lang="en"]')) continue;
        if (!orig.has(n)) orig.set(n, n.nodeValue);
        n.nodeValue = zh ? zhDate(orig.get(n)) : orig.get(n);
      }
    });
  };
  set(pick());
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".lang button");
    if (b) set(b.dataset.set);
  });
  window.siteLang = function () { return root.dataset.lang; };
})();
