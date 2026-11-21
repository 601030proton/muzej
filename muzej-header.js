(() => {
  const menu = document.querySelector(".muzej-menu");
  if (!menu) return;

  const trigger = menu.querySelector(".muzej-menu-trigger");
  const panel = menu.querySelector(".muzej-menu-panel");

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
