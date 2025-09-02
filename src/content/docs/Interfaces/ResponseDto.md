---
title: ResponseDto
description: ResponseDto interface.
---

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
