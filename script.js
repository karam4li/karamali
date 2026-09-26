/**
 * The Quiet Press — Portfolio Client Interactions
 * Mohammed Ali (karamali.org)
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
      el.textContent = formatter.format(new Date()) + " BST (Glasgow, UK)";
    } catch (e) {
      el.textContent = new Date().toLocaleTimeString() + " (Glasgow, UK)";
    }
  }
  updateGlasgowTime();
  setInterval(updateGlasgowTime, 1000);

  /* ---------- Email Copy To Clipboard ---------- */
  var copyBtn = document.getElementById("copy-email-btn");
  var copyToast = document.getElementById("copy-toast");
  var emailAddress = "mohammed.ali.karmali@gmail.com";

  if (copyBtn) {
    copyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailAddress).then(showToast).catch(fallbackCopy);
      } else {
        fallbackCopy();
      }
    });
  }

  function fallbackCopy() {
    var textArea = document.createElement("textarea");
    textArea.value = emailAddress;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      showToast();
    } catch (err) {
      window.location.href = "mailto:" + emailAddress;
    }
    document.body.removeChild(textArea);
  }

  var toastTimer = null;
  function showToast() {
    if (!copyToast) return;
    copyToast.textContent = "Copied to clipboard: " + emailAddress;
    copyToast.classList.add("visible");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      copyToast.classList.remove("visible");
    }, 2800);
  }

  /* ---------- Keyboard Shortcuts ---------- */
  document.addEventListener("keydown", function (e) {
    // Press 'T' to toggle theme (when not in an input)
    if (e.key === "t" || e.key === "T") {
      var activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
      if (activeTag !== "input" && activeTag !== "textarea") {
        var willBeDark = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", willBeDark);
        document.documentElement.setAttribute("data-theme", willBeDark ? "dark" : "light");
        document.documentElement.setAttribute("data-color-mode", willBeDark ? "dark" : "light");
        localStorage.setItem("press-theme", willBeDark ? "dark" : "light");
        localStorage.setItem("theme", willBeDark ? "dark" : "light");
      }
    }
  });

})();
