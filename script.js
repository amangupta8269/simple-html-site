/* =========================================================
 *    STUDIO — Interactive Scripts
 *       ========================================================= */

// ---------- Theme toggle ----------
// const root = document.documentElement;
// const themeBtn = document.getElementById("themeToggle");
//
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) {
//   root.setAttribute("data-theme", savedTheme);
//   } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     root.setAttribute("data-theme", "dark");
//     }
//
//     themeBtn.addEventListener("click", () => {
//       const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
//         root.setAttribute("data-theme", next);
//           localStorage.setItem("theme", next);
//           });
//
//           // ---------- Mobile menu ----------
//           const burger = document.getElementById("burger");
//           const mobileMenu = document.getElementById("mobileMenu");
//
//           function setMenu(open) {
//             mobileMenu.classList.toggle("open", open);
//               burger.classList.toggle("open", open);
//                 burger.setAttribute("aria-expanded", open);
//                   mobileMenu.setAttribute("aria-hidden", !open);
//                     document.body.style.overflow = open ? "hidden" : "";
//                     }
//
//                     burger.addEventListener("click", () => {
//                       setMenu(!mobileMenu.classList.contains("open"));
//                       });
//
//                       mobileMenu.querySelectorAll("a").forEach((a) =>
//                         a.addEventListener("click", () => setMenu(false))
//                         );
//
//                         document.addEventListener("keydown", (e) => {
//                           if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
//                               setMenu(false);
//                                 }
//                                 });
//
//                                 // ---------- Nav shadow on scroll ----------
//                                 const nav = document.getElementById("nav");
//                                 const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
//                                 onScroll();
//                                 window.addEventListener("scroll", onScroll, { passive: true });
//
//                                 // ---------- Reveal on scroll ----------
//                                 const revealObserver = new IntersectionObserver(
//                                   (entries) => {
//                                       entries.forEach((entry) => {
//                                             if (entry.isIntersecting) {
//                                                     entry.target.classList.add("visible");
//                                                             revealObserver.unobserve(entry.target);
//                                                                   }
//                                                                       });
//                                                                         },
//                                                                           { threshold: 0.12 }
//                                                                           );
//
//                                                                           document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
//
//                                                                           // ---------- Active nav link on scroll ----------
//                                                                           const sectionIds = ["work", "process", "voices"];
//                                                                           const sections = sectionIds
//                                                                             .map((id) => document.getElementById(id))
//                                                                               .filter(Boolean);
//                                                                               const navLinks = document.querySelectorAll(".nav__list a");
//
//                                                                               const sectionObserver = new IntersectionObserver(
//                                                                                 (entries) => {
//                                                                                     entries.forEach((entry) => {
//                                                                                           if (!entry.isIntersecting) return;
//                                                                                                 navLinks.forEach((link) => {
//                                                                                                         link.classList.toggle(
//                                                                                                                   "active",
//                                                                                                                             link.getAttribute("href") === "#" + entry.target.id
//                                                                                                                                     );
//                                                                                                                                           });
//                                                                                                                                               });
//                                                                                                                                                 },
//                                                                                                                                                   { rootMargin: "-40% 0px -55% 0px" }
//                                                                                                                                                   );
//
//                                                                                                                                                   sections.forEach((s) => sectionObserver.observe(s));
//
//                                                                                                                                                   // ---------- Console signature ----------
//                                                                                                                                                   console.log(
//                                                                                                                                                     "%c✦ Studio loaded",
//                                                                                                                                                       "color:#e85d2a; font-size:14px; font-weight:bold;"
//                                                                                                                                                       );
