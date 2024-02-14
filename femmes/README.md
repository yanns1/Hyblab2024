# Descriptif du projet

**Porteur de projet**: Les Autres Possibles

**Sujet**: Sportives à la une

**Nom d'équipe**: Femmes

**Participants**:

- _AGR_: Alex DESNOË, Léa SAUTEJEAU
- _EPJT_: Annabelle BOOS
- _Polytech Nantes_: Rania ABDELKHALEQ, Léo BRIGARDIS, Wafa HARIR, Tom RINTZ, Yann SALMON
- _SciencesPo_: Laurine LE GOFF

## Développement

### Architecture

Le projet peut se penser comme la somme de deux parties:

1. Un **backend** constitué d'un petit serveur Node JS (`server.js`) qui distribue statiquement des fichiers HTML avec leurs feuilles de styles CSS et scripts JavaScript associés, en fonction des requêtes HTTP reçues.
2. Un **frontend** constitué des fichiers HTML, CSS et JavaScript.
   Tous ces fichiers sont stockés dans le dossier `public/`.
   Le point d'entrée est le fichier `index.html` qui en effet la seule page HTML du projet.

Nous utilisons le framework [Express](https://expressjs.com/) pour le serveur, et les librairies [Swiper](https://swiperjs.com/) (fonctionnalités de scroll vertical et horizontal) et [Anime](https://animejs.com/) (fonctionnalités d'animation) côté frontend, qui sont chargés dynamiquement à l'aide de CDN (nous n'utilisons pas de _bundler_).

### Déploiement

#### En local

Pour lancer l'application en local, exécutez `node server.js` depuis la racine du projet (c'est-à-dire `Hyblab2024`, et non `Hyblab2024/femmes`!), puis entrez `http://localhost:8080/femmes` dans la barre de recherche de votre navigateur.

Vous pouvez aussi utiliser un outil de déploiement plus professionnel tel que [pm2](https://pm2.keymetrics.io/), qu'il faut installer à l'aide de la commande `npm install pm2 -g`.
Ensuite, vous pouvez exécutez (toujours depuis la racine du projet) `pm2 start server.js` pour lancer l'application.

#### Sur le serveur de Polytech

Pour déployer l'application publiquement, nous avons le(s) serveur(s) de Polytech à disposition.

Pour y accéder, il suffit de s'y connecter via SSH à travers une interface web située à l'adresse https://hyblab.polytech.univ-nantes.fr/wetty, clone le repo Github, puis lancer l'application à l'aide de `pm2`.

L'application sera ainsi disponible à l'URL https://hyblab.polytech.univ-nantes.fr/femmes/.

#### Cyle de développement standard

Pour la plupart des fonctionnalités, il suffit de:

1. Cloner ce repo Github sur sa machine.
2. Lancer l'application en local.
3. Changer le code selon son envie.
4. Relancer le serveur via la commande `pm2 restart <myApp>`.
5. Observer le résultat dans son navigateur, à l'adresse `http://localhost:8080/femmes`.
6. Répéter depuis l'étape 3 autant que de besoin.

Cependant, pour la fonctionnalité d'ouverture/fermeture des portraits via le touché tactile, il ne va pas directement être possible de tester le touché tactile depuis son ordinateur (sauf s'il a un écran tactile!).
Il y a alors deux options:

1. Utiliser l'option _Touch simulation_ de la fenêtre de déboguage, si disponible dans le navigateur utilisé.
2. Connecter son téléphone à son ordinateur via USB ou Wifi.

Pour la connexion USB du téléphone avec l'ordinateur, il faut:

1. Activer le mode développeur sur son téléphone Android, généralement en cliquant sept fois sur le numéro de série, dans les paramètres.
2. Activer le déboguage USB dans les paramètres de son téléphone Android.
3. Activer le mode déboguage USB dans les paramètres de son navigateur (il faut utiliser le même navigateur sur son ordinateur et son téléphone!).
4. Connecter son téléphone à son ordinateur via un câble USB, puis accepter le transfert de fichiers.
5. Ouvrir `http://<adresse_ip_ordinateur>:8080/femmes` sur son téléphone.
   Pour obtenir son adresse IP, exécuter `ipconfig` dans le terminal sur Windows, ou `ifconfig` sur Linux.
   En effet, tant que l'ordinateur et le téléphone font partie du même sous réseau, cela devrait fonctionner.
   Attention cependant à désactiver temporairement (ou créer une règle spéciale) son firewall ordinateur en cas de blocage des données entrantes, sinon le téléphone ne pourra pas accéder à l'application.
6. Se rendre à la page adaptée dans son navigateur pour ouvrir une fenêtre de déboguage sur la page `http://<adresse_ip_ordinateur>:8080/femmes` ouverte sur son téléphone.
7. Tester l'application sur son téléphone et observer les résultats dans la fenêtre de déboguage.

Pour plus de détails, consulter la documentation de son navigateur, son téléphone et son système d'exploitation.
Pour Firefox, par exemple, voir https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html.

### Améliorations possibles

1. Pour une meilleure qualité et de meilleures performances (en particulier, réduire le temps de chargement de la page), changer de format pour les animations: passer de GIF à Lottie.
   Un simple redimensionnement des GIF dégradent trop la qualité des animations.
2. Changer la police du texte courant (Helvetica) pour une police qui fonctionne sur toutes les plateformes de la même manière.
3. Attirer l'attention de l'utilisateur sur les tiroirs en fin de slide, car il pourrait passer à côté.
   Cela pourrait être fait en faisant sautiller le chevron par exemple.
4. Rendre les dates légèrement plus visibles, en les grossissant par exemple.
5. Trouver une solution pour la confusion créée par les slides qui n'ont pas de scroll interne, en contraste avec celles qui en ont (on s'attend à ce qu'elles fonctionnent toutes de la même manière!).
6. (Demande une refonte du site!) Repenser le site de manière à avoir plus d'interactivité, de manière à rendre l'utilisateur actif dans l'expérience.
7. Pas forcément assez de lien entre les portraits et les dates. Voir comment changer la narration pour pallier à ce problème.
