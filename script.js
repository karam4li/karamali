(function () {
  "use strict";

  /* ---------- theme toggle ---------- */
  var root = document.documentElement;
  var themeToggle = document.getElementById("theme-toggle");
  var stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-color-mode", stored);

  themeToggle.addEventListener("click", function () {
    var current = root.getAttribute("data-color-mode") === "light" ? "dark" : "light";
    root.setAttribute("data-color-mode", current);
    localStorage.setItem("theme", current);
  });

  /* ---------- local time ---------- */
  function updateLocalTime() {
    var el = document.getElementById("local-time");
    if (!el) return;
    var fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit"
    });
    el.textContent = fmt.format(new Date()) + " local time (Glasgow)";
  }
  updateLocalTime();
  setInterval(updateLocalTime, 30000);

  /* ---------- pinned repos ---------- */
  var pinnedGrid = document.getElementById("pinned-grid");
  PINNED_REPOS.forEach(function (repo) {
    var card = document.createElement("a");
    card.className = "repo-card";
    card.href = repo.url;
    card.target = "_blank";
    card.rel = "noopener";

    var desc = repo.description
      ? repo.description
      : "No description provided" + (repo.meta ? " (yes, the irony of the site you're on right now is not lost on me)." : ".");

    card.innerHTML =
      '<div class="repo-card-top">' +
        '<span class="repo-name">' +
          '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2H4.5a1 1 0 0 0-.9 1.45.75.75 0 1 1-1.34.67A2.5 2.5 0 0 1 2 11.5Z"></path></svg>' +
          repo.name +
        '</span>' +
        '<span class="repo-visibility">Public</span>' +
      '</div>' +
      '<p class="repo-desc">' + desc + '</p>' +
      '<div class="repo-meta">' +
        '<span><span class="lang-dot" style="background:' + repo.color + '"></span>' + repo.language + '</span>' +
        '<span>' +
          '<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>' +
          repo.stars +
        '</span>' +
        '<span>' +
          '<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path></svg>' +
          repo.forks +
        '</span>' +
      '</div>';
    pinnedGrid.appendChild(card);
  });

  /* ---------- language bar ---------- */
  var total = LANGUAGES.reduce(function (sum, l) { return sum + l.bytes; }, 0);
  var langBar = document.getElementById("lang-bar");
  var langLegend = document.getElementById("lang-legend");
  LANGUAGES.forEach(function (lang) {
    var pct = (lang.bytes / total) * 100;
    var seg = document.createElement("span");
    seg.style.width = pct + "%";
    seg.style.background = lang.color;
    seg.title = lang.name + " " + pct.toFixed(1) + "%";
    langBar.appendChild(seg);

    var li = document.createElement("li");
    li.innerHTML = '<span class="lang-dot" style="background:' + lang.color + '"></span>' + lang.name + ' ' + pct.toFixed(1) + '%';
    langLegend.appendChild(li);
  });

  /* ---------- contribution graph ---------- */
  var grid = document.getElementById("contrib-grid");
  var daysCol = document.getElementById("contrib-days");
  var monthsRow = document.getElementById("contrib-months");
  var tooltip = document.getElementById("cell-tooltip");
  document.getElementById("contrib-count").textContent = CONTRIB_TOTAL;

  var dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];
  dayLabels.forEach(function (label) {
    var span = document.createElement("span");
    span.textContent = label;
    daysCol.appendChild(span);
  });

  var quips = [
    "Nothing. Silence. Probably touching grass.",
    "Empty square. Ambition was elsewhere that day.",
    "No commits, no regrets.",
    "This square is participating in a silent protest.",
    "Rest day. Recharging the procrastination reserves."
  ];

  var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var seenMonths = {};

  CONTRIB_DATA.forEach(function (entry) {
    var row = entry[0], col = entry[1], level = entry[2], date = entry[3];
    var cell = document.createElement("div");
    cell.className = "cell interactive lvl-" + level;
    cell.style.gridColumnStart = col + 1;
    cell.style.gridRowStart = row + 1;
    cell.dataset.date = date;
    cell.dataset.level = level;

    var monthKey = date.slice(0, 7);
    if (!seenMonths[monthKey]) {
      seenMonths[monthKey] = true;
      var d = new Date(date + "T00:00:00");
      var label = document.createElement("span");
      label.textContent = monthNames[d.getMonth()];
      label.style.left = (col * 14) + "px";
      monthsRow.appendChild(label);
    }

    cell.addEventListener("mouseenter", function (e) {
      var d = new Date(date + "T00:00:00");
      var pretty = d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
      var text;
      if (level === 0) {
        text = quips[Math.floor(Math.random() * quips.length)] + "  ·  " + pretty;
      } else {
        text = level + " contribution" + (level === 1 ? "" : "s") + " on " + pretty;
      }
      tooltip.textContent = text;
      var rect = cell.getBoundingClientRect();
      tooltip.style.left = (rect.left + rect.width / 2) + "px";
      tooltip.style.top = (rect.top - 8) + "px";
      tooltip.classList.add("show");
    });
    cell.addEventListener("mouseleave", function () {
      tooltip.classList.remove("show");
    });

    grid.appendChild(cell);
  });

  /* ---------- terminal typing effect ---------- */
  var terminalLines = [
    { prompt: "whoami", out: "mohammed_ali" },
    { prompt: "cat status.txt", out: "building things, breaking things, fixing things (in that order)" },
    { prompt: "git log --oneline -3", out: "a1b2c3d automate the boring stuff\n7f8e9d2 automate the automation\n0f1a2b3 realise this is a bit much" }
  ];

  function typeTerminal() {
    var el = document.getElementById("terminal-body");
    if (!el) return;
    el.innerHTML = "";
    var lineIndex = 0;

    function typeLine() {
      if (lineIndex >= terminalLines.length) {
        var cursorLine = document.createElement("div");
        cursorLine.innerHTML = '<span class="prompt">$</span> <span class="cursor"></span>';
        el.appendChild(cursorLine);
        return;
      }
      var line = terminalLines[lineIndex];
      var lineEl = document.createElement("div");
      var promptSpan = document.createElement("span");
      promptSpan.className = "prompt";
      promptSpan.textContent = "$ ";
      var typed = document.createElement("span");
      lineEl.appendChild(promptSpan);
      lineEl.appendChild(typed);
      el.appendChild(lineEl);

      var i = 0;
      var interval = setInterval(function () {
        typed.textContent += line.prompt[i];
        i++;
        if (i >= line.prompt.length) {
          clearInterval(interval);
          var outEl = document.createElement("div");
          outEl.className = "out";
          outEl.textContent = line.out;
          el.appendChild(outEl);
          lineIndex++;
          setTimeout(typeLine, 350);
        }
      }, 35);
    }
    typeLine();
  }

  var terminalStarted = false;
  var terminalSection = document.getElementById("readme");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting && !terminalStarted) {
        terminalStarted = true;
        typeTerminal();
      }
    });
  }, { threshold: 0.2 });
  if (terminalSection) observer.observe(terminalSection);

  /* ---------- copy email ---------- */
  var copyBtn = document.getElementById("copy-email");
  var copyToast = document.getElementById("copy-toast");
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText("mohammed.ali.karmali@gmail.com").then(function () {
      copyToast.classList.add("show");
      setTimeout(function () { copyToast.classList.remove("show"); }, 1400);
    });
  });

  /* ---------- follow button joke ---------- */
  document.getElementById("follow-btn").addEventListener("click", function () {
    this.querySelector("span").textContent = "Just email me, honestly";
  });

  /* ---------- konami code easter egg ---------- */
  var konamiSeq = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  var konamiPos = 0;

  function fireConfetti() {
    var root = document.getElementById("confetti-root");
    var colors = ["#39d353", "#26a641", "#4493f8", "#eac54f", "#f85149"];
    for (var i = 0; i < 120; i++) {
      var piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (2.5 + Math.random() * 2) + "s";
      piece.style.animationDelay = (Math.random() * 0.5) + "s";
      piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      root.appendChild(piece);
      (function (p) {
        setTimeout(function () { p.remove(); }, 5000);
      })(piece);
    }
  }

  function handleKonami(key) {
    if (key === konamiSeq[konamiPos]) {
      konamiPos++;
      if (konamiPos === konamiSeq.length) {
        konamiPos = 0;
        fireConfetti();
      }
    } else {
      konamiPos = key === konamiSeq[0] ? 1 : 0;
    }
  }

  window.addEventListener("keydown", function (e) {
    handleKonami(e.key.length === 1 ? e.key.toLowerCase() : e.key);
  });

  var konamiHint = document.getElementById("konami-hint");
  if (konamiHint) {
    konamiHint.addEventListener("click", function (e) {
      e.preventDefault();
      fireConfetti();
    });
  }
})();
