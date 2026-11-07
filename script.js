/* =============================================================
   UMA CARTA PARA MAELI ❤️
   ============================================================= */

/* -------------------------------------------------------------
   FOTOGRAFIAS — edite somente esta lista
   -------------------------------------------------------------
   arquivo   → nome do arquivo dentro de assets/images/
   categoria → "juntos" (carinho, passeios) ou "fe" (terno, igreja, cultos)
   formato   → "vertical" (9:16, foto de celular inteira), "retrato" (4:5),
               "paisagem" (3:2) ou "quadrado" (1:1)
   legenda   → texto exibido junto da foto
   descricao → texto alternativo (acessibilidade), curto e neutro

   • Para usar menos fotos (mínimo 6), apague as linhas que sobrarem.
   • A ordem da lista é a ordem do álbum.
   • Se um arquivo ainda não existir, aparece um espaço reservado.
   • As legendas abaixo são sugestões: confira se cada uma combina
     com a foto real antes de publicar.
   ------------------------------------------------------------- */
const FOTOS = [
  {
    arquivo: "foto-01.jpg",
    categoria: "juntos",
    formato: "vertical",
    legenda: "Seu sorriso nessa foto ainda me lembra que eram justamente essas pequenas coisas que tornavam meus dias tão especiais.",
    descricao: "Nós dois sorrindo, usando chapéus"
  },
  {
    arquivo: "foto-02.jpg",
    categoria: "juntos",
    formato: "paisagem",
    legenda: "Se pudesse reviver alguns momentos, escolheria novamente aqueles em que tinha você ao meu lado.",
    descricao: "Selfie nossa em um passeio, num dia de sol"
  },
  {
    arquivo: "foto-03.jpg",
    categoria: "fe",
    formato: "vertical",
    legenda: "Naquele dia, a mesma palavra estava escrita em nós dois: creio. Olhar para essa fotografia me faz lembrar de quanto era especial ter você ao meu lado também na caminhada da fé. Sua presença faz falta.",
    descricao: "Nós dois com camisetas pretas escritas \"Creio\""
  },
  {
    arquivo: "foto-04.jpg",
    categoria: "juntos",
    formato: "paisagem",
    legenda: "Testa com testa, um momento só nosso. Existem momentos que passam, mas nunca deixam de morar dentro da gente.",
    descricao: "Nós dois com as testas encostadas, mostrando os anéis"
  },
  {
    arquivo: "foto-05.jpg",
    categoria: "fe",
    formato: "vertical",
    legenda: "Mais do que estar no mesmo lugar, era especial compartilhar com você momentos que fortaleciam nossa fé. Hoje sinto falta não apenas da sua companhia, mas também de viver ao seu lado aqueles momentos tão importantes na presença de Deus.",
    descricao: "Nós dois arrumados, eu de terno e gravata rosa, você de camisa rosa"
  }
];

const PASTA_FOTOS = "assets/images/";

/* -------------------------------------------------------------
   VÍDEOS — edite somente esta lista (entre 3 e 8 vídeos)
   -------------------------------------------------------------
   src         → caminho do arquivo MP4 (pasta assets/videos/)
   title       → título curto exibido acima da legenda
   caption     → legenda romântica do vídeo
   description → (opcional) texto pequeno abaixo da legenda
   poster      → (opcional) imagem de capa, ex.: "assets/videos/capa-01.jpg"
                 Sem capa, o próprio vídeo mostra um quadro inicial.

   • A ordem da lista é a ordem da seção.
   • Para usar menos vídeos, apague as entradas que sobrarem.
   • Se um arquivo ainda não existir, aparece um espaço reservado.
   • As legendas abaixo são sugestões: confira se cada uma combina
     com o que realmente aparece no vídeo antes de publicar.
   ------------------------------------------------------------- */
const VIDEOS = [
  {
    src: "assets/videos/video-01.mp4",
    poster: "assets/videos/capa-01.jpg",
    title: "Lado a lado",
    caption: "É estranho como momentos que pareciam tão simples, como caminhar ao seu lado, se tornam lembranças tão preciosas."
  },
  {
    src: "assets/videos/video-02.mp4",
    poster: "assets/videos/capa-02.jpg",
    title: "Nossas brincadeiras",
    caption: "Seu sorriso, nossas brincadeiras e esses pequenos momentos são algumas das coisas que continuam fazendo falta."
  },
  {
    src: "assets/videos/video-03.mp4",
    poster: "assets/videos/capa-03.jpg",
    title: "Tão perto",
    caption: "Às vezes, tudo o que eu queria era poder voltar por alguns segundos e viver novamente um momento como esse."
  }
];

