(() => {
  const discovery = document.querySelector('#discovery');
  if (!discovery) return;
  const works = [
    {
      "id": "great-mother",
      "title": "The Great Mother of Govrlevo",
      "details": "Neolithic · Terracotta",
      "museum": "Museum of the City of Skopje",
      "source": "https://www.frankfurt-live.com/gesichter-einer-neuen-aera-erste-bauern-in-nordmazedonien-vor-8000-jahren",
      "image": "./Assets/Discovery/great-mother-cutout.webp"
    },
    {
      "id": "icon",
      "title": "The Annunciation",
      "details": "Early 14th century · Painted panel",
      "museum": "Icon Gallery, Ohrid",
      "source": "https://commons.wikimedia.org/wiki/File:Annunciation,_Early_XIV_Century,_St_Mary_Perivleptos_Church,_Ohrid_Icon_Gallery.jpg",
      "image": "./Assets/Discovery/annunciation-ohrid.webp"
    },
    {
      "id": "petlevski",
      "title": "Macedonian Village",
      "details": "Ordan Petlevski · 1957 · Oil on canvas",
      "museum": "Museum of Contemporary Art, Skopje",
      "source": "https://arhiva.zaum.mk/wp-content/uploads/2019/02/2017_09_13_Makedonska_razglednica_katalog.pdf#page=38",
      "image": "./Assets/Discovery/macedonian-village.webp"
    },
    {
      "id": "trebenista-mask",
      "title": "Trebeništa Funerary Mask",
      "details": "Late 6th–early 5th century BCE · Sheet gold · Grave IX",
      "museum": "National Museum of Serbia, Belgrade",
      "source": "https://novamakedonija.com.mk/zivot/kultura/ќе-ги-видиме-маските-од-требениште-од-м/",
      "image": "./Assets/Discovery/trebenista-mask.webp"
    },
    {
      "id": "tsar-samoil",
      "title": "Цар Самоил",
      "details": "Dimitar Kondovski · 1984 · Oil on canvas",
      "museum": "",
      "source": "https://eprints.ugd.edu.mk/12368/3/Strumica%20konferencija.pdf#page=1",
      "image": "./Assets/Discovery/tsar-samoil-kondovski.webp"
    }
  ];
  const target = (attribute) => discovery.querySelector('[data-discovery-' + attribute + ']');
  const stage = target('stage');
  const next = target('next');
  let current = works[0];
  let remaining = works.map((work) => work.id).slice(1);

  function show(work) {
    current = work;
    remaining = remaining.filter((id) => id !== work.id);
    target('title').textContent = work.title;
    target('details').textContent = work.details;
    target('museum').textContent = work.museum;
    target('source').href = work.source;
    stage.replaceChildren();
    if (work.image) {
      const image = new Image();
      image.alt = work.title;
      image.decoding = 'async';
      image.dataset.workImage = work.id;
      image.addEventListener('error', () => image.remove(), { once: true });
      image.src = work.image;
      stage.append(image);
    }
  }

  function select(work) {
    show(work);
    history.replaceState(null, '', '#discovery-' + work.id);
  }

  function openFromHash() {
    const work = works.find(({ id }) => location.hash === '#discovery-' + id);
    if (!work) return;
    if (work !== current) show(work);
    discovery.scrollIntoView({ block: 'start' });
  }

  next.addEventListener('click', () => {
    if (!remaining.length) remaining = works.filter((work) => work !== current).map((work) => work.id);
    const id = remaining[Math.floor(Math.random() * remaining.length)];
    select(works.find((work) => work.id === id));
  });

  next.hidden = false;
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
})();
