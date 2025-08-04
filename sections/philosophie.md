---
layout: page
title: Ingénierie des Systèmes Embarqués
permalink: /philosophie/
---

# Ingénierie des Systèmes Embarqués  
## Philosophie et approche pédagogique

Le cours d’Ingénierie des Systèmes Embarqués que nous proposons repose sur une pédagogie de terrain, concrète, transversale, et exigeante. Il est conçu comme une **expérience cumulative de conception** (Cumulative Design Experience) dans laquelle les étudiants construisent des systèmes temps réel à partir de microcontrôleurs STM32F446, maîtrisent les outils de modélisation, d’implémentation et de validation, tout en explorant des sujets scientifiques, artistiques ou sociétaux à travers le prisme de l’ingénierie. L’objectif central est clair : **construire des dispositifs utiles, ludiques et interconnectés**, qui matérialisent les savoirs acquis dans les domaines du traitement du signal, du contrôle-commande, d'électronique numérique et analogique, de l’électronique embarquée et de l’informatique temps réel.

---

## Ingénierie embarquée : apprentissage par la conception

L’apprentissage dans ce cours se fait en construisant. Chaque séance de laboratoire est conçue comme une mini-étude de cas en ingénierie intégrée. Les étudiants doivent concevoir et implémenter un système embarqué complet, combinant des capteurs analogiques ou numériques (accéléromètres, microphones, SONAR, etc.), des actionneurs (servomoteurs, moteurs DC), des algorithmes de contrôle (filtrage, PID, logique floue, FFT), ainsi qu’un firmware robuste, écrit en C ou C++ bare-metal. L’architecture logicielle suit des paradigmes éprouvés : gestion des interruptions, systèmes à états finis, ou ordonnanceurs préemptifs (FreeRTOS), mécanismes de synchronisation (sémaphores, queues), drivers bas niveau (sans HAL ou avec direct register access), et routines d’ISR optimisées.

Ce travail ne se limite pas à la programmation. Il commence par la **modélisation fonctionnelle et dynamique du système** : définition des entrées/sorties, contraintes temps réel, latence admissible, bande passante, bruit et linéarité des capteurs, modélisation mathématique du comportement mécanique ou électrique, simulation (Python, Matlab) pour prévalider les architectures. Chaque projet se termine par une **intégration hardware/software** et une phase de test en conditions réelles, documentée dans un rapport technique structuré.

La programmation se fait essentiellement en **C bare-metal**, sans abstraction logicielle inutile, ce qui permet une compréhension fine des couches matérielles et une capacité à résoudre des problèmes complexes à la racine. Cela forme des ingénieurs capables de passer d’un modèle mathématique à un code fonctionnel exécuté en temps réel sur une plateforme embarquée.

---

## Une pédagogie fondée sur l’expérimentation et l’échec

Le cœur du dispositif pédagogique repose sur la conception, le débogage et l’itération rapide. Les erreurs techniques ne sont pas des obstacles mais des moments essentiels de progression : les étudiants apprennent à diagnostiquer des bugs complexes, à interpréter des signaux physiques, et à remonter la chaîne causale d’un comportement inattendu.

Dans le monde réel, aucun système ne fonctionne du premier coup. Cette réalité est au cœur de notre pédagogie. Les étudiants seront rapidement confrontés à des situations dans lesquelles la logique numérique et la physique analogique entrent en tension : des oscillations apparaissent, un filtrage mal conçu introduit du retard, une variable dépasse silencieusement sa taille mémoire. Le rôle de l’enseignant est d’accompagner l’étudiant dans **l’acte heuristique du débogage**, en le guidant vers une compréhension fine de la causalité des erreurs, sans jamais lui ôter l’opportunité d’apprendre de ses essais.

L’expérience montre que c’est dans ces moments que les étudiants intègrent véritablement les concepts théoriques vus en cours. Ils passent du mode "résolution de problème abstrait" à celui de "résolution de conflit physique", apprenant à raisonner en système, à adopter un **état d’esprit d’exploration technique**, propice à la persévérance et à la créativité. Cette attitude — que nous appelons « engineering play » — est essentielle pour toute carrière d’ingénieur et pour la recherche en général.

---

## Transdisciplinarité et ingénierie comme outil d’exploration

Nous considérons l’ingénierie embarquée non seulement comme un savoir-faire technique, mais aussi comme un **langage universel d’exploration du monde**. C’est pourquoi les projets proposés dans ce cours sont volontairement ancrés dans des thématiques pluridisciplinaires, allant de la biologie comportementale à l’art algorithmique, en passant par la physique appliquée, la musique numérique, ou encore les systèmes distribués. Cette diversité permet aux étudiants de croiser des disciplines, de développer des modèles mentaux étendus et de découvrir de nouvelles façons d’interroger la réalité à travers les outils de l’électronique et du calcul temps réel.

