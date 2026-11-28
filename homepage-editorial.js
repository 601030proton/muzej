(()=>{

 const guides = {
  prespa: {
   href: './prespa.html',
   title: 'Prespa',
   poster: './Assets/Prespa/prespa-village-poster.webp',
   video: './Assets/Prespa/prespa-village-soft-loop.mp4',
   alt: 'A village above Lake Prespa with mountains beyond',
   deck: 'Villages, lakeside tables, and a weekend beside the water.'
  },
  krusevo: {
   href: './krusevo.html',
   title: 'Kruševo in Winter',
   poster: './Assets/Krusevo/krusevo-drone-poster.webp',
   video: './Assets/Krusevo/krusevo-drone-homepage.mp4',
   alt: 'A drone view of skiers and sledders on a snowy slope in Kruševo',
   deck: 'Skiing and sledding at Stanič, with lunch and galleries back in town.'
  },
  skopje: {
   href: './skopje-at-night.html',
   title: 'Skopje at Night',
   poster: './Assets/Skopje%20at%20Night/skopje-vardar-night-poster.webp',
   video: './Assets/Skopje%20at%20Night/skopje-vardar-night-loop.mp4',
   alt: 'A slow pan along the Vardar in central Skopje after dark',
   deck: 'Independent clubs, DIY gigs, and late-night food in Skopje.'
  }
 };
 const guideTabs = document.querySelectorAll('[data-guide]');
 const guideLink = document.querySelector('#weekend-image-link');
 const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
 function setGuideMedia(guide) {
  const image = document.createElement('img');
  image.id = 'weekend-image';
  image.src = guide.poster;
  image.alt = guide.alt;
  image.loading = 'lazy';
  if (motion.matches) {
   guideLink.replaceChildren(image);
   return;
  }
  const video = document.createElement('video');
  video.id = 'weekend-image';
  video.autoplay = true;
  video.defaultMuted = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.poster = guide.poster;
  video.setAttribute('aria-label', guide.alt);
  video.addEventListener('error', () => video.replaceWith(image), {once: true});
  video.src = guide.video;
  guideLink.replaceChildren(video);
 }
 if (guideLink && guideTabs.length) {
  const activeGuide = () => guides[document.querySelector('[data-guide][aria-pressed="true"]').dataset.guide];
  setGuideMedia(activeGuide());
  motion.addEventListener('change', () => setGuideMedia(activeGuide()));
  guideTabs.forEach(tab => tab.addEventListener('click', () => {
   const guide = guides[tab.dataset.guide];
   guideTabs.forEach(button => button.setAttribute('aria-pressed', String(button === tab)));
   setGuideMedia(guide);
   document.querySelector('#weekend-title-link').textContent = guide.title;
   document.querySelector('#weekend-deck').textContent = guide.deck;
   ['#weekend-image-link', '#weekend-title-link', '#weekend-read-link'].forEach(selector => {
    document.querySelector(selector).href = guide.href;
   });
  }));
 }
  var films = [
    {
      id: 'zLmtG7q3k8s',
      title: 'Rhythm and Sound',
      credit: 'Trajče Popov, 1955 · Part I',
      poster: './Assets/In%20Rotation/now-playing-rhythm-and-sound.png',
      alt: 'Still from Rhythm and Sound, directed by Trajče Popov',
      partTwo: 'https://www.youtube.com/watch?v=ue5rKYHBezk'
    },
    {
      id: '0LTF3Sv5eoc',
      title: 'That Was the World of Vangel Naumovski',
      credit: '1980 · Documentary',
      poster: 'https://i.ytimg.com/vi/0LTF3Sv5eoc/maxresdefault.jpg',
      alt: 'YouTube thumbnail for That Was the World of Vangel Naumovski'
    },
    {
      id: 'bu4reJk0cNM',
      title: 'Republic in Flames',
      credit: '1969 · Film excerpt',
      poster: 'https://i.ytimg.com/vi/bu4reJk0cNM/maxresdefault.jpg',
      alt: 'YouTube thumbnail for Republic in Flames'
    }
  ];
  var play = document.getElementById('play-film');
  if (play) {
    var film = films[Math.floor(Math.random() * films.length)];
    var cinema = document.getElementById('now-playing');
    var poster = play.querySelector('img');
    var fallback = document.createElement('p'); fallback.className='film-fallback'; cinema.querySelector('.cinema-layout').appendChild(fallback);
    document.getElementById('cinema-title').textContent = film.title;
    cinema.querySelector('.eyebrow').textContent='Cinema';
    cinema.querySelector('.cinema-copy>p:not(.eyebrow)').textContent=film.credit;
    cinema.querySelector('.small-link').href='https://www.youtube.com/watch?v='+film.id;
    cinema.querySelector('.film-caption').textContent = film.credit;
    play.setAttribute('aria-label', 'Play ' + film.title);
    poster.src = film.poster;
    poster.alt = film.alt;
    fallback.replaceChildren();
    if (film.partTwo) {
      var partTwo = document.createElement('a');
      partTwo.href = film.partTwo;
      partTwo.textContent = 'Part II ↗';
      partTwo.target = '_blank';
      partTwo.rel = 'noopener noreferrer';
      fallback.appendChild(partTwo);
    }
    var youtube = document.createElement('a');
    youtube.href = 'https://www.youtube.com/watch?v=' + film.id;
    youtube.textContent = 'YouTube ↗';
    youtube.target = '_blank';
    youtube.rel = 'noopener noreferrer';
    fallback.appendChild(youtube);

    play.addEventListener('click', function () {
      var frame = document.createElement('iframe');
      frame.title = film.title + ' — ' + film.credit;
      frame.src = 'https://www.youtube-nocookie.com/embed/' + film.id + '?autoplay=1&rel=0&playsinline=1';
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      cinema.querySelector('.film-screen').replaceChildren(frame);
      frame.focus();
    });
  }
 const archive=document.querySelector('#archive details');document.querySelectorAll('a[href="#archive"]').forEach(a=>a.addEventListener('click',()=>archive.open=true));if(location.hash==='#archive')archive.open=true;
  const normalizeArchiveText = (text) => text.toLowerCase()
    .replaceAll('đ', 'd')
    .normalize('NFD').replace(/\p{M}/gu, '');
  const archiveGroups = [...archive.querySelectorAll('.archive-group')].map((group) => ({
    group,
    entries: [...group.querySelectorAll('.archive-entry')].map((entry) => ({
      entry,
      searchableText: normalizeArchiveText([
        entry.textContent,
        entry.dataset.search,
        group.querySelector('h3').textContent,
      ].join(' ')),
    })),
  }));
  const archiveStatus = document.querySelector('#archive-status');
  document.querySelector('#archive-search').addEventListener('input', (event) => {
    const query = normalizeArchiveText(event.target.value.trim());
    const words = query ? query.split(/\s+/) : [];
    let count = 0;
    for (const { group, entries } of archiveGroups) {
      let groupCount = 0;
      for (const { entry, searchableText } of entries) {
        const matches = words.every((word) => searchableText.includes(word));
        entry.hidden = !matches;
        groupCount += Number(matches);
      }
      group.hidden = groupCount === 0;
      count += groupCount;
    }
    archiveStatus.textContent = query ? count + (count === 1 ? ' story found' : ' stories found') : '';
  });
})();


