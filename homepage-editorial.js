(()=>{
 const menu=document.querySelector('.utility-menu');
 document.querySelectorAll('.utility-panel a').forEach(a=>a.addEventListener('click',()=>menu.open=false));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')menu.open=false;});
 document.addEventListener('click',e=>{if(!menu.contains(e.target))menu.open=false;});
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
 const entries=[...document.querySelectorAll('.archive-entry')];
 document.querySelector('#archive-search').addEventListener('input',e=>{const q=e.target.value.toLocaleLowerCase().trim();let count=0;entries.forEach(li=>{li.hidden=!li.textContent.toLocaleLowerCase().includes(q);if(!li.hidden)count++;});document.querySelector('#archive-status').textContent=q?count+' '+(count===1?'story':'stories')+' found':'';});
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
