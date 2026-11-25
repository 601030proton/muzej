(()=>{
  const lead = document.querySelector('.opening-lead');
  if (lead) {
    const media = lead.querySelector('.opening-lead-image');
    const controls = lead.querySelector('.opening-lead-controls');
    const category = lead.querySelector('.eyebrow');
    const headline = lead.querySelector('h1 a');
    const deck = lead.querySelector('.opening-lead-deck');
    const status = controls.querySelector('[role="status"]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let activeImage = media.querySelector('img');
    const stories = [
      {
        image: activeImage.getAttribute('src'),
        alt: activeImage.alt,
        category: category.textContent,
        title: headline.textContent,
        href: headline.getAttribute('href'),
        deck: deck.textContent,
      },
      {
        image: './Assets/Homepage/venusskupi_website-01.webp',
        alt: 'Marble head of the Venus of Skupi before reassembly',
        category: 'Art | Antiquity',
        title: 'The Venus of Skupi',
        href: './venus-of-skupi.html',
        deck: 'How conservators put a Roman marble statue back on its feet.',
      },
      {
        image: './Assets/Rusalii/rusalii-01.webp',
        alt: 'A Rusalii dancer with one arm and one knee raised in an archival photograph',
        category: 'Ritual | Sekirnik',
        title: 'Rusalii',
        href: './rusalii.html',
        deck: 'The sword dancers of Sekirnik.',
      },
    ];

    const visitKey = 'muzej-opening-visit';
    const sequenceKey = 'muzej-opening-sequence';
    const wrap = index => (index + stories.length) % stories.length;
    let index = 0;
    try {
      const visit = sessionStorage.getItem(visitKey);
      if (visit !== null && stories[Number(visit)]) {
        index = Number(visit);
      } else {
        const previous = localStorage.getItem(sequenceKey);
        index = previous !== null && stories[Number(previous)] ? wrap(Number(previous) + 1) : 0;
        sessionStorage.setItem(visitKey, String(index));
        localStorage.setItem(sequenceKey, String(index));
      }
    } catch {
      // The arrows still work if browser storage is unavailable.
    }

    function show(story, incoming, animate) {
      const outgoing = activeImage;
      media.replaceChildren(incoming);
      activeImage = incoming;
      category.textContent = story.category;
      headline.textContent = story.title;
      headline.setAttribute('href', story.href);
      deck.textContent = story.deck;

      if (animate && !reducedMotion.matches && typeof outgoing.animate === 'function') {
        outgoing.classList.add('opening-lead-outgoing');
        outgoing.setAttribute('aria-hidden', 'true');
        media.append(outgoing);
        const fade = outgoing.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 220, easing: 'ease-out', fill: 'forwards',
        });
        fade.onfinish = () => outgoing.remove();
        lead.querySelector('.opening-lead-copy').animate([{ opacity: .5 }, { opacity: 1 }], {
          duration: 220, easing: 'ease-out',
        });
      }
    }

    function loadImage(story) {
      const image = new Image();
      image.alt = story.alt;
      image.decoding = 'async';
      image.src = story.image;
      return image;
    }

    let pendingIndex = index;
    let request = 0;
    if (index !== 0) {
      const initial = stories[index];
      const image = loadImage(initial);
      image.addEventListener('error', () => {
        if (activeImage !== image) return;
        index = 0;
        if (request === 0) pendingIndex = index;
        show(stories[0], loadImage(stories[0]), false);
      }, { once: true });
      show(initial, image, false);
    }
    controls.hidden = false;

    controls.querySelectorAll('[data-lead-step]').forEach(button => {
      button.addEventListener('click', async () => {
        const currentRequest = ++request;
        pendingIndex = wrap(pendingIndex + Number(button.dataset.leadStep));
        const nextIndex = pendingIndex;
        const story = stories[nextIndex];
        const image = loadImage(story);
        try {
          await image.decode();
        } catch {
          if (currentRequest === request) pendingIndex = index;
          return;
        }
        if (currentRequest !== request) return;
        index = nextIndex;
        show(story, image, true);
        status.textContent = story.title;
      });
    });
  }

 const guides={krusevo:{href:'krusevo.html',title:'Kruševo',src:'./Assets/Krusevo/krusevo-hero-poster.jpg',alt:'A view of Kruševo and its surrounding mountain landscape',deck:'A mountain town of steep streets, museums, and places to linger.'},prespa:{href:'prespa.html',title:'Prespa',src:'./Assets/Homepage/prespa-hero.webp',alt:'View across Lake Prespa toward the surrounding mountains',deck:'Villages, lakeside tables, and a weekend beside the water.'}};
 function setGuideMedia(key,guide){
 const link=document.querySelector('#weekend-image-link');
 if(key==='krusevo'){
 const video=document.createElement('video');video.id='weekend-image';video.autoplay=true;video.muted=true;video.defaultMuted=true;video.loop=true;video.playsInline=true;video.preload='metadata';video.poster='./Assets/Krusevo/krusevo-hero-poster.jpg';video.src='./Assets/Krusevo/krusevo-hero.mp4';video.setAttribute('aria-label',guide.alt);link.replaceChildren(video);
 }else{const img=document.createElement('img');img.id='weekend-image';img.src=guide.src;img.alt=guide.alt;img.loading='lazy';link.replaceChildren(img);}
 }
 setGuideMedia('krusevo',guides.krusevo);
 document.querySelectorAll('[data-guide]').forEach(b=>b.addEventListener('click',()=>{const guide=guides[b.dataset.guide];document.querySelectorAll('[data-guide]').forEach(e=>e.setAttribute('aria-pressed',String(e===b)));setGuideMedia(b.dataset.guide,guide);document.querySelector('#weekend-title-link').textContent=guide.title;document.querySelector('#weekend-deck').textContent=guide.deck;['#weekend-image-link','#weekend-title-link','#weekend-read-link'].forEach(s=>document.querySelector(s).href='https://muzej.co/'+guide.href);}));
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
    if (linked !== -1) showSlide(linked);
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

  showSlide(0);
  showLinkedSlide();
  window.addEventListener('hashchange', showLinkedSlide);
  track.dataset.carousel = '';
  controls.hidden = false;
})();
