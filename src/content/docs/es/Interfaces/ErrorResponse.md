---
title: ErrorResponse
description: Interfaz para respuestas de error
---

Interfaz que define la estructura de las respuestas de error en el sistema.

```mermaid
classDiagram
    direction LR

    class ErrorResponse {
        +error: HttpCode
        +detail: string
    }

    class HttpCode {
        <<enumeration>>
        UNAUTHORIZED
        BAD_REQUEST
        INTERNAL_ERROR
        ...
    }

    ErrorResponse --> HttpCode
```

## Propiedades

- `error`: Código de error
- `detail`: Detalle del error
