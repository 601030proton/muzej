(function () {
  var viewer = document.querySelector('.focus-lightbox');
  var closeButton = viewer.querySelector('.focus-lightbox-close');
  document.querySelectorAll('[data-focus-image]').forEach(function (button) {
    button.addEventListener('click', function () {
      var image = button.querySelector('img');
      var caption = button.closest('figure').querySelector('figcaption');
      viewer.querySelector('img').src = image.currentSrc || image.src;
      viewer.querySelector('img').alt = image.alt;
      viewer.querySelector('figcaption').textContent = caption ? caption.textContent : '';
      viewer.showModal();
    });
  });
  closeButton.addEventListener('click', function () { viewer.close(); });
  viewer.addEventListener('click', function (event) { if (event.target === viewer) viewer.close(); });
  var previous = window.scrollY;
  window.addEventListener('scroll', function () {
    var current = window.scrollY;
    if (current < 24 || current < previous - 4) document.body.classList.remove('muzej-logo-hidden');
    else if (current > previous + 4) document.body.classList.add('muzej-logo-hidden');
    previous = current;
  }, {passive:true});
})();
