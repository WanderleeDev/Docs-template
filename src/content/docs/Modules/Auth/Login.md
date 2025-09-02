---
title: Sequence diagram
description: Login flow.
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

Server -> Server: Validate credentials

alt Credentials valid
    Server -->> Client: 200 OK\nResponseDto
    note over Client, Server: Authentication successful
else Credentials invalid
    Server -->> Client: 401 UNAUTHORIZED\nErrorResponse
    note over Client, Server: Authentication error
end

deactivate Server

Client -> Client: Store token (localStorage)
Client -> User: Redirect to dashboard
note over Client: Show toast informative

deactivate Client
@enduml
```

## Class diagram

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

## HTTP Codes

| Code | Description    | Response                                   |
| ---- | -------------- | ------------------------------------------ |
| 200  | OK             | [ResponseDto](/interfaces/responsedto)     |
| 401  | UNAUTHORIZED   | [ErrorResponse](/interfaces/errorresponse) |
| 400  | BAD_REQUEST    | [ErrorResponse](/interfaces/errorresponse) |
| 500  | INTERNAL_ERROR | [ErrorResponse](/interfaces/errorresponse) |
