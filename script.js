/**
 * The Quiet Press — Portfolio Client Interactions
 * Mohammed Ali (karamali.org)
 * Layout: Andrej Karpathy Architecture (https://karpathy.ai/)
 */

(function () {
  "use strict";

  /* ---------- Real-Time Glasgow Clock ---------- */
  function updateGlasgowTime() {
    var el = document.getElementById("local-time");
    if (!el) return;
    try {
      var formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      el.textContent = formatter.format(new Date()) + " (Glasgow, UK)";
    } catch (e) {
      el.textContent = new Date().toLocaleTimeString() + " (Glasgow, UK)";
    }
  }
  updateGlasgowTime();
  setInterval(updateGlasgowTime, 1000);

  /* ---------- Karpathy-style Email Reveal (Anti-Spam) ---------- */
  var emailUserRot13 = "zbunzzrq.nyv.xneznyv"; // mohammed.ali.karmali in rot13
  var emailHost = "gmail.com";
  var isEmailRevealed = false;

  function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function (c) {
      var base = c <= 'Z' ? 65 : 97;
      return String.fromCharCode(base + (c.charCodeAt(0) - base + 13) % 26);
    });
  }

  var emailBtn = document.getElementById("iemail");
  var emailBox = document.getElementById("demail");
  var copyToast = document.getElementById("copy-toast");
  var toastTimer = null;

  function showToast(msg) {
    if (!copyToast) return;
    copyToast.textContent = msg;
    copyToast.classList.add("visible");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      copyToast.classList.remove("visible");
    }, 2800);
  }

  if (emailBtn && emailBox) {
    emailBtn.addEventListener("click", function (e) {
      e.preventDefault();
      var realEmail = rot13(emailUserRot13) + "@" + emailHost;
      
      if (!isEmailRevealed) {
        emailBox.innerHTML = 'Email: <a href="mailto:' + realEmail + '">' + realEmail + '</a> &bull; <button id="btnCopyEmailInline" style="background:none; border:none; color:var(--press-clay); text-decoration:underline; cursor:pointer; font-family:inherit; font-size:inherit; padding:0;">copy</button>';
        emailBox.classList.add("is-visible");
        isEmailRevealed = true;
        
        var copyBtn = document.getElementById("btnCopyEmailInline");
        if (copyBtn) {
          copyBtn.addEventListener("click", function () {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(realEmail).then(function () {
                showToast("Copied email to clipboard: " + realEmail);
              });
            } else {
              showToast("Email: " + realEmail);
            }
          });
        }
      } else {
        emailBox.classList.remove("is-visible");
        isEmailRevealed = false;
      }
    });
  }

  /* ---------- Theme Switcher (Light / Dark) ---------- */
  var themeToggleBtn = document.getElementById("pressThemeToggle");
  var iconSun = document.getElementById("themeIconSun");
  var iconMoon = document.getElementById("themeIconMoon");

  function getPreferredTheme() {
    var stored = localStorage.getItem("press-theme") || localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    var isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    document.documentElement.setAttribute("data-color-mode", isDark ? "dark" : "light");
    localStorage.setItem("press-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (iconSun && iconMoon) {
      iconSun.style.display = isDark ? "block" : "none";
      iconMoon.style.display = isDark ? "none" : "block";
    }
  }

  // Initialize theme on load
  var currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      var isDark = document.documentElement.classList.contains("dark");
      applyTheme(isDark ? "light" : "dark");
    });
  }

  /* ---------- Keyboard Shortcut: 'T' toggles theme ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.key === "t" || e.key === "T") {
      var activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
      if (activeTag !== "input" && activeTag !== "textarea") {
        var isDark = document.documentElement.classList.contains("dark");
        applyTheme(isDark ? "light" : "dark");
      }
    }
  });

})();
