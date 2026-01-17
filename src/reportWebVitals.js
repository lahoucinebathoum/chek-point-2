// ========================================
// reportWebVitals.js (version simplifiée)
// ========================================

// Cette version alternative mesure les performances de l'application
// mais de manière plus simple et lisible pour les débutants

// Fonction qui prend une fonction callback pour récupérer les mesures
const reportWebVitals = (callback) => {
  // Vérifie si la callback existe et est bien une fonction
  if (callback && typeof callback === 'function') {

    // On importe la librairie web-vitals qui mesure les performances
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {

      // Mesure le déplacement des éléments à l'écran
      getCLS(metric => callback({ nom: 'CLS', valeur: metric.value }));

      // Mesure le délai avant que l'utilisateur interagisse avec la page
      getFID(metric => callback({ nom: 'FID', valeur: metric.value }));

      // Mesure le temps avant que le premier contenu apparaisse
      getFCP(metric => callback({ nom: 'FCP', valeur: metric.value }));

      // Mesure le temps pour que le plus grand contenu principal soit affiché
      getLCP(metric => callback({ nom: 'LCP', valeur: metric.value }));

      // Mesure le temps avant de recevoir le premier octet du serveur
      getTTFB(metric => callback({ nom: 'TTFB', valeur: metric.value }));
    });
  }
};

// Exporte la fonction pour pouvoir l'utiliser ailleurs (comme index.js)
export default reportWebVitals;

// ========================================
// NOTE POUR DÉBUTANT
// ========================================
// Tu peux IGNORER ce fichier pour l'instant !
// Il sert uniquement à mesurer la vitesse de ton site.
// La page s'affichera normalement même si tu ne l'utilises pas.
