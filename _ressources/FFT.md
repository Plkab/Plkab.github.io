---
layout: enseignement
title: Transformée de Fourier Rapide (FFT)
domaine: Traitement du signal
niveau: Avancé
---

## Introduction à la FFT

### Définition
La Transformée de Fourier Rapide (FFT) est un algorithme pour calculer...

### Application en Python
```python
import numpy as np
from scipy.fft import fft

# Signal d'exemple
t = np.linspace(0, 1, 1000)
signal = np.sin(2 * np.pi * 5 * t) + 0.5 * np.sin(2 * np.pi * 20 * t)

# Calcul FFT
fft_result = fft(signal)
frequencies = np.fft.fftfreq(len(signal), t[1]-t[0])