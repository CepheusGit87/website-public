// Licht unter der Maus auf den Karten. Setzt nur Koordinaten; lädt nichts, speichert nichts.
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let x = -999, y = -999, wartet = false;
  addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    x = e.clientX; y = e.clientY;
    if (wartet) return; wartet = true;
    requestAnimationFrame(() => {
      wartet = false;
      document.querySelectorAll('.licht').forEach(el => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--lx', (x - r.left) + 'px'); el.style.setProperty('--ly', (y - r.top) + 'px');
      });
    });
  }, { passive: true });
})();
