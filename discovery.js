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
      "image": "./Assets/Discovery/annunciation-ohrid.webp",
      "fit": "portrait"
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
      "image": "./Assets/Discovery/tsar-samoil-kondovski.webp",
      "fit": "portrait"
    },
    {
      "id": "balkan-nucleus",
      "title": "Balkan Nucleus",
      "details": "Blagoja Manevski · 1985 · Acrylic on paper",
      "museum": "Museum of Contemporary Art, Skopje",
      "source": "https://arhiva.zaum.mk/wp-content/uploads/2019/02/2017_09_13_Makedonska_razglednica_katalog.pdf#page=68",
      "image": "./Assets/Discovery/balkan-nucleus.webp"
    },
    {
      "id": "shell-fortress",
      "title": "Shell Fortress",
      "details": "Vasko Taškovski · 1996 · Oil on canvas",
      "museum": "Economic Chamber of North Macedonia",
      "source": "https://www.mchamber.mk/mk/home/umetnostinfo/8",
      "image": "./Assets/Discovery/shell-fortress.webp"
    },
    {
      "id": "man-from-the-mountain",
      "title": "Man from the Mountain",
      "details": "Borka Avramova · 1962 · Terracotta",
      "museum": "Museum of Contemporary Art, Skopje",
      "source": "https://arhiva.zaum.mk/wp-content/uploads/2019/02/2017_09_13_Makedonska_razglednica_katalog.pdf#page=61",
      "image": "./Assets/Discovery/man-from-the-mountain.webp",
      "fit": "portrait"
    },
    {
      "id": "legends",
      "title": "From the Cycle Legends",
      "details": "Zlatko Stefanov · 1986 · Oil on canvas",
      "museum": "Museum of Contemporary Art, Skopje",
      "source": "https://arhiva.zaum.mk/wp-content/uploads/2019/02/2017_09_13_Makedonska_razglednica_katalog.pdf#page=46",
      "image": "./Assets/Discovery/legends.webp"
    },
    {
      "id": "flower-garden-vii",
      "title": "Flower Garden VII (Motif from a Suburb)",
      "details": "Dušan Perčinkov · 1972 · Oil on canvas",
      "museum": "National Gallery, Skopje",
      "source": "https://nationalgallery.mk/pariski-refleksii-3-vo-chifte-amam/",
      "image": "./Assets/Discovery/flower-garden-vii.webp"
    },
    {
      "id": "eight-textile-models",
      "title": "Eight Models for a Textile",
      "details": "Gjorgji Jordanov Capev · 1958 · Drawing on paper",
      "museum": "Museum of Contemporary Art, Skopje",
      "source": "https://arhiva.zaum.mk/wp-content/uploads/2019/02/2017_09_13_Makedonska_razglednica_katalog.pdf#page=20",
      "image": "./Assets/Discovery/eight-textile-models.webp"
    },
    {
      "id": "gjavato",
      "title": "Gjavato",
      "details": "Ivo Veljanov · 1977 · Photograph",
      "museum": "Museum of Contemporary Art, Skopje",
      "source": "https://arhiva.zaum.mk/wp-content/uploads/2019/02/2017_09_13_Makedonska_razglednica_katalog.pdf#page=42",
      "image": "./Assets/Discovery/gjavato.webp"
    },
    {
      "id": "licenoski-poppies",
      "title": "Poppies",
      "details": "Lazar Ličenoski · 1955 · Oil on fiberboard",
      "museum": "Museum of Contemporary Art, Skopje",
      "source": "https://arhiva.zaum.mk/wp-content/uploads/2019/02/2017_09_13_Makedonska_razglednica_katalog.pdf#page=52",
      "image": "./Assets/Discovery/licenoski-poppies.webp"
    },
    {
      "id": "calder-to-skopje",
      "title": "To Skopje",
      "details": "Alexander Calder · 1965 · Gouache",
      "museum": "Museum of Contemporary Art, Skopje",
      "source": "https://kunsthallewien.at/en/exhibition/no-feeling-is-final-the-skopje-solidarity-collection/",
      "image": "./Assets/Discovery/calder-to-skopje.webp"
    }
  ];
  const target = (attribute) => discovery.querySelector('[data-discovery-' + attribute + ']');
  const stage = target('stage');
  const next = target('next');
  let current = works[0];
  let remaining = works.map((work) => work.id);

  function show(work) {
    current = work;
    remaining = remaining.filter((id) => id !== work.id);
    target('title').textContent = work.title;
    target('details').textContent = work.details;
    target('museum').textContent = work.museum;
    const creditLine = target('credit');
    creditLine.replaceChildren();
    creditLine.hidden = !work.credit;
    if (work.credit) {
      const { name, source, license, url, note } = work.credit;
      const photograph = document.createElement('a');
      photograph.href = source;
      photograph.textContent = name;
      const licenseLink = document.createElement('a');
      licenseLink.href = url;
      licenseLink.textContent = license;
      creditLine.append('Photo: ', photograph, ' · ', licenseLink, note ? ' · ' + note : '');
    }
    stage.replaceChildren();
    if (work.image) {
      const image = new Image();
      image.alt = work.title;
      image.decoding = 'async';
      image.dataset.workImage = work.id;
      if (work.fit) image.dataset.discoveryFit = work.fit;
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
  remaining = remaining.filter((id) => id !== current.id);
})();