/* ============================================================= */

(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const prefersReduced = () => reduceMotion.matches;

  const HEART_PATH =
    "M16 27s-10-6.2-10-13.6A5.4 5.4 0 0 1 16 10.2a5.4 5.4 0 0 1 10 3.2C26 20.8 16 27 16 27z";

  const RATIOS = { vertical: "9 / 16", retrato: "4 / 5", paisagem: "3 / 2", quadrado: "1 / 1" };
  const TILTS = ["-1.2deg", "0.9deg", "-0.6deg", "1.3deg", "-0.9deg", "0.6deg"];

  const $ = (sel) => document.querySelector(sel);

  const body = document.body;
  const intro = $("#intro");
  const envelope = $("#envelope");
  const openBtn = $("#open-letter");
  const content = $("#content");

  /* -----------------------------------------------------------
     Corações flutuantes
     ----------------------------------------------------------- */
  const heartsBg = $(".hearts-bg");
  let heartsTimer = null;

  function spawnHeart() {
    if (document.hidden || prefersReduced()) return;
    if (heartsBg.childElementCount > 14) return;

    const el = document.createElement("span");
    el.className = "float-heart";
    const size = 9 + Math.random() * 14;
    el.style.left = Math.random() * 100 + "vw";
    el.style.setProperty("--size", size.toFixed(1) + "px");
    el.style.setProperty("--dur", (13 + Math.random() * 10).toFixed(1) + "s");
    el.style.setProperty("--drift", (Math.random() * 60 - 30).toFixed(0) + "px");
    el.style.setProperty("--alpha", (0.14 + Math.random() * 0.22).toFixed(2));
    if (Math.random() < 0.3) el.style.color = "var(--gold-400)";
    el.innerHTML = '<svg viewBox="0 0 32 32"><path d="' + HEART_PATH + '"/></svg>';
    el.addEventListener("animationend", () => el.remove());
    heartsBg.appendChild(el);
  }

  function startHearts() {
    stopHearts();
    if (prefersReduced()) return;
    for (let i = 0; i < 3; i++) setTimeout(spawnHeart, i * 900);
    heartsTimer = setInterval(spawnHeart, 1800);
  }

  function stopHearts() {
    clearInterval(heartsTimer);
    heartsTimer = null;
  }

  /* -----------------------------------------------------------
     Abertura do envelope
     ----------------------------------------------------------- */
  body.classList.add("is-locked");

  function openLetter() {
    openBtn.disabled = true;
    intro.classList.add("is-opening");
    envelope.classList.add("is-open");

    const wait = prefersReduced() ? 300 : 2300;

    setTimeout(() => {
      intro.classList.add("is-hidden");
      body.classList.remove("is-locked");
      content.classList.add("is-visible");
      showMusicButton();
      window.scrollTo(0, 0);
      setupReveals();
      setTimeout(() => {
        intro.setAttribute("hidden", "");
        $("#carta-titulo").setAttribute("tabindex", "-1");
        $("#carta-titulo").focus({ preventScroll: true });
      }, 1100);
    }, wait);
  }

  openBtn.addEventListener("click", openLetter);

  /* -----------------------------------------------------------
     Carta — monta parágrafos sem alterar o texto
     ----------------------------------------------------------- */
  const letterBody = $("#letter-body");

  function buildLetter() {
    const source = $("#carta-texto");
    let raw = source ? source.textContent : "";

    // remove apenas as linhas vazias do começo/fim e o recuo comum do bloco
    raw = raw.replace(/\r\n?/g, "\n").replace(/^\s*\n/, "").replace(/\n\s*$/, "");
    const lines = raw.split("\n");
    const indents = lines
      .filter((l) => l.trim() !== "")
      .map((l) => l.match(/^[ \t]*/)[0].length);
    const common = indents.length ? Math.min.apply(null, indents) : 0;
    raw = lines.map((l) => l.slice(common)).join("\n");

    const paragraphs = raw.split(/\n[ \t]*\n+/).filter((p) => p.trim() !== "");

    const isPlaceholder = raw.trim() === "" || raw.trim() === "[COLE AQUI O TEXTO ORIGINAL DA CARTA]";

    paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text; // exibido exatamente como foi colado
      if (isPlaceholder) p.className = "letter__placeholder";
      // parágrafos mais longos levam um pouco mais de tempo para "serem escritos"
      const dur = Math.min(4.2, 1.6 + text.length / 260);
      p.style.setProperty("--write-dur", dur.toFixed(2) + "s");
      letterBody.appendChild(p);
    });
  }

  function writeParagraph(p, delay) {
    setTimeout(() => {
      p.classList.add("is-written");
      p.addEventListener(
        "animationend",
        () => p.classList.add("is-done"),
        { once: true }
      );
    }, delay);
  }

  /* -----------------------------------------------------------
     Galeria
     ----------------------------------------------------------- */
  const album = $("#album");
  const items = [];

  function placeholderEl(foto) {
    const ph = document.createElement("div");
    ph.className = "memory__placeholder";
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", "Espaço reservado para " + foto.arquivo);
    ph.innerHTML =
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="' + HEART_PATH + '"/></svg>' +
      "<span>Espaço reservado</span><small></small>";
    ph.querySelector("small").textContent = PASTA_FOTOS + foto.arquivo;
    return ph;
  }

  function buildGallery() {
    FOTOS.forEach((foto, i) => {
      const fig = document.createElement("figure");
      fig.className = "memory memory--" + (foto.categoria === "fe" ? "fe" : "juntos") +
        (foto.formato === "vertical" ? " memory--vertical" : "");
      fig.style.setProperty("--ratio", RATIOS[foto.formato] || RATIOS.retrato);

      const frame = document.createElement("button");
      frame.type = "button";
      frame.className = "memory__frame";
      frame.style.setProperty("--tilt", TILTS[i % TILTS.length]);
      frame.setAttribute("aria-label", "Ampliar fotografia " + (i + 1));

      const img = new Image();
      img.className = "memory__img";
      img.src = PASTA_FOTOS + foto.arquivo;
      img.alt = foto.descricao || "";
      img.loading = "lazy";
      img.decoding = "async";

      const item = { foto, missing: false };
      img.addEventListener("error", () => {
        item.missing = true;
        img.replaceWith(placeholderEl(foto));
      }, { once: true });

      const zoom = document.createElement("span");
      zoom.className = "memory__zoom";
      zoom.setAttribute("aria-hidden", "true");
      zoom.innerHTML =
        '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M11 8.5v5M8.5 11h5"/></svg>';

      frame.append(img, zoom);
      frame.addEventListener("click", () => openLightbox(i, frame));

      const cap = document.createElement("figcaption");
      cap.className = "memory__caption";
      const num = document.createElement("span");
      num.className = "memory__number";
      num.textContent = String(i + 1).padStart(2, "0");
      const txt = document.createElement("p");
      txt.className = "memory__text";
      txt.textContent = foto.legenda;
      cap.append(num, txt);

      fig.append(frame, cap);
      album.appendChild(fig);
      items.push(item);
    });
  }

  /* -----------------------------------------------------------
     Lightbox
     ----------------------------------------------------------- */
  const lb = $("#lightbox");
  const lbMedia = $("#lb-media");
  const lbCaption = $("#lb-caption");
  const lbCount = $("#lb-count");
  let current = 0;
  let lastTrigger = null;

  function renderLightbox() {
    const { foto, missing } = items[current];
    lbMedia.innerHTML = "";
    if (missing) {
      lbMedia.appendChild(placeholderEl(foto));
    } else {
      const img = new Image();
      img.src = PASTA_FOTOS + foto.arquivo;
      img.alt = foto.descricao || "";
      img.addEventListener("error", () => img.replaceWith(placeholderEl(foto)), { once: true });
      lbMedia.appendChild(img);
    }
    lbCaption.textContent = foto.legenda;
    lbCount.textContent = current + 1 + " / " + items.length;

    // pré-carrega a próxima
    const next = items[(current + 1) % items.length];
    if (next && !next.missing) new Image().src = PASTA_FOTOS + next.foto.arquivo;
  }

  function openLightbox(index, trigger) {
    current = index;
    lastTrigger = trigger || null;
    renderLightbox();
    lb.hidden = false;
    body.classList.add("is-locked");
    requestAnimationFrame(() => lb.classList.add("is-open"));
    $("#lb-close").focus();
  }

  function closeLightbox() {
    lb.classList.remove("is-open");
    body.classList.remove("is-locked");
    setTimeout(() => { lb.hidden = true; lbMedia.innerHTML = ""; }, prefersReduced() ? 0 : 450);
    if (lastTrigger) lastTrigger.focus({ preventScroll: true });
  }

  function step(dir) {
    current = (current + dir + items.length) % items.length;
    renderLightbox();
  }

  $("#lb-close").addEventListener("click", closeLightbox);
  $("#lb-prev").addEventListener("click", () => step(-1));
  $("#lb-next").addEventListener("click", () => step(1));

  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target === lbMedia || e.target.classList.contains("lightbox__figure")) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "Tab") {
      // mantém o foco dentro do lightbox
      const focusables = lb.querySelectorAll("button");
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // deslizar no celular
  let touchX = null;
  let touchY = null;
  lb.addEventListener("touchstart", (e) => {
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
  }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    const dy = e.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    touchX = touchY = null;
  }, { passive: true });

  /* -----------------------------------------------------------
     Vídeos
     ----------------------------------------------------------- */
  const reelsWrap = $("#reels");
  const reelVideos = [];

  function reelPlaceholder(src) {
    const ph = document.createElement("div");
    ph.className = "reel__placeholder";
    ph.setAttribute("role", "img");
    ph.setAttribute("aria-label", "Espaço reservado para " + src);
    ph.innerHTML =
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="' + HEART_PATH + '"/></svg>' +
      "<span>Espaço reservado para vídeo</span><small></small>";
    ph.querySelector("small").textContent = src;
    return ph;
  }

  function pauseOtherVideos(except) {
    reelVideos.forEach((v) => { if (v !== except && !v.paused) v.pause(); });
  }

  // carrega o arquivo apenas quando o vídeo se aproxima da tela
  function loadVideo(video) {
    if (video.dataset.loaded) return;
    video.dataset.loaded = "1";
    video.preload = "metadata";
    // "#t=0.1" faz o navegador exibir um quadro inicial como miniatura
    video.src = video.dataset.src + (video.poster ? "" : "#t=0.1");
  }

  function buildVideos() {
    if (!reelsWrap) return;

    VIDEOS.forEach((item, i) => {
      const fig = document.createElement("figure");
      fig.className = "reel";

      const screen = document.createElement("div");
      screen.className = "reel__screen";

      const video = document.createElement("video");
      video.className = "reel__video";
      video.preload = "none";
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.controls = false;
      video.dataset.src = item.src;
      if (item.poster) video.poster = item.poster;
      video.setAttribute("aria-label", item.title || "Vídeo " + (i + 1));

      const cover = document.createElement("button");
      cover.type = "button";
      cover.className = "reel__cover";
      cover.setAttribute("aria-label", "Assistir: " + (item.title || "vídeo " + (i + 1)));
      cover.innerHTML =
        '<span class="reel__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z"/></svg></span>' +
        '<span class="reel__badge" aria-hidden="true"></span>';
      cover.querySelector(".reel__badge").textContent = String(i + 1).padStart(2, "0");

      // preserva a proporção original do vídeo (horizontal ou vertical)
      video.addEventListener("loadedmetadata", () => {
        if (video.videoWidth && video.videoHeight) {
          const r = video.videoWidth / video.videoHeight;
          screen.style.setProperty("--vratio", video.videoWidth + " / " + video.videoHeight);
          screen.style.setProperty("--vratio-num", r.toFixed(4));
        }
      });

      video.addEventListener("error", () => {
        if (fig.classList.contains("is-missing")) return;
        fig.classList.add("is-missing");
        video.remove();
        screen.appendChild(reelPlaceholder(item.src));
      });

      video.addEventListener("play", () => {
        pauseOtherVideos(video);
        pauseMusicForVideo();
        fig.classList.add("is-playing", "is-started");
      });
      video.addEventListener("pause", () => fig.classList.remove("is-playing"));

      cover.addEventListener("click", () => {
        loadVideo(video);
        video.controls = true;
        fig.classList.add("is-started");
        const p = video.play();
        if (p && p.catch) p.catch(() => {});
        video.focus({ preventScroll: true });
      });

      screen.append(video, cover);

      const cap = document.createElement("figcaption");
      cap.className = "reel__caption";
      if (item.title) {
        const t = document.createElement("p");
        t.className = "reel__title";
        t.textContent = item.title;
        cap.appendChild(t);
      }
      const txt = document.createElement("p");
      txt.className = "reel__text";
      txt.textContent = item.caption || "";
      cap.appendChild(txt);
      if (item.description) {
        const d = document.createElement("p");
        d.className = "reel__desc";
        d.textContent = item.description;
        cap.appendChild(d);
      }

      fig.append(screen, cap);
      reelsWrap.appendChild(fig);
      reelVideos.push(video);
    });

    // carregamento sob demanda
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            loadVideo(en.target);
            io.unobserve(en.target);
          }
        });
      }, { rootMargin: "300px 0px" });
      reelVideos.forEach((v) => io.observe(v));
    } else {
      reelVideos.forEach(loadVideo);
    }
  }

  /* -----------------------------------------------------------
     Revelações ao rolar
     ----------------------------------------------------------- */
  function setupReveals() {
    const paragraphs = Array.from(letterBody.querySelectorAll("p"));
    const others = document.querySelectorAll(".reveal, .memory, .reel");

    if (!("IntersectionObserver" in window)) {
      paragraphs.forEach((p) => p.classList.add("is-done"));
      others.forEach((el) => el.classList.add("is-in"));
      return;
    }

    // parágrafos da carta: escritos um após o outro
    let queueEnd = 0;
    const letterObserver = new IntersectionObserver((entries) => {
      const now = performance.now();
      entries
        .filter((en) => en.isIntersecting)
        .sort((a, b) => paragraphs.indexOf(a.target) - paragraphs.indexOf(b.target))
        .forEach((en) => {
          const p = en.target;
          letterObserver.unobserve(p);
          if (prefersReduced()) { p.classList.add("is-done"); return; }
          const start = Math.max(now, queueEnd);
          writeParagraph(p, start - now);
          const dur = parseFloat(p.style.getPropertyValue("--write-dur")) || 2;
          queueEnd = start + dur * 1000 * 0.55;
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

    paragraphs.forEach((p) => letterObserver.observe(p));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          observer.unobserve(en.target);
        }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });

    others.forEach((el) => observer.observe(el));
  }

  /* -----------------------------------------------------------
     Música (somente após interação)
     ----------------------------------------------------------- */
  const audio = $("#music");
  const musicBtn = $("#music-toggle");
  const label = musicBtn.querySelector(".music-toggle__label");
  let unavailable = false;

  function showMusicButton() {
    musicBtn.hidden = false;
  }

  const song = $(".song");
  const songBtn = $("#song-play");
  const songLabel = songBtn ? songBtn.querySelector(".song__play-label") : null;

  function setPlaying(on) {
    if (song) song.classList.toggle("is-playing", on);
    if (songBtn) {
      songBtn.setAttribute("aria-pressed", String(on));
      if (!unavailable) songLabel.textContent = on ? "Pausar nossa música" : "Ouvir nossa música";
    }
    musicBtn.classList.toggle("is-playing", on);
    musicBtn.setAttribute("aria-pressed", String(on));
    musicBtn.setAttribute("aria-label", on ? "Pausar música" : "Tocar música");
  }

  function markUnavailable() {
    unavailable = true;
    setPlaying(false);
    musicBtn.classList.add("is-unavailable");
    label.textContent = "Sem música";
    if (songLabel) songLabel.textContent = "Música indisponível";
    musicBtn.setAttribute("aria-label", "Música indisponível");
  }

  audio.addEventListener("error", markUnavailable);
  audio.addEventListener("play", () => {
    setPlaying(true);
    pauseOtherVideos(null); // nunca tocar música e vídeo ao mesmo tempo
  });
  audio.addEventListener("pause", () => setPlaying(false));

  function toggleMusic() {
    if (unavailable) return;
    if (audio.paused) {
      audio.volume = 0;
      const playing = audio.play();
      if (playing && playing.catch) playing.catch(() => { if (audio.error) markUnavailable(); });
      fadeVolume(0.55);
    } else {
      audio.pause();
    }
  }

  musicBtn.addEventListener("click", toggleMusic);
  if (songBtn) songBtn.addEventListener("click", toggleMusic);

  // quando um vídeo começa, a música de fundo pausa para que a voz seja ouvida
  function pauseMusicForVideo() {
    if (!audio.paused) audio.pause();
  }

  function fadeVolume(target) {
    const start = performance.now();
    const from = audio.volume;
    const dur = 1600;
    (function tick(t) {
      const k = Math.min(1, (t - start) / dur);
      audio.volume = from + (target - from) * k;
      if (k < 1) requestAnimationFrame(tick);
    })(start);
  }

  /* -----------------------------------------------------------
     Outros
     ----------------------------------------------------------- */
  $("#back-top").addEventListener("click", () => {
    $("#carta").scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth" });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopHearts();
    else startHearts();
  });

  const onMotionChange = () => (prefersReduced() ? stopHearts() : startHearts());
  if (reduceMotion.addEventListener) reduceMotion.addEventListener("change", onMotionChange);
  else if (reduceMotion.addListener) reduceMotion.addListener(onMotionChange);

  /* ----------------------------------------------------------- */
  buildLetter();
  buildGallery();
  buildVideos();
  startHearts();
})();
