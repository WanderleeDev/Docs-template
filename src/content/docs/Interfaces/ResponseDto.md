---
title: ResponseDto
description: ResponseDto interface.
---

Interface that defines the standard structure of system responses.

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

## Properties

- `token`: Token of authentication
- `user`:
  - `id`: User identifier
  - `name`: User name
  - `role`: User role