// Keep the existing grids and rotate one story per step.
function mountStoryCarousel(stories, controls, visibleCount) {
  if (!stories || !controls || stories.children.length <= visibleCount) return;

  function updateVisibleStories() {
    Array.from(stories.children).forEach((story, index) => {
      story.hidden = index >= visibleCount;
    });
  }

  controls.querySelectorAll('button[data-step]').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.step === '1') {
        stories.append(stories.firstElementChild);
      } else {
        stories.prepend(stories.lastElementChild);
      }
      updateVisibleStories();
    });
  });

  updateVisibleStories();
  controls.hidden = false;
}

mountStoryCarousel(document.querySelector('#traditions-stories'), document.querySelector('.traditions-controls'), 4);
mountStoryCarousel(document.querySelector('#catalogue-stories'), document.querySelector('.catalogue-controls'), 3);

(() => {
  const carousel = document.getElementById('focus');
  const track = carousel.querySelector('#focus-slides');
  const controls = carousel.querySelector('.focus-controls');
  const status = carousel.querySelector('.focus-status');
  const slides = Array.from(track.children);
  let active = 0;

  function showSlide(index, announce = false) {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== active; });
    if (announce) status.textContent = slides[active].querySelector('h3').innerText.replace(/\s+/g, ' ');
  }

  function showLinkedSlide() {
    const linked = slides.findIndex(slide => location.hash === '#' + slide.id);
    if (linked === -1) return false;
    showSlide(linked);
    return true;
  }

  controls.addEventListener('click', event => {
    const button = event.target.closest('button[data-step]');
    if (button) showSlide(active + Number(button.dataset.step), true);
  });

  controls.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    showSlide(active + (event.key === 'ArrowRight' ? 1 : -1), true);
  });

  const openingKey = 'muzej-art-in-focus-opening';
  let previousOpening = -1;
  try {
    const savedOpening = Number.parseInt(sessionStorage.getItem(openingKey), 10);
    if (savedOpening >= 0 && savedOpening < slides.length) previousOpening = savedOpening;
  } catch {
    // A random opening still works when browser storage is unavailable.
  }

  if (!showLinkedSlide()) {
    const excludePrevious = previousOpening !== -1 && slides.length > 1;
    let opening = Math.floor(Math.random() * (slides.length - Number(excludePrevious)));
    if (excludePrevious && opening >= previousOpening) opening += 1;
    showSlide(opening);
  }
  try {
    sessionStorage.setItem(openingKey, String(active));
  } catch {
    // Navigation does not depend on browser storage.
  }
  window.addEventListener('hashchange', showLinkedSlide);
  track.dataset.carousel = '';
  controls.hidden = false;
})();
