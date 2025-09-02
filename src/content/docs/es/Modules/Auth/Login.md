---
title: Diagrama de secuencia
description: Documentación del módulo de autenticación - Login
---

```plantuml
@startuml
actor User
participant Client
participant Server

User ->> Client: Click "Login"
activate Client

Client ->> Server: POST /v1/auth/login\nRequestLoginDto
activate Server

Server -> Server: Valida credenciales

alt Credenciales validas
    Server -->> Client: 200 OK\nResponseDto
    note over Client, Server: Autenticación exitosa
else Credenciales invalidas
    Server -->> Client: 401 UNAUTHORIZED\nErrorResponse
    note over Client, Server: Error de autenticación
end

deactivate Server

Client -> Client: Almacena token (localStorage)
Client -> User: Redirigir a dashboard
note over Client: Mostrar toast informativo

deactivate Client
@enduml
```

## Diagrama de clases

```plantuml
@startuml
left to right direction

class RequestLoginDto {
+username: string
+password: string
}

class ResponseDto {
+token: string
+user: User
}

class ErrorResponse {
+error: HttpCode
+detail: string
}

class User {
+id: string
+name: string
+role: string
}

enum HttpCode {
UNAUTHORIZED
BAD_REQUEST
INTERNAL_ERROR
...
}

ResponseDto --> User
ErrorResponse --> HttpCode
@enduml
```

## Códigos HTTP

| Codigo | Descripción    | Response                                      |
| ------ | -------------- | --------------------------------------------- |
| 200    | OK             | [ResponseDto](/es/interfaces/responsedto)     |
| 401    | UNAUTHORIZED   | [ErrorResponse](/es/interfaces/errorresponse) |
| 400    | BAD_REQUEST    | [ErrorResponse](/es/interfaces/errorresponse) |
| 500    | INTERNAL_ERROR | [ErrorResponse](/es/interfaces/errorresponse) |
