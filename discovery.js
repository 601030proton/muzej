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
      "image": "./Assets/Discovery/calder-to-skopje-clean.webp"
    },
    {
      "id": "alexander-founding-alexandria",
      "title": "Alexander the Great Founding Alexandria",
      "details": "Placido Costanzi · 1736–37 · Oil on canvas",
      "museum": "The Walters Art Museum, Baltimore",
      "source": "https://art.thewalters.org/object/37.790/",
      "image": "./Assets/Discovery/alexander-founding-alexandria.webp"
    },
    {
      "id": "camel-caravan",
      "title": "Camel Caravan",
      "details": "János Vaszary · 1916 · Oil on canvas",
      "museum": "Skopje · Hungarian National Gallery",
      "source": "https://en.mng.hu/artworks/53622/",
      "image": "./Assets/Discovery/camel-caravan.webp"
    },
    {
      "id": "composition-aux-visages",
      "title": "Composition aux visages",
      "details": "Jean Lambert-Rucki · 1919 · Oil on canvas",
      "museum": "Solun",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/lambert-jean-rucki/",
      "image": "./Assets/Discovery/composition-aux-visages.webp"
    },
    {
      "id": "women-in-krusevo",
      "title": "Macedonian Women in Kruševo",
      "details": "Albert Gartmann · 1916",
      "museum": "",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/gartmann-albert/",
      "image": "./Assets/Discovery/women-in-krusevo-clean.webp"
    },
    {
      "id": "skopje-viaduct-rider",
      "title": "Rider near the Skopje Viaduct",
      "details": "Ernst Richard Dietze · 1917 · Oil on panel",
      "museum": "",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/dietze-richard-ernst/",
      "image": "./Assets/Discovery/skopje-viaduct-rider-clean.webp"
    },
    {
      "id": "stip-pottery-market",
      "title": "Pottery Market in Štip",
      "details": "Ludvík Kuba · 1925 · Oil on panel",
      "museum": "",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/kuba-ludvik/",
      "image": "./Assets/Discovery/stip-pottery-market-clean.webp"
    },
    {
      "id": "lake-ohrid-lear",
      "title": "Lake Ohrid",
      "details": "Edward Lear · 1848",
      "museum": "",
      "source": "https://commons.wikimedia.org/wiki/File:Lake_Ohrid_by_Edward_Lear_(1848).jpg",
      "image": "./Assets/Discovery/lake-ohrid-lear.webp"
    },
    {
      "id": "kratovo-1915",
      "title": "Kratovo",
      "details": "Ivan Ivanov (Ivanić) · 1915 · Oil on canvas",
      "museum": "",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/ivanov-ivan/",
      "image": "./Assets/Discovery/kratovo-1915.webp"
    },
    {
      "id": "nerezi-monastery",
      "title": "Nerezi Monastery near Skopje",
      "details": "František Malý · 1934 · Oil on canvas",
      "museum": "",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/maly-frantisek/",
      "image": "./Assets/Discovery/nerezi-monastery-clean.webp"
    },
    {
      "id": "solun-noll",
      "title": "Solun",
      "details": "Alexandre Noll · 1917 · Woodcut",
      "museum": "",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/noll-alexandre/",
      "image": "./Assets/Discovery/solun-noll-clean.webp"
    },
    {
      "id": "bridge-in-struga",
      "title": "Bridge in Struga",
      "details": "Stanyo Stamatov · 1915 · Watercolor",
      "museum": "",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/stanyo-stamatov/",
      "image": "./Assets/Discovery/bridge-in-struga.webp"
    },
    {
      "id": "andre-vidal-fountain-bouf",
      "title": "Woman at the Fountain in Bouf",
      "details": "André Vidal · c. 1920 · Oil on canvas",
      "museum": "Bouf, Lerin region",
      "source": "https://www.proantic.com/605904-andre-vidal-grece-grece-macedoine-buf-pres-de-florina-c-1920-hst-54x65cm.html",
      "image": "./Assets/Discovery/andre-vidal-woman-at-the-fountain.webp"
    },
    {
      "id": "the-kidnapping-of-ellen-stone",
      "title": "The Kidnapping of Ellen Stone",
      "details": "Ekaterina Viktorovna Kaminina · Oil on canvas",
      "museum": "Museum of the Macedonian Struggle, Skopje",
      "source": "https://mmb.org.mk/en/macedonian-revolutionary-organization-1893-1903/",
      "image": "./Assets/Discovery/the-kidnapping-of-ellen-stone.webp"
    },
    {
      "id": "landscape-in-macedonia",
      "title": "Landscape in Macedonia",
      "details": "Frédéric-Marius de Buzon · 1923",
      "museum": "",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/buzon-de-frederic-marius/",
      "image": "./Assets/Discovery/landscape-in-macedonia.webp"
    },
    {
      "id": "bride-from-krivogastani",
      "title": "Bride from Krivogaštani",
      "details": "Olga Benson · 1930 · Watercolor",
      "museum": "",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/benson-olga/",
      "image": "./Assets/Discovery/bride-from-krivogastani.webp"
    },
    {
      "id": "skopje-chokanov",
      "title": "Skopje",
      "details": "Danyo Chokanov · 1942 · Oil on canvas",
      "museum": "",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/chokanov-denyo-denju-1901-1982/",
      "image": "./Assets/Discovery/skopje-chokanov.webp"
    },
    {
      "id": "lake-kostur-boissonnas",
      "title": "Lake Kostur",
      "details": "Frédéric Boissonnas · 1921 · Photograph",
      "museum": "",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/boissonnas-frederic-1858-1946/",
      "image": "./Assets/Discovery/lake-kostur-boissonnas.webp"
    },
    {
      "id": "veiled-women-solun",
      "title": "Veiled Women, Solun",
      "details": "Pierre Combet-Descombes · 1916 · Oil on canvas",
      "museum": "",
      "source": "https://www.artlexicon.mk/foreign-painters-in-macedonia/combet-descombes-pierre-1885-1966/",
      "image": "./Assets/Discovery/veiled-women-solun.webp"
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
