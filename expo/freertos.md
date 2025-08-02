---
layout: enseignement
title: Systèmes d'exploitation temps réel avec FreeRTOS
domaine: Logiciel embarqué
niveau: Avancé
---

## Concepts fondamentaux
- Tâches et priorités
- Mécanismes de synchronisation (sémaphores, mutex)
- Files d'attente (queues)
- Gestion de la mémoire

## Exemple de création de tâche
```c
void vTaskLED(void *pvParameters) {
  for(;;) {
    HAL_GPIO_TogglePin(LED_GPIO_Port, LED_Pin);
    vTaskDelay(pdMS_TO_TICKS(500));
  }
}

int main(void) {
  // Initialisation matérielle
  
  xTaskCreate(vTaskLED, "LED_Task", 128, NULL, 2, NULL);
  vTaskStartScheduler();
  
  for(;;);
}