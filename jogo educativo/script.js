// ============================================================
// SE LIGA! — Escolhas que transformam
// Motor do jogo (JavaScript puro, sem dependências)
// ============================================================

(function () {
  "use strict";

  const STORAGE_KEY = "seliga_progresso_v1";

  /** Estado do jogo */
  let state = {
    characterId: null,
    chapterIdx: 0,
    situationIdx: 0,
    indicators: { c: 50, e: 50, p: 50, a: 50 },
    situationsDone: 0,
    phase: "narrative" // narrative -> question -> consequence -> pense -> sabia
  };

  /** Capítulos da trilha do personagem selecionado (definida em cada partida) */
  let CHAPTERS = STORYLINES.default;
  let TOTAL_SITUACOES = CHAPTERS.reduce((sum, ch) => sum + ch.situations.length, 0);

  function loadChaptersForCharacter() {
    CHAPTERS = (state.characterId && STORYLINES[state.characterId]) || STORYLINES.default;
    TOTAL_SITUACOES = CHAPTERS.reduce((sum, ch) => sum + ch.situations.length, 0);
  }

  // ---------------------------------------------------------
  // Utilidades
  // ---------------------------------------------------------
  function $(id) { return document.getElementById(id); }
  function clamp(v) { return Math.max(0, Math.min(100, v)); }

  function showScreen(id) {
    document.querySelectorAll(".screen").forEach(function (s) {
      s.hidden = (s.id !== id);
    });
    window.scrollTo(0, 0);
    const active = $(id);
    if (active) {
      active.setAttribute("tabindex", "-1");
      active.focus({ preventScroll: true });
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* localStorage indisponível — segue sem salvar */ }
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) { return null; }
  }

  function clearProgress() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  }

  function getCharacter() {
    return CHARACTERS.find(function (c) { return c.id === state.characterId; }) || CHARACTERS[0];
  }

  function personalize(text) {
    const name = getCharacter().name;
    return text.replace(/\{name\}/g, name);
  }

  // ---------------------------------------------------------
  // Tela inicial
  // ---------------------------------------------------------
  const saved = loadProgress();
  if (saved && saved.characterId) {
    $("continue-note").hidden = false;
  }

  $("btn-comecar").addEventListener("click", function () {
    if (saved && saved.characterId && confirm("Encontramos um progresso salvo. Deseja continuar de onde parou? (Cancelar para começar do zero)")) {
      state = saved;
      resumeFromState();
    } else {
      clearProgress();
      goToCharacterSelect();
    }
  });
  $("btn-sobre").addEventListener("click", function () { showScreen("screen-sobre"); });
  $("btn-comojogar").addEventListener("click", function () { showScreen("screen-comojogar"); });
  $("btn-sobre-voltar").addEventListener("click", function () { showScreen("screen-inicio"); });
  $("btn-comojogar-voltar").addEventListener("click", function () { showScreen("screen-inicio"); });
  $("btn-sobre-comecar").addEventListener("click", goToCharacterSelect);
  $("btn-comojogar-comecar").addEventListener("click", goToCharacterSelect);
  $("btn-personagem-voltar").addEventListener("click", function () { showScreen("screen-inicio"); });

  function resumeFromState() {
    loadChaptersForCharacter();
    renderHUD();
    if (state.chapterIdx >= CHAPTERS.length) {
      renderResultado();
    } else if (state.situationIdx > 0) {
      // Progresso salvo no meio de um capítulo: vai direto para a situação
      // atual, sem passar pela tela de abertura (que reiniciaria o capítulo).
      state.phase = "narrative";
      renderSituation();
      showScreen("screen-jogo");
    } else {
      renderChapterIntro();
    }
  }

  // ---------------------------------------------------------
  // Escolha de personagem
  // ---------------------------------------------------------
  function goToCharacterSelect() {
    renderCharacterGrid();
    showScreen("screen-personagem");
  }

  function renderCharacterGrid() {
    const grid = $("char-grid");
    grid.innerHTML = "";
    CHARACTERS.forEach(function (ch) {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "char-card";
      card.setAttribute("role", "radio");
      card.setAttribute("aria-checked", "false");
      card.dataset.id = ch.id;
      card.innerHTML =
        '<div class="char-avatar" style="background:' + ch.color + '" aria-hidden="true">' + ch.initial + '</div>' +
        '<div class="char-name">' + ch.name + '</div>' +
        '<div class="char-age">' + ch.age + ' anos</div>' +
        '<div class="char-profile">' + ch.profile + '</div>';
      card.addEventListener("click", function () {
        grid.querySelectorAll(".char-card").forEach(function (c) {
          c.classList.remove("selected");
          c.setAttribute("aria-checked", "false");
        });
        card.classList.add("selected");
        card.setAttribute("aria-checked", "true");
        state.characterId = ch.id;
        $("btn-personagem-continuar").disabled = false;
      });
      grid.appendChild(card);
    });
  }

  $("btn-personagem-continuar").addEventListener("click", function () {
    state.chapterIdx = 0;
    state.situationIdx = 0;
    state.situationsDone = 0;
    state.indicators = { c: 50, e: 50, p: 50, a: 50 };
    loadChaptersForCharacter();
    saveProgress();
    renderChapterIntro();
  });

  // ---------------------------------------------------------
  // Abertura de capítulo
  // ---------------------------------------------------------
  function renderChapterIntro() {
    const chapter = CHAPTERS[state.chapterIdx];
    $("chapter-badge").textContent = "CAPÍTULO " + chapter.id + " DE " + CHAPTERS.length;
    $("chapter-title").textContent = chapter.title;
    $("chapter-subtitle").textContent = chapter.subtitle;
    showScreen("screen-capitulo");
  }

  $("btn-chapter-continuar").addEventListener("click", function () {
    state.situationIdx = 0;
    state.phase = "narrative";
    renderHUD();
    renderSituation();
    showScreen("screen-jogo");
  });

  // ---------------------------------------------------------
  // HUD (progresso + indicadores)
  // ---------------------------------------------------------
  function renderHUD() {
    const chapter = CHAPTERS[state.chapterIdx];
    $("hud-chapter-label").textContent = "CAPÍTULO " + chapter.id + " DE " + CHAPTERS.length;
    const pct = Math.round((state.situationsDone / TOTAL_SITUACOES) * 100);
    $("progress-fill").style.width = pct + "%";
    ["c", "e", "p", "a"].forEach(function (key) {
      $("ind-" + key).style.width = clamp(state.indicators[key]) + "%";
    });
  }

  // ---------------------------------------------------------
  // Situação: narrativa -> pergunta -> consequência -> pare e pense -> você sabia
  // ---------------------------------------------------------
  function renderSituation() {
    const chapter = CHAPTERS[state.chapterIdx];
    const situation = chapter.situations[state.situationIdx];
    const container = $("game-content");
    container.innerHTML = "";

    const tag = document.createElement("div");
    tag.className = "ambiente-tag";
    tag.textContent = situation.ambiente.toUpperCase();
    container.appendChild(tag);

    const thread = document.createElement("div");
    thread.className = "chat-thread";
    container.appendChild(thread);

    const question = document.createElement("div");
    question.className = "question-text";
    question.hidden = true;
    question.textContent = personalize(situation.question);

    const optionsList = document.createElement("div");
    optionsList.className = "options-list";
    optionsList.hidden = true;

    container.appendChild(question);
    container.appendChild(optionsList);

    let i = 0;
    function showNextBubble() {
      if (i >= situation.bubbles.length) {
        question.hidden = false;
        optionsList.hidden = false;
        buildOptions(optionsList, situation);
        question.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      const b = situation.bubbles[i];
      const el = document.createElement("div");
      el.className = "bubble " + (b.who === "narrador" ? "bubble-narrador" : "bubble-fala");
      if (b.who !== "narrador") {
        const quem = document.createElement("span");
        quem.className = "bubble-quem";
        quem.textContent = b.who;
        el.appendChild(quem);
      }
      const txt = document.createElement("span");
      txt.textContent = personalize(b.text);
      el.appendChild(txt);
      thread.appendChild(el);
      i++;
      el.scrollIntoView({ behavior: "smooth", block: "end" });
      setTimeout(showNextBubble, 550);
    }
    showNextBubble();
  }

  function buildOptions(listEl, situation) {
    const letters = ["A", "B", "C", "D"];
    situation.options.forEach(function (opt, idx) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.innerHTML =
        '<span class="option-letter" aria-hidden="true">' + letters[idx] + '</span>' +
        '<span>' + personalize(opt.text) + '</span>';
      btn.addEventListener("click", function () {
        applyChoice(opt);
        renderConsequence(opt);
      });
      listEl.appendChild(btn);
    });
  }

  function applyChoice(opt) {
    Object.keys(opt.points).forEach(function (key) {
      state.indicators[key] = clamp(state.indicators[key] + opt.points[key]);
    });
    state.situationsDone++;
    renderHUD();
    saveProgress();
  }

  function renderConsequence(opt) {
    const container = $("game-content");
    container.innerHTML = "";

    const eye = document.createElement("div");
    eye.className = "reveal-eye";
    eye.innerHTML = eyeRevealSVG();
    container.appendChild(eye);

    const c1 = document.createElement("div");
    c1.className = "consequence-card tipo-consequencia";
    c1.innerHTML = "<h3>O que acontece</h3><p>" + personalize(opt.consequence) + "</p>";
    container.appendChild(c1);

    const c2 = document.createElement("div");
    c2.className = "consequence-card tipo-pense";
    c2.innerHTML = "<h3>Pare e pense</h3><p>" + personalize(opt.pareEPense) + "</p>";
    container.appendChild(c2);

    if (opt.vocesabia) {
      const c3 = document.createElement("div");
      c3.className = "consequence-card tipo-sabia";
      c3.innerHTML = "<h3>Você sabia?</h3><p>" + personalize(opt.vocesabia) + "</p>";
      container.appendChild(c3);
    }

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary btn-block";
    btn.textContent = "Continuar";
    btn.addEventListener("click", advance);
    container.appendChild(btn);

    container.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function eyeRevealSVG() {
    return '<svg width="64" height="40" viewBox="0 0 120 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<path d="M4 36 C 20 6, 100 6, 116 36 C 100 66, 20 66, 4 36 Z" fill="none" stroke="url(#gc)" stroke-width="3"/>' +
      '<circle cx="60" cy="36" r="15" fill="url(#gc)" opacity="0.85"/>' +
      '<circle cx="60" cy="36" r="6" fill="#17132a"/>' +
      '<defs><linearGradient id="gc" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#ff6f61"/><stop offset="100%" stop-color="#b98cff"/>' +
      '</linearGradient></defs></svg>';
  }

  function advance() {
    const chapter = CHAPTERS[state.chapterIdx];
    state.situationIdx++;
    if (state.situationIdx < chapter.situations.length) {
      saveProgress();
      renderSituation();
      $("screen-jogo").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // fim do capítulo
    state.chapterIdx++;
    state.situationIdx = 0;
    saveProgress();
    if (state.chapterIdx < CHAPTERS.length) {
      renderChapterIntro();
    } else {
      renderResultado();
    }
  }

  // ---------------------------------------------------------
  // Resultado final
  // ---------------------------------------------------------
  function computeProfile() {
    const avg = (state.indicators.c + state.indicators.e + state.indicators.p + state.indicators.a) / 4;
    return PERFIS.find(function (p) { return avg >= p.min && avg <= p.max; }) || PERFIS[0];
  }

  function renderResultado() {
    const perfil = computeProfile();
    $("profile-name").textContent = perfil.nome;
    $("profile-desc").textContent = perfil.descricao;

    const labels = { c: "Consciência", e: "Empatia", p: "Posicionamento", a: "Ação" };
    const colors = { c: "var(--lilac)", e: "var(--coral)", p: "var(--gold)", a: "var(--mint)" };
    const wrap = $("result-indicators");
    wrap.innerHTML = "";
    Object.keys(labels).forEach(function (key) {
      const val = clamp(state.indicators[key]);
      const row = document.createElement("div");
      row.className = "result-indicator-row";
      row.innerHTML =
        '<div class="result-indicator-top"><span class="label">' + labels[key] + '</span><span class="value">' + val + '/100</span></div>' +
        '<div class="result-track"><div class="result-fill" style="width:' + val + '%;background:' + colors[key] + '"></div></div>';
      wrap.appendChild(row);
    });

    showScreen("screen-resultado");
  }

  $("btn-resultado-continuar").addEventListener("click", function () {
    renderEagora();
  });

  // ---------------------------------------------------------
  // E agora?
  // ---------------------------------------------------------
  function renderEagora() {
    const list = $("eagora-list");
    list.innerHTML = "";
    EAGORA_ACOES.forEach(function (acao) {
      const item = document.createElement("div");
      item.className = "eagora-item";
      item.innerHTML =
        '<div class="eagora-num" aria-hidden="true">' + acao.numero + '</div>' +
        '<div class="eagora-body"><h3>' + acao.titulo + '</h3><p>' + acao.texto + '</p></div>';
      list.appendChild(item);
    });
    showScreen("screen-eagora");
  }

  $("btn-eagora-continuar").addEventListener("click", function () {
    showScreen("screen-final");
  });

  // ---------------------------------------------------------
  // Tela final
  // ---------------------------------------------------------
  $("btn-jogar-novamente").addEventListener("click", function () {
    clearProgress();
    state = {
      characterId: null,
      chapterIdx: 0,
      situationIdx: 0,
      indicators: { c: 50, e: 50, p: 50, a: 50 },
      situationsDone: 0,
      phase: "narrative"
    };
    $("continue-note").hidden = true;
    showScreen("screen-inicio");
  });

  $("btn-compartilhar").addEventListener("click", function () {
    const shareData = {
      title: "SE LIGA! — Escolhas que transformam",
      text: "Joguei o SE LIGA! e aprendi a reconhecer sinais de violências invisíveis. Você também deveria jogar."
    };
    if (navigator.share) {
      navigator.share(shareData).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(shareData.text).then(function () {
        alert("Texto copiado! Compartilhe com quem você quiser.");
      }).catch(function () {
        alert(shareData.text);
      });
    } else {
      alert(shareData.text);
    }
  });

})();