Chaque projet est une **expérience technique complète** — de la modélisation jusqu’à la validation expérimentale — mobilisant à la fois des compétences de programmation bare-metal sur STM32F4, des savoirs en traitement du signal, en filtrage numérique, en commande par rétroaction, mais aussi des capacités créatives et une curiosité intellectuelle. Ainsi, la synthèse acoustique par FM, la génération de chants d’oiseaux via DDS, la simulation physique d’un piano ou d’une guitare par Karplus-Strong, ne sont pas de simples exercices techniques, mais des moyens d’explorer les principes physiques, mathématiques et esthétiques qui les sous-tendent.

Dans d’autres projets, l’ingénierie devient un outil d’analyse du vivant et de l’environnement : visualisation FFT de vibrations, acquisition ECG en temps réel, géolocalisation d’objets, surveillance environnementale via WiFi ou Ethernet, ou encore modélisation de comportements collectifs d’animaux en mouvement.

Nous fournissons pour cela une riche bibliothèque de ressources théoriques et techniques : de la gestion bas-niveau des GPIOs, timers, DMA ou interfaces UART/I2C/SPI, jusqu’aux modules d’apprentissage sur les filtres numériques, les transformées de Fourier, le contrôle PID, la fusion de données ou la suite de Markov,... Cette base outille les étudiants pour construire des systèmes robustes, tout en leur laissant la liberté de les adapter à des finalités artistiques, scientifiques ou sociétales.

En encourageant ainsi les croisements disciplinaires, le cours vise à former des **ingénieurs créateurs de sens**, capables non seulement de répondre à des cahiers des charges, mais aussi de poser des questions, d’initier des démarches d’exploration, et d’utiliser leur expertise technique comme levier de découverte et de partage.

---

## Transparence totale et documentation communautaire

Tous les travaux réalisés dans le cadre du cours sont documentés selon un principe de **transparence radicale**. Code source, diagrammes, vidéos, tutoriels d’installation, résultats expérimentaux, tout est mis à disposition en open access. Cette philosophie, inspirée des projets open source, permet à d’autres étudiants, enseignants, chercheurs ou curieux de s’approprier et prolonger les travaux.

Chaque projet est accompagné d’une documentation structurée qui comprend : schémas électroniques, code commenté, vidéo de demo, explication des algorithmes, mise en garde sur les bugs fréquents. Nous veillons à ce que cette documentation soit immédiatement exploitable, sans jargon inutile, avec des exemples fonctionnels. Ce souci de la transmission est considéré comme une compétence technique à part entière.

---

## Respect intellectuel et encadrement de proximité

L’un des piliers fondamentaux de notre pédagogie est le **respect profond de l’intelligence étudiante**. Les étudiants ne sont pas des exécutants passifs. Ce sont des pairs en devenir. Nous partons du principe qu’ils sont aussi brillants que leurs enseignants, mais n’ont simplement pas encore eu le temps d’accumuler l’expérience. Cette posture favorise une relation d’écoute, de confiance et de dialogue technique.

Pour accompagner les étudiants efficacement, nous pratiquons un **encadrement quotidien en laboratoire**. Chaque blocage qui n’a pas de valeur pédagogique (souci d’outillage, connectique défectueuse, bug connu du compilateur) est levé immédiatement. En revanche, toute difficulté qui permet une progression conceptuelle est exploitée comme levier d’apprentissage. Cette présence constante nous permet aussi de **célébrer chaque micro-victoire** : une LED qui clignote, une boucle PID qui converge, un UART qui affiche le bon message. Ces petites joies techniques forment la culture émotionnelle de l’ingénieur.

---

## Pourquoi les systèmes embarqués ?

Les systèmes embarqués constituent un **terrain pédagogique idéal**. Leur complexité est suffisante pour apprendre à maîtriser des interactions matérielles/logiciels/physique, mais suffisamment contenue pour être comprise dans son ensemble. Leur étude développe des compétences variées : timing précis, gestion mémoire, lecture de datasheet, configuration de registres, gestion des interruptions, synchronisation de tâches.

Les contraintes qu’ils imposent (mémoire limitée, absence de système d’exploitation complet, exigences temps réel strictes) forcent à **concevoir proprement**. Chaque ligne de code est justifiée. Chaque choix matériel a des conséquences. Ce contexte renforce la rigueur de conception, tout en laissant la place à la créativité.

Par ailleurs, ils permettent de **connecter l’abstrait au tangible**. Un algorithme devient mouvement. Un signal devient lumière. Une modélisation devient système physique observable. Et enfin, les risques sont minimes : on peut expérimenter librement, griller une résistance, reprogrammer un microcontrôleur, recommencer sans perte grave.

---

## Conclusion

Ce cours forme des ingénieurs complets, capables de concevoir des systèmes complexes, de les modéliser, de les simuler, de les construire et de les documenter. Il transmet une culture de l’ingénierie rigoureuse mais joyeuse, rigide mais transversale, exigeante mais bienveillante. Chaque projet réalisé est une brique de plus dans l’édifice intellectuel de l’étudiant, et une contribution potentielle à la communauté scientifique et technique.

Nous croyons à une pédagogie fondée sur :

- l’expérimentation guidée,
- la transparence communautaire,
- la curiosité pluridisciplinaire,
- et l’exigence technique bienveillante.

> **Construire pour comprendre. Documenter pour transmettre. Partager pour avancer.**























