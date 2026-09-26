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
  var emailAddress = "mohammed.ali.karmali@gmail.com";
  var copyToast = document.getElementById("copy-toast");
  var toastTimer = null;

  function handleCopy(e) {
    if (e) e.preventDefault();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailAddress).then(showToast).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
  }

  var copyBtnHero = document.getElementById("copy-email-btn");
  if (copyBtnHero) copyBtnHero.addEventListener("click", handleCopy);

  var copyBtnContact = document.getElementById("copy-email-contact-btn");
  if (copyBtnContact) copyBtnContact.addEventListener("click", handleCopy);

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

  function showToast() {
    if (!copyToast) return;
    copyToast.textContent = "Copied to clipboard: " + emailAddress;
    copyToast.classList.add("visible");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      copyToast.classList.remove("visible");
    }, 2800);
  }

  /* ---------- Back to Top Handler ---------- */
  var backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, null, " ");
    });
  }

  /* ---------- In-Page Scrollspy for Sticky Nav ---------- */
  if ("IntersectionObserver" in window) {
    var sections = document.querySelectorAll("section[id]");
    var navLinks = [];

    // Allow custom element to render before selecting
    setTimeout(function () {
      navLinks = document.querySelectorAll("press-nav .press-nav-link");
      
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute("id");
            navLinks.forEach(function (link) {
              var targetSection = link.getAttribute("data-section");
              if (targetSection === id) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }
        });
      }, {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0
      });

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }, 300);
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
