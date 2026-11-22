(() => {
  const discovery = document.querySelector('#discovery');
  if (!discovery) return;
  const works = [
  {
    "id": "great-mother",
    "title": "The Great Mother of Govrlevo",
    "details": "Neolithic · Terracotta",
    "museum": "Museum of the City of Skopje",
    "note": "Look where the shoulders meet the little house. The figure and the building are one clay form.",
    "credit": "Photograph by Stanimir Nedelkovski",
    "source": "https://www.frankfurt-live.com/gesichter-einer-neuen-aera-erste-bauern-in-nordmazedonien-vor-8000-jahren",
    "image": "./Assets/Discovery/great-mother.webp"
  },
  {
    "id": "adam",
    "title": "The Adam of Govrlevo",
    "details": "Neolithic · Terracotta",
    "museum": "Museum of the City of Skopje",
    "note": "Look for the navel and the ridge down the back. A few small marks give the torso its anatomy.",
    "credit": "Photograph reproduced in Adam of Macedonia",
    "source": "https://www.academia.edu/39005996/Adam_of_Macedonia",
    "image": "./Assets/Discovery/adam.webp"
  },
  {
    "id": "maenad",
    "title": "The Tetovo Maenad",
    "details": "c. 520–510 BCE · Bronze",
    "museum": "Archaeological Museum, Skopje",
    "note": "Follow the bend in her leg and the sweep of her dress. The dancer once formed part of a vessel handle.",
    "credit": "Image via Makedonski Svedoštva",
    "source": "https://macedoniantestimony.blogspot.com/2016/05/blog-post.html",
    "image": "./Assets/Discovery/maenad.webp"
  },
  {
    "id": "mask",
    "title": "Gold Funerary Mask from Gorna Porta",
    "details": "Early 5th century BCE · Gold",
    "museum": "Institute and Museum–Ohrid",
    "note": "The shallow ridges are enough to describe the brows, nose, and mouth in a thin sheet of gold.",
    "credit": "Detail of the Grave 132 display photograph, VAHD 112",
    "source": "https://hrcak.srce.hr/file/341224",
    "image": "./Assets/Discovery/mask.webp"
  },
  {
    "id": "venus",
    "title": "The Venus of Skupi",
    "details": "Roman period · Marble",
    "museum": "Scupi, near Skopje",
    "note": "The hand across the breast gives the figure its familiar Venus Pudica pose, even across the breaks in the marble.",
    "credit": "Image from Muzej’s feature on the excavation",
    "source": "./venus-of-skupi.html",
    "image": "./Assets/Discovery/venus.webp"
  },
  {
    "id": "icon",
    "title": "The Annunciation",
    "details": "Early 14th century · Painted panel",
    "museum": "Icon Gallery, Ohrid",
    "note": "Look at Gabriel’s raised hand and the space between the two figures. The composition carries the exchange across the panel.",
    "credit": "Reproduction via Wikimedia Commons",
    "source": "https://commons.wikimedia.org/wiki/File:Ohrid_annunciation_icon.jpg",
    "image": "./Assets/Discovery/icon.webp"
  },
  {
    "id": "coat",
    "title": "Bridal Coat with False Sleeves",
    "details": "19th century · Wool and embroidery",
    "museum": "Museum of Macedonia",
    "note": "The false sleeves are part of the silhouette. Look at how they extend the outline of the coat.",
    "credit": "Image © Museum of Macedonia, via Museum With No Frontiers",
    "source": "https://sharinghistory.museumwnf.org/database_item.php?id=object%3BAWE%3Bmc%3B11%3Ben",
    "image": "./Assets/Discovery/coat.webp"
  },
  {
    "id": "mart",
    "title": "Mother and Child",
    "details": "Nikola Martinoski · 1934 · Oil on canvas",
    "museum": "Museum of the City of Skopje",
    "note": "Follow the outline from the mother’s shoulder around the child. It pulls both figures into one shape.",
    "credit": "Reproduction from the Martinoski catalogue",
    "source": "https://arhiva.zaum.mk/wp-content/uploads/2022/03/1997_01_01_Martinoski_OCR.pdf",
    "image": "./Assets/Discovery/mart.webp"
  },
  {
    "id": "poppies",
    "title": "Poppies",
    "details": "Lazar Ličenoski · 1950 · Oil on canvas",
    "museum": "National Gallery",
    "note": "Start with the white poppy heads, then follow the bands of green back toward the mountains.",
    "credit": "Reproduction from the National Gallery’s 70th anniversary catalogue",
    "source": "https://arhiva.zaum.mk/wp-content/uploads/2019/10/2018_12_06_70_Nacionalna_galerija_na_Makedonija.pdf",
    "image": "./Assets/Discovery/poppies.webp"
  },
  {
    "id": "petlevski",
    "title": "Macedonian Village",
    "details": "Ordan Petlevski · 1957 · Oil on canvas",
    "museum": "Museum of Contemporary Art, Skopje",
    "note": "Look for the band of blocky buildings between the pale sky and the ochre foreground.",
    "credit": "Reproduction via MoCA Skopje",
    "source": "https://arhiva.zaum.mk/wp-content/uploads/2022/03/2018_09_27_Konekcii_vo_kolekciite.pdf",
    "image": "./Assets/Discovery/petlevski.webp"
  },
  {
    "id": "kondovski",
    "title": "Small Painting",
    "details": "Dimitar Kondovski · 1963 · Mixed media and gold leaf on wood",
    "museum": "Museum of Contemporary Art, Skopje",
    "note": "Look where gold meets painted wood. The same materials carry a different kind of image in the Ohrid icon.",
    "credit": "Reproduction via MoCA Skopje",
    "source": "https://arhiva.zaum.mk/wp-content/uploads/2019/02/2012_01_00_Donacii_akvizicii_2000-2011.pdf",
    "image": "./Assets/Discovery/kondovski.webp"
  },
  {
    "id": "mazev",
    "title": "Overripe Grain",
    "details": "Petar Mazev · 1965 · Mixed media on wood",
    "museum": "Museum of Contemporary Art, Skopje",
    "note": "Look at the grainy surface before the outline. The materials are part of the image.",
    "credit": "Black-and-white reproduction from the 1967 exhibition catalogue",
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
    target('note').textContent = work.note;
    target('credit').textContent = work.credit;
    target('source').href = work.source;
    stage.replaceChildren();
    if (work.image) {
      const image = new Image();
      image.alt = work.title;
      image.decoding = 'async';
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
