/* Exposes the Njangi design-system exports plus React as bare globals so the
   copied app-kit screen files (which expect window.Card, window.Icon, …) run. */
(function () {
  var NS = window.NjangiDesignSystem_003348 || {};
  Object.keys(NS).forEach(function (k) {
    if (k.charAt(0) === '_') return;
    if (!(k in window)) window[k] = NS[k];
  });
})();
