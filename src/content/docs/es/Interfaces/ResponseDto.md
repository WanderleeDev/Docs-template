---
title: ResponseDto
description: Interfaz para objetos de transferencia de datos de respuesta
---

Interfaz que define la estructura estándar de las respuestas del sistema.

```mermaid
classDiagram
    direction LR

    class ResponseDto {
        +token: string
        +user: User
    }

    class User {
        +id: string
        +name: string
        +role: string
    }

    ResponseDto --> User
```

## Propiedades

- `token`: Token de autenticación
- `user`:
  - `id`: Identificador del usuario
  - `name`: Nombre del usuario
  - `role`: Rol del usuario
