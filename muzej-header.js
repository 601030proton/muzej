(() => {
  const header = document.querySelector("header.site-header");
  const menu = header?.querySelector(".muzej-menu");
  if (!menu) return;

  const trigger = menu.querySelector(".muzej-menu-trigger");
  const panel = menu.querySelector(".muzej-menu-panel");

  let lastScroll = Math.max(0, window.scrollY);
  window.addEventListener("scroll", () => {
    const scroll = Math.max(0, window.scrollY);
    if (scroll <= 24) {
      header.classList.remove("is-scrolling-down");
    } else if (Math.abs(scroll - lastScroll) >= 4) {
      header.classList.toggle("is-scrolling-down", scroll > lastScroll);
    } else {
      return;
    }
    lastScroll = scroll;
  }, { passive: true });

  panel.addEventListener("click", (event) => {
    if (event.target.closest("a[href]")) menu.open = false;
  });

  document.addEventListener("click", (event) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open && !event.defaultPrevented) {
      menu.open = false;
      if (menu.contains(document.activeElement)) trigger.focus();
    }
  });
})();
