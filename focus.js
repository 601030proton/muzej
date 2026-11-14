(function () {
  var works = JSON.parse(document.getElementById('focus-works').textContent);
  var gallery = document.querySelector('.work-gallery');
  var image = document.getElementById('work-image');
  var title = document.getElementById('work-title');
  var medium = document.getElementById('work-medium');
  var note = document.getElementById('work-note');
  var count = document.getElementById('work-count');
  var play = document.getElementById('work-play');
  var indexPanel = document.getElementById('work-index');
  var indexToggle = document.getElementById('work-index-toggle');
  var viewer = document.querySelector('.work-lightbox');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var current = 0, playing = !reduce.matches, inView = true, timer = null, transition = 0, revision = 0;
  function number(n) { return String(n).padStart(2, '0'); }
  function label(w) { return w.title + ', ' + w.year; }
  function preload(n) { var next = new Image(); next.src = works[(n + works.length) % works.length].src; }
  function paintViewer() {
    var w = works[current];
    document.getElementById('lightbox-image').src = w.src;
    document.getElementById('lightbox-image').alt = w.alt;
    document.getElementById('lightbox-title').textContent = label(w);
    document.getElementById('lightbox-credit').textContent = w.medium + '. ' + w.caption;
    document.getElementById('lightbox-count').textContent = number(current + 1) + ' / ' + number(works.length);
  }
  function schedule() {
    clearInterval(timer); timer = null;
    if (playing && inView && !document.hidden && !viewer.open && indexPanel.hidden) timer = setInterval(function () { select(current + 1, false); }, 6500);
    play.textContent = playing ? 'Pause' : 'Play';
    play.setAttribute('aria-label', playing ? 'Pause automatic slideshow' : 'Play automatic slideshow');
  }
  function select(n, manual) {
    current = (n + works.length) % works.length;
    if (manual) playing = false;
    var w = works[current];
    clearTimeout(transition); var version = ++revision;
    function commit() {
      if (version !== revision) return;
      image.src = w.src; image.alt = w.alt;
      image.removeAttribute('width'); image.removeAttribute('height');
      title.textContent = label(w); medium.textContent = w.medium; note.textContent = w.note;
      count.textContent = number(current + 1) + ' / ' + number(works.length);
      document.querySelectorAll('.work-thumb').forEach(function (thumb) {
        if (Number(thumb.dataset.work) === current) thumb.setAttribute('aria-current', 'true');
        else thumb.removeAttribute('aria-current');
      });
      image.classList.remove('is-changing');
      if (manual) document.getElementById('work-announcement').textContent = label(w) + ', image ' + (current + 1) + ' of ' + works.length;
    }
    if (reduce.matches || manual) commit();
    else { image.classList.add('is-changing'); transition = setTimeout(commit, 220); }
    if (viewer.open) paintViewer();
    preload(current + 1); schedule();
  }
  document.querySelector('.work-previous').addEventListener('click', function () { select(current - 1, true); });
  document.querySelector('.work-next').addEventListener('click', function () { select(current + 1, true); });
  play.addEventListener('click', function () { playing = !playing; schedule(); });
  document.querySelectorAll('[data-work]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); select(Number(link.dataset.work), true);
      var film = document.querySelector('.work-filmstrip');
      var thumb = document.querySelector('.work-thumb[aria-current]');
      film.scrollTo({left:thumb.offsetLeft - film.offsetLeft - film.clientWidth / 2 + thumb.clientWidth / 2,behavior:reduce.matches?'auto':'smooth'});
      if (link.classList.contains('work-card')) { gallery.scrollIntoView({behavior:reduce.matches?'auto':'smooth',block:'start'}); document.querySelector('.work-image-button').focus({preventScroll:true}); }
    });
  });
  indexToggle.addEventListener('click', function () {
    var open = indexPanel.hidden; indexPanel.hidden = !open;
    indexToggle.setAttribute('aria-expanded', String(open));
    indexToggle.innerHTML = open ? 'Close index <span>×</span>' : 'All images <span>↗</span>';
    if (open) playing = false; schedule();
  });
  function openViewer() { playing = false; paintViewer(); viewer.showModal(); schedule(); }
  document.querySelector('.work-image-button').addEventListener('click', function(event){ if(swiped){swiped=false;event.preventDefault();return;} openViewer(); });
  document.querySelector('.work-expand').addEventListener('click', openViewer);
  document.querySelector('.lightbox-close').addEventListener('click', function () { viewer.close(); });
  document.querySelector('.lightbox-previous').addEventListener('click', function () { select(current - 1, true); });
  document.querySelector('.lightbox-next').addEventListener('click', function () { select(current + 1, true); });
  viewer.addEventListener('close', schedule);
  viewer.addEventListener('click', function (event) { if (event.target === viewer) viewer.close(); });
  function keys(event) {
    if (event.key === 'ArrowRight') { event.preventDefault(); select(current + 1, true); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); select(current - 1, true); }
  }
  gallery.addEventListener('keydown', keys); viewer.addEventListener('keydown', keys);
  var touchX = null, swiped = false;
  document.querySelector('.work-image-button').addEventListener('touchstart', function(e){touchX=e.changedTouches[0].clientX;},{passive:true});
  document.querySelector('.work-image-button').addEventListener('touchend', function(e){if(touchX===null)return;var dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>55){swiped=true;select(current+(dx<0?1:-1),true);setTimeout(function(){swiped=false;},500);}touchX=null;},{passive:true});
  document.addEventListener('visibilitychange', schedule);
  if ('IntersectionObserver' in window) new IntersectionObserver(function (entries) { inView = entries[0].isIntersecting; schedule(); }, {threshold:0.2}).observe(document.querySelector('.work-stage'));
  reduce.addEventListener('change', function(){if(reduce.matches)playing=false;schedule();});
  var previous = window.scrollY;
  window.addEventListener('scroll', function () { var y=window.scrollY;if(y<24||y<previous-4)document.body.classList.remove('muzej-logo-hidden');else if(y>previous+4)document.body.classList.add('muzej-logo-hidden');previous=y; }, {passive:true});
  preload(1); schedule();
})();
