/* =============================================================
   NEVER LOSE HOPE — Minimal JavaScript
   Accordion toggle + smooth-scroll polyfill guard
   No dependencies. No tracking. No cookies.
   ============================================================= */

(function () {
  "use strict";

  /* ── Accordion Behaviour ───────────────────────────────────
     Each .accordion__trigger toggles its associated panel.
     Uses aria-expanded and the hidden attribute for a11y.
     ────────────────────────────────────────────────────────── */
  var triggers = document.querySelectorAll(".accordion__trigger");

  triggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var panelId = btn.getAttribute("aria-controls");
      var panel = document.getElementById(panelId);

      if (!panel) return;

      if (expanded) {
        // Close
        btn.setAttribute("aria-expanded", "false");
        panel.setAttribute("hidden", "");
      } else {
        // Open
        btn.setAttribute("aria-expanded", "true");
        panel.removeAttribute("hidden");
      }
    });
  });

  /* ── Smooth Scroll for Jump Links ──────────────────────────
     CSS scroll-behavior handles modern browsers.
     This adds keyboard-friendly focus management:
     after scrolling to a section, move focus to the heading
     so screen-reader users know where they are.
     ────────────────────────────────────────────────────────── */
  var jumpLinks = document.querySelectorAll('.jump-link, .back-top');

  jumpLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var targetId = link.getAttribute("href");
      if (!targetId || targetId.charAt(0) !== "#") return;

      var target = document.querySelector(targetId);
      if (!target) return;

      // Find the first heading inside the target section
      var heading = target.querySelector("h1, h2, h3") || target;

      // Briefly make it focusable, then focus (for screen readers)
      if (!heading.hasAttribute("tabindex")) {
        heading.setAttribute("tabindex", "-1");
        heading.style.outline = "none";
      }

      // Small delay so the scroll completes first
      setTimeout(function () {
        heading.focus({ preventScroll: false });
      }, 400);
    });
  });
})();
