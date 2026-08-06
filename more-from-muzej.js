(function () {
  var articles = [
    {
      slug: "five-books-with-macedonian-state",
      href: "five-books-with-macedonian-state.html",
      title: "Start Here: Five Books with Macedonian State",
      kicker: "Books | History",
      dek: "A collaboration with Macedonian State on five books that open different doors into Macedonian history, identity, and independence.",
      image: "./Assets/5%20Books/Images/NewCovers%20Folder/five-books-new-hero.webp",
      alt: "Five Macedonian history book covers",
      position: "center top"
    },
    {
      slug: "marko-micov",
      href: "marko-micov.html",
      title: "Marko Micov",
      kicker: "Interview | Ballet",
      dek: "A Macedonian ballet dancer on Skopje, discipline, leaving home, and carrying Macedonia onto the stage.",
      image: "./Assets/Marko%20Interview/Text%20and%20Photos/Images/Micov-Color-Photo_Rachel_Malehorn-17.jpg",
      alt: "Marko Micov ballet portrait.",
      position: "center top"
    },
    {
      slug: "martinoski",
      href: "martinoski.html",
      title: "The Many Faces of Nikola Martinoski",
      kicker: "Art | Painting",
      dek: "Martinoski stands at the hinge point where Macedonian painting became recognizably modern.",
      image: "./Assets/Martinoski%20Article/Nikola%27s%20Hero%20Images/Martinoski%20Square.png",
      alt: "Square collage portrait of Nikola Martinoski.",
      position: "center center"
    },
    {
      slug: "macedonian-renaissance",
      href: "macedonian-renaissance.html",
      title: "Toward an Art History of the Macedonian Renaissance",
      kicker: "Art | History",
      dek: "From Saint Sophia and Nerezi to Dicho Zograf and the carved iconostases of the nineteenth-century revival.",
      image: "./Assets/Macedonian%20Renaissance/Article%20Photos/web/kurbinovo-archangel-detail.webp",
      alt: "Detail of the Archangel Gabriel fresco at the Church of Saint George in Kurbinovo.",
      position: "center center"
    },
    {
      slug: "vangel-naumovski",
      href: "vangel-naumovski.html",
      title: "The Metamorphosis of Vangel Naumovski",
      kicker: "Art | Painting",
      dek: "The Lake, the Body, and the Cosmos.",
      image: "./Assets/Vangel/Website%20Pics/1.png",
      alt: "Portrait of Vangel Naumovski seated before one of his paintings.",
      position: "center top"
    },
    {
      slug: "before-the-dawn",
      href: "before-the-dawn.html",
      title: "Before the Dawn",
      kicker: "Music | Eurovision",
      dek: "Vlado Janevski gave Macedonia its first Eurovision entry, and its first taste of being seen.",
      image: "./Assets/Vlado/Pics/hero.png",
      alt: "Vlado Janevski performing on a brightly lit stage in a blue suit.",
      position: "center top"
    },
    {
      slug: "wearing-the-nation",
      href: "wearing-the-nation.html",
      title: "The Nation on Their Backs",
      kicker: "Sport | Design",
      dek: "Five Macedonian shirts, and what they reveal about design, memory, and the limits of reinvention.",
      image: "./Assets/Wearing%20the%20Nation/e9d02185-3178-4851-b0b0-ef36d7436568.png",
      alt: "A collection of Macedonian football shirts in red, yellow, and white.",
      position: "center center"
    },
    {
      slug: "swan-dress",
      href: "swan-dress.html",
      title: "The Swan Dress",
      kicker: "Revolutionary Garments",
      dek: "The swan dress that turned the Oscars red carpet into theater.",
      image: "./Assets/Swan%20Dress/swan-final.png",
      alt: "Bjork wearing the Swan Dress on the red carpet.",
      position: "center center"
    },
    {
      slug: "skopje-tange",
      href: "skopje-tange.html",
      title: "Tokyo on the Vardar",
      kicker: "Architecture | Urbanism",
      dek: "How Japanese urban theory found form in Macedonia.",
      image: "./Assets/Kenzo%20Article/Tange%20Pics/final.png",
      alt: "Editorial collage portrait with red geometric forms and brutalist architecture.",
      position: "center center"
    },
    {
      slug: "how-to-taste-vranec",
      href: "how-to-taste-vranec.html",
      title: "How to taste Vranec (like a sommelier)",
      kicker: "Wine | Guide",
      dek: "Dark fruit, firm tannin, and the problem of being too powerful.",
      image: "./Assets/Vranec/vranec-tasting.jpg",
      alt: "Wine being poured into a glass during a tasting.",
      position: "center center"
    },
    {
      slug: "prespa",
      href: "prespa.html",
      title: "Prespa",
      kicker: "Travel | Weekend Guide",
      dek: "A lake region of villages, mountain roads, beaches, wetlands, and quiet continuity.",
      image: "./Assets/prespa-hero.jpeg",
      alt: "Lake Prespa shoreline in soft evening light.",
      position: "center center"
    },
    {
      slug: "the-new-new-wave",
      href: "the-new-new-wave.html",
      title: "The (New) New Wave",
      kicker: "Cinema",
      dek: "A new cohort of Macedonian filmmakers is going international by staying close to home.",
      image: "./Assets/New%20Wave/New%20Wave%20Hero/new%20new%20wave.png",
      alt: "Portrait collage of contemporary Macedonian filmmakers.",
      position: "center center"
    },
    {
      slug: "the-stranci",
      href: "the-stranci.html",
      title: "How to Be From Somewhere Else",
      kicker: "Culture | Internet",
      dek: "They came looking for a place the internet had not already flattened. They stayed for the ajvar.",
      image: "./Assets/Stranci/Stranci%20Pix/stranci-index-portrait.png",
      alt: "Three people posing for a phone camera against a yellow and pink painted backdrop with social media icons.",
      position: "center center"
    },
    {
      slug: "tose-proeski",
      href: "tose-proeski.html",
      title: "Toše Proeski",
      kicker: "Music | Pop",
      dek: "A singer still expanding the possibilities of his own voice.",
      image: "./Assets/Tose%20Hardest%20Thing/Tose%20Photos/tose-hero.png",
      alt: "Editorial collage for Toše Proeski and The Hardest Thing.",
      position: "center center"
    },
    {
      slug: "dj-ahmet",
      href: "dj-ahmet.html",
      title: '"DJ Ahmet" Finds the Rhythms of the Selo',
      kicker: "Cinema | Review",
      dek: "A village comedy of grief, rhythm, and the moment a new sound enters the air.",
      image: "./Assets/DJ%20Ahmet/dj-ahmet-lead.jpg",
      alt: "Still from DJ Ahmet with a young musician in a village setting.",
      position: "75% center"
    },
    {
      slug: "lake-ohrid-architecture-memory",
      href: "lake-ohrid-architecture-memory.html",
      title: "The Ohrid House and the Logic of Place",
      kicker: "Architecture | Urbanism",
      dek: "How one Macedonian vernacular tradition turned hillside, lake, climate, and craft into architecture.",
      image: "./Assets/Ohrid%20Architecture/Images/cover.png",
      alt: "Black-and-white collage of Ohrid house architecture with white plaster and dark timber windows.",
      position: "center center"
    },
    {
      slug: "longing-for-south",
      href: "longing-for-south.html",
      title: "Konstantin Miladinov's Longing for the South",
      kicker: "Poetry | Memory",
      dek: "A lyric of distance, return, and the southern light that keeps calling.",
      image: "./Assets/Longing%20for%20the%20South/longing-for-the-south.jpg",
      alt: "Lake Ohrid or Struga landscape evoking longing and memory.",
      position: "center center"
    }
  ];

  function currentSlug() {
    var file = window.location.pathname.split("/").pop() || "";
    return decodeURIComponent(file).replace(/\.html?$/i, "");
  }

  function hashSeed(value) {
    var hash = 2166136261;
    for (var index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function seededRandom(seed) {
    return function () {
      seed += 0x6D2B79F5;
      var next = seed;
      next = Math.imul(next ^ (next >>> 15), next | 1);
      next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
      return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
    };
  }

  function seededShuffle(items, seedValue) {
    var shuffled = items.slice();
    var random = seededRandom(hashSeed(seedValue));
    for (var index = shuffled.length - 1; index > 0; index -= 1) {
      var swapIndex = Math.floor(random() * (index + 1));
      var item = shuffled[index];
      shuffled[index] = shuffled[swapIndex];
      shuffled[swapIndex] = item;
    }
    return shuffled;
  }

  function buildCard(article) {
    var card = document.createElement("article");
    var link = document.createElement("a");
    var imageWrap = document.createElement("span");
    var image = document.createElement("img");
    var copy = document.createElement("div");
    var kicker = document.createElement("p");
    var title = document.createElement("h3");
    var dek = document.createElement("p");

    card.className = "more-from-muzej-card";
    link.className = "more-from-muzej-card-link";
    link.href = article.href;
    link.setAttribute("aria-label", "Read " + article.title);

    imageWrap.className = "more-from-muzej-card-image";
    if (article.position) {
      imageWrap.style.setProperty("--more-card-position", article.position);
    }

    image.src = article.image;
    image.alt = article.alt;
    image.loading = "lazy";
    image.decoding = "async";
    imageWrap.appendChild(image);

    copy.className = "more-from-muzej-card-copy";
    title.className = "more-from-muzej-card-title";
    title.textContent = article.title;

    if (article.kicker) {
      kicker.className = "more-from-muzej-card-kicker";
      kicker.textContent = article.kicker;
      copy.appendChild(kicker);
    }

    copy.appendChild(title);

    if (article.dek) {
      dek.className = "more-from-muzej-card-dek";
      dek.textContent = article.dek;
      copy.appendChild(dek);
    }

    link.appendChild(imageWrap);
    link.appendChild(copy);
    card.appendChild(link);
    return card;
  }

  function renderMoreFromMuzej() {
    var slug = currentSlug();
    var isArticle = articles.some(function (article) {
      return article.slug === slug;
    });

    if (!isArticle) {
      return;
    }

    var main = document.querySelector("main");
    if (!main) {
      return;
    }

    var section = main.querySelector(".more-from-muzej");
    if (!section) {
      section = document.createElement("section");
      main.appendChild(section);
    }

    var related = seededShuffle(articles.filter(function (article) {
      return article.slug !== slug;
    }), "more-from-muzej:" + slug).slice(0, 3);

    section.className = "more-from-muzej";
    section.setAttribute("aria-labelledby", "more-from-muzej-title");
    section.textContent = "";

    var frame = document.createElement("div");
    var heading = document.createElement("h2");
    var grid = document.createElement("div");

    frame.className = "more-from-muzej-frame";
    heading.className = "more-from-muzej-title";
    heading.id = "more-from-muzej-title";
    heading.textContent = "More from Muzej";
    grid.className = "more-from-muzej-card-grid";

    related.forEach(function (article) {
      grid.appendChild(buildCard(article));
    });

    frame.appendChild(heading);
    frame.appendChild(grid);
    section.appendChild(frame);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderMoreFromMuzej);
  } else {
    renderMoreFromMuzej();
  }
})();
