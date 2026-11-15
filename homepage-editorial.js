/* Featured stories stay in one place and advance only at the reader's request. */
(function(){
 var track=document.getElementById('hero-slides');
 if(!track)return;
 var slides=Array.from(track.children),previous=document.getElementById('hero-prev'),next=document.getElementById('hero-next'),position=document.getElementById('hero-position');
 var current=0,scheduled=false;
 var reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 function update(){
  current=Math.max(0,Math.min(slides.length-1,Math.round(track.scrollLeft/track.clientWidth)));
  previous.disabled=current===0;next.disabled=current===slides.length-1;
  position.textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');
  slides.forEach(function(slide,i){slide.inert=i!==current;slide.setAttribute('aria-hidden',String(i!==current));});
 }
 function go(index){track.scrollTo({left:Math.max(0,Math.min(slides.length-1,index))*track.clientWidth,behavior:reduced.matches?'instant':'smooth'});}
 previous.addEventListener('click',function(){go(current-1);});next.addEventListener('click',function(){go(current+1);});
 track.addEventListener('scroll',function(){if(!scheduled){scheduled=true;requestAnimationFrame(function(){update();scheduled=false;});}},{passive:true});
 track.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();go(current+1);}if(e.key==='ArrowLeft'){e.preventDefault();go(current-1);}});
 var width=track.clientWidth;
 window.addEventListener('resize',function(){if(track.clientWidth!==width){width=track.clientWidth;track.scrollTo({left:current*width,behavior:'instant'});}});
 update();
})();
/* Reader-triggered playback: no remote player is loaded before a click. */
(function(){
  var weekend = document.getElementById('prespa-feature');
  if (weekend) {
    var isKrusevo = Math.random() < 0.5;
    weekend.dataset.weekendGuide = isKrusevo ? 'krusevo' : 'prespa';
    if (isKrusevo) {
      var guideTitle = 'Weekend Guide: Kruševo';
      var guideHref = './krusevo.html';
      weekend.querySelector('.kinfolk-feature-title').textContent = guideTitle;
      weekend.querySelector('.kinfolk-feature-text-link').href = guideHref;
      var guideLink = weekend.querySelector('.kinfolk-feature-media-link');
      guideLink.href = guideHref;
      guideLink.setAttribute('aria-label', 'Read Weekend Guide: Kruševo');
      var guideVideo = document.createElement('video');
      guideVideo.className = 'kinfolk-feature-image';
      guideVideo.autoplay = true;
      guideVideo.muted = true;
      guideVideo.defaultMuted = true;
      guideVideo.loop = true;
      guideVideo.playsInline = true;
      guideVideo.preload = 'metadata';
      guideVideo.poster = './Assets/Krusevo/krusevo-hero-poster.jpg';
      guideVideo.src = './Assets/Krusevo/krusevo-hero.mp4';
      guideVideo.setAttribute('aria-hidden', 'true');
      guideVideo.style.cssText = 'display:block;width:100%;height:auto;aspect-ratio:5999 / 4005;object-fit:cover;';
      guideLink.replaceChildren(guideVideo);
    }
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
    var fallback = cinema.querySelector('.film-fallback');
    document.getElementById('now-playing-title').textContent = film.title;
    cinema.querySelector('.cinema-credit').textContent = film.credit;
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
      document.getElementById('film-screen').replaceChildren(frame);
      frame.focus();
    });
  }
  var archive=document.querySelector('.home-archive details');
  document.querySelectorAll('a[href="#archive"]').forEach(function(link){link.addEventListener('click',function(){if(archive)archive.open=true;});});
  if(location.hash==='#archive'&&archive)archive.open=true;
  var input=document.getElementById('archive-search');
  if(input){var items=Array.from(document.querySelectorAll('.archive-list li'));input.addEventListener('input',function(){var query=input.value.trim().toLocaleLowerCase();var visible=0;items.forEach(function(item){item.hidden=!item.textContent.toLocaleLowerCase().includes(query);if(!item.hidden)visible++;});document.getElementById('archive-results').textContent=query?(visible?visible+(visible===1?' story found':' stories found'):'No stories found. Try a different name or place.'):'';});}
})();
