---
layout: cours
title: GPIO - Général Purpose Input Output
module: 1
date: 2025-09-05
objectifs:
  - Comprendre le fonctionnement des GPIO
  - Configurer les entrées/sorties
  - Utiliser les interruptions matérielles
---

## Concepts fondamentaux

### Définition des GPIO
Les GPIO (General Purpose Input/Output) sont des broches programmables...

### Configuration de base
```c
// Configuration d'une broche en sortie
GPIO_InitTypeDef GPIO_InitStruct = {0};
GPIO_InitStruct.Pin = GPIO_PIN_5;
GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
GPIO_InitStruct.Pull = GPIO_NOPULL;
GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);