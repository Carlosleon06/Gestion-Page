(function () {
  var nav = document.querySelector(".site-nav");
  if (!nav) return;

  var links = document.querySelectorAll('.site-nav__links a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    });
  });
})();
