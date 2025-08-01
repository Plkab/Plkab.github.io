---
layout: default
title: Accueil
---

# Bienvenue au cours de Conception des systèmes STM32F

Ce site accompagne le cours d'ingénierie et fournit toutes les ressources nécessaires pour maîtriser la conception de systèmes embarqués avec les microcontrôleurs STM32F.

## Objectifs du cours
- Comprendre l'architecture des microcontrôleurs STM32F
- Maîtriser les outils de développement (STM32CubeIDE, Keil, etc.)
- Implémenter des drivers pour les périphériques courants (GPIO, Timers, I2C, SPI, USART, ADC, etc.)
- Développer des applications temps réel avec un RTOS (FreeRTOS)

## Microcontrôleurs étudiés
{% for mc in site.hardware %}
- **{{ mc.nom }}** : {{ mc.coeur }} @ {{ mc.frequence }} ({{ mc.flash }} Flash / {{ mc.ram }} RAM)
{% endfor %}

## Outils utilisés
{% for outil in site.outils %}
- {{ outil }}
{% endfor %}