---
layout: cours
title: GPIO et gestion des interruptions
module: 2
date: 2025-09-19
objectifs:
  - Comprendre la structure des ports GPIO
  - Configurer les modes d'entrée/sortie
  - Implémenter des interruptions matérielles
---

## Configuration des GPIO

### Structure des ports
Les STM32F disposent de plusieurs ports GPIO (A à K) avec jusqu'à 16 broches par port.

### Exemple de configuration
```c
// Configuration d'une broche en sortie push-pull
GPIO_InitTypeDef GPIO_InitStruct = {0};
GPIO_InitStruct.Pin = GPIO_PIN_5;
GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
GPIO_InitStruct.Pull = GPIO_NOPULL;
GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_HIGH;
HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);

// Activation d'une interruption sur front montant
GPIO_InitStruct.Pin = GPIO_PIN_0;
GPIO_InitStruct.Mode = GPIO_MODE_IT_RISING;
GPIO_InitStruct.Pull = GPIO_NOPULL;
HAL_GPIO_Init(GPIOC, &GPIO_InitStruct);