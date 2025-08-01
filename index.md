---
layout: default
title: Accueil
---

# Bienvenue au cours d'Ingénierie

Ce site accompagne le cours d'ingénierie et fournit toutes les ressources nécessaires.

## Cours disponibles
{% for cours in site.cours1 %}
- [{{ cours.title }}]({{ cours.url }})
{% endfor %}

## Projets à réaliser
{% for projet in site.projets %}
- [{{ projet.title }}]({{ projet.url }})
{% endfor %}