---
layout: default
title: Accueil
---

# Conception de systèmes embarqués avec STM32F

Ce site accompagne le cours sur la conception de systèmes embarqués utilisant les microcontrôleurs STM32F de STMicroelectronics.

## Au programme
- Architecture des microcontrôleurs STM32F4
- Programmation des périphériques (GPIO, Timers, I2C, SPI, USART)
- Développement avec STM32CubeIDE et FreeRTOS
- Techniques d'optimisation énergétique

<div class="features">
  <div class="feature-card">
    <h2>Cours disponibles</h2>
    <ul>
      {% for cours in site.cours limit:3 %}
      <li><a href="{{ cours.url }}">{{ cours.title }}</a></li>
      {% endfor %}
    </ul>
    <a href="/cours" class="btn">Voir tous les cours</a>
  </div>
  
  <div class="feature-card">
    <h2>Projets à réaliser</h2>
    <ul>
      {% for projet in site.projets limit:3 %}
      <li><a href="{{ projet.url }}">{{ projet.title }}</a></li>
      {% endfor %}
    </ul>
    <a href="/projets" class="btn">Voir tous les projets</a>
  </div>
</div>