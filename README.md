# Documentación del proyecto

Está actualmente deployeado usando DenoDeploy

[Deno deploy](https://sergiomarti-api-matricu-45.deno.dev/)


## Endpoints

### GET

- Obtener informacion de una matricula
    - /:mat


Ejemplo response al usar la matricula 4802GMC :


GET   https://sergiomarti-api-matricu-45.deno.dev/4802GMC


```json

{
  "marca": [
    "AUDI"
  ],
  "modelo": [
    "A4"
  ],
  "version": [
    "GENERATION 3 B8 QUATTRO 2.0 TDI"
  ],
  "Primer_Registro": [
    "2009-05-04"
  ],
  "Combustible": [
    "DIESEL"
  ],
  "Caballos": [
    "141"
  ],
  "Automatico_Manual": [
    "MANUAL"
  ],
  "Año_Fabricacion": [
    "2009"
  ],
  "VIN": [
    "WAUZZZ8K39N071388"
  ]
}

```
Este script basico hace uso de una api no publica por lo que se solicita que porfavor no abusen de su uso ya que podria causar modificaciones en la API usada para la obtencion de datos.

----
