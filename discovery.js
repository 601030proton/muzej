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
    "image": "./Assets/Discovery/great-mother.webp"
  },
  {
    "id": "adam",
    "title": "The Adam of Govrlevo",
    "details": "Neolithic · Terracotta",
    "museum": "Museum of the City of Skopje",
    "source": "https://www.academia.edu/39005996/Adam_of_Macedonia",
    "image": "./Assets/Discovery/adam.webp"
  },
  {
    "id": "maenad",
    "title": "The Tetovo Maenad",
    "details": "c. 520–510 BCE · Bronze",
    "museum": "Archaeological Museum, Skopje",
    "source": "https://macedoniantestimony.blogspot.com/2016/05/blog-post.html",
    "image": "./Assets/Discovery/maenad.webp"
  },
  {
    "id": "icon",
    "title": "The Annunciation",
    "details": "Early 14th century · Painted panel",
    "museum": "Icon Gallery, Ohrid",
    "source": "https://commons.wikimedia.org/wiki/File:Ohrid_annunciation_icon.jpg",
    "image": "./Assets/Discovery/icon.webp"
  },
  {
    "id": "coat",
    "title": "Bridal Coat with False Sleeves",
    "details": "19th century · Wool and embroidery",
    "museum": "Museum of Macedonia",
    "source": "https://sharinghistory.museumwnf.org/database_item.php?id=object%3BAWE%3Bmc%3B11%3Ben",
    "image": "./Assets/Discovery/coat.webp"
  },
  {
    "id": "poppies",
    "title": "Poppies",
    "details": "Lazar Ličenoski · 1950 · Oil on canvas",
    "museum": "National Gallery",
    "source": "https://arhiva.zaum.mk/wp-content/uploads/2019/10/2018_12_06_70_Nacionalna_galerija_na_Makedonija.pdf",
    "image": "./Assets/Discovery/poppies.webp"
  },
  {
    "id": "petlevski",
    "title": "Macedonian Village",
    "details": "Ordan Petlevski · 1957 · Oil on canvas",
    "museum": "Museum of Contemporary Art, Skopje",
    "source": "https://arhiva.zaum.mk/wp-content/uploads/2022/03/2018_09_27_Konekcii_vo_kolekciite.pdf",
    "image": "./Assets/Discovery/petlevski.webp"
  },
  {
    "id": "kondovski",
    "title": "Small Painting",
    "details": "Dimitar Kondovski · 1963 · Mixed media and gold leaf on wood",
    "museum": "Museum of Contemporary Art, Skopje",
    "source": "https://arhiva.zaum.mk/wp-content/uploads/2019/02/2012_01_00_Donacii_akvizicii_2000-2011.pdf",
    "image": "./Assets/Discovery/kondovski.webp"
  },
  {
    "id": "mazev",
    "title": "Overripe Grain",
    "details": "Petar Mazev · 1965 · Mixed media on wood",
    "museum": "Museum of Contemporary Art, Skopje",
    "source": "https://arhiva.zaum.mk/wp-content/uploads/2018/03/1967_07_20_Sovremeni_makedonski_umetnici.pdf",
    "image": "./Assets/Discovery/mazev.webp"
  }
];
  const target = (attribute) => discovery.querySelector('[data-discovery-' + attribute + ']');
  const stage = target('stage');
  const next = target('next');
  const list = target('list');
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
    list.querySelector('[aria-current]')?.removeAttribute('aria-current');
    list.querySelector('[data-work="' + work.id + '"]')?.setAttribute('aria-current', 'true');
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

  list.addEventListener('click', (event) => {
    const link = event.target.closest('[data-work]');
    if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    select(works.find((work) => work.id === link.dataset.work));
    next.focus({ preventScroll: true });
    discovery.scrollIntoView({ block: 'start' });
  });

  next.hidden = false;
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
})();
