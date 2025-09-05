---
title: ErrorResponse
description: ErrorResponse interface.
---

Interface that defines the standard structure of system responses.

```mermaid
classDiagram
    direction LR

    class ErrorResponse {
        +error: HttpCode
        +detail: string
    }

    class HttpCode~enum~ {
        UNAUTHORIZED
        BAD_REQUEST
        INTERNAL_ERROR
        ...
    }

    ErrorResponse --> HttpCode
```

## Properties

- `error`: Error code
- `detail`: Error detail
