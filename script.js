// ========================================
// //   NOVA — Interactive Scripts
// // ========================================
//
// // -------- 1. Scroll Reveal Animation --------
// const revealObserver = new IntersectionObserver(
//   (entries) => {
//       entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                     entry.target.classList.add('visible');
//                             revealObserver.unobserve(entry.target); // ek baar hi animate karo
//                                   }
//                                       });
//                                         },
//                                           { threshold: 0.15 }
//                                           );
//
//                                           document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
//
//                                           // -------- 2. Animated Counter for Stats --------
//                                           const counters = document.querySelectorAll('.num[data-target]');
//
//                                           const counterObserver = new IntersectionObserver(
//                                             (entries) => {
//                                                 entries.forEach((entry) => {
//                                                       if (!entry.isIntersecting) return;
//
//                                                             const el = entry.target;
//                                                                   const target = Number(el.dataset.target);
//                                                                         const suffix = el.dataset.suffix || '';
//                                                                               const duration = 1200; // total animation time in ms
//                                                                                     const startTime = performance.now();
//
//                                                                                           function updateCounter(now) {
//                                                                                                   const elapsed = now - startTime;
//                                                                                                           const progress = Math.min(elapsed / duration, 1);
//                                                                                                                   // ease-out effect
//                                                                                                                           const eased = 1 - Math.pow(1 - progress, 3);
//                                                                                                                                   const current = Math.floor(eased * target);
//
//                                                                                                                                           el.textContent = current + suffix;
//
//                                                                                                                                                   if (progress < 1) {
//                                                                                                                                                             requestAnimationFrame(updateCounter);
//                                                                                                                                                                     } else {
//                                                                                                                                                                               el.textContent = target + suffix;
//                                                                                                                                                                                       }
//                                                                                                                                                                                             }
//
//                                                                                                                                                                                                   requestAnimationFrame(updateCounter);
//                                                                                                                                                                                                         counterObserver.unobserve(el);
//                                                                                                                                                                                                             });
//                                                                                                                                                                                                               },
//                                                                                                                                                                                                                 { threshold: 0.5 }
//                                                                                                                                                                                                                 );
//
//                                                                                                                                                                                                                 counters.forEach((counter) => counterObserver.observe(counter));
//
//                                                                                                                                                                                                                 // -------- 3. Navbar Shadow on Scroll --------
//                                                                                                                                                                                                                 const navbar = document.querySelector('nav');
//
//                                                                                                                                                                                                                 window.addEventListener('scroll', () => {
//                                                                                                                                                                                                                   if (window.scrollY > 50) {
//                                                                                                                                                                                                                       navbar.style.boxShadow = '0 8px 30px rgba(124, 92, 255, 0.2)';
//                                                                                                                                                                                                                         } else {
//                                                                                                                                                                                                                             navbar.style.boxShadow = 'none';
//                                                                                                                                                                                                                               }
//                                                                                                                                                                                                                               });
//
//                                                                                                                                                                                                                               // -------- 4. Smooth Scroll for Anchor Links --------
//                                                                                                                                                                                                                               document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//                                                                                                                                                                                                                                 anchor.addEventListener('click', function (e) {
//                                                                                                                                                                                                                                     const target = document.querySelector(this.getAttribute('href'));
//                                                                                                                                                                                                                                         if (target) {
//                                                                                                                                                                                                                                               e.preventDefault();
//                                                                                                                                                                                                                                                     target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                                                                                                                                                                                                                                                         }
//                                                                                                                                                                                                                                                           });
//                                                                                                                                                                                                                                                           });
//
//                                                                                                                                                                                                                                                           // -------- 5. Console Message --------
//                                                                                                                                                                                                                                                           console.log(
//                                                                                                                                                                                                                                                             '%c🚀 Nova Studio loaded successfully!',
//                                                                                                                                                                                                                                                               'color:#7c5cff; font-size:14px; font-weight:bold;'
//                                                                                                                                                                                                                                                               );
