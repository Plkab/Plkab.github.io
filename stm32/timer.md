
### `_cours/timer.md`
```markdown
---
layout: cours
title: Timers et génération PWM
module: 3
date: 2025-10-03
objectifs:
  - Comprendre l'architecture des timers STM32
  - Configurer différents modes de fonctionnement
  - Générer des signaux PWM pour le contrôle moteur
---

## Architecture des timers
Les STM32F disposent de plusieurs types de timers :
- Timers basiques (TIM6, TIM7)
- Timers généralistes (TIM2-TIM5, TIM9-TIM14)
- Timers avancés (TIM1, TIM8)

## Configuration PWM
```c
// Configuration du Timer 2, Channel 1 en PWM
TIM_HandleTypeDef htim2;
TIM_OC_InitTypeDef sConfigOC = {0};

htim2.Instance = TIM2;
htim2.Init.Prescaler = 83;
htim2.Init.CounterMode = TIM_COUNTERMODE_UP;
htim2.Init.Period = 999;
htim2.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;
HAL_TIM_PWM_Init(&htim2);

sConfigOC.OCMode = TIM_OCMODE_PWM1;
sConfigOC.Pulse = 500; // Rapport cyclique 50%
sConfigOC.OCPolarity = TIM_OCPOLARITY_HIGH;
sConfigOC.OCFastMode = TIM_OCFAST_DISABLE;
HAL_TIM_PWM_ConfigChannel(&htim2, &sConfigOC, TIM_CHANNEL_1);

HAL_TIM_PWM_Start(&htim2, TIM_CHANNEL_1);