
## Projets pratiques

### `_projets/station-meteo.md`
```markdown
---
layout: projet
title: Station météo embarquée
duree: 4 semaines
objectifs:
  - Acquérir des données environnementales (température, humidité, pression)
  - Afficher les données sur un écran LCD
  - Transmettre les données via Bluetooth
---

## Matériel requis
- Carte STM32F4 Discovery
- Capteur BME280 (I2C)
- Écran OLED 128x64 (I2C)
- Module HC-05 Bluetooth

## Étapes de réalisation
1. Configuration des périphériques I2C
2. Implémentation du driver BME280
3. Développement de l'interface graphique
4. Mise en place de la communication Bluetooth
5. Optimisation de la consommation énergétique

## Livrables attendus
- Code source complet avec documentation
- Rapport technique détaillé
- Démonstration fonctionnelle